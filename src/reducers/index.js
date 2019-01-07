import { combineReducers } from 'redux'; // allow are reducers to work together
import LibraryReducer from './LibraryReducer';
import SelectionReducer from './SelectionReducer';

// in combineReducer, the key you choose for your section reducer is how the property will show up on the state object.
export default combineReducers({
  libraries: LibraryReducer,
  selectedLibraryID: SelectionReducer
});
