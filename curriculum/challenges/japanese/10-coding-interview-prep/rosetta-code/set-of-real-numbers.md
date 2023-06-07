---
id: 5eb3e4b20aa93c437f9e9717
title: 実数集合
challengeType: 1
forumTopicId: 385322
dashedName: set-of-real-numbers
---

# --description--

すべての実数は非可算集合 ℝ を形成します。 その部分集合のうち、比較的単純なものが凸集合です。それぞれが実数 *a* と *b* の区間として表されます (*a* ≤ *b*)。 実際には、「区間」の意味は境界の開・閉に応じて、4つのケースがあります。

<ul>
  <li>[<i>a</i>, <i>b</i>]: {<i>x</i> | <i>a</i> ≤ <i>x</i> and <i>x</i> ≤ <i>b</i> }</li>
  <li>(<i>a</i>, <i>b</i>): {<i>x</i> | <i>a</i> < <i>x</i> and <i>x</i> < <i>b</i> }</li>
  <li>[<i>a</i>, <i>b</i>): {<i>x</i> | <i>a</i> ≤ <i>x</i> and <i>x</i> < <i>b</i> }</li>
  <li>(<i>a</i>, <i>b</i>]: {<i>x</i> | <i>a</i> < <i>x</i> and <i>x</i> ≤ <i>b</i> }</li>
</ul>

*a* = *b* の場合、4つのうち \[*a*, *a*] のみが空集合になりません。

**タスク**

<ul>
  <li>以下の実装ノートの「任意の集合」を定義するために、実数の任意の集合を表現する方法を考案します。</li>
  <li>以下の共通の集合演算のための方法を提供します (<i>x</i> は実数; <i>A</i> と <i>B</i> は集合)。</li>
  <ul>
    <li>
      <i>x</i> ∈ <i>A</i>: <i>x</i> が <i>A</i> の要素かどうかを判定する<br>
      例: 1 は [1, 2) に含まれるのに対し、2, 3, ... は含まれない。
    </li>
    <li>
      <i>A</i> ∪ <i>B</i>: <i>A</i> と <i>B</i> の和集合、つまり {<i>x</i> | <i>x</i> ∈ <i>A</i> or <i>x</i> ∈ <i>B</i>}<br>
       例: [0, 2) ∪ (1, 3) = [0, 3); [0, 1) ∪ (2, 3] = [0, 1) ∪ (2, 3]
    </li>
    <li>
      <i>A</i> ∩ <i>B</i>: <i>A</i> と <i>B</i> の共通部分、つまり  {<i>x</i> | <i>x</i> ∈ <i>A</i> and <i>x</i> ∈ <i>B</i>}<br>
       例: [0, 2) ∩ (1, 3) = (1, 2); [0, 1) ∩ (2, 3] = 空集合
    </li>
    <li>
      <i>A</i> - <i>B</i>: <i>A</i> と <i>B</i> の差集合、<i>A</i> \ <i>B</i> とも表記する。つまり  {<i>x</i> | <i>x</i> ∈ <i>A</i> and <i>x</i> ∉ <i>B</i>}<br>
       例: [0, 2) − (1, 3) = [0, 1]
    </li>
  </ul>
</ul>

# --instructions--

2 つのオブジェクト、1 つの文字列、1 つの配列をパラメータとして取る関数を記述してください。 オブジェクトは集合を表し、次の属性を持ちます: `low`、`high` および `rangeType`

`rangeType`では、`CLOSED`、`BOTH_OPEN`、`LEFT_OPEN`、`RIGHT_OPEN` に対して、それぞれ0、1、2、3の値を持つことができます。 この関数は、この情報を使用して集合を実装するものとします。

文字列は集合に実行される演算を表します。 以下のいずれかとなります。`"union"` (和集合)、`"intersect"` (共通部分、積集合)、`"subtract"` (差集合)。

演算の実行後、関数は配列内の値が結果の集合に存在するかどうかをチェックし、対応するブール値を配列に格納します。 この関数はこの配列を返す必要があります。

# --hints--

`realSet` は関数とします。

```js
assert(typeof realSet == 'function');
```

`realSet({"low":0, "high":1, "rangeType":2}, {"low":0, "high":2, "rangeType":3}, "union", [1, 2, 3])` は配列を返す必要があります。

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

`realSet({"low":0, "high":1, "rangeType":2}, {"low":0, "high":2, "rangeType":3}, "union", [1, 2, 3])` は `[true, false, false]` を返す必要があります。

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

`realSet({"low":0, "high":2, "rangeType":3}, {"low":1, "high":2, "rangeType":2}, "intersect", [0, 1, 2])` は `[false, false, false]` を返す必要があります。

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

`realSet({"low":0, "high":3, "rangeType":3}, {"low":0, "high":1, "rangeType":1}, "subtract", [0, 1, 2])` は `[true, true, true]` を返す必要があります。

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

`realSet({"low":0, "high":3, "rangeType":3}, {"low":0, "high":1, "rangeType":0}, "subtract", [0, 1, 2])` は `[false, false, true]` を返す必要があります。

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

`realSet({"low":0, "high":33, "rangeType":1}, {"low":30, "high":31, "rangeType":0}, "intersect", [30, 31, 32])` は `[true, true, false]` を返す必要があります。

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
