---
title: Combine Multiple Reducers
---
## Combine Multiple Reducers

The goal of this challenge is to combine two reducers into a single reducer which will be passed into the ```Redux.createStore()``` method. 

### Hint 1
Use the method ```Redux.combineReducers()```. Pass an object as an argument. 

### Hint 2
The object should have two ```name:value``` pairs. The ```value``` corresponds to the reducer function 

### Solution
```javascript
// define the root reducer here
const rootReducer =  Redux.combineReducers({count:counterReducer, auth:authReducer})
```
<!-- The article goes here, in GitHub-flavored Markdown. Feel free to add YouTube videos, images, and CodePen/JSBin embeds  -->
