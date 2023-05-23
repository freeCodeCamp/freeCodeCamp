---
id: 5900f4ab1000cf542c50ffbe
title: 'Problema 319: Sequências limitadas'
challengeType: 1
forumTopicId: 301975
dashedName: problem-319-bounded-sequences
---

# --description--

Considere $x_1, x_2, \ldots, x_n$ como uma sequência de comprimento $n$ para que:

- $x_1 = 2$
- para todos os $1 &lt; i ≤ n : x_{i - 1} &lt; x_i$
- para todos os $i$ e $j$ com $1 ≤ i, j ≤ n : {(x_i)}^j &lt; {(x_j + 1)}^i$

Há apenas cinco sequências de comprimento 2. Sejam elas: {2,4}, {2,5}, {2,6}, {2,7} e {2,8}. Há 293 sequências de comprimento 5. Três exemplos são dados abaixo: {2,5,11,25,55}, {2,6,14,36,88}, {2,8,22,64,181}.

Considere que $t(n)$ indica o número de tais sequências de comprimento $n$. Você é informado de que $t(10) = 86195$ e $t(20) = 5227991891$.

Encontre $t({10}^{10})$ e dê sua resposta modulo $10^9$.

# --hints--

`boundedSequences()` deve retornar `268457129`.

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
