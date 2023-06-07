---
id: 5900f4241000cf542c50ff37
title: 'Problema 184: Triângulos contendo a origem'
challengeType: 1
forumTopicId: 301820
dashedName: problem-184-triangles-containing-the-origin
---

# --description--

Considere o conjunto $I_r$ de pontos $(x,y)$ com coordenadas inteiras no interior do círculo com raio $r$, centralizado na origem, ou seja, $x^2 + y^2 &lt; r^2$.

Para um raio de 2, $I_2$ contém os nove pontos (0,0), (1,0), (1,1), (0,1), (-1,1), (-1,0), (-1,-1), (0,-1) e (1,-1). Há oito triângulos com todos os três vértices em $I_2$ que contêm a origem no interior. Dois deles são mostrados abaixo. Os outros são obtidos por rotação.

<img class="img-responsive center-block" alt="círculo com raio 2, centralizado na origem, com nove pontos marcados e dois triângulos - (-1,0), (0,1), (1,-1) e (-1,1), (0,-1), (1,1)" src="https://cdn.freecodecamp.org/curriculum/project-euler/triangles-containing-the-origin.gif" style="background-color: white; padding: 10px;" />

Para um raio de 3, há 360 triângulos contendo a origem no interior e tendo todos os vértices em $I_3$. Para $I_5$, o número é 10600.

Quantos triângulos há contendo a origem no interior e tendo todos os três vértices em $I_{105}$?

# --hints--

`trianglesContainingOrigin()` deve retornar `1725323624056`.

```js
assert.strictEqual(trianglesContainingOrigin(), 1725323624056);
```

# --seed--

## --seed-contents--

```js
function trianglesContainingOrigin() {

  return true;
}

trianglesContainingOrigin();
```

# --solutions--

```js
// solution required
```
