---
id: 587d7b88367417b2b2512b47
title: Use the Rest Parameter with Function Parameters
challengeType: 1
forumTopicId: 301221
dashedName: use-the-rest-parameter-with-function-parameters
---

# --description--

In order to help us create more flexible functions, ES6 introduces the <dfn>rest parameter</dfn> for function parameters. With the rest parameter, you can create functions that take a variable number of arguments. These arguments are stored in an array that can be accessed later from inside the function.

Check out this code:

```js
function howMany(...args) {
  return "You have passed " + args.length + " arguments.";
}
console.log(howMany(0, 1, 2));
console.log(howMany("string", null, [1, 2, 3], { }));
```

The console would display the strings `You have passed 3 arguments.` and `You have passed 4 arguments.`.

The rest parameter eliminates the need to use the `arguments` object and allows us to use array methods on the array of parameters passed to the function `howMany`.

# --instructions--

Modify the function `sum` using the rest parameter in such a way that the function `sum` is able to take any number of arguments and return their sum.

# --hints--

The result of `sum(0,1,2)` should be 3

```js
assert(sum(0, 1, 2) === 3);
```

The result of `sum(1,2,3,4)` should be 10

```js
assert(sum(1, 2, 3, 4) === 10);
```

The result of `sum(5)` should be 5

```js
assert(sum(5) === 5);
```

The result of `sum()` should be 0

```js
assert(sum() === 0);
```

`sum` should be an arrow function which uses the rest parameter syntax (`...`) on the `args` parameter.

```js
assert(__helpers.removeWhiteSpace(code).match(/sum=\(\.\.\.args\)=>/));
```

# --seed--

## --seed-contents--

```js
const sum = (x, y, z) => {
  const args = [x, y, z];
  let total = 0;
  for (let i = 0; i < args.length; i++) {
    total += args[i];
  }
  return total;
}
```

# --solutions--

```js
const sum = (...args) => {
  let total = 0;
  for (let i = 0; i < args.length; i++) {
    total += args[i];
  }
  return total;
}
```
