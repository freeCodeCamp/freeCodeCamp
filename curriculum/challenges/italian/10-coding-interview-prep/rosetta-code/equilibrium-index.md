---
id: 5987fd532b954e0f21b5d3f6
title: Indice di equilibrio
challengeType: 1
forumTopicId: 302255
dashedName: equilibrium-index
---

# --description--

Un indice di equilibrio di una sequenza è un indice nella sequenza tale che la somma degli elementi a indici inferiori sia uguale alla somma degli elementi a indici più alti.

Ad esempio, in una sequenza $A$:

<ul style='list-style: none;'>
  <li><big>$A_0 = -7$</big></li>
  <li><big>$A_1 =  1$</big></li>
  <li><big>$A_2 =  5$</big></li>
  <li><big>$A_3 =  2$</big></li>
  <li><big>$A_4 = -4$</big></li>
  <li><big>$A_5 =  3$</big></li>
  <li><big>$A_6 =  0$</big></li>
</ul>

`3` è un indice di equilibrio, perché:

<ul style='list-style: none;'>
  <li><big>$A_0 + A_1 + A_2 = A_4 + A_5 + A_6$</big></li>
</ul>

`6` è anch'esso un indice di equilibrio, perché:

<ul style='list-style: none;'>
  <li><big>$A_0 + A_1 + A_2 + A_3 + A_4 + A_5 = 0$</big></li>
</ul>

(la somma di zero elementi è zero)

`7` non è un indice di equilibrio, perché non è un indice valido della sequenza $A$.

# --instructions--

Scrivi una funzione che, data una sequenza, restituisce i suoi indici di equilibrio (se presenti).

Supponiamo che la sequenza possa essere molto lunga.

# --hints--

`equilibrium` dovrebbe essere una funzione.

```js
assert(typeof equilibrium === 'function');
```

`equilibrium([-7, 1, 5, 2, -4, 3, 0])` dovrebbe restituire `[3,6]`.

```js
assert.deepEqual(equilibrium(equilibriumTests[0]), ans[0]);
```

`equilibrium([2, 4, 6])` dovrebbe restituire `[]`.

```js
assert.deepEqual(equilibrium(equilibriumTests[1]), ans[1]);
```

`equilibrium([2, 9, 2])` dovrebbe restituire `[1]`.

```js
assert.deepEqual(equilibrium(equilibriumTests[2]), ans[2]);
```

`equilibrium([1, -1, 1, -1, 1, -1, 1])` dovrebbe restituire `[0,1,2,3,4,5,6]`.

```js
assert.deepEqual(equilibrium(equilibriumTests[3]), ans[3]);
```

`equilibrium([1])` dovrebbe restituire `[0]`.

```js
assert.deepEqual(equilibrium(equilibriumTests[4]), ans[4]);
```

`equilibrium([])` dovrebbe restituire `[]`.

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
