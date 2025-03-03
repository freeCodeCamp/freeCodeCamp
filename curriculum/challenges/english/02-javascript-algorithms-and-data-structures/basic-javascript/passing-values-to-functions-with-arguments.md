---
id: 56533eb9ac21ba0edf2244bd
title: Passing Values to Functions with Arguments
challengeType: 1
forumTopicId: 18254
dashedName: passing-values-to-functions-with-arguments
---

# --description--

<dfn>Parameters</dfn> are variables that act as placeholders for the values that are to be input to a function when it is called. When a function is defined, it is typically defined along with one or more parameters. The actual values that are input (or <dfn>"passed"</dfn>) into a function when it is called are known as <dfn>arguments</dfn>.

Here is a function with two parameters, `param1` and `param2`:

```js
function testFun(param1, param2) {
  console.log(param1, param2);
}
```

Then we can call `testFun` like this: `testFun("Hello", "World");`. We have passed two string arguments, `Hello` and `World`. Inside the function, `param1` will equal the string `Hello` and `param2` will equal the string `World`. Note that you could call `testFun` again with different arguments and the parameters would take on the value of the new arguments.

# --instructions--

<ol><li>Create a function called <code>functionWithArgs</code> that accepts two arguments and outputs their sum to the dev console.</li><li>Call the function with two numbers as arguments.</li></ol>

# --before-each--

```js
var logOutput;
```

# --hints--

`functionWithArgs` should be a function.

```js
assert(typeof functionWithArgs === 'function');
```

`functionWithArgs(1,2)` should output `3`.

```js
console.log = function (message) {
  logOutput = message
};
functionWithArgs(1, 2);
assert(logOutput == 3);
```

`functionWithArgs(7,9)` should output `16`.

```js
console.log = function (message) {
  logOutput = message
};
functionWithArgs(7, 9);
assert(logOutput == 16);
```

You should call `functionWithArgs` with two numbers after you define it.

```js
assert(
  /functionWithArgs\([-+]?\d*\.?\d*,[-+]?\d*\.?\d*\)/.test(
    __helpers.removeJSComments(code).replace(/\s/g, '')
  )
);
```

# --seed--

## --seed-contents--

```js

```

# --solutions--

```js
function functionWithArgs(a, b) {
  console.log(a + b);
}
functionWithArgs(10, 5);
```
