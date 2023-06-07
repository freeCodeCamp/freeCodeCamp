---
id: 5900f5411000cf542c510053
title: 'Problem 469: Freie Stühle'
challengeType: 1
forumTopicId: 302144
dashedName: problem-469-empty-chairs
---

# --description--

In einem Raum sind $N$ Stühle um einen runden Tisch herum aufgestellt.

Die Ritter betreten nacheinander den Raum und wählen nach dem Zufallsprinzip einen freien Stuhl aus.

Um genügend Bewegungsfreiheit zu haben, lassen die Ritter immer mindestens einen Stuhl zwischen sich frei.

Wenn es keine geeigneten Stühle mehr gibt, wird der Anteil $C$ der leeren Stühle bestimmt. Wir definieren auch $E(N)$ als den Erwartungswert von $C$.

Wir können überprüfen, dass $E(4) = \frac{1}{2}$ und $E(6) = \frac{5}{9}$.

Finde $E({10}^{18})$. Gebe deine Antwort auf vierzehn Dezimalstellen gerundet in der Form 0.abcdefghijklmn an.

# --hints--

`emptyChairs()` sollte `0.56766764161831` zurückgeben.

```js
assert.strictEqual(emptyChairs(), 0.56766764161831);
```

# --seed--

## --seed-contents--

```js
function emptyChairs() {

  return true;
}

emptyChairs();
```

# --solutions--

```js
// solution required
```
