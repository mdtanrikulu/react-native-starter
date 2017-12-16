import { FETCHING_DATA, SIGN_IN, SIGN_OUT, IS_SIGNED_IN, SEND_DATA } from '../constants'

export function fetchData() {
  return {
    type: FETCHING_DATA
  }
}

export function sendData(payload) {
  return {
    type: SEND_DATA,
    payload
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