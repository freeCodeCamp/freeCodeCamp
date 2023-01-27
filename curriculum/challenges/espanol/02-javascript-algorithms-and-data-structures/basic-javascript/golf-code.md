---
id: 5664820f61c48e80c9fa476c
title: Código de golf
challengeType: 1
videoUrl: 'https://scrimba.com/c/c9ykNUR'
forumTopicId: 18195
dashedName: golf-code
---

# --description--

En el juego de Golf, cada agujero tiene un `par`, que significa, el número promedio de `strokes` que se espera que haga un golfista para hundir la pelota en el agujero para completar el juego. Dependiendo de qué tan por encima o por debajo del `par` estén tus `strokes`, hay un nombre diferente.

Tu función recibirá los argumentos `par` y `strokes`. Devuelve la cadena correcta según esta tabla que muestra los golpes en orden de prioridad; superior (más alto) a inferior (más bajo):

<table class='table table-striped'><thead><tr><th>Strokes (golpes)</th><th>Devuelve</th></tr></thead><tbody><tr><td>1</td><td>"Hole-in-one!"</td></tr><tr><td>&#x3C;= par - 2</td><td>"Eagle"</td></tr><tr><td>par - 1</td><td>"Birdie"</td></tr><tr><td>par</td><td>"Par"</td></tr><tr><td>par + 1</td><td>"Bogey"</td></tr><tr><td>par + 2</td><td>"Double Bogey"</td></tr><tr><td>>= par + 3</td><td>"Go Home!"</td></tr></tbody></table>

`par` y `strokes` siempre serán numéricos y positivos. Hemos añadido un arreglo de todos los nombres para tu conveniencia.

# --hints--

`golfScore(4, 1)` debe devolver la cadena `Hole-in-one!`

```js
assert(golfScore(4, 1) === 'Hole-in-one!');
```

`golfScore(4, 2)` debe devolver la cadena `Eagle`

```js
assert(golfScore(4, 2) === 'Eagle');
```

`golfScore(5, 2)` debe devolver la cadena `Eagle`

```js
assert(golfScore(5, 2) === 'Eagle');
```

`golfScore(4, 3)` debe devolver la cadena `Birdie`

```js
assert(golfScore(4, 3) === 'Birdie');
```

`golfScore(4, 4)` debe devolver la cadena `Par`

```js
assert(golfScore(4, 4) === 'Par');
```

`golfScore(1, 1)` debe devolver la cadena `Hole-in-one!`

```js
assert(golfScore(1, 1) === 'Hole-in-one!');
```

`golfScore(5, 5)` debe devolver la cadena `Par`

```js
assert(golfScore(5, 5) === 'Par');
```

`golfScore(4, 5)` debe devolver la cadena `Bogey`

```js
assert(golfScore(4, 5) === 'Bogey');
```

`golfScore(4, 6)` debe devolver la cadena `Double Bogey`

```js
assert(golfScore(4, 6) === 'Double Bogey');
```

`golfScore(4, 7)` debe devolver la cadena `Go Home!`

```js
assert(golfScore(4, 7) === 'Go Home!');
```

`golfScore(5, 9)` debe devolver la cadena `Go Home!`

```js
assert(golfScore(5, 9) === 'Go Home!');
```

# --seed--

## --seed-contents--

```js
const names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];

function golfScore(par, strokes) {
  // Only change code below this line


  return "Change Me";
  // Only change code above this line
}

golfScore(5, 4);
```

# --solutions--

```js
function golfScore(par, strokes) {
  if (strokes === 1) {
    return "Hole-in-one!";
  }

  if (strokes <= par - 2) {
    return "Eagle";
  }

  if (strokes === par - 1) {
    return "Birdie";
  }

  if (strokes === par) {
    return "Par";
  }

  if (strokes === par + 1) {
    return "Bogey";
  }

  if(strokes === par + 2) {
    return "Double Bogey";
  }

  return "Go Home!";
}
```
