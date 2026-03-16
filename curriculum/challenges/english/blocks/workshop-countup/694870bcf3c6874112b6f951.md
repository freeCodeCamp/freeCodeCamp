---
id: 694870bcf3c6874112b6f951
title: Step 4
challengeType: 1
dashedName: step-4
---

# --description--

For all numbers greater than  and equal to `1`, create an `else` block and inside it, call the `countup` function with `number - 1` and assign the result to `countArray`. 

Then use `.push()` to add `number` to `countArray`, and finally return `countArray`. 

This ensures the recursion eventually reaches the base case and terminates.

# --hints--

You should assign the result of calling `countup` with `number - 1` to `countArray`.

```js
assert.match(countup.toString(), /countArray\s*=\s*countup\(\s*number\s*-\s*1\s*\)/);
```

You should push `number` into `countArray`.

```js
assert.match(countup.toString(), /countArray\.push\(\s*number\s*\)/);
```

You should return the `countArray`.

```js
assert.deepStrictEqual(countup(3), [1, 2, 3]);
```

# --seed--

## --seed-contents--

```js
function countup(number) {
  let countArray = [];
  if (number < 1) {
    return [];
--fcc-editable-region--
  }
  
--fcc-editable-region--
}
```
