---
id: 5900f4a51000cf542c50ffb7
title: 'Problema 312: Caminhos cíclicos em gráficos de Sierpiński'
challengeType: 1
forumTopicId: 301968
dashedName: problem-312-cyclic-paths-on-sierpiski-graphs
---

# --description--

- Um gráfico de Sierpiński de ordem 1 ($S_1$) é um triângulo equilátero.
- $S_{n + 1}$ é obtido de $S_n$ posicionando três cópias de $S_n$ de modo que cada par de cópias tenha um canto comum.

<img class="img-responsive center-block" alt="gráficos de Sierpiński de ordem 1 até a ordem 5" src="https://cdn.freecodecamp.org/curriculum/project-euler/cyclic-paths-on-sierpinski-graphs-1.gif" style="background-color: white; padding: 10px;" />

Considere $C(n)$ como o número de ciclos que passam exatamente uma vez por todos os vértices de $S_n$. Por exemplo, $C(3) = 8$, porque oito desses ciclos podem ser desenhados em $S_3$, como mostrado abaixo:

<img class="img-responsive center-block" alt="oito ciclos que passam exatamente uma vez por todos os vértices de S_3" src="https://cdn.freecodecamp.org/curriculum/project-euler/cyclic-paths-on-sierpinski-graphs-2.gif" style="background-color: white; padding: 10px;" />

Também pode ser verificado que:

$$\begin{align}   & C(1) = C(2) = 1 \\\\
  & C(5) = 71.328.803.586.048 \\\\   & C(10 000)\bmod {10}^8 = 37.652.224 \\\\
  & C(10 000)\bmod {13}^8 = 617.720.485 \\\\ \end{align}$$

Encontre $C(C(C(10.000)))\bmod {13}^8$.

# --hints--

`pathsOnSierpinskiGraphs()` deve retornar `324681947`.

```js
assert.strictEqual(pathsOnSierpinskiGraphs(), 324681947);
```

# --seed--

## --seed-contents--

```js
function pathsOnSierpinskiGraphs() {

  return true;
}

pathsOnSierpinskiGraphs();
```

# --solutions--

```js
// solution required
```
