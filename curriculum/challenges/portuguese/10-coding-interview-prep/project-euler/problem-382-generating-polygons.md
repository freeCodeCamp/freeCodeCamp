---
id: 5900f4eb1000cf542c50fffd
title: 'Problema 382: Geração de polígonos'
challengeType: 1
forumTopicId: 302046
dashedName: problem-382-generating-polygons
---

# --description--

Um polígono é uma forma plana composta por segmentos de retas que são reunidos para formar uma cadeia ou circuito fechado. Um polígono consiste em, pelo menos, três lados e não se cruzam.

Dizem que um conjunto $S$ de números positivos gera um polígono $P$ se:

- não há dois lados de $P$ que sejam do mesmo tamanho,
- o comprimento de cada lado de $P$ está em $S$, e
- $S$ não contém nenhum outro valor.

Por exemplo:

O conjunto {3, 4, 5} gera um polígono com lados 3, 4 e 5 (um triângulo).

O conjunto {6, 9, 11, 24} gera um polígono com lados 6, 9, 11 e 24 (um quadrilátero).

Os conjuntos {1, 2, 3} e {2, 3, 4, 9} não geram nenhum polígono.

Considere a sequência $s$, definida da seguinte forma:

- $s_1 = 1$, $s_2 = 2$, $s_3 = 3$
- $s_n = s_{n - 1} + s_{n - 3}$ para $n > 3$.

Considere $U_n$ como o conjunto $\\{s_1, s_2, \ldots, s_n\\}$. Por exemplo, $U_{10} = \\{1, 2, 3, 4, 6, 9, 13, 19, 28, 41\\}$.

Considere $f(n)$ como o número de subconjuntos de $U_n$ que geram pelo menos um polígono.

Por exemplo, $f(5) = 7$, $f(10) = 501$ e $f(25) = 18.635.853$.

Encontre os 9 últimos algarismos de $f({10}^{18})$.

# --hints--

`generatingPolygons()` deve retornar `697003956`.

```js
assert.strictEqual(generatingPolygons(), 697003956);
```

# --seed--

## --seed-contents--

```js
function generatingPolygons() {

  return true;
}

generatingPolygons();
```

# --solutions--

```js
// solution required
```
