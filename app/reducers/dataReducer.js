import { FETCHING_DATA, FETCHING_DATA_SUCCESS, FETCHING_DATA_FAILURE, CHANGE_HEIGHT } from '../constants'
const initialState = {
  data: [],
  dataFetched: false,
  isFetching: false,
  yellViewHeight: 80,
  error: false
}

export default function dataReducer (state = initialState, action) {
  switch (action.type) {
    case FETCHING_DATA:
      return Object.assign({}, state, {
          data: action.payload,
          isFetching: true
        });
    case FETCHING_DATA_SUCCESS:
      return {
        ...state,
        isFetching: false,
        data: action.data
      }
    case FETCHING_DATA_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: true
      }
    case CHANGE_HEIGHT:
      return {
        ...state,
        yellViewHeight: action.height
      }
    default:
      return state
  }
}
