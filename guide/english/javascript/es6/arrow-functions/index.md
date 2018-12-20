---
title: Arrow Functions
---

## Arrow functions

ES6 has introduced a new syntax that allows to declare functions.

```javascript
// Old Syntax
function oldOne() {
 console.log("Hello World..!");
}

// New Syntax
const newOne = () => {
 console.log("Hello World..!");
}

// Or on one line
const newOne = () => console.log("Hello World..!");
```

The new syntax may be confusing. There are two major parts of it.

1. const newOne = ()
2. => {}

The first part is just declaring a variable and assigning the function (i.e) () to it. It just says the variable is actually a function. The `const` keyword is used to indicate that the function won't be reassigned. Refer [this](https://github.com/freeCodeCamp/freeCodeCamp/blob/master/guide/english/javascript/es6/let-and-const/index.md) to learn more about `const` and `let`.

Then the second part is declaring the body part of the function. The arrow part with the curly braces defines the body part.

Another example with parameters:

```javascript
let NewOneWithParameters = (a, b) => {
 console.log(a+b); // 30
}
NewOneWithParameters(10, 20);
```

Parentheses are optional when there's only one parameter name:

```javascript
let newOneWithOneParam = a => {
 console.log(a);
}
```

When there is only one statement or operation in the function body, braces are optional and the result is returned or undefined.

```javascript
let a = 10;
let newOneParamWithNoBrackets = b => a + b;
console.log(newOneParamWithNoBrackets(20)); // 30
```

An incredible advantage of the arrows function is that you can not rebind an arrow function. It will always be called with the context in which it was defined. Just use a normal function.
```javascript
// Old Syntax
axios.get(url).then(function(response) {
  this.data = response.data;
}).bind(this);

// New Syntax
axios.get(url).then(response => {
  this.data = response.data;
});

```
