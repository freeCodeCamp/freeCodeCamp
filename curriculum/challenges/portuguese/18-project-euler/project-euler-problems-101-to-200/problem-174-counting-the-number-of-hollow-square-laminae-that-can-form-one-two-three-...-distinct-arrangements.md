---
id: 5900f41a1000cf542c50ff2d
title: >-
  Problema 174: Contar o número de lâminas quadradas "ocas" que podem formar um, dois, três... arranjos distintos
challengeType: 1
forumTopicId: 301809
dashedName: >-
  problem-174-counting-the-number-of-hollow-square-laminae-that-can-form-one-two-three-----distinct-arrangements
---

# --description--

Definiremos um lâmina quadrada como um esboço quadrado com um "buraco", de modo que a forma possua simetria vertical e horizontal.

Com oito blocos, é possível formar uma lâmina de uma só forma: um quadrado de 3x3 com um buraco de 1x1 no meio. No entanto, com trinta e dois blocos, é possível formar duas lâminas distintas.

<img class="img-responsive center-block" alt="duas lâminas quadradas com buracos 2x2 e 7x7" src="https://cdn.freecodecamp.org/curriculum/project-euler/using-up-to-one-million-tiles-how-many-different-hollow-square-laminae-can-be-formed.gif" style="background-color: white; padding: 10px;" />

Se $t$ representa o número de blocos utilizados, diremos que $t = 8$ é do tipo $L(1)$ e $t = 32$ é do tipo $L(2)$.

Considere $N(n)$ o número de $t ≤ 1000000$, de modo que $t$ é do tipo $L(n)$; por exemplo, $N(15) = 832$.

Qual é a $\sum N(n)$ para $1 ≤ n ≤ 10$?

# --hints--

`hollowSquareLaminaeDistinctArrangements()` deve retornar `209566`.

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
