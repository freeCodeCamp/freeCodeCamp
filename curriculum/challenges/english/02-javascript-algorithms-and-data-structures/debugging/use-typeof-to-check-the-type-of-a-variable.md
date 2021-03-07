---
id: 587d7b84367417b2b2512b34
title: Use typeof to Check the Type of a Variable
challengeType: 1
forumTopicId: 18374
dashedName: use-typeof-to-check-the-type-of-a-variable
---

# --description--

You can use `typeof` to check the data structure, or type, of a variable. This is useful in debugging when working with multiple data types. If you think you're adding two numbers, but one is actually a string, the results can be unexpected. Type errors can lurk in calculations or function calls. Be careful especially when you're accessing and working with external data in the form of a JavaScript Object Notation (JSON) object.

Here are some examples using `typeof`:

```js
console.log(typeof "");
console.log(typeof 0);
console.log(typeof []);
console.log(typeof {});
```

In order, the console will display the strings `string`, `number`, `object`, and `object`.

JavaScript recognizes six primitive (immutable) data types: `Boolean`, `Null`, `Undefined`, `Number`, `String`, and `Symbol` (new with ES6) and one type for mutable items: `Object`. Note that in JavaScript, arrays are technically a type of object.

# --instructions--

Add two `console.log()` statements to check the `typeof` each of the two variables `seven` and `three` in the code.

# --hints--

Your code should use `typeof` in two `console.log()` statements to check the type of the variables.

```js
assert(code.match(/console\.log\(typeof[\( ].*\)?\)/g).length == 2);
```

Your code should use `typeof` to check the type of the variable `seven`.

```js
assert(code.match(/typeof[\( ]seven\)?/g));
```

Your code should use `typeof` to check the type of the variable `three`.

```js
assert(code.match(/typeof[\( ]three\)?/g));
```

# --seed--

## --seed-contents--

```js
let seven = 7;
let three = "3";
console.log(seven + three);
// Only change code below this line
```

# --solutions--

```js
let seven = 7;let three = "3";console.log(typeof seven);
console.log(typeof three);
```
