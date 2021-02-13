---
id: cf1391c1c11feddfaeb4bdef
title: Create Decimal Numbers with JavaScript
challengeType: 1
videoUrl: 'https://scrimba.com/c/ca8GEuW'
forumTopicId: 16826
dashedName: create-decimal-numbers-with-javascript
---

# --description--

We can store decimal numbers in variables too. Decimal numbers are sometimes referred to as <dfn>floating point</dfn> numbers or <dfn>floats</dfn>.

**Note:** Not all real numbers can accurately be represented in <dfn>floating point</dfn>. This can lead to rounding errors. [Details Here](https://en.wikipedia.org/wiki/Floating_point#Accuracy_problems).

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
var ourDecimal = 5.7;

// Only change code below this line
```

# --solutions--

```js
var myDecimal = 9.9;
```
