---
id: 5eb3e4b20aa93c437f9e9717
title: Grupo de números reales
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

Ten en cuenta que si *a* = *b*, de los cuatro únicos \[*a*, *a*] no estaría vacío.

**Tarea**

<ul>
  <li>Devise a way to represent any set of real numbers, for the definition of "any" in the implementation notes below.</li>
  <li>Proporcionar métodos para estas operaciones comunes de conjunto (<i>x</i> es un número real; <i>A</i> y <i>B</i> están configurados):</li>
  <ul>
    <li>
      <i>x</i> ∈ <i>A</i>: determine if <i>x</i> is an element of <i>A</i><br>
      example: 1 is in [1, 2), while 2, 3, ... are not.
    </li>
    <li>
      <i>A</i> en <i>B</i>: unión de <i>A</i> y <i>B</i>, i.e. {<i>x</i> | <i>x</i> a <i>A</i> o <i>x</i> a. <i>B</i>}<br>
      ejemplo: [0, 2) ► (1, 3) = [0, 3); [0, 1); (2, 3] = bien, [0, 1); (2, 3]
    </li>
    <li>
      <i>A</i> <i>B</i>: intersección de <i>A</i> y <i>B</i>, i.e. {<i>x</i> | <i>x</i> a <i>A</i> y <i>x</i> a <i>B</i>}<br>
      ejemplo: [0, 2) (1, 3) = (1, 2); [0, 1) (2, 3] = conjunto vacío
    </li>
    <li>
      <i>A</i> - <i>B</i>: diferencia entre <i>A</i> y <i>B</i>, también escrito como <i>A</i> \ <i>B</i>, i.e. {<i>x</i> | <i>x</i> a <i>A</i> y <i>x</i> afirma <i>B</i>}<br>
      ejemplo: [0, 2)  (1, 3) = [0, 1]
    </li>
  </ul>
</ul>

# --instructions--

Escribe una función que tome 2 objetos, una cadena y un array como parámetros. Los objetos representan el conjunto y tienen atributos: `bajo`, `alto` y `rangeType`.

El `rangeType` puede tener valores 0, 1, 2 y 3 para `CLOSED`, `BOTH_OPEN`, `LEFT_OPEN` y `RIGHT_OPEN`, respectivamente. La función debe implementar un conjunto utilizando esta información.

La cadena representa la operación a realizar en los conjuntos. Puede ser: `"unión"`, `"intersectar"` y `"restar"` (diferencia).

Después de realizar la operación, la función debe comprobar si los valores de la matriz están presentes en el conjunto resultante y almacenar un valor booleano correspondiente a una matriz. La función debe devolver un array.

# --hints--

`realSet` debería ser una función.

```js
assert(typeof realSet == 'function');
```

`realSet({"low":0, "high":1, "rangeType":2}, {"low":0, "high":2, "rangeType":3}, "union", [1, 2, 3])` debe devolver un array.

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

`realSet({"low":0, "high":1, "rangeType":2}, {"low":0, "high":2, "rangeType":3}, "union", [1, 2, 3])` debería devolver `[true, false, false]`.

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

`realSet({"low":0, "high":2, "rangeType":3}, {"low":1, "high":2, "rangeType":2}, "intersect", [0, 1, 2])` debería devolver `[false, false, false]`.

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

`realSet({"low":0, "high":3, "rangeType":3}, {"low":0, "high":1, "rangeType":1}, "rest", [0, 1, 2])` debe devolver `[true, true]`.

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

`realSet({"low":0, "high":3, "rangeType":3}, {"low":0, "high":1, "rangeType":0}, "rest", [0, 1, 2])` debe devolver `[false, false, true]`.

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

`realSet({"low":0, "high":33, "rangeType":1}, {"low":30, "high":31, "rangeType":0}, "intersect", [30, 31, 32])` debería devolver `[true, false]`.

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
