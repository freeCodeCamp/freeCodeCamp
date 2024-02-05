---
id: 5eb3e4b20aa93c437f9e9717
title: 实数集
challengeType: 1
forumTopicId: 385322
dashedName: set-of-real-numbers
---

# --description--

All real numbers form the uncountable set ℝ. Among its subsets, relatively simple are the convex sets, each expressed as a range between two real numbers *a* and *b* where *a* ≤ *b*. There are actually four cases for the meaning of "between", depending on open or closed boundary:

<ul>
  <li>[<i>a</i>, <i>b</i>]: {<i>x</i> | <i>a</i> ≤ <i>x</i> and <i>x</i> ≤ <i>b</i> }</li>
  <li>(<i>a</i>, <i>b</i>): {<i>x</i> | <i>a</i> < <i>x</i> and <i>x</i> < <i>b</i> }</li>
  <li>[<i>a</i>, <i>b</i>): {<i>x</i> | <i>a</i> ≤ <i>x</i> and <i>x</i> < <i>b</i> }</li>
  <li>(<i>a</i>, <i>b</i>]: {<i>x</i> | <i>a</i> < <i>x</i> and <i>x</i> ≤ <i>b</i> }</li>
</ul>

请注意，如果 *a* = *b*，则四个中只有 \[*a*, *a*] 将是非空的。

**任务**

<ul>
  <li>Devise a way to represent any set of real numbers, for the definition of "any" in the implementation notes below.</li>
  <li>提供这些常见集合操作的方法（<i>x</i> 是实数；<i>A</i> 和 <i>B</i> 是集合）：</li>
  <ul>
    <li>
      <i>x</i> ∈ <i>A</i>: determine if <i>x</i> is an element of <i>A</i><br>
      example: 1 is in [1, 2), while 2, 3, ... are not.
    </li>
    <li>
      <i>A</i> ∪ <i>B</i>：<i>A</i> 和 <i>B</i> 的并集，即 {<i>x</i> | <i>x</i> ∈ <i>A</i> 或 <i>x</i> ∈ <i>B</i>}<br>
      例如：[0, 2) ∪ (1, 3) = [0, 3); [0, 1) ∪ (2, 3] = [0, 1) ∪ (2, 3]
    </li>
    <li>
      <i>A</i> ∩ <i>B</i>：<i>A</i> 和 <i>B</i> 的交集，即 {<i>x</i> | <i>x</i> ∈ <i>A</i> 且 <i>x</i> ∈ <i>B</i>}<br>
      例如：[0, 2)∩(1,3) = (1,2); [0, 1) ∩ (2, 3] = 空集
    </li>
    <li>
      <i>A</i> - <i>B</i>：<i>A</i> 和 <i>B</i> 的区别，也写成 <i>A</i> \ <i>B</i>，即 {<i>x</i> | <i>x</i> ∈ <i>A</i> 且 <i>x</i> ∉ <i>B</i>}<br>
      例如：[0, 2) − (1, 3) = [0, 1]
    </li>
  </ul>
</ul>

# --instructions--

编写一个函数，它接受 2 个对象，一个字符串和一个数组作为参数。 对象代表集合并具有属性：`low`、`high` 和 `rangeType`。

`rangeType` 的值可以为 0、1、2 和 3，分别表示 `CLOSED`、`BOTH_OPEN`、`LEFT_OPEN` 和 `RIGHT_OPEN`。 该函数应使用此信息实现一个集合。

该字符串表示要对集合执行的操作。 它可以是：`"union"`、`"intersect"` 和 `"subtract"`（差异）。

执行操作后，函数应检查数组中的值是否存在于结果集中，并将相应的布尔值存储到数组中。 该函数应该返回这个数组。

# --hints--

`realSet` 应该是一个函数。

```js
assert(typeof realSet == 'function');
```

`realSet({"low":0, "high":1, "rangeType":2}, {"low":0, "high":2, "rangeType":3}, "union", [1, 2, 3])` 应该返回一个数组。

```js
assert(
  Array.isArray(
    realSet(
      { low: 0, high: 1, rangeType: 2 },
      { low: 0, high: 2, rangeType: 3 },
      'union',
      [1, 2, 3]
    )
  )
);
```

`realSet({"low":0, "high":1, "rangeType":2}, {"low":0, "high":2, "rangeType":3}, "union", [1, 2, 3])` 应该返回 `[true, false, false]`。

