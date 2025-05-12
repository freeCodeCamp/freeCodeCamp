---
id: 681cb1b0dab50c87ddb2e51b
title: "JavaScript Challenge 10: 3 Finder"
challengeType: 28
dashedName: javascript-challenge-10
---

# --description--

Given an integer between 1 and 10,000, return a count of how many numbers from 1 up to that integer whose square that contains at least one digit 3.

# --hints--

`squaresWithThree(1)` should return `0`.

```js
assert.equal(squaresWithThree(1), 0);
```

`squaresWithThree(10)` should return `1`.

```js
assert.equal(squaresWithThree(10), 1);
```

`squaresWithThree(100)` should return `19`.

```js
assert.equal(squaresWithThree(100), 19);
```

`squaresWithThree(1000)` should return `326`.

```js
assert.equal(squaresWithThree(1000), 326);
```

`squaresWithThree(10000)` should return `4531`.

```js
assert.equal(squaresWithThree(10000), 4531);
```

# --seed--

## --seed-contents--

```js
function squaresWithThree(n) {

  return n;
}
```

# --solutions--

```js
function squaresWithThree(n) {
  let count = 0;

  for (let i = 1; i <= n; i++) {
    const square = i * i;
    if (square.toString().includes('3')) {
      count++;
    }
  }

  return count;
}
```
