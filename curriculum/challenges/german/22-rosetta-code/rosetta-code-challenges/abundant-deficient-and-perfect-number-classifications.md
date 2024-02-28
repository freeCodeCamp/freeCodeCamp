---
id: 594810f028c0303b75339acd
title: 'Klassifizierung der Zahlen im Überfluss, im Mangel und im Perfekt'
challengeType: 1
forumTopicId: 302221
dashedName: abundant-deficient-and-perfect-number-classifications
---

# --description--

These define three classifications of positive integers based on their proper divisors.

Lasse $P(n)$ die Summe der richtigen Teiler von `n` sein, wobei geeignete Teiler alle positiven ganzen Zahlen `n` sind, anders als `n` selbst.

Wenn `P(n) < n` dann wird `n` eingestuft als `deficient`

Wenn `P(n) === n` dann wird `n` eingestuft als `perfect`

Wenn `P(n) > n` dann wird `n` eingestuft als `abundant`

**Example**: `6` hat die richtigen Teiler von `1`, `2`, and `3`. `1 + 2 + 3 = 6`, daher wird `6` als perfekte Zahl eingestuft.

# --instructions--

Implementiere eine Funktion, die berechnet, wie viele der ganzen Zahlen aus `1` bis `num` (einschließlich) in jeder der drei Klassen sind. Das Ergebnis wird als Auflistung im folgenden Format ausgegeben: `[deficient, perfect, abundant]`.

# --hints--

`getDPA` sollte eine Funktion sein.

```js
assert(typeof getDPA === 'function');
```

`getDPA(5000)` sollte eine Auflistung zurückgeben.

```js
assert(Array.isArray(getDPA(5000)));
```

`getDPA(5000)` Rückgabefeld sollte eine Länge von `3` haben.

```js
assert(getDPA(5000).length === 3);
```

`getDPA(5000)` sollte `[3758, 3, 1239]` zurückgeben.

```js
assert.deepEqual(getDPA(5000), [3758, 3, 1239]);
```

`getDPA(10000)` sollte `[7508, 4, 2488]` zurückgeben.

```js
assert.deepEqual(getDPA(10000), [7508, 4, 2488]);
```

`getDPA(20000)` sollte `[15043, 4, 4953]` zurückgeben.

```js
assert.deepEqual(getDPA(20000), [15043, 4, 4953]);
```

# --seed--

## --seed-contents--

```js
function getDPA(num) {

}
```

# --solutions--

```js
function getDPA(num) {
  const dpa = [1, 0, 0];
  for (let n = 2; n <= num; n += 1) {
    let ds = 1;
    const e = Math.sqrt(n);
    for (let d = 2; d < e; d += 1) {
      if (n % d === 0) {
        ds += d + (n / d);
      }
    }
    if (n % e === 0) {
      ds += e;
    }
    dpa[ds < n ? 0 : ds === n ? 1 : 2] += 1;
  }
  return dpa;
}
```
