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

An arrow function doesn't define it's own `this` value, it inherits `this` from the enclosing function:

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

#### Further Reading

<a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions' target='_blank' rel='nofollow'>MDN link</a>
