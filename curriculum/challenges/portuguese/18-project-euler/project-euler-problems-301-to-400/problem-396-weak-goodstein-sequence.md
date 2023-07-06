---
id: 5900f4f81000cf542c51000b
title: 'Problema 396: Sequência fraca de Goodstein'
challengeType: 1
forumTopicId: 302061
dashedName: problem-396-weak-goodstein-sequence
---

# --description--

Para qualquer número inteiro positivo $n$, a $n$ª sequência fraca de Goodstein $\\{g1, g2, g3, \ldots\\}$ é definida como:

- $g_1 = n$
- para $k > 1$, $g_k$ é obtido escrevendo $g_{k - 1}$ na base $k$, interpretando-a como uma base de número $k + 1$, e subtraindo 1.

A sequência termina quando $g_k$ passa a ser 0.

Por exemplo, a $6$ª sequência fraca de Goodstein é $\\{6, 11, 17, 25, \ldots\\}$:

- $g_1 = 6$.
- $g_2 = 11$, já que $6 = 110_2$, $110_3 = 12$ e $12 - 1 = 11$.
- $g_3 = 17$, já que $11 = 102_3$, $102_4 = 18$ e $18 - 1 = 17$.
- $g_4 = 25$, já que $17 = 101_4$, $101_5 = 26$ e $26 - 1 = 25$.

e assim por diante.

Pode-se mostrar que toda a sequência fraca de Goodstein termina.

Considere $G(n)$ como o número de elementos diferentes de zero na $n$ª sequência fraca de Goodstein.

Pode-se verificar que $G(2) = 3$, $G(4) = 21$ e $G(6) = 381$.

Também é possível verificar que $\sum G(n) = 2517$ para $1 ≤ n &lt; 8$.

Encontre os últimos 9 algarismos de $\sum G(n)$ para $1 ≤ n &lt; 16$.

# --hints--

`weakGoodsteinSequence()` deve retornar `173214653`.

```js
assert.strictEqual(weakGoodsteinSequence(), 173214653);
```

# --seed--

## --seed-contents--

```js
function weakGoodsteinSequence() {

  return true;
}

weakGoodsteinSequence();
```

# --solutions--

```js
// solution required
```
