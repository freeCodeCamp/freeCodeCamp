---
id: 5a23c84252665b21eecc7e76
title: 伽玛功能
challengeType: 5
videoUrl: ''
---

# --description--

实现一个算法（或更多）来计算[Gamma](<https://en.wikipedia.org/wiki/Gamma function>) （$ \\ Gamma $）函数（仅在实际字段中）。 Gamma功能可以定义为：

$ \\ Gamma（x）= \\ displaystyle \\ int_0 ^ \\ infty t ^ {x-1} e ^ { - t} dt $

# --hints--

`gamma`应该是一个功能。

```js
assert(typeof gamma == 'function');
```

`gamma("+tests[0]+")`应该返回一个数字。

```js
assert(typeof gamma(0.1) == 'number');
```

`gamma("+tests[0]+")`应该返回`"+results[0]+"` 。

```js
assert.equal(round(gamma(0.1)), round(9.513507698668736));
```

`gamma("+tests[1]+")`应该返回`"+results[1]+"` 。

```js
assert.equal(round(gamma(0.2)), round(4.590843711998803));
```

`gamma("+tests[2]+")`应该返回`"+results[2]+"` 。

```js
assert.equal(round(gamma(0.3)), round(2.9915689876875904));
```

`gamma("+tests[3]+")`应该返回`"+results[3]+"` 。

```js
assert.equal(round(gamma(0.4)), round(2.218159543757687));
```

`gamma("+tests[4]+")`应返回`"+results[4]+"` 。

```js
assert.equal(round(gamma(0.5)), round(1.7724538509055159));
```

# --solutions--

