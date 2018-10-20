---
title: Function Invocation
---
## Function Invocation
The code inside a function is executed when the function is invoked. It is common to use the term "call a function" instead of "invoke a function".

Functions must be in scope when they are called. The scope of a function is the function in which it is declared, or the entire program if it is declared at the top level.

```javascript
function myFunction(a, b) {
  return a * b;
}
myFunction(10, 2);           // Function invocation, will return 20 

//optional parameters (es6 only)
//allow to set optional parameters

function myFunction(a, b = 10) {
  return a * b; 
}
myFunction(1);           // Function invocation, will return 10 
myFunction(1,5);           // Function invocation, will return 5 

```

In the example code, a and b are the function's parameters that hold the values 10 and 2, that are the arguments used in the function call.

### Invoking a Function as a Method
In JavaScript, you can define functions as object methods.

The following example creates an object (`myObject`), with two properties (`firstName` and `lastName`), and a method (`fullName`):

```javascript
var myObject = {
  firstName:"John",
  lastName: "Doe",
  fullName: function () {
    return this.firstName + " " + this.lastName;
  }
}
myObject.fullName();         // Function invoked as a method, will return "John Doe"
```


### Arrow Functions
In the newest version of Javascript, you can also shorten the syntax by using Arrow Functions.
The following demonstrates two functions.  One is written in the standard form, one is written as an arrow function.  Keep in mind that arrow functions do not have their own this, arguments, super, or new.target.

```javascript

//regular function

function addStuff(args) {
   return args + 2;
 }
 
 addStuff(2);
 //returns 4
 
 //arrow function
 
 var addStuff = (args) => args + 2;
 addStuff(2);
 //returns 4
```

This shorthand version of the arrow function has an implicit return so you don't specify a return statement.

### More Information:
- Function documentation: <a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions' target='_blank' rel='nofollow'>MDN</a>


