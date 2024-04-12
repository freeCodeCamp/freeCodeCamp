---
id: 5900f4031000cf542c50ff16
title: 'Problem 151: Papierblätter mit Standardgröße: ein Problem mit erwartetem Wert'
challengeType: 1
forumTopicId: 301782
dashedName: problem-151-paper-sheets-of-standard-sizes-an-expected-value-problem
---

# --description--

In einer Druckerei werden wöchentlich 16 Chargen (Jobs) ausgeführt, und jede Charge benötigt ein spezielles Farbpapier der Größe A5.

Jeden Montagmorgen öffnet der Vorarbeiter einen neuen Umschlag, der ein großes Blatt des Spezialpapiers im Format A1 enthält.

Er schneidet es in zwei Hälften und erhält so zwei Blätter der Größe A2. Dann schneidet er eines davon in der Mitte durch, um zwei Blätter des Formats A3 zu erhalten, und so weiter, bis er das für den ersten Stapel der Woche benötigte Blatt des Formats A5 erhält.

Alle unbenutzten Blätter werden in den Umschlag zurückgelegt.

<img class="img-responsive center-block" alt="Blatt im Format A1, aufgeteilt in: A2, A3, A4 und zwei A5-Blätter" src="https://cdn.freecodecamp.org/curriculum/project-euler/paper-sheets-of-standard-sizes-an-expected-value-problem.png" style="background-color: white; padding: 10px;" />

Zu Beginn jedes weiteren Stapels nimmt er ein Blatt Papier nach dem Zufallsprinzip aus dem Umschlag. Wenn es die Größe A5 hat, verwendet er es. Ist sie größer, wiederholt er die Prozedur des "Halbierens", bis er hat, was er braucht, und legt die restlichen Blätter danach immer zurück in den Umschlag.

Excluding the first and last batch of the week, find the expected number of times (during each week) that the foreman finds a single sheet of paper in the envelope.

Gib deine Antwort auf sechs Dezimalstellen gerundet in der Form `x.xxxxxx` an.

# --hints--

`expectedValueProblem()` sollte `0.464399` zurückgeben.

```js
assert.strictEqual(expectedValueProblem(), 0.464399);
```

# --seed--

## --seed-contents--

```js
function expectedValueProblem() {

  return true;
}

expectedValueProblem();
```

# --solutions--

```js
// solution required
```
