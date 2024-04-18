---
id: 5900f4021000cf542c50ff14
title: 'Problem 148: Erforschung des Pascalschen Dreiecks'
challengeType: 1
forumTopicId: 301777
dashedName: problem-148-exploring-pascals-triangle
---

# --description--

Wir können leicht überprüfen, dass keine der Einträge in den ersten sieben Zeilen des Pascalschen Dreiecks durch 7 teilbar ist:

```markup
            1
          1   1
        1   2   1
      1   3   3   1
    1   4   6   4   1
  1   5   10  10  5   1
1   6   15  20  15  6   1
```

Wenn wir jedoch die ersten hundert Zeilen überprüfen, stellen wir fest, dass nur 2361 der 5050 Einträge nicht durch 7 teilbar sind.

# --instructions--

Finde die Anzahl der Einträge, die nicht durch 7 teilbar sind, in den ersten eine Milliarde (${10}^9$) Zeilen des Pascalschen Dreiecks.

# --hints--

`entriesOfPascalsTriangle()` sollte `2129970655314432` zurückgeben.

```js
assert.strictEqual(entriesOfPascalsTriangle(), 2129970655314432);
```

# --seed--

## --seed-contents--

```js
function entriesOfPascalsTriangle() {

  return true;
}

entriesOfPascalsTriangle();
```

# --solutions--

```js
// solution required
```
