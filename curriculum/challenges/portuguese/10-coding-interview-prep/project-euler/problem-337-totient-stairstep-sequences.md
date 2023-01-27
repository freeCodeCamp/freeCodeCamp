---
id: 5900f4be1000cf542c50ffd0
title: 'Problema 337: Sequências de degraus totientes'
challengeType: 1
forumTopicId: 301995
dashedName: problem-337-totient-stairstep-sequences
---

# --description--

Considere $\\{a_1, a_2, \ldots, a_n\\}$ como uma sequência de números inteiros de comprimento $n$, tal que:

- $a_1 = 6$
- para todo $1 ≤ i &lt; n$ : $φ(a_i) &lt; φ(a_{i + 1}) &lt; a_i &lt; a_{i + 1}$

$φ$ denota a função totiente de Euler.

Considere $S(N)$ como o número dessas sequências, com $a_n ≤ N$.

Por exemplo, $S(10) = 4$: {6}, {6, 8}, {6, 8, 9} e {6, 10}.

Podemos verificar que $S(100) = 482.073.668$ e $S(10.000)\bmod {10}^8 = 73.808.307$.

Encontre $S(20.000.000)\bmod {10}^8$.


# --hints--

`totientStairstepSequences()` deve retornar `85068035`.

```js
assert.strictEqual(totientStairstepSequences(), 85068035);
```

# --seed--

## --seed-contents--

```js
function totientStairstepSequences() {

  return true;
}

totientStairstepSequences();
```

# --solutions--

```js
// solution required
```
