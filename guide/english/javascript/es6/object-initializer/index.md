---
title: ES6 Object Initializers
---

### ES6 Object Initializers

In ES6 you can use shorthand property syntax to initialize objects, which at first does not appear to be very time-saving but when you are creating many objects in a project can be super useful.

If you have a property name that is exactly the same as your variable name instead of placing it twice in ES6 you can use the shorthand property syntax:
```javascript
// ES5
var name = 'Lord Farquad';

var user = {
  name: name,
 };
 
 // ES6
 const name = 'Shrek';
 
 const user = {
  name,
 };
```
This shorthand property syntax is also useful when initializing methods in an objec:
```javascript
// ES5
var example = {
  getName: function(name) {
    return name.firstName + ' ' + name.lastName;
  },
};

// ES6 Shorthand
const example = {
  getName(name) {
    return name.firstName + ' ' + name.lastName;
  },
};
```

[Learn More about Object Initializers](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer)


