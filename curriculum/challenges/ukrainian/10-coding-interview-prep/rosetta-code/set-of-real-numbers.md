---
id: 5eb3e4b20aa93c437f9e9717
title: Множина дійсних чисел
challengeType: 1
forumTopicId: 385322
dashedName: set-of-real-numbers
---

# --description--

Всі дійсні числа утворюють незліченну множину ℝ. Серед його підмножин відносно простими є опуклі множини, кожна з яких виражається як діапазон між двома дійсними числами *a* і *b* де *a* ≤ *b*. Насправді існує чотири варіанти значення "між", в залежності від відкритої або закритої межі:

<ul>
  <li>[<i>a</i>, <i>b</i>]: {<i>x</i> | <i>a</i> ≤ <i>x</i> та <i>x</i> ≤ <i>b</i> }</li>
  <li>(<i>a</i>, <i>b</i>): {<i>x</i> | <i>a</i> < <i>x</i> та <i>x</i> < <i>b</i> }</li>
  <li>[<i>a</i>, <i>b</i>): {<i>x</i> | <i>a</i> ≤ <i>x</i> та <i>x</i> < <i>b</i> }</li>
  <li>(<i>a</i>, <i>b</i>]: {<i>x</i> | <i>a</i> < <i>x</i> та <i>x</i> ≤ <i>b</i> }</li>
</ul>

Зверніть увагу, що якщо *a* = *b*, то з чотирьох тільки значення *a*, *a*] буде не порожнім.

**Завдання**

<ul>
  <li>Придумайте спосіб представлення будь-якого набору дійсних чисел для визначення "будь-якого" в примітках до реалізації, наведеної нижче.</li>
  <li>Наведіть способи для цих загальних операцій з множинами (<i>x</i> - дійсне число; <i>A</i> і <i>B</i> - множини):</li>
  <ul>
    <li>
      <i>x</i> ∈ <i>A</i>: визначити, чи є <i>x</i> елементом <i>A</i><br>
       приклад: 1 знаходиться в [1, 2), у той час, як 2, 3 - ні.
    </li>
    <li>
      <i>A</i> ∪ <i>B</i>: об'єднання <i>A</i> і <i>B</i>, тобто {<i>x</i> | <i>x</i> ∈ <i>A</i> чи <i>x</i> ∈ <i>B</i>}<br>
       приклад: [0, 2) ∪ (1, 3) = [0, 3); [0, 1) ∪ (2, 3] = [0, 1) ∪ (2, 3]
    </li>
    <li>
      <i>A</i> ∩ <i>B</i>: точка перетину <i>A</i> та <i>B</i>, тобто {<i>x</i> | <i>x</i> ∈ <i>A</i> та <i>x</i> ∈ <i>B</i>}<br>
      приклад: [0, 2) ∩ (1, 3) = (1, 2); [0, 1) ∩ (2, 3] = порожня множина
    </li>
    <li>
      <i>A</i> - <i>B</i>: різниця між <i>A</i> та <i>B</i>, також записана як <i>A</i> \ <i>B</i>, тобто  {<i>x</i> | <i>x</i> ∈ <i>A</i> та <i>x</i> ∉ <i>B</i>}<br>
      приклад: [0, 2) − (1, 3) = [0, 1]
    </li>
  </ul>
</ul>

# --instructions--

Напишіть функцію, яка приймає 2 об'єкти, рядок і масив як параметри. Об'єкти являють собою множину та мають атрибути: `low`, `high` та `rangeType`.

`rangeType` може мати значення 0, 1, 2 і 3 для `CLOSED`, `BOTH_OPEN`, `LEFT_OPEN` та `RIGHT_OPEN` відповідно. Функція має реалізувати множину, використовуючи цю інформацію.

Рядок являє собою операцію, яку потрібно виконати над множинами. Це може бути: `"union"`, `"intersect"` та `"subtract"` (різниця).

Після виконання операції функція повинна перевірити, чи присутні в масиві значення містяться в результатному наборі, і зберегти відповідне логічне значення в масиві. Функція має повернути цей масив.

# --hints--

`realSet` має бути функцією.

```js
assert(typeof realSet == 'function');
```

`realSet({"low":0, "high":1, "rangeType":2}, {"low":0, "high":2, "rangeType":3}, "union", [1, 2, 3])` має повернути масив.

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

`realSet({"low":0, "high":1, "rangeType":2}, {"low":0, "high":2, "rangeType":3}, "union", [1, 2, 3])` має повернути `[true, false, false]`.

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

`realSet({"low":0, "high":2, "rangeType":3}, {"low":1, "high":2, "rangeType":2}, "intersect", [0, 1, 2])` має повернути `[false, false, false]`.

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

`realSet({"low":0, "high":3, "rangeType":3}, {"low":0, "high":1, "rangeType":1}, "subtract", [0, 1, 2])` має повернути `[true, true, true]`.

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

`realSet({"low":0, "high":3, "rangeType":3}, {"low":0, "high":1, "rangeType":0}, "subtract", [0, 1, 2])` має повернути `[false, false, true]`.

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

`realSet({"low":0, "high":33, "rangeType":1}, {"low":30, "high":31, "rangeType":0}, "intersect", [30, 31, 32])` має повернути `[true, true, false]`.

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
