---
id: 5900f3f61000cf542c50ff09
title: 'Problema 138: Triangoli isoscele speciali'
challengeType: 1
forumTopicId: 301766
dashedName: problem-138-special-isosceles-triangles
---

# --description--

Considera il triangolo isoscele con lunghezza di base $b = 16$, e lati $L = 17$.

<img class="img-responsive center-block" alt="Un triangolo isoscele con lati denominati L - due lati con la stessa lunghezza e base del triangolo b; e altezza del triangolo - h dalla base del triangolo al vertice tra i lati L" src="https://cdn.freecodecamp.org/curriculum/project-euler/special-isosceles-triangles.png" style="background-color: white; padding: 10px;" />

Utilizzando il teorema di Pitagora, si può vedere che l'altezza del triangolo, $h = \sqrt{{17}^2 − 8^2} = 15$, che è una lunghezza inferiore alla base.

Con $b = 272$ e $L = 305$, otteniamo $h = 273$, che è uno in più della lunghezza di base, e questo è il secondo più piccolo triangolo isoscele con la proprietà che $h = b ± 1$.

Trova $\sum{L}$ per i dodici triangoli isosceli più piccoli per i quali $h = b ± 1$ e $b$, $L$ sono interi positivi.

# --hints--

`isoscelesTriangles()` dovrebbe restituire `1118049290473932`.

```js
assert.strictEqual(isoscelesTriangles(), 1118049290473932);
```

# --seed--

## --seed-contents--

```js
function isoscelesTriangles() {

  return true;
}

isoscelesTriangles();
```

# --solutions--

```js
// solution required
```
