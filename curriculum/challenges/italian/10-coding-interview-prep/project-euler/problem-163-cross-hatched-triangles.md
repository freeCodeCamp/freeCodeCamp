---
id: 5900f40f1000cf542c50ff22
title: 'Problema 163: Triangoli incrociati'
challengeType: 1
forumTopicId: 301797
dashedName: problem-163-cross-hatched-triangles
---

# --description--

Considera un triangolo equilatero in cui delle linee sono disegnate da ogni vertice alla metà del lato opposto, come nel triangolo di dimensione 1 nel disegno qua sotto.

<img class="img-responsive center-block" alt="triangoli di dimensione 1 e di dimensione 2" src="https://cdn.freecodecamp.org/curriculum/project-euler/cross-hatched-triangles.gif" style="background-color: white; padding: 10px;" />

Si possono vedere sedici triangoli di diversa forma o orientazione o posizione dentro quel triangolo. Usando i triangoli di dimensione 1 come unità base, si possono formare triangoli più grandi come il triangolo di dimensione due nel disegno sopra. Nel triangolo di dimensione due si possono osservare centoquattro triangolo di diversa dimensione o forma od orientazione o posizione.

Si può vedere che il triangolo di dimensione 2 contiene 4 triangoli di dimensione 1 come unità base. Un triangolo di dimensione tre conterrebbe 9 unità triangolo di dimensione 1, quindi un triangolo di dimensione $n$ conterrebbe $n^2$ triangoli di dimensione 1.

Sia $T(n)$ il numero di triangoli presenti in un triangolo di dimensione $n$, allora

$$\begin{align}   & T(1) = 16 \\\\
  & T(2) = 104 \end{align}$$

Trova $T(36)$.

# --hints--

`crossHatchedTriangles()` dovrebbe restituire `343047`.

```js
assert.strictEqual(crossHatchedTriangles(), 343047);
```

# --seed--

## --seed-contents--

```js
function crossHatchedTriangles() {

  return true;
}

crossHatchedTriangles();
```

# --solutions--

```js
// solution required
```
