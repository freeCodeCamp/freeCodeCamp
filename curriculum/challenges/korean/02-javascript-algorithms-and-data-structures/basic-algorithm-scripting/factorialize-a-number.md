---
id: a302f7aae1aa3152a5b413bc
title: Factorialize a Number
challengeType: 1
forumTopicId: 16013
dashedName: factorialize-a-number
---

# --description--

Return the factorial of the provided integer.

If the integer is represented with the letter `n`, a factorial is the product of all positive integers less than or equal to `n`.

Factorials are often represented with the shorthand notation `n!`

For example: `5! = 1 * 2 * 3 * 4 * 5 = 120`

Only integers greater than or equal to zero will be supplied to the function.

# --hints--

`factorialize(5)` should return a number.

```js
assert(typeof factorialize(5) === 'number');
```

`factorialize(5)` should return `120`.

```js
assert(factorialize(5) === 120);
```

`factorialize(10)` should return `3628800`.

```js
assert(factorialize(10) === 3628800);
```

`factorialize(20)` should return `2432902008176640000`.

```js
assert(factorialize(20) === 2432902008176640000);
```

`factorialize(0)` should return `1`.

```js
assert(factorialize(0) === 1);
```

# --seed--

## --seed-contents--

```js
function factorialize(num) {
  return num;
}

factorialize(5);
```

# --solutions--

```js
function factorialize(num) {
  return num < 1 ? 1 : num * factorialize(num - 1);
}

factorialize(5);
```
