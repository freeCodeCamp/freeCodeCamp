---
id: 5987fd532b954e0f21b5d3f6
title: Gleichgewichtsindex
challengeType: 1
forumTopicId: 302255
dashedName: equilibrium-index
---

# --description--

An equilibrium index of a sequence is an index into the sequence such that the sum of elements at lower indices is equal to the sum of elements at higher indices.

Zum Beispiel, in einer Folge $A$:

<ul style='list-style: none;'>
  <li><big>$A_0 = -7$</big></li>
  <li><big>$A_1 =  1$</big></li>
  <li><big>$A_2 =  5$</big></li>
  <li><big>$A_3 =  2$</big></li>
  <li><big>$A_4 = -4$</big></li>
  <li><big>$A_5 =  3$</big></li>
  <li><big>$A_6 =  0$</big></li>
</ul>

`3` ist ein Gleichgewichtsindex, da:

<ul style='list-style: none;'>
  <li><big>$A_0 + A_1 + A_2 = A_4 + A_5 + A_6$</big></li>
</ul>

`6` ist auch ein Gleichgewichtsindex, da:

<ul style='list-style: none;'>
  <li><big>$A_0 + A_1 + A_2 + A_3 + A_4 + A_5 = 0$</big></li>
</ul>

(Summe der Null-Elemente ist Null)

`7` ist kein Gleichgewichtsindex, da es sich nicht um einen gültigen Index der Sequenz $A$ handelt.

# --instructions--

Schreibe eine Funktion, die nach einer Sequenz ihre Gleichgewichtsindizes (falls vorhanden) zurückgibt.

Nehmen wir an, dass die Sequenz sehr lang sein kann.

# --hints--

`equilibrium` sollte eine Funktion sein.

```js
assert(typeof equilibrium === 'function');
```

`equilibrium([-7, 1, 5, 2, -4, 3, 0])` sollte `[3,6]` zurückgeben.

```js
assert.deepEqual(equilibrium(equilibriumTests[0]), ans[0]);
```

`equilibrium([2, 4, 6])` sollte `[]` zurückgeben.

```js
assert.deepEqual(equilibrium(equilibriumTests[1]), ans[1]);
```

`equilibrium([2, 9, 2])` sollte `[1]` zurückgeben.

```js
assert.deepEqual(equilibrium(equilibriumTests[2]), ans[2]);
```

`equilibrium([1, -1, 1, -1, 1, -1, 1])` sollte `[0,1,2,3,4,5,6]` zurückgeben.

```js
assert.deepEqual(equilibrium(equilibriumTests[3]), ans[3]);
```

`equilibrium([1])` sollte `[0]` zurückgeben.

```js
assert.deepEqual(equilibrium(equilibriumTests[4]), ans[4]);
```

`equilibrium([])` sollte `[]` zurückgeben.

```js
assert.deepEqual(equilibrium(equilibriumTests[5]), ans[5]);
```

# --seed--

## --after-user-code--

```js
const equilibriumTests =
  [[-7, 1, 5, 2, -4, 3, 0], // 3, 6
  [2, 4, 6], // empty
  [2, 9, 2], // 1
  [1, -1, 1, -1, 1, -1, 1], // 0,1,2,3,4,5,6
  [1], // 0
  [] // empty
  ];
const ans = [[3, 6], [], [1], [0, 1, 2, 3, 4, 5, 6], [0], []];
```

## --seed-contents--

```js
function equilibrium(a) {

}
```

# --solutions--

```js
function equilibrium(a) {
  let N = a.length,
    i,
    l = [],
    r = [],
    e = [];
  for (l[0] = a[0], r[N - 1] = a[N - 1], i = 1; i < N; i++)
    { l[i] = l[i - 1] + a[i], r[N - i - 1] = r[N - i] + a[N - i - 1]; }
  for (i = 0; i < N; i++)
    { if (l[i] === r[i]) e.push(i); }
  return e;
}
```
