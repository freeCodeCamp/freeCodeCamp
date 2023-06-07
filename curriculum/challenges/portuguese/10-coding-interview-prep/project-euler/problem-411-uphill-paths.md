---
id: 5900f5081000cf542c510019
title: 'Problema 411: Caminhos ladeira acima'
challengeType: 1
forumTopicId: 302080
dashedName: problem-411-uphill-paths
---

# --description--

Considere $n$ um inteiro positivo. Suponha que haja estações nas coordenadas $(x, y) = (2^i\bmod n, 3^i\bmod n)$ para $0 ≤ i ≤ 2n$. Consideraremos estações com as mesmas coordenadas que a mesma estação.

Queremos formar um caminho de (0, 0) a ($n$, $n$) de modo que as coordenadas $x$ e $y$ nunca diminuam.

Considere $S(n)$ como o número máximo de estações pelas quais um caminho pode passar.

Por exemplo, se $n = 22$, existem 11 estações distintas, e um caminho válido pode passar por, no máximo, 5 estações. Portanto, $S(22) = 5$. O caso é ilustrado abaixo, com um exemplo de caminho ideal:

<img class="img-responsive center-block" alt="caminho válido passando por 5 estações, para n = 22, com 11 estações distintas" src="https://cdn.freecodecamp.org/curriculum/project-euler/uphill-paths.png" style="background-color: white; padding: 10px;" />

Também pode ser verificado que $S(123) = 14$ e $S(10.000) = 48$.

Encontre a $\sum S(k^5)$ para $1 ≤ k ≤ 30$.

# --hints--

`uphillPaths()` deve retornar `9936352`.

```js
assert.strictEqual(uphillPaths(), 9936352);
```

# --seed--

## --seed-contents--

```js
function uphillPaths() {

  return true;
}

uphillPaths();
```

# --solutions--

```js
// solution required
```
