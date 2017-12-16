import { fork } from 'redux-saga/effects'

import dataSaga from './data'

export default function* rootSaga() {
    yield fork(dataSaga);
}