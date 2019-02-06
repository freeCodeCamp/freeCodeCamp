---
title: Map State to Props
---
## Map State to Props

## Hint 1:

Create a function named mapStateToProps that takes in state
```javascript
function mapStateToProps(state){

}
```

## Hint 2: 
The function should return an object with messages as a property, and set it to state
```javascript
return {messages: state};
```

## Solution
```javascript
function mapStateToProps(state){
  return {messages: state};
}
```