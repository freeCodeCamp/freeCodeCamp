---
id: 5900f4ab1000cf542c50ffbe
title: 'Problema 319: Sequenze limitate'
challengeType: 1
forumTopicId: 301975
dashedName: problem-319-bounded-sequences
---

# --description--

Sia $x_1, x_2, \ldots, x_n$ una sequenza di lunghezza $n$ tale che:

- $x_1 = 2$
- per ogni $1 &lt; i ≤ n : x_{i - 1} &lt; x_i$
- per ogni $i$ e $j$ con $1 ≤ i, j ≤ n : {(x_i)}^j &lt; {(x_j + 1)}^i$

Ci sono solo cinque di tali sequenze di lunghezza 2: {2,4}, {2,5}, {2,6}, {2,7} e {2,8}. Ci sono 293 sequenze di questo tipo di lunghezza 5; tre esempi sono: {2,5,11,25,55}, {2,6,14,36,88}, {2,8,22,64,181}.

Sia $t(n)$ il numero di tali sequenze di lunghezza $n$. Ti viene dato $t(10) = 86195$ e $t(20) = 5227991891$.

Trova $t({10}^{10})$ e dai la tua risposta modulo $10^9$.

# --hints--

`boundedSequences()` dovrebbe restituire `268457129`.

```js
assert.strictEqual(boundedSequences(), 268457129);
```

# --seed--

## --seed-contents--

```js
function boundedSequences() {

  return true;
}

boundedSequences();
```

# --solutions--

```js
// solution required
```
