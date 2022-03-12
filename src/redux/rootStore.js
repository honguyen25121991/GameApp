import {combineReducers, createStore} from 'redux';
import dummyReducer from './reducers';
const rootReducer = combineReducers({
  dummyReducer,
});
const store = createStore(rootReducer);

export default store;