```js
assert.deepEqual(
  realSet(
    { low: 0, high: 1, rangeType: 2 },
    { low: 0, high: 2, rangeType: 3 },
    'union',
    [1, 2, 3]
  ),
  [true, false, false]
);
```

`realSet({"low":0, "high":2, "rangeType":3}, {"low":1, "high":2, "rangeType":2}, "intersect", [0, 1, 2])` 应该返回 `[false, false, false]`。

```js
assert.deepEqual(
  realSet(
    { low: 0, high: 2, rangeType: 3 },
    { low: 1, high: 2, rangeType: 2 },
    'intersect',
    [0, 1, 2]
  ),
  [false, false, false]
);
```

`realSet({"low":0, "high":3, "rangeType":3}, {"low":0, "high":1, "rangeType":1}, "subtract", [0, 1, 2])` 应该返回 `[true, true, true]`。

```js
assert.deepEqual(
  realSet(
    { low: 0, high: 3, rangeType: 3 },
    { low: 0, high: 1, rangeType: 1 },
    'subtract',
    [0, 1, 2]
  ),
  [true, true, true]
);
```

`realSet({"low":0, "high":3, "rangeType":3}, {"low":0, "high":1, "rangeType":0}, "subtract", [0, 1, 2])` 应该返回 `[false, false, true]`。

```js
assert.deepEqual(
  realSet(
    { low: 0, high: 3, rangeType: 3 },
    { low: 0, high: 1, rangeType: 0 },
    'subtract',
    [0, 1, 2]
  ),
  [false, false, true]
);
```

`realSet({"low":0, "high":33, "rangeType":1}, {"low":30, "high":31, "rangeType":0}, "intersect", [30, 31, 32])` 应该返回 `[true, true, false]`。

```js
assert.deepEqual(
  realSet(
    { low: 0, high: 33, rangeType: 1 },
    { low: 30, high: 31, rangeType: 0 },
    'intersect',
    [30, 31, 32]
  ),
  [true, true, false]
);
```

# --seed--

## --seed-contents--

```js
function realSet(set1, set2, operation, values) {

}
```

# --solutions--

```js
function realSet(set1, set2, operation, values) {
  const RangeType = {
    CLOSED: 0,
    BOTH_OPEN: 1,
    LEFT_OPEN: 2,
    RIGHT_OPEN: 3
  };

  function Predicate(test) {
    this.test = test;
    this.or = function(other) {
      return new Predicate(t => this.test(t) || other.test(t));
    };
    this.and = function(other) {
      return new Predicate(t => this.test(t) && other.test(t));
    };
    this.negate = function() {
      return new Predicate(t => !this.test(t));
    };
  }

  function RealSet(start, end, rangeType, predF) {
    this.low = start;
    this.high = end;

    if (predF) {
      this.predicate = new Predicate(predF);
    } else {
      this.predicate = new Predicate(d => {
        switch (rangeType) {
          case RangeType.CLOSED:
            return start <= d && d <= end;
          case RangeType.BOTH_OPEN:
            return start < d && d < end;
          case RangeType.LEFT_OPEN:
            return start < d && d <= end;
          case RangeType.RIGHT_OPEN:
            return start <= d && d < end;
        }
      });
    }

    this.contains = function(d) {
      return this.predicate.test(d);
    };

    this.union = function(other) {
      var low2 = Math.min(this.low, other.low);
      var high2 = Math.max(this.high, other.high);
      return new RealSet(low2, high2, null, d =>
        this.predicate.or(other.predicate).test(d)
      );
    };

    this.intersect = function(other) {
      var low2 = Math.min(this.low, other.low);
      var high2 = Math.max(this.high, other.high);
      return new RealSet(low2, high2, null, d =>
        this.predicate.and(other.predicate).test(d)
      );
    };

    this.subtract = function(other) {
      return new RealSet(this.low, this.high, null, d =>
        this.predicate.and(other.predicate.negate()).test(d)
      );
    };
  }
  set1 = new RealSet(set1.low, set1.high, set1.rangeType);
  set2 = new RealSet(set2.low, set2.high, set2.rangeType);
  var result = [];
  values.forEach(function(value) {
    result.push(set1[operation](set2).contains(value));
  });
  return result;
}
```
