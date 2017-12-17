import { FETCHING_DATA, FETCHING_DATA_SUCCESS, FETCHING_DATA_FAILURE, SEND_DATA, APPLAUDE } from '../constants'
import io from 'socket.io-client'
import { eventChannel } from 'redux-saga';
import { fork, take, call, put, cancel } from 'redux-saga/effects';
import getPeople from '../api/getPeople'
import {fetchData} from '../actions/'

function connect() {
  const socket = io('https://yell-server-side.herokuapp.com');
  return new Promise(resolve => {
    socket.on('connect', () => {
      	resolve(socket);
    });
  });
}

function subscribe(socket) {
  return eventChannel(emit => {
    socket.on('yellAll', (data) => {
    	emit(fetchData(data.reverse()))
    });
    return () => {};
  });
}

function* read(socket) {
  const channel = yield call(subscribe, socket);
  while (true) {
    let action = yield take(channel);
    yield put(action);
  }
}

// function* fetchData (action) {
//   try {
//     const data = yield getPeople()
//     yield put({ type: FETCHING_DATA_SUCCESS, data })
//   } catch (e) {
//     yield put({ type: FETCHING_DATA_FAILURE })
//   }
// }
function* applaude(socket) {
  while (true) {
    const { payload } = yield take(APPLAUDE);
    socket.emit('yellLike', payload );
  }
}

function* sendData(socket) {
  while (true) {
    const { payload } = yield take(SEND_DATA);
    socket.emit('yellSend', payload );
  }
}

function* handleIO(socket) {
  	yield fork(read, socket);
  	yield fork(sendData, socket);
    yield fork(applaude, socket);
}

function* baseSaga () {
  const socket = yield call(connect);
  const task = yield fork(handleIO, socket);
  //yield takeEvery(FETCHING_DATA, fetchData)
}

export default baseSaga
