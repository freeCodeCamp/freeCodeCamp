---
id: cf1111c1c12feddfaeb1bdef
title: Generate Random Whole Numbers with JavaScript
challengeType: 1
videoUrl: 'https://scrimba.com/c/cRn6bfr'
forumTopicId: 18186
dashedName: generate-random-whole-numbers-with-javascript
---

# --description--

It's great that we can generate random decimal numbers, but it's even more useful if we use it to generate random whole numbers.

<ol><li>Use <code>Math.random()</code> to generate a random decimal.</li><li>Multiply that random decimal by <code>20</code>.</li><li>Use another function, <code>Math.floor()</code> to round the number down to its nearest whole number.</li></ol>

Remember that `Math.random()` can never quite return a `1` and, because we're rounding down, it's impossible to actually get `20`. This technique will give us a whole number between `0` and `19`.

Putting everything together, this is what our code looks like:

```js
Math.floor(Math.random() * 20);
```

We are calling `Math.random()`, multiplying the result by 20, then passing the value to `Math.floor()` function to round the value down to the nearest whole number.

# --instructions--

Use this technique to generate and return a random whole number between `0` and `9`.

# --hints--

The result of `randomWholeNum` should be a whole number.

```js
assert(
  typeof randomWholeNum() === 'number' &&
    (function () {
      var r = randomWholeNum();
      return Math.floor(r) === r;
    })()
);
```

You should use `Math.random` to generate a random number.

```js
assert(code.match(/Math.random/g).length >= 1);
```

You should have multiplied the result of `Math.random` by 10 to make it a number that is between zero and nine.

```js
assert(
  code.match(/\s*?Math.random\s*?\(\s*?\)\s*?\*\s*?10[\D]\s*?/g) ||
    code.match(/\s*?10\s*?\*\s*?Math.random\s*?\(\s*?\)\s*?/g)
);
```

You should use `Math.floor` to remove the decimal part of the number.

```js
assert(code.match(/Math.floor/g).length >= 1);
```

# --seed--

## --after-user-code--

```js
(function(){return randomWholeNum();})();
```

## --seed-contents--

```js
function randomWholeNum() {

  // Only change code below this line

  return Math.random();
}
```

# --solutions--

```js
function randomWholeNum() {
  return Math.floor(Math.random() * 10);
}
```
