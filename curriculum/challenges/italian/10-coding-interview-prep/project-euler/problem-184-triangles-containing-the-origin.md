---
id: 5900f4241000cf542c50ff37
title: 'Problema 184: Triangoli contenenti l''origine'
challengeType: 1
forumTopicId: 301820
dashedName: problem-184-triangles-containing-the-origin
---

# --description--

Considera il set $I_r$ di punti $(x, y)$ con coordinate intere all'interno del cerchio con raggio $r$, centrato all'origine, cioè $x^2 + y^2 &lt; r^2$.

Per un raggio di 2, $I_2$ contiene i nove punti (0,0), (1,0), (1,1), (0,1), (-1,1), (-1,0), (-1,-1), (0,-1) e (1,-1). Ci sono otto triangoli con tutti e tre i vertici in $I_2$ che contengono l'origine all'interno. Due di loro sono mostrati di seguito, gli altri sono ottenuti da questi per rotazione.

<img class="img-responsive center-block" alt="cerchio con raggio 2, centrato all'origine, con nove punti contrassegnati e due triangoli - (-1,0), (0,1), (1,-1) e (-1,1), (0,-1), (1,1)" src="https://cdn.freecodecamp.org/curriculum/project-euler/triangles-containing-the-origin.gif" style="background-color: white; padding: 10px;" />

Per un raggio di 3, ci sono 360 triangoli contenenti l'origine e aventi tutti i vertici in $I_3$ e per $I_5$ il numero è 10600.

Quanti triangoli contengono l'origine all'interno e hanno tutti e tre i vertici in $I_{105}$?

# --hints--

`trianglesContainingOrigin()` dovrebbe restituire `1725323624056`.

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
