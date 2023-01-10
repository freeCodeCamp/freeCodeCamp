---
id: 5900f41a1000cf542c50ff2d
title: >-
  Problema 174: Contare il numero di lamine quadrate "cave" che possono formare uno, due, tre, ... disposizioni distinte
challengeType: 1
forumTopicId: 301809
dashedName: >-
  problem-174-counting-the-number-of-hollow-square-laminae-that-can-form-one-two-three-----distinct-arrangements
---

# --description--

Definiremo una lamina quadrata come un contorno quadrato con un "foro" quadrato in modo che la forma possieda simmetria verticale e orizzontale.

Date otto piastrelle è possibile formare una lamina in un solo modo: quadrato 3x3 con un foro 1x1 nel mezzo. Tuttavia, utilizzando trentadue piastrelle è possibile formare due lamine distinte.

<img class="img-responsive center-block" alt="due lamine quadrate con fori 2x2 e 7x7" src="https://cdn.freecodecamp.org/curriculum/project-euler/using-up-to-one-million-tiles-how-many-different-hollow-square-laminae-can-be-formed.gif" style="background-color: white; padding: 10px;" />

Se $t$ rappresenta il numero di piastrelle utilizzate, diremo che $t = 8$ è di tipo $L(1)$ e $t = 32$ è di tipo $L(2)$.

Lascia che $N(n)$ sia il numero di $t ≤ 1000000$ in modo che $t$ sia di tipo $L(n)$; per esempio, $N(15) = 832$.

Qual è $\sum N(n)$ per $1 ≤ n ≤ 10$?

# --hints--

`hollowSquareLaminaeDistinctArrangements()` dovrebbe restituire `209566`.

```js
assert.strictEqual(hollowSquareLaminaeDistinctArrangements(), 209566);
```

# --seed--

## --seed-contents--

```js
function hollowSquareLaminaeDistinctArrangements() {

  return true;
}

hollowSquareLaminaeDistinctArrangements();
```

# --solutions--

```js
// solution required
```
