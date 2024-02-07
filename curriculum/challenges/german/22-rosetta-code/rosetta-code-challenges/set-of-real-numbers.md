---
id: 5eb3e4b20aa93c437f9e9717
title: Menge von reellen Zahlen
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

Beachte, dass wenn *a* = *b*, wäre von den Viern nur \[*a*, *a* nicht leer.

**Aufgabe**

<ul>
  <li>Devise a way to represent any set of real numbers, for the definition of "any" in the implementation notes below.</li>
  <li>Biete Methoden für diese allgemeinen Mengenoperationen (<i>x</i> ist eine reelle Zahl; <i>A</i> und <i>B</i> sind Mengen):</li>
  <ul>
    <li>
      <i>x</i> ∈ <i>A</i>: determine if <i>x</i> is an element of <i>A</i><br>
      example: 1 is in [1, 2), while 2, 3, ... are not.
    </li>
    <li>
      <i>A</i> ∪ <i>B</i>: Vereinigungsmenge von <i>A</i> und <i>B</i>, z.B. {<i>x</i> | <i>x</i> ∈ <i>A</i> oder <i>x</i> ∈ <i>B</i>}<br>
      Beispiel: [0, 2) ∪ (1, 3) = [0, 3); [0, 1) ∪ (2, 3] = nun, [0, 1) ∪ (2, 3]
    </li>
    <li>
      <i>A</i> ∩ <i>B</i>: Schnittmenge von <i>A</i> und <i>B</i>, z.B. {<i>x</i> | <i>x</i> ∈ <i>A</i> und <i>x</i> ∈ <i>B</i>}<br>
      Beispiel: [0, 2) ∩ (1, 3) = (1, 2); [0, 1) ∩ (2, 3] = leere Menge
    </li>
    <li>
      <i>A</i> - <i>B</i>: Unterschied zwischen <i>A</i> und <i>B</i>, auch geschrieben als <i>A</i> \ <i>B</i>, z.B. {<i>x</i> | <i>x</i> ∈ <i>A</i> und <i>x</i> ∉ <i>B</i>}<br>
     Beispiel: [0, 2) − (1, 3) = [0, 1]
    </li>
  </ul>
</ul>

# --instructions--

Schreibe eine Funktion, die 2 Objekte, eine Zeichenfolge und ein Array als Parameter verwendet. Die Objekte repräsentieren die Menge und haben Attribute: `low`, `high` und `rangeType`.

Der `rangeType` kann Werte 0, 1, 2 und 3 für `CLOSED` haben, beziehungsweise `BOTH_OPEN`, `LEFT_OPEN` und `RIGHT_OPEN`. Die Funktion sollte eine Menge implementieren, die diese Information verwendet.

Der String stellt die Operation dar, die auf die Mengen ausgeführt werden soll. Es kann Folgendes sein: `"union"`, `"intersect"` und `"subtract"` (Differenz).

Nach der Ausführung der Operation soll die Funktion prüfen, ob die Werte im Array in der resultierenden Menge vorhanden sind und einen entsprechenden booleschen Wert in einem Array speichern. Die Funktion sollte dieses Array zurückgeben.

# --hints--

`realSet` sollte eine Funktion sein.

```js
assert(typeof realSet == 'function');
```

`realSet({"low":0, "high":1, "rangeType":2}, {"low":0, "high":2, "rangeType":3}, "union", [1, 2, 3])` sollte ein Array zurückgeben.

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

`realSet({"low":0, "high":1, "rangeType":2}, {"low":0, "high":2, "rangeType":3}, "union", [1, 2, 3])` sollte `[true, false, false]` zurückgeben.

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

`realSet({"low":0, "high":2, "rangeType":3}, {"low":1, "high":2, "rangeType":2}, "intersect", [0, 1, 2])` sollte `[false, false, false]` zurückgeben.

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

`realSet({"low":0, "high":3, "rangeType":3}, {"low":0, "high":1, "rangeType":1}, "subtract", [0, 1, 2])` sollte `[true, true, true]` zurückgeben.

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

`realSet({"low":0, "high":3, "rangeType":3}, {"low":0, "high":1, "rangeType":0}, "subtract", [0, 1, 2])` sollte `[false, false, true]` zurückgeben.

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

`realSet({"low":0, "high":33, "rangeType":1}, {"low":30, "high":31, "rangeType":0}, "intersect", [30, 31, 32])` sollte `[true, true, false]` zurückgeben.

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
