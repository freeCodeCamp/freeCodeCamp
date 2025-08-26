---
id: 587d7b88367417b2b2512b46
title: Set Default Parameters for Your Functions
challengeType: 1
forumTopicId: 301209
dashedName: set-default-parameters-for-your-functions
---

# --description--

In order to help us create more flexible functions, ES6 introduces <dfn>default parameters</dfn> for functions.

Check out this code:

```js
const greeting = (name = "Anonymous") => "Hello " + name;

console.log(greeting("John"));
console.log(greeting());
```

The console will display the strings `Hello John` and `Hello Anonymous`.

The default parameter kicks in when the argument is not specified (it is undefined). As you can see in the example above, the parameter `name` will receive its default value `Anonymous` when you do not provide a value for the parameter. You can add default values for as many parameters as you want.

# --instructions--

Modify the function `increment` by adding default parameters so that it will add 1 to `number` if `value` is not specified.

# --hints--

The result of `increment(5, 2)` should be `7`.

```js
assert(increment(5, 2) === 7);
```

The result of `increment(5)` should be `6`.

```js
assert(increment(5) === 6);
```

A default parameter value of `1` should be used for `value`.

```js
assert(__helpers.removeJSComments(code).match(/value\s*=\s*1/g));
```

# --seed--

## --seed-contents--

```js
// Only change code below this line
const increment = (number, value) => number + value;
// Only change code above this line
```

# --solutions--

```js
const increment = (number, value = 1) => number + value;
```
