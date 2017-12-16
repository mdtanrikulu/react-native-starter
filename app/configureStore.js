import { createStore, applyMiddleware } from 'redux'
import {composeWithDevTools} from 'remote-redux-devtools';
import app from './reducers'

import { middleware as thunkMiddleware } from 'redux-saga-thunk'
import createSagaMiddleware from 'redux-saga'
import rootSaga from './sagas'

const sagaMiddleware = createSagaMiddleware()

export default function configureStore() {
  const store = createStore(app, 
  	composeWithDevTools(
  		applyMiddleware(thunkMiddleware, sagaMiddleware)
  		)
  	)
  sagaMiddleware.run(rootSaga)
  return store
}