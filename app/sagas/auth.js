import { SIGN_IN, SIGN_OUT, IS_SIGNED_IN, SIGN_IN_FAILURE } from '../constants'
import { put, take, takeEvery } from 'redux-saga/effects'
import { onSignIn, onSignOut, isSignedIn } from '../api/auth'

function* isSigned (action) {

  try {
    const data = yield isSignedIn()
    yield put({ type: IS_SIGNED_IN, data })
  } catch (e) {
    yield put({ type: SIGN_IN_FAILURE })
  }
}

function* signOut (action) {
  try {
    yield onSignOut()
    yield put({ type: SIGN_OUT })
  } catch (e) {
    yield put({ type: SIGN_IN_FAILURE })
  }
}

function* signIn ({meta}) {
  try {
    yield onSignIn()
    yield put({ type: SIGN_IN, meta })
  } catch (e) {
    yield put({ type: SIGN_IN_FAILURE })
  }
}

function* baseSaga () {
  yield takeEvery(SIGN_IN, signIn)
  yield take(SIGN_OUT, signOut)
  yield takeEvery(IS_SIGNED_IN, isSigned)
}

export default baseSaga
