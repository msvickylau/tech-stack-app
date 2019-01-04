import { combineReducers } from 'redux'; // allow are reducers to work together
import LibraryReducer from './LibraryReducer';

export default combineReducers({
  libraries: LibraryReducer
});
