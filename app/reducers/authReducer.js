import { IS_SIGNED_IN } from '../constants'
const initialState = {
  isSignedIn: false
}

export default function dataReducer (state = initialState, action) {
  switch (action.type) {

    case IS_SIGNED_IN:
      return Object.assign({}, state, {
        isSignedIn: action.payload
      });

    default:
        return state;
  }
}
