---
id: 5900f3d01000cf542c50fee3
title: 'Problem 100: Arrangierte Wahrscheinlichkeit'
challengeType: 1
forumTopicId: 301724
dashedName: problem-100-arranged-probability
---

# --description--

Wenn eine Schachtel einundzwanzig farbige Scheiben enthält, die sich aus fünfzehn blauen und sechs roten Scheiben zusammensetzen, und zwei Scheiben nach dem Zufallsprinzip entnommen werden, zeigt sich, dass die Wahrscheinlichkeit, zwei blaue Scheiben zu entnehmen, sehr groß ist.

$${P(BB)} = \frac{15}{21}×\frac{14}{20} = \frac{1}{2}$$

Die nächste Anordnung, bei der die Wahrscheinlichkeit, zwei blaue Scheiben zufällig zu nehmen, genau 50 % beträgt, gibt es eine Schachtel mit fünfundachtzig blauen Scheiben und fünfunddreißig roten Scheiben.

Indem du die erste Anordnung findest, die mehr als `limit` Scheiben enthält, bestimmst du die Anzahl der blauen Scheiben, die die Schachtel enthalten würde.

# --hints--

`arrangedProbability(20)` sollte eine Zahl zurückgeben.

```js
assert(typeof arrangedProbability(10) === 'number');
```

`arrangedProbability(20)` sollte `15` zurückgeben.

```js
assert.strictEqual(arrangedProbability(20), 15);
```

`arrangedProbability(100)` sollte `85` zurückgeben.

```js
assert.strictEqual(arrangedProbability(100), 85);
```

`arrangedProbability(100000)` sollte `97513` zurückgeben.

```js
assert.strictEqual(arrangedProbability(100000), 97513);
```

`arrangedProbability(1000000000)` sollte `3822685023` zurückgeben.

```js
assert.strictEqual(arrangedProbability(1000000000), 3822685023);
```

`arrangedProbability(1000000000000)` sollte `756872327473` zurückgeben.

```js
assert.strictEqual(arrangedProbability(1000000000000), 756872327473);
```

# --seed--

## --seed-contents--

```js
function arrangedProbability(limit) {

  return true;
}

arrangedProbability(20);
```

# --solutions--

```js
function arrangedProbability(limit) {
  // Based on https://www.mathblog.dk/project-euler-100-blue-discs-two-blue/
  let blue = 15;
  let discs = 21;

  while (discs < limit) {
    const nextBlue = 3 * blue + 2 * discs - 2;
    const nextDiscs = 4 * blue + 3 * discs - 3;

    blue = nextBlue;
    discs = nextDiscs;
  }
  return blue;
}
```
