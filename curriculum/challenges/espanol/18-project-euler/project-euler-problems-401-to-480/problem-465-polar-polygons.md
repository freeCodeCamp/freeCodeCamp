---
id: 5900f53d1000cf542c510050
title: 'Problema 465: Polígonos polares'
challengeType: 1
forumTopicId: 302140
dashedName: problem-465-polar-polygons
---

# --description--

The kernel of a polygon is defined by the set of points from which the entire polygon's boundary is visible. We define a polar polygon as a polygon for which the origin is strictly contained inside its kernel.

Para este problema, un polígono puede tener vertices consecutivos colinares. Sin embargo, un polígono aún no puede tener auto-intersección y no puede tener área de cero.

Por ejemplo, solo el primero de los siguientes es un polígono polar (los núcleos del segundo, tercero, y cuarto no contienen estrictamente el origen, y el quinto no tiene ningún núcleo:

<img class="img-responsive center-block" alt="cinco polígonos de ejemplo" src="https://cdn.freecodecamp.org/curriculum/project-euler/polar-polygons.png" style="background-color: white; padding: 10px;" />

Note que el primer polígono tiene tres vértices colinares consecutivos.

Sea $P(n)$ el número de polígonos polares tales que los vértices $(x, y)$ tienen coordenadas enteras cuyos valores absolutos no son mayores que $n$.

Note que los polígonos deberían ser contados si ellos tienen diferentes conjuntos de bordes, aún si ellos encierran la misma área. Por ejemplo, el polígono con los vértices [(0,0), (0,3), (1,1), (3,0)] es distinto del polígono con los vértices [(0,0), (0,3), (1,1), (3,0), (1,0)].

Por ejemplo, $P(1) = 131$, $P(2) = 1\\,648\\,531$, $P(3) = 1\\,099\\,461\\,296\\,175$ y $P(343)\bmod 1\\,000\\,000\\,007 = 937\\,293\\,740$.

Encuentra $P(7^{13})\bmod 1\\,000\\,000\\,007$.

# --hints--

`polarPolygons()` debería devolver `585965659`.

```js
assert.strictEqual(polarPolygons(), 585965659);
```

# --seed--

## --seed-contents--

```js
function polarPolygons() {

  return true;
}

polarPolygons();
```

# --solutions--

```js
// solution required
```
