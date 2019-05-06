---
title: Write a Counter with Redux
---
## Write a Counter with Redux

The goal of this challenge is to apply all the concepts learned from previous Redux challenges and create a simple counter that will increment or decrement a state by 1. 

### Hint 1
The best way to solve this challenge is by reviewing previous redux lessons particularly the following:
- [Use const for Action Types](https://learn.freecodecamp.org/front-end-libraries/redux/use-const-for-action-types/)
- [Use a Switch Statement to Handle Multiple Actions](https://learn.freecodecamp.org/front-end-libraries/redux/use-a-switch-statement-to-handle-multiple-actions/)
- [Define an Action Creator](https://learn.freecodecamp.org/front-end-libraries/redux/define-an-action-creator/)
- [Handle an Action in the Store](https://learn.freecodecamp.org/front-end-libraries/redux/handle-an-action-in-the-store/)
- [Create a Redux Store](https://learn.freecodecamp.org/front-end-libraries/redux/create-a-redux-store)

### Solution
```javascript
const INCREMENT = 'INCREMENT'; // define a constant for increment action types
const DECREMENT = 'DECREMENT'; // define a constant for decrement action types

// define the counter reducer which will increment or decrement the state based on the action it receives
const counterReducer = (state = 0, action) => {
    switch(action.type){
        case INCREMENT: 
            return state+=1;          

        case DECREMENT: 
            return state-=1;                
            
        default:
            return state;
    }
} ; 

// define an action creator for incrementing
const incAction = () => { 
    return {
        type: INCREMENT
    }
}; 

// define an action creator for decrementing
const decAction = () => { 
    return {
        type: DECREMENT
    }
}; 

// define the Redux store here, passing in your reducers
const store = Redux.createStore(counterReducer); 
```
<!-- The article goes here, in GitHub-flavored Markdown. Feel free to add YouTube videos, images, and CodePen/JSBin embeds  -->
