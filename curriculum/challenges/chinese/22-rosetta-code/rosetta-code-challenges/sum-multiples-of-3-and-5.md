---
id: 5a23c84252665b21eecc8040
title: 3 和 5 的倍数和
challengeType: 1
forumTopicId: 302332
dashedName: sum-multiples-of-3-and-5
---

# --description--

The objective is to write a function that finds the sum of all positive multiples of 3 or 5 below *n*.

# --hints--

`sumMults` 应该是一个函数。

```js
assert(typeof sumMults == 'function');
```

`sumMults(10)` 应该返回一个数字。

```js
assert(typeof sumMults(10) == 'number');
```

`sumMults(10)` 应该返回 `23`。

```js
assert.equal(sumMults(10), 23);
```

`sumMults(100)` 应该返回 `2318`。

```js
assert.equal(sumMults(100), 2318);
```

`sumMults(1000)` 应该返回 `233168`。

```js
assert.equal(sumMults(1000), 233168);
```

`sumMults(10000)` 应该返回 `23331668`。

```js
assert.equal(sumMults(10000), 23331668);
```

`sumMults(100000)` 应该返回 `2333316668`。

```js
assert.equal(sumMults(100000), 2333316668);
```

# --seed--

## --seed-contents--

```js
function sumMults(n) {

}
```

# --solutions--

```js
function sumMults(n) {
  var sum = 0;
  for (var i = 1; i < n; i++) {
    if (i % 3 == 0 || i % 5 == 0) sum += i;
  }
  return sum;
}
```
