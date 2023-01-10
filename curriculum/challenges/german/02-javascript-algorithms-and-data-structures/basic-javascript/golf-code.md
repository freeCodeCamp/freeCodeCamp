---
id: 5664820f61c48e80c9fa476c
title: Golf Code
challengeType: 1
videoUrl: 'https://scrimba.com/c/c9ykNUR'
forumTopicId: 18195
dashedName: golf-code
---

# --description--

Beim Golf hat jedes Loch einen `par`, also die durchschnittliche Anzahl von `strokes` (Schlägen), die ein Golfer machen muss, um den Ball im Loch zu versenken und das Spiel zu beenden. Je nachdem, wie weit über oder unter `par` deine `strokes` liegen, gibt es einen anderen Spitznamen.

Deiner Funktion werden die Argumente `par` und `strokes` übergeben. Gib den richtigen String gemäß dieser Tabelle zurück, die die Schläge in der Reihenfolge ihrer Priorität auflistet: von oben (am höchsten) nach unten (am niedrigsten):

<table class='table table-striped'><thead><tr><th>Schläge</th><th>Ausgabe</th></tr></thead><tbody><tr><td>1</td><td>"Hole-in-one!"</td></tr><tr><td>&#x3C;= par - 2</td><td>"Eagle"</td></tr><tr><td>par - 1</td><td>"Birdie"</td></tr><tr><td>par</td><td>"Par"</td></tr><tr><td>par + 1</td><td>"Bogey"</td></tr><tr><td>par + 2</td><td>"Double Bogey"</td></tr><tr><td>>= par + 3</td><td>"Go Home!"</td></tr></tbody></table>

`par` und `strokes` werden immer numerisch und positiv sein. Wir haben eine Liste mit allen Namen für dich zusammengestellt.

# --hints--

`golfScore(4, 1)` sollte den String `Hole-in-one!` zurückgeben

```js
assert(golfScore(4, 1) === 'Hole-in-one!');
```

`golfScore(4, 2)` sollte den String `Eagle` zurückgeben

```js
assert(golfScore(4, 2) === 'Eagle');
```

`golfScore(5, 2)` sollte den String `Eagle` zurückgeben

```js
assert(golfScore(5, 2) === 'Eagle');
```

`golfScore(4, 3)` sollte den String `Birdie` zurückgeben

```js
assert(golfScore(4, 3) === 'Birdie');
```

`golfScore(4, 4)` sollte den String `Par` zurückgeben

```js
assert(golfScore(4, 4) === 'Par');
```

`golfScore(1, 1)` sollte den String `Hole-in-one!` zurückgeben

```js
assert(golfScore(1, 1) === 'Hole-in-one!');
```

`golfScore(5, 5)` sollte den String `Par` zurückgeben

```js
assert(golfScore(5, 5) === 'Par');
```

`golfScore(4, 5)` sollte den String `Bogey` zurückgeben

```js
assert(golfScore(4, 5) === 'Bogey');
```

`golfScore(4, 6)` sollte den String `Double Bogey` zurückgeben

```js
assert(golfScore(4, 6) === 'Double Bogey');
```

`golfScore(4, 7)` sollte den String `Go Home!` zurückgeben

```js
assert(golfScore(4, 7) === 'Go Home!');
```

`golfScore(5, 9)` sollte den String `Go Home!` zurückgeben

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
