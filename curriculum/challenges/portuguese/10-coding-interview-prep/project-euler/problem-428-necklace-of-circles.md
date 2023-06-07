---
id: 5900f5191000cf542c51002b
title: 'Problema 428: Colar de círculos'
challengeType: 1
forumTopicId: 302098
dashedName: problem-428-necklace-of-circles
---

# --description--

Considere $a$, $b$ e $c$ números positivos.

Considere $W$, $X$, $Y$, $Z$ como quatro pontos colineares, onde $|WX| = a$, $|XY| = b$, $|YZ| = c$ e $|WZ| = a + b + c$.

Considere $C_{\text{in}}$ como o círculo com o diâmetro $XY$.

Considere $C_{\text{out}}$ como o círculo com o diâmetro $WZ$.

O trio ($a$, $b$, $c$) é chamado de *trio do colar* se você puder dispor $k ≥ 3$ círculos distintos $C_1, C_2, \ldots, C_k$, tais que:

- $C_i$ não tem pontos interiores em comum com qualquer $C_j$ para $1 ≤ i$, $j ≤ k$ e $i ≠ j$,
- $C_i$ é tangente tanto a $C_{\text{in}}$ quanto a $C_{\text{out}}$ para $1 ≤ i ≤ k$,
- $C_i$ é tangente a $C_{i + 1}$ para $1 ≤ i &lt; k$, e
- $C_k$ é tangente a $C_1$.

Por exemplo, (5, 5, 5) e (4, 3, 21) são trios do colar, enquanto é possível mostrar que (2, 2, 5) não é.

<img class="img-responsive center-block" alt="uma representação visual de um trio de colar" src="https://cdn.freecodecamp.org/curriculum/project-euler/necklace-of-circles.png" style="background-color: white; padding: 10px;" />

Considere $T(n)$ como o número de trios de colar $(a, b, c)$, tal que $a$, $b$ e $c$ sejam inteiros positivos e $b ≤ n$. Por exemplo, $T(1) = 9$, $T(20) = 732$ and $T(3.000) = 438.106$.

Encontre $T(1.000.000.000)$.

# --hints--

`necklace(1000000000)` deve retornar `747215561862`.

```js
assert.strictEqual(necklace(1000000000), 747215561862);
```

# --seed--

## --seed-contents--

```js
function necklace(n) {

  return true;
}

necklace(1000000000)
```

# --solutions--

```js
// solution required
```
