---
id: 594810f028c0303b75339acd
title: 'Classificazione dei numeri abbondanti, carenti e perfetti'
challengeType: 1
forumTopicId: 302221
dashedName: abundant-deficient-and-perfect-number-classifications
---

# --description--

Queste definiscono tre classificazioni di numeri interi positivi basate sui loro divisori.

Sia $P(n)$ la somma dei divisori di `n` dove i divisori sono tutti interi positivi `n` diversi da `n` stesso.

Se `P(n) < n` allora `n` è classificato come `deficient`

Se `P(n) === n` allora `n` è classificato come `perfect`

Se `P(n) > n` allora `n` è classificato come `abundant`

**Esempio**: `6` ha i divisori `1`, `2` e `3`. `1 + 2 + 3 = 6`, quindi `6` è classificato come numero perfetto.

# --instructions--

Implementa una funzione che calcola quanti numeri interi tra `1` e `num` (inclusi) sono in queste tre categorie. Restituisci il risultato come un array nel seguente formato `[deficient, perfect, abundant]`.

# --hints--

`getDPA` dovrebbe essere una funzione.

```js
assert(typeof getDPA === 'function');
```

`getDPA(5000)` dovrebbe restituire un array.

```js
assert(Array.isArray(getDPA(5000)));
```

`getDPA(5000)` dovrebbe restituire un array di lunghezza `3`.

```js
assert(getDPA(5000).length === 3);
```

`getDPA(5000)` dovrebbe restituire `[3758, 3, 1239]`.

```js
assert.deepEqual(getDPA(5000), [3758, 3, 1239]);
```

`getDPA(10000)` dovrebbe restituire `[7508, 4, 2488]`.

```js
assert.deepEqual(getDPA(10000), [7508, 4, 2488]);
```

`getDPA(20000)` dovrebbe restituire `[15043, 4, 4953]`.

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
