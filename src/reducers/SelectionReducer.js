export default (state = null, action) => {
  switch (action.type) {
    case 'select_library':
      return action.payload;
    default:
      return state;
  }
};

/* 
when redux starts up it will first run all the reducers, so we must make sure 
it doesnt return an undefined value.

The initial state is undfined, if we left this, it would return undefined.

We must set an inital state default argument to get around this.
  on line 1 we add (state = null, ... this is ES6. If this argument is 
  undefined it would default to null

  so in our case if no library is selected, it should return null
*/
