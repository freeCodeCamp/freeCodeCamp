---
title: Map Dispatch to Props
---
## Map Dispatch to Props

## Hint 1:

Create a function named mapDispatchToProps that takes in dispatch
```javascript
function mapStateToProps(dispatch){

}
```

## Hint 2:

There needs to be a function that can take in a message and dispatch it using addMessage()

```javascript
function(message){
        dispatch(addMessage(message));
}
```

## Hint 3:

mapDispatchToProps needs to return an object with submitNewMessage as a property, which should be set to the function from Hint 2

```javascript
return {submitNewMessage: function(message){
    dispatch(addMessage(message));
}};
```

## Solution
```javascript
function mapDispatchToProps(dispatch){
    return {submitNewMessage: function(message){
        dispatch(addMessage(message));
    }};
}
```