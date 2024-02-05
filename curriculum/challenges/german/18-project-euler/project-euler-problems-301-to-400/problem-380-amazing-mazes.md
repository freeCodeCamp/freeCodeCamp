---
id: 5900f4e81000cf542c50fffb
title: 'Problem 380: Erstaunliche Labyrinthe!'
challengeType: 1
forumTopicId: 302044
dashedName: problem-380-amazing-mazes
---

# --description--

An $m×n$ maze is an $m×n$ rectangular grid with walls placed between grid cells such that there is exactly one path from the top-left square to any other square. The following are examples of a 9×12 maze and a 15×20 maze:

<img class="img-responsive center-block" alt="Labyrinth 9x12 und Labyrinth 15x20" src="https://cdn.freecodecamp.org/curriculum/project-euler/amazing-mazes.gif" style="background-color: white; padding: 10px;" />

Lasse $C(m, n)$ die Anzahl der verschiedenen $m×n$ Labyrinthe sein. Labyrinthe, die durch Drehung und Spiegelung aus einem anderen Labyrinth gebildet werden können, gelten als eindeutig.

Es lässt sich nachweisen, dass $C(1, 1) = 1$, $C(2, 2) = 4$, $C(3, 4) = 2415$ und $C(9, 12) = 2,5720\mathrm{e}\,46$ (in wissenschaftlicher Notation auf 5 signifikante Stellen gerundet).

Finde $C(100, 500)$ und schreibe deine Antwort als String in wissenschaftlicher Notation, gerundet auf 5 signifikante Stellen.

Trenne Mantisse und Exponent durch ein kleines e, wenn du deine Antwort gibst. E.g. wenn die Antwort 1234567891011 lautet, wäre das Antwortformat die Zeichenfolge `1.2346e12`.

# --hints--

`amazingMazes()` should return a string.

```js
assert(typeof amazingMazes() === 'string');
```

`amazingMazes()` should return the string `6.3202e25093`.

```js
assert.strictEqual(amazingMazes(), '6.3202e25093');
```

# --seed--

## --seed-contents--

```js
function amazingMazes() {

  return true;
}

amazingMazes();
```

# --solutions--

```js
// solution required
```
