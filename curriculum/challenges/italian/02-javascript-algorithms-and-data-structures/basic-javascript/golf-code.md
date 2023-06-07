---
id: 5664820f61c48e80c9fa476c
title: Giocare a golf
challengeType: 1
videoUrl: 'https://scrimba.com/c/c9ykNUR'
forumTopicId: 18195
dashedName: golf-code
---

# --description--

Nel gioco del Golf, ogni buca ha un `par`, che è il numero medio di tiri (`strokes`) che un golfista dovrebbe fare per riuscire a fare buca. A seconda di quanto sopra o sotto al valore di `par` sono i tuoi `strokes`, c'è un soprannome diverso.

Alla tua funzione saranno passati gli argomenti `par` e `strokes`. Restituisci la stringa corretta in base a questa tabella che elenca i colpi in ordine di priorità; dall'alto (maggiore priorità) al basso (minore):

<table class='table table-striped'><thead><tr><th>Strokes</th><th>Return</th></tr></thead><tbody><tr><td>1</td><td>"Hole-in-one!"</td></tr><tr><td>&#x3C;= par - 2</td><td>"Eagle"</td></tr><tr><td>par - 1</td><td>"Birdie"</td></tr><tr><td>par</td><td>"Par"</td></tr><tr><td>par + 1</td><td>"Bogey"</td></tr><tr><td>par + 2</td><td>"Double Bogey"</td></tr><tr><td>>= par + 3</td><td>"Go Home!"</td></tr></tbody></table>

`par` e `strokes` avranno sempre valori numerici e positivi. Abbiamo aggiunto un array con tutti i nomi per tua comodità.

# --hints--

`golfScore(4, 1)` dovrebbe restituire la stringa `Hole-in-one!`

```js
assert(golfScore(4, 1) === 'Hole-in-one!');
```

`golfScore(4, 2)` dovrebbe restituire la stringa `Eagle`

```js
assert(golfScore(4, 2) === 'Eagle');
```

`golfScore(5, 2)` dovrebbe restituire la stringa `Eagle`

```js
assert(golfScore(5, 2) === 'Eagle');
```

`golfScore(4, 3)` dovrebbe restituire la stringa `Birdie`

```js
assert(golfScore(4, 3) === 'Birdie');
```

`golfScore(4, 4)` dovrebbe restituire la stringa `Par`

```js
assert(golfScore(4, 4) === 'Par');
```

`golfScore(1, 1)` dovrebbe restituire la stringa `Hole-in-one!`

```js
assert(golfScore(1, 1) === 'Hole-in-one!');
```

`golfScore(5, 5)` dovrebbe restituire la stringa `Par`

```js
assert(golfScore(5, 5) === 'Par');
```

`golfScore(4, 5)` dovrebbe restituire la stringa `Bogey`

```js
assert(golfScore(4, 5) === 'Bogey');
```

`golfScore(4, 6)` dovrebbe restituire la stringa `Double Bogey`

```js
assert(golfScore(4, 6) === 'Double Bogey');
```

`golfScore(4, 7)` dovrebbe restituire la stringa `Go Home!`

```js
assert(golfScore(4, 7) === 'Go Home!');
```

`golfScore(5, 9)` dovrebbe restituire la stringa `Go Home!`

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
