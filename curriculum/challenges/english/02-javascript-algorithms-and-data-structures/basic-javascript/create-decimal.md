---
id: 6606ca4e13f21011d7519a2b
title: Create Decimal Numbers with Javascript
challengeType: 1
dashedName: create-decimal
---

# --description--

We can store decimal numbers in variables too. Decimal numbers are sometimes referred to as <dfn>floating point</dfn> numbers or <dfn>floats</dfn>.

**Note:** when you compute numbers, they are computed with finite precision. Operations using floating points may lead to different results than the desired outcome. If you are getting one of these results, open a topic on the <a href="https://forum.freecodecamp.org/" target="_blank" rel="noopener noreferrer nofollow">freeCodeCamp forum</a>.

# --instructions--

Create a variable `myDecimal` and give it a decimal value with a fractional part (e.g. `5.7`).

# --hints--

`myDecimal` should be a number.

```js
assert(typeof myDecimal === 'number');
```

`myDecimal` should have a decimal point

```js
assert(myDecimal % 1 != 0);
```

# --seed--

## --after-user-code--

```js
(function(){if(typeof myDecimal !== "undefined"){return myDecimal;}})();
```

## --seed-contents--

```js
const ourDecimal = 5.7;

// Only change code below this line

```

# --solutions--

```js
const myDecimal = 9.9;
```

