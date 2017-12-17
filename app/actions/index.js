import { FETCHING_DATA, SIGN_IN, SIGN_OUT, IS_SIGNED_IN, SEND_DATA, CHANGE_HEIGHT, APPLAUDE } from '../constants'

export function fetchData(payload) {
  return {
    type: FETCHING_DATA,
    payload
  }
}

export function sendData(payload) {
  return {
    type: SEND_DATA,
    payload
  }
}

export function applaude(payload) {
  return {
    type: APPLAUDE,
    payload
  }
}

export function changeHeight(height) {
  return {
    type: CHANGE_HEIGHT,
    height
  }
}

// export function onSignIn() {
//   return {
//     type: SIGN_IN,
//     meta: {
//       thunk: true
//     }
//   }
// }

// export function onSignOut() {
//   return {
//     type: SIGN_OUT
//   }
// }

// export function isSignedIn() {
//   return {
//     type: IS_SIGNED_IN,
//   }
// }