---
id: a3566b1109230028080c9345
title: Summiere alle Zahlen in einem Bereich
challengeType: 1
forumTopicId: 16083
dashedName: sum-all-numbers-in-a-range
---

# --description--

Wir übergeben dir ein Array mit zwei Zahlen. Gib die Summe dieser beiden Zahlen plus die Summe aller Zahlen zwischen den beiden Zahlen zurück. Die niedrigste Zahl wird nicht immer an erster Stelle stehen.

Zum Beispiel `sumAll([4,1])` sollte `10` zurückgeben, da die Summe aller Zahlen zwischen 1 und 4 (beides inklusive) `10` ist.

# --hints--

`sumAll([1, 4])` sollte eine Zahl zurückgeben.

```js
assert(typeof sumAll([1, 4]) === 'number');
```

`sumAll([1, 4])` sollte 10 zurückgeben.

```js
assert.deepEqual(sumAll([1, 4]), 10);
```

`sumAll([4, 1])` sollte 10 zurückgeben.

```js
assert.deepEqual(sumAll([4, 1]), 10);
```

`sumAll([5, 10])` sollte 45 zurückgeben.

```js
assert.deepEqual(sumAll([5, 10]), 45);
```

`sumAll([10, 5])` sollte 45 zurückgeben.

```js
assert.deepEqual(sumAll([10, 5]), 45);
```

# --seed--

## --seed-contents--

```js
function sumAll(arr) {
  return 1;
}

sumAll([1, 4]);
```

# --solutions--

```js
function sumAll(arr) {
  var sum = 0;
  arr.sort(function(a,b) {return a-b;});
  for (var i = arr[0]; i <= arr[1]; i++) {
    sum += i;
  }
  return sum;
}
```
