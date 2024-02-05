---
id: 594810f028c0303b75339ad1
title: Glückliche Zahlen
challengeType: 1
forumTopicId: 302280
dashedName: happy-numbers
---

# --description--

A happy number is defined by the following process:

Beginnend mit einer positiven Ganzzahl, ersetze die Nummer mit der Summe der Quadratzahlen ihrer Ziffern, und wiederhole den Prozess bis die Zahl `1` ergibt (wo er stehenbleibt), oder er wiederholt sich unendlich in einem Zyklus der nicht `1` enthält. Diese Zahlen, für die der Prozess mit `1` endet sind fröhliche Zahlen, während diejenigen, die nicht mit `1` enden, unfröhliche Zahlen sind.

# --instructions--

Implementiere eine Funktion, die true zurückgibt, wenn die Zahl fröhlich ist, oder false, wenn nicht.

# --hints--

`happy` sollte eine Funktion sein.

```js
assert(typeof happy === 'function');
```

`happy(1)` sollte einen Boolean zurückgeben.

```js
assert(typeof happy(1) === 'boolean');
```

`happy(1)` sollte `true` zurückgeben.

```js
assert(happy(1));
```

`happy(2)` sollte `false` zurückgeben.

```js
assert(!happy(2));
```

`happy(7)` sollte `true` zurückgeben.

```js
assert(happy(7));
```

`happy(10)` sollte `true` zurückgeben.

```js
assert(happy(10));
```

`happy(13)` sollte `true` zurückgeben.

```js
assert(happy(13));
```

`happy(19)` sollte `true` zurückgeben.

```js
assert(happy(19));
```

`happy(23)` sollte `true` zurückgeben.

```js
assert(happy(23));
```

`happy(28)` sollte `true` zurückgeben.

```js
assert(happy(28));
```

`happy(31)` sollte `true` zurückgeben.

```js
assert(happy(31));
```

`happy(32)` sollte `true` zurückgeben.

```js
assert(happy(32));
```

`happy(33)` sollte `false` zurückgeben.

```js
assert(!happy(33));
```

# --seed--

## --seed-contents--

```js
function happy(number) {

}
```

# --solutions--

```js
function happy (number) {
  let m;
  let digit;
  const cycle = [];

  while (number !== 1 && cycle[number] !== true) {
    cycle[number] = true;
    m = 0;
    while (number > 0) {
      digit = number % 10;
      m += Math.pow(digit, 2);
      number = (number - digit) / 10;
    }
    number = m;
  }
  return (number === 1);
}
```
