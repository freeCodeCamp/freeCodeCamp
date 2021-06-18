---
id: 587d7b87367417b2b2512b43
title: Use Arrow Functions to Write Concise Anonymous Functions
challengeType: 1
forumTopicId: 301211
dashedName: use-arrow-functions-to-write-concise-anonymous-functions
---

# --description--

In JavaScript, we often don't need to name our functions, especially when passing a function as an argument to another function. Instead, we create inline functions. We don't need to name these functions because we do not reuse them anywhere else.

To achieve this, we often use the following syntax:

```js
const myFunc = function() {
  const myVar = "value";
  return myVar;
}
```

ES6 provides us with the syntactic sugar to not have to write anonymous functions this way. Instead, you can use **arrow function syntax**:

```js
const myFunc = () => {
  const myVar = "value";
  return myVar;
}
```

When there is no function body, and only a return value, arrow function syntax allows you to omit the keyword `return` as well as the brackets surrounding the code. This helps simplify smaller functions into one-line statements:

```js
const myFunc = () => "value";
```

This code will still return the string `value` by default.

# --instructions--

Rewrite the function assigned to the variable `magic` which returns a `new Date()` to use arrow function syntax. Also, make sure nothing is defined using the keyword `var`.

# --hints--

You should replace the `var` keyword.

```js
(getUserInput) => assert(!getUserInput('index').match(/var/g));
```

`magic` should be a constant variable (by using `const`).

```js
(getUserInput) => assert(getUserInput('index').match(/const\s+magic/g));
```

`magic` should be a `function`.

```js
assert(typeof magic === 'function');
```

`magic()` should return the correct date.

```js
assert(magic().setHours(0, 0, 0, 0) === new Date().setHours(0, 0, 0, 0));
```

The `function` keyword should not be used.

```js
(getUserInput) => assert(!getUserInput('index').match(/function/g));
```

# --seed--

## --seed-contents--

```js
var magic = function() {
  return new Date();
};
```

# --solutions--

```js
const magic = () => {
  return new Date();
};
```
