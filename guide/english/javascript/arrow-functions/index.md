---
title: Arrow Functions
---

Arrow functions are a new ES6 syntax for writing JavaScript function expressions. The shorter syntax saves time, as well as simplifying the function scope.

## What are arrow functions?

An arrow function expression is a more concise syntax for writing function expressions using a "fat arrow" token (`=>`).

### The basic syntax

Below is a basic example of an arrow function:

```javascript
// ES5 syntax
var multiply = function(x, y) {
  return x * y;
};

// ES6 arrow function
var multiply = (x, y) => { return x * y; };

// Or even simpler
var multiply = (x, y) => x * y;    
```

You no longer need the `function` and `return` keywords, or even the curly brackets.

```javascript
// everything included
const multiply = function(x, y) => { return x * y };

// remove "function" 
const multiply = (x, y) => { return x * y };

// remove curly brackets and "return" ==> this way it returns implicitly
const multiply = (x, y) => x * y;

// if you only have one argument/parameter 
const multiplyBy2 = x => x * 2;

// if you need to concisely return an object, you can wrap the {} inside the () to avoid syntax conflicts
const getSumProductObject = (x, y) => ({sum : x + y, product: x * y});

// combined with the ternary operator, but note it's not a looker! 
const addOrMultiply = (x, y, mathOperator) => mathOperator.toLowerCase() === 'add' ? x + y : x * y;
```

### A simplified `this`

Before arrow functions, new functions defined their own `this` value. To use `this` inside a traditional function expression, we have to write a workaround like so:

```javascript
// ES5 syntax
function Person() {
  // we assign `this` to `self` so we can use it later
  var self = this;
  self.age = 0;

  setInterval(function growUp() {
    // `self` refers to the expected object
    self.age++;
  }, 1000);
}
```

An arrow function doesn't define its own `this` value, it inherits `this` from the enclosing function:

```javascript
// ES6 syntax
function Person(){
  this.age = 0;

  setInterval(() => {
    // `this` now refers to the Person object, brilliant!
    this.age++;
  }, 1000);
}

var p = new Person();
```
An arrow function does not have its own `arguments` object. For example, if you do not know the number of arguments passed to a function, instead of using `arguments` you can use the `rest` operator:
```javascript
const myFunc = (...n) => {
  console.log('The first argument is', n[0]);
}

myFunc(10,20,30,40,40); // output: The first argument is 10
```
#### Further Reading

<a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions' target='_blank' rel='nofollow'>MDN link</a>
