---
id: 5900f4b91000cf542c50ffcb
title: 'Problema 332: Triangoli sferici'
challengeType: 1
forumTopicId: 301990
dashedName: problem-332-spherical-triangles
---

# --description--

Un triangolo sferico è una figura formata sulla superficie di una sfera da tre grandi archi circolari che intersecano a coppia in tre vertici.

<img class="img-responsive center-block" alt="triangolo sferico formato sulla superficie di una sfera" src="https://cdn.freecodecamp.org/curriculum/project-euler/spherical-triangles.jpg" style="background-color: white; padding: 10px;" />

Sia $C(r)$ la sfera di centro (0,0,0) e raggio $r$.

Sia $Z(r)$ il set di punti sulla superficie di $C(r)$ con coordinate intere.

Sia $T(r)$ il set di triangoli sferici con vertici in $Z(r)$. Triangoli sferici degeneri, formati da tre punti sullo stesso grande arco, <u>non</u> sono inclusi in $T(r)$.

Sia $A(r)$ l'area del più piccolo triangolo sferico in $T(r)$.

Per esempio, $A(14)$ è 3.294040 arrotondato a sei decimali.

Trova $\displaystyle \sum_{r = 1}^{50} A(r)$. Dai la risposta arrotondata a sei decimali.

# --hints--

`sphericalTriangles()` dovrebbe restituire `2717.751525`.

```js
assert.strictEqual(sphericalTriangles(), 2717.751525);
```

# --seed--

## --seed-contents--

```js
function sphericalTriangles() {

  return true;
}

sphericalTriangles();
```

# --solutions--

```js
// solution required
```
