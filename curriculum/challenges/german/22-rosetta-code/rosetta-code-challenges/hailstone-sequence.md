---
id: 595608ff8bcd7a50bd490181
title: Collatz-Problem
challengeType: 1
forumTopicId: 302279
dashedName: hailstone-sequence
---

# --description--

The Hailstone sequence of numbers can be generated from a starting positive integer, `n` by:

- If `n` is `1` then the sequence ends
- Wenn `n` `even` ist, dann das nächste `n` der Folge `= n/2`
- Wenn `n` `odd` ist, dann das nächste `n` der Folge `= (3 * n) + 1`

Die (unbewiesene) Collatz-Vermutung besagt, dass die Hagelkörnerfolge für jede beliebige Anfangszahl immer endet.

Die Hagelkornfolge wird auch als Hagelkornzahlen (weil die Werte in der Regel mehrfach ab- und aufsteigen wie Hagelkörner in einer Wolke) oder als Collatz-Folge bezeichnet.

# --instructions--

1. Create a routine to generate the hailstone sequence for a number
2. Deine Funktion sollte eine Anordnung mit der Zahl kleiner als `limit` zurückgeben, das die längste Hagelkörnersequenz und die Länge dieser Sequenz enthält. (Zeige aber nicht die eigentliche Sequenz!)

# --hints--

`hailstoneSequence` sollte eine Funktion sein.

```js
assert(typeof hailstoneSequence === 'function');
```

`hailstoneSequence(30)` sollte ein Array zurückgeben.

```js
assert(Array.isArray(hailstoneSequence(30)));
```

`hailstoneSequence(30)` sollte `[27, 112]` zurückgeben.

```js
assert.deepEqual(hailstoneSequence(30), [27, 112]);
```

`hailstoneSequence(50000)` sollte `[35655, 324]` zurückgeben.

```js
assert.deepEqual(hailstoneSequence(50000), [35655, 324]);
```

`hailstoneSequence(100000)` sollte `[77031, 351]` zurückgeben.

```js
assert.deepEqual(hailstoneSequence(100000), [77031, 351]);
```

# --seed--

## --seed-contents--

```js
function hailstoneSequence(limit) {
  const res = [];


  return res;
}
```

# --solutions--

```js
function hailstoneSequence (limit) {
  function hailstone(n) {
    const seq = [n];
    while (n > 1) {
      n = n % 2 ? 3 * n + 1 : n / 2;
      seq.push(n);
    }
    return seq;
  }

  let n = 0;
  let max = 0;
  for (let i = limit; --i;) {
    const seq = hailstone(i);
    const sLen = seq.length;

    if (sLen > max) {
      n = i;
      max = sLen;
    }
  }

  return [n, max];
}
```
