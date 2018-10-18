---
title: Send Action Data to the Store
---
## Send Action Data to the Store

### Hint 1
Remember that in Redux, action creator functions return action objects. Objects can hold multiple values. The action object in ```addNoteText``` should contain both type and text variables. Figure out the corresponding value to pass for each of the variables in the object. 

### Hint 2
In the ```notesReducer``` function, create a case condition that checks for the ```type``` of action and returns the value of ```text``` from the ```addNoteText``` function.

### Solution
```javascript
const ADD_NOTE = 'ADD_NOTE';

const notesReducer = (state = 'Initial State', action) => {
  switch(action.type) {
    // change code below this line

    case ADD_NOTE:
      return action.text;
      
    // change code above this line
    default:
      return state;
  }
};

const addNoteText = (note) => {
  // change code below this line

  return {
    type: ADD_NOTE,
    text: note
  }

  // change code above this line
};

const store = Redux.createStore(notesReducer);

console.log(store.getState());
store.dispatch(addNoteText('Hello!'));
console.log(store.getState());
```
<!-- The article goes here, in GitHub-flavored Markdown. Feel free to add YouTube videos, images, and CodePen/JSBin embeds  -->
