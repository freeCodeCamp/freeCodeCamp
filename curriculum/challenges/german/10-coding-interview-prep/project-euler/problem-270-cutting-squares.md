---
id: 5900f47c1000cf542c50ff8e
title: 'Problem 270: Cutting Squares'
challengeType: 1
forumTopicId: 301920
dashedName: problem-270-cutting-squares
---

# --description--

Ein quadratisches Stück Papier mit den ganzzahligen Abmessungen $N×N$ wird so hingelegt, dass eine Ecke im Ursprung liegt und zwei seiner Seiten auf den $x$- und $y$-Achsen. Dann schneiden wir es unter Beachtung der folgenden Regeln auf:

- Wir machen nur gerade Schnitte zwischen zwei Punkten, die auf verschiedenen Seiten des Quadrats liegen und ganzzahlige Koordinaten haben.
- Zwei Schnitte können sich nicht kreuzen, aber mehrere Schnitte können sich am selben Grenzpunkt treffen.
- Proceed until no more legal cuts can be made.

Zählt man alle Spiegelungen oder Drehungen als verschieden, so nennt man $C(N)$ die Anzahl der Möglichkeiten, ein $N×N$-Quadrat zu schneiden. Zum Beispiel ist $C(1) = 2$ und $C(2) = 30$ (siehe unten).

<img class="img-responsive center-block" alt="Möglichkeiten, ein 2x2-Quadrat zu schneiden, wobei Spiegelungen und Drehungen als getrennt zu betrachten sind" src="https://cdn.freecodecamp.org/curriculum/project-euler/cutting-squares.gif" style="background-color: white; padding: 10px;" />

Was ist $C(30)\bmod {10}^8$ ?

# --hints--

`cuttingSquares()` sollte `82282080` zurückgeben.

```js
assert.strictEqual(cuttingSquares(), 82282080);
```

# --seed--

## --seed-contents--

```js
function cuttingSquares() {

  return true;
}

cuttingSquares();
```

# --solutions--

```js
// solution required
```
