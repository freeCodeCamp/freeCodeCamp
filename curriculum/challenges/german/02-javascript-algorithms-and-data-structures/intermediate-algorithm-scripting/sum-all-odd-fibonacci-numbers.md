---
id: a5229172f011153519423690
title: Summiere alle ungeraden Fibonacci-Zahlen
challengeType: 1
forumTopicId: 16084
dashedName: sum-all-odd-fibonacci-numbers
---

# --description--

Gib für eine positive ganze Zahl `num` die Summe aller ungeraden Fibonacci-Zahlen zurück, die kleiner oder gleich `num` sind.

Die ersten beiden Zahlen in der Fibonacci-Sequenz sind 0 und 1. Jede zusätzliche Zahl in der Sequenz ist die Summe der beiden vorherigen Zahlen. Die ersten sieben Zahlen der Fibonacci-Sequenz sind 0, 1, 1, 2, 3, 5 und 8.

Zum Beispiel sollte `sumFibs(10)`, `10` zurückgeben, da alle ungeraden Fibonacci Zahlen kleiner oder gleich `10` 1, 1, 3 und 5 sind.

# --hints--

`sumFibs(1)` sollte eine Zahl zurückgeben.

```js
assert(typeof sumFibs(1) === 'number');
```

`sumFibs(1000)` sollte 1785 zurückgeben.

```js
assert(sumFibs(1000) === 1785);
```

`sumFibs(4000000)` sollte 4613732 zurückgeben.

```js
assert(sumFibs(4000000) === 4613732);
```

`sumFibs(4)` sollte 5 zurückgeben.

```js
assert(sumFibs(4) === 5);
```

`sumFibs(75024)` sollte 60696 zurückgeben.

```js
assert(sumFibs(75024) === 60696);
```

`sumFibs(75025)` sollte 135721 zurückgeben.

```js
assert(sumFibs(75025) === 135721);
```

# --seed--

## --seed-contents--

```js
function sumFibs(num) {
  return num;
}

sumFibs(4);
```

# --solutions--

```js
function sumFibs(num) {
  var a = 1;
  var b = 1;
  var s = 0;
  while (a <= num) {
    if (a % 2 !== 0) {
      s += a;
    }
    a = [b, b=b+a][0];
  }
  return s;
}
```
