---
id: 5a23c84252665b21eecc8040
title: 3 と 5 の倍数の和
challengeType: 1
forumTopicId: 302332
dashedName: sum-multiples-of-3-and-5
---

# --description--

目標は、 *n* 未満の 3 または 5 のすべての正の倍数の和を求める関数を記述することです。

# --hints--

`sumMults` は関数とします。

```js
assert(typeof sumMults == 'function');
```

`sumMults(10)` は数値を返す必要があります。

```js
assert(typeof sumMults(10) == 'number');
```

`sumMults(10)` は `23` を返す必要があります。

```js
assert.equal(sumMults(10), 23);
```

`sumMults(100)` は `2318` を返す必要があります。

```js
assert.equal(sumMults(100), 2318);
```

`sumMults(1000)` は `233168` を返す必要があります。

```js
assert.equal(sumMults(1000), 233168);
```

`sumMults(10000)` は `23331668` を返す必要があります。

```js
assert.equal(sumMults(10000), 23331668);
```

`sumMults(100000)` は `2333316668` を返す必要があります。

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
