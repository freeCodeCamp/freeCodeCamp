---
id: 5900f4511000cf542c50ff63
title: 'Problem 228: Somas de Minkowski'
challengeType: 1
forumTopicId: 301871
dashedName: problem-228-minkowski-sums
---

# --description--

Considere $S_n$ como o polígono – ou forma – regular de $n$ lados, cujos vértices $v_k (k = 1, 2, \ldots, n)$ têm as coordenadas:

$$\begin{align}   & x_k = cos(\frac{2k - 1}{n} × 180°) \\\\
  & y_k = sin(\frac{2k - 1}{n} × 180°) \end{align}$$

Cada $S_n$ deve ser interpretado como uma forma preenchida que consiste em todos os pontos no perímetro e no interior.

A soma de Minkowski, $S + T$, de duas formas $S$ e $T$ é o resultado de adicionar cada ponto em $S$ a cada ponto em $T$, onde a adição dos pontos é realizada através das coordenadas: $(u, v) + (x, y) = (u + x, v + y)$.

Por exemplo, a soma de $S_3$ e $S_4$ é a forma de seis lados mostrada em rosa abaixo:

<img class="img-responsive center-block" alt="imagem mostrando S_3, S_4 e S_3 + S_4" src="https://cdn.freecodecamp.org/curriculum/project-euler/minkowski-sums.png" style="background-color: white; padding: 10px;" />

Quantos lados tem $S_{1864} + S_{1865} + \ldots + S_{1909}$?

# --hints--

`minkowskiSums()` deve retornar `86226`.

```js
assert.strictEqual(minkowskiSums(), 86226);
```

# --seed--

## --seed-contents--

```js
function minkowskiSums() {

  return true;
}

minkowskiSums();
```

# --solutions--

```js
// solution required
```
