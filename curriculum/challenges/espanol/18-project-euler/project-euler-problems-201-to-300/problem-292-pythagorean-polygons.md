---
id: 5900f4911000cf542c50ffa3
title: 'Problema 292: Polígonos Pitágoricos'
challengeType: 1
forumTopicId: 301944
dashedName: problem-292-pythagorean-polygons
---

# --description--

We shall define a pythagorean polygon to be a convex polygon with the following properties:

- there are at least three vertices,
- no se alinean tres vertices,
- cada vértice tiene coordenadas enteras,
- cada esquina tiene una longitud entera.

Para un entero dado $n$, defina $P(n)$ como el número de distinto polígono pitágorico para el cual el perímetro es $≤ n$.

Polígono pitágoricos deben considerarse distintos siempre que ninguno sea una traducción de otro.

Está dado que $P(4) = 1$, $P(30) = 3655$ y $P(60) = 891045$.

Encontrar $P(120)$.

# --hints--

`pythagoreanPolygons()` debería devolver `3600060866`.

```js
assert.strictEqual(pythagoreanPolygons(), 3600060866);
```

# --seed--

## --seed-contents--

```js
function pythagoreanPolygons() {

  return true;
}

pythagoreanPolygons();
```

# --solutions--

```js
// solution required
```
