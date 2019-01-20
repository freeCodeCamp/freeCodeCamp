---
title: Use the Spread Operator on Arrays
---
## Use the Spread Operator on Arrays

<!-- The article goes here, in GitHub-flavored Markdown. Feel free to add YouTube videos, images, and CodePen/JSBin embeds  -->
This lesson is about immutably updating a to-do list stored in <i>state</i>.  

To that end, the action creator "addToDo" passes an item stored in the property "todo" to the action reducer "immutableReducer". A switch statement decides on whether the correct action.type is triggered before updating <i>state</i> immutably.

What's missing is a spread operator in "case 'ADD_TO_DO'". Complete it as follows:
````javascript
case 'ADD_TO_DO': 
  // don't mutate state here or the tests will fail 
  return [ 
    ...state, action.todo 
  ];
````
