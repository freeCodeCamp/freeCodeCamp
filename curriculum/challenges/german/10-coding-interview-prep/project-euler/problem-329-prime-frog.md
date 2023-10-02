---
id: 5900f4b51000cf542c50ffc8
title: 'Problem 329: Primzahl-Frosch'
challengeType: 1
forumTopicId: 301986
dashedName: problem-329-prime-frog
---

# --description--

Susan hat einen Primzahl-Frosch.

Dein Frosch springt über 500 Quadrate, die mit 1 bis 500 nummeriert sind.

Er kann nur ein Quadrat nach links oder rechts springen, mit gleicher Wahrscheinlichkeit, und er kann nicht außerhalb der Reichweite von [1;500] springen. (wenn er an einem der beiden Enden landet, springt er automatisch auf das einzige verfügbare Quadrat beim nächsten Schritt.)

Wenn er auf einem Feld mit einer Primzahl steht, quakt er "P" (PRIMZAHL) mit der Wahrscheinlichkeit $\frac{2}{3}$ oder "N" (KEINE PRIMZAHL) mit der Wahrscheinlichkeit $\frac{1}{3}$, bevor er zum nächsten Feld springt. Wenn er auf einem Feld steht, auf dem eine Zahl steht, die keine Primzahl ist, quakt er "P" mit der Wahrscheinlichkeit $\frac{1}{3}$ oder "N" mit der Wahrscheinlichkeit $\frac{2}{3}$, bevor er zum nächsten Feld springt.

Angesichts der Tatsache, dass die Startposition des Frosches mit gleicher Wahrscheinlichkeit für jedes Quadrat zufällig ist und hinsichtlich dessen, dass sie auf seine ersten 15 Quak-Geräusche achtet, was ist die Wahrscheinlichkeit, dass sie die Sequenz PPPPNNPPPNPPNPN hört?

Gib deine Antwort in Form eines Strings als Bruch `p/q` in reduzierter Form an.

# --hints--

`primeFrog()` sollte einen String zurückgeben.

```js
assert(typeof primeFrog() === 'string');
```

`primeFrog()` sollte den String `199740353/29386561536000` zurückgeben.

```js
assert.strictEqual(primeFrog(), '199740353/29386561536000');
```

# --seed--

## --seed-contents--

```js
function primeFrog() {

  return true;
}

primeFrog();
```

# --solutions--

```js
// solution required
```
