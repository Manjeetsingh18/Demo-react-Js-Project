import { composeWithDevTools } from 'remote-redux-devtools';
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { persistStore, autoRehydrate, persistReducer } from "redux-persist";
import reducer from "./modules/reducer";
import logger from 'redux-logger';

const appReducer = (state, action) => {
  if (action.type === 'LOG_OUT_REQUEST') {
    state = undefined
  }
  return reducer(state, action)
};

export default function configureStore() {
  const enhancer = compose(
    applyMiddleware(thunk, logger),
  );

  const store = createStore(appReducer, undefined, enhancer);
  persistStore(store);
  return store;
}