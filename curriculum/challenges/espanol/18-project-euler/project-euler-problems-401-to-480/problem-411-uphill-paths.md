---
id: 5900f5081000cf542c510019
title: 'Problema 411: Rutas de subida'
challengeType: 1
forumTopicId: 302080
dashedName: problem-411-uphill-paths
---

# --description--

Let $n$ be a positive integer. Suppose there are stations at the coordinates $(x, y) = (2^i\bmod n, 3^i\bmod n)$ for $0 ≤ i ≤ 2n$. We will consider stations with the same coordinates as the same station.

Deseamos formar una ruta desde (0, 0) a ($n$, $n$) tal que la $x$ y $y$ coordenadas nunca disminuyan.

Sea $S(n)$ el número máximo de estaciones por las que pueda pasar un camino.

Por ejemplo, si $n = 22$, hay 11 distintas estaciones, y una ruta válida puede pasar como máximo 5 estaciones. Por lo tanto, $S(22) = 5$. El caso está ilustrado a continuación, con un ejemplo de una ruta óptima:

<img class="img-responsive center-block" alt="ruta válida que pasa por 5 estaciones, para n = 22, con 11 estaciones distintas" src="https://cdn.freecodecamp.org/curriculum/project-euler/uphill-paths.png" style="background-color: white; padding: 10px;" />

También puede ser verificado que $S(123) = 14$ y $S(10\\,000) = 48$.

Encuentra $\sum S(k^5)$ para $1 ≤ k ≤ 30$.

# --hints--

`uphillPaths()` debería devolver `9936352`.

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
