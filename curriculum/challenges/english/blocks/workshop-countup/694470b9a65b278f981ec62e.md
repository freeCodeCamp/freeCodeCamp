---
id: 694470b9a65b278f981ec62e
title: Step 5
challengeType: 1
dashedName: step-5
---

# --description--

Finally, test your `countup` function by calling it with the argument `5` inside a `console.log()` statement. 

The output should be `[1, 2, 3, 4, 5]`.

# --hints--

You should call the function `countup` with argument `5` inside a `console.log()` statement

```js
assert.deepStrictEqual(countup(5), [1, 2, 3, 4, 5]);
assert.match(code, /console\.log\s*\(\s*countup\s*\(\s*5\s*\)\s*\)/)
```

# --seed--

## --seed-contents--

```js
function countup(number) {
  let countArray = [];
  if (number < 1) {
    return [];
  } else {
    countArray = countup(number - 1);
    countArray.push(number);
    return countArray;
  }
}
--fcc-editable-region--

--fcc-editable-region--
```

# --solutions--

```js
function countup(number) {
  let countArray = [];
  if (number < 1) {
    return [];
  } else {
    countArray = countup(number - 1);
    countArray.push(number);
    return countArray;
  }
}
console.log(countup(5));
```
