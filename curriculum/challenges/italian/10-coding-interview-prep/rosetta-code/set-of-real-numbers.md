---
id: 5eb3e4b20aa93c437f9e9717
title: Insieme di numeri reali
challengeType: 1
forumTopicId: 385322
dashedName: set-of-real-numbers
---

# --description--

Tutti i numeri reali formano l'insieme non numerabile R. Tra i suoi sottoinsiemi, relativamente semplici sono gli insiemi convessi, ciascuno espresso come intervallo tra due numeri reali *a* e *b* dove *a* ≤ *b*. Ci sono in realtà quattro casi per il significato di "tra", a seconda che l'intervallo sia aperto o chiuso:

<ul>
  <li>[<i>a</i>, <i>b</i>]: {<i>x</i> | <i>a</i> ≤ <i>x</i> and <i>x</i> ≤ <i>b</i> }</li>
  <li>(<i>a</i>, <i>b</i>): {<i>x</i> | <i>a</i> < <i>x</i> and <i>x</i> < <i>b</i> }</li>
  <li>[<i>a</i>, <i>b</i>): {<i>x</i> | <i>a</i> ≤ <i>x</i> and <i>x</i> < <i>b</i> }</li>
  <li>(<i>a</i>, <i>b</i>]: {<i>x</i> | <i>a</i> < <i>x</i> and <i>x</i> ≤ <i>b</i> }</li>
</ul>

Nota che se *a* = *b*, dei quattro solo \[*a*, *a*] non sarebbero vuoti.

**Compito**

<ul>
  <li>Definisci un modo per rappresentare qualsiasi insieme di numeri reali, per la definizione di "any" nelle note di implementazione qui sotto.</li>
  <li>Fornisci dei metodi per queste operazioni comuni sugli insiemi (<i>x</i> è un numero reale; <i>A</i> e <i>B</i> sono insiemi):</li>
  <ul>
    <li>
      <i>x</i> ∈ <i>A</i>: determinare se <i>x</i> è un elemento di <i>A</i><br>
      esempio: 1 è in [1, 2), mentre 2, 3, . . – non lo sono.
    </li>
    <li>
      <i>A</i> ∪ <i>B</i>: unione di <i>A</i> e <i>B</i>, cioè {<i>x</i> <unk> <i>x</i> <unk> <i>A</i> oppure <i>x</i> <unk> <i>B</i>}<br>
      esempio: [0, 2) ∪ (1, 3) = [0, 3; [0, 1) ∪ (2, 3] = pozzo, [0, 1) ∪ (2, 3]
    </li>
    <li>
      <i>A</i> ∩ <i>B</i>: intersezione di <i>A</i> e <i>B</i>, cioè {<i>x</i> | <i>x</i> ∈ <i>A</i> e <i>x</i> ∈ <i>B</i>}<br>
      esempio: [0, 2) ∩ (1, 3) = (1, 2); [0, 1) ∩ (2, 3] = insieme vuoto
    </li>
    <li>
      <i>A</i> - <i>B</i>: differenza tra <i>A</i> e <i>B</i>, anche scritto come <i>A</i> \ <i>B</i>, cioè {<i>x</i> | <i>x</i> ∈ <i>A</i> e <i>x</i> ∉ <unk> <i>B</i>}<br>
      esempio: [0, 2) - (1, 3) = [0, 1]
    </li>
  </ul>
</ul>

# --instructions--

Scrivi una funzione che richiede 2 oggetti, una stringa e un array come parametri. Gli oggetti rappresentano l'insieme e hanno attributi: `low`, `high` e `rangeType`.

Il `rangeType` può avere valori 0, 1, 2 e 3 per `CLOSED`, `BOTH_OPEN`, `LEFT_OPEN` e `RIGHT_OPEN`, rispettivamente. La funzione dovrebbe implementare un insieme utilizzando queste informazioni.

La stringa rappresenta l'operazione da eseguire sugli insiemi. Può essere: `"union"`, `"intersect"` e `"subtract"` (differenza).

Dopo aver eseguito l'operazione, la funzione dovrebbe controllare se i valori nell'array sono presenti nell'insieme risultante e memorizzare un valore booleano corrispondente a un array. La funzione dovrebbe restituire questo array.

# --hints--

`realSet` dovrebbe essere una funzione.

```js
assert(typeof realSet == 'function');
```

`realSet({"low":0, "high":1, "rangeType":2}, {"low":0, "high":2, "rangeType":3}, "union", [1, 2, 3])` dovrebbe restituire un array.

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

`realSet({"low":0, "high":1, "rangeType":2}, {"low":0, "high":2, "rangeType":3}, "union", [1, 2, 3])` dovrebbe restituire `[true, false, false]`.

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

`realSet({"low":0, "high":2, "rangeType":3}, {"low":1, "high":2, "rangeType":2}, "intersect", [0, 1, 2])` dovrebbe restituire `[false, false, false]`.

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

`realSet({"low":0, "high":3, "rangeType":3}, {"low":0, "high":1, "rangeType":1}, "subtract", [0, 1, 2])` dovrebbe restituire `[true, true, true]`.

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

`realSet({"low":0, "high":3, "rangeType":3}, {"low":0, "high":1, "rangeType":0}, "subtract", [0, 1, 2])` dovrebbe restituire `[false, false, true]`.

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

`realSet({"low":0, "high":33, "rangeType":1}, {"low":30, "high":31, "rangeType":0}, "intersect", [30, 31, 32])` dovrebbe restituire `[true, true, false]`.

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
