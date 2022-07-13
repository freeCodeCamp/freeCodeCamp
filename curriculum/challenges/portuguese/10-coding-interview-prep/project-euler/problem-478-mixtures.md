---
id: 5900f54c1000cf542c51005e
title: 'Problema 478: Misturas'
challengeType: 1
forumTopicId: 302155
dashedName: problem-478-mixtures
---

# --description--

Considere as misturas de três substâncias: $A$, $B$ e $C$. Uma mistura pode ser descrita pela proporção da quantidade de $A$, $B$, e $C$ nela, ou seja, $(a : b : c)$. Por exemplo, uma mistura descrita pela proporção (2 : 3 : 5) contém 20% de $A$, 30% de $B$ e 50% de $C$.

Para efeitos deste problema, não podemos separar os componentes individuais de uma mistura. No entanto, podemos combinar diferentes quantidades de diferentes misturas para formar misturas com novas proporções.

Por exemplo, digamos que temos três misturas com proporções (3 : 0 : 2), (3 : 6 : 11) e (3 : 3 : 4). Ao misturar 10 unidades da primeira, 20 unidades da segunda e 30 unidades da terceira, temos uma nova mistura com proporção (6 : 5 : 9), pois: ($10 \times \frac{3}{5} + 20 \times \frac{3}{20} + 30 \times \frac{3}{10}$ : $10 \times \frac{0}{5} + 20 \times \frac{6}{20} + 30 \times \frac{3}{10}$ : $10 \times \frac{2}{5} + 20 \times \frac{11}{20} + 30 \times \frac{4}{10}$) = (18 : 15 : 27) = (6 : 5 : 9)

No entanto, com as mesmas três misturas, é impossível formar a proporção (3 : 2 : 1), já que o valor de $B$ é sempre menor que o valor de $C$.

Considere $n$ um inteiro positivo. Suponha que para cada trio de números inteiros $(a, b, c)$ com $0 ≤ a, b, c ≤ n$ e $gcd(a, b, c) = 1$ (máximo divisor comum), temos uma mistura com proporção $(a : b : c)$. Considere $M(n)$ como o conjunto dessas misturas.

Por exemplo, $M(2)$ contém as 19 misturas com as seguintes proporções:

{(0 : 0 : 1), (0 : 1 : 0), (0 : 1 : 1), (0 : 1 : 2), (0 : 2 : 1), (1 : 0 : 0), (1 : 0 : 1), (1 : 0 : 2), (1 : 1 : 0), (1 : 1 : 1), (1 : 1 : 2), (1 : 2 : 0), (1 : 2 : 1), (1 : 2 : 2), (2 : 0 : 1), (2 : 1 : 0), (2 : 1 : 1), (2 : 1 : 2), (2 : 2 : 1)}.

Considere $E(n)$ como o número de subconjuntos de $M(n)$ que podem produzir a mistura com proporção (1 : 1 : 1), ou seja, a mistura com partes iguais de $A$, $B$ e $C$.

Podemos verificar que $E(1) = 103$, $E(2) = 520.447$, $E(10)\bmod {11}^8 = 82.608.406$ e $E(500)\bmod {11}^8 = 13.801.403$.

Encontre $E(10.000.000)\bmod {11}^8$.

# --hints--

`mixtures()` deve retornar `59510340`.

```js
assert.strictEqual(mixtures(), 59510340);
```

# --seed--

## --seed-contents--

```js
function mixtures() {

  return true;
}

mixtures();
```

# --solutions--

```js
// solution required
```
