---
id: 5900f4b31000cf542c50ffc6
title: 'Problem 327: Räume des Verderbens'
challengeType: 1
forumTopicId: 301984
dashedName: problem-327-rooms-of-doom
---

# --description--

Eine Reihe von drei Räumen ist durch automatische Türen miteinander verbunden.

<img class="img-responsive center-block" alt="eine Reihe von drei Räumen, die durch automatische Türen miteinander verbunden sind" src="https://cdn.freecodecamp.org/curriculum/project-euler/rooms-of-doom.gif" style="background-color: white; padding: 10px;" />

Jede Tür wird mit einer Sicherheitskarte bedient. Sobald Sie einen Raum betreten, schließt sich die Tür automatisch, und die Sicherheitskarte kann nicht mehr verwendet werden. Ein Automat gibt zu Beginn eine unbegrenzte Anzahl von Karten aus, aber jeder Raum (einschließlich des Startraums) enthält Scanner. Wenn sie feststellen, dass du mehr als drei Sicherheitskarten bei dir hast, oder wenn sie eine unbeaufsichtigte Sicherheitskarte auf dem Boden entdecken, werden alle Türen dauerhaft verschlossen. Jeder Raum enthält jedoch ein Fach, in dem du eine beliebige Anzahl von Sicherheitskarten sicher aufbewahren kannst, um sie zu einem späteren Zeitpunkt zu verwenden.

Wenn du einfach versucht hättest, die Räume nacheinander zu durchqueren, hättest du beim Betreten von Raum 3 alle drei Karten benutzt und wärst für immer in diesem Raum gefangen!

Wenn du jedoch die Aufbewahrungsboxen benutzt, ist eine Flucht möglich. Du könntest zum Beispiel Raum 1 mit deiner ersten Karte betreten, eine Karte in die Aufbewahrungsbox legen und deine dritte Karte benutzen, um den Raum wieder zu verlassen. Nachdem du drei weitere Karten aus dem Automaten geholt hast, kannst du eine davon benutzen, um Raum 1 zu betreten und die Karte zu holen, die du soeben in den Kasten gelegt hast. Du hast nun wieder drei Karten und kannst durch die restlichen drei Türen reisen. Mit dieser Methode kannst du mit insgesamt sechs Sicherheitskarten durch alle drei Räume reisen.

Es ist möglich, sechs Räume mit insgesamt 123 Sicherheitskarten zu durchqueren, wobei maximal 3 Karten mitgeführt werden können.

Lasse $C$ die maximale Anzahl von Karten sein, die zu jeder Zeit mitgeführt werden können.

Lasse $R$ die Anzahl der zu durchlaufenden Räume sein.

Lasse $M(C, R)$ die minimale Anzahl von Karten sein, die vom Automaten benötigt werden, um durch $R$ Räume zu gelangen, in denen sich zu jedem Zeitpunkt maximal $C$ Karten befinden.

Zum Beispiel $M(3, 6) = 123$ und $M(4, 6) = 23$.

Und, $\sum M(C, 6) = 146$ für $3 ≤ C ≤ 4$.

Dir wird angegeben, dass $\sum M(C, 10) = 10382$ für $3 ≤ C ≤ 10$.

Finde $\sum M(C, 30)$ für $3 ≤ C ≤ 40$.

# --hints--

`roomsOfDoom()` sollte `34315549139516` zurückgeben.

```js
assert.strictEqual(roomsOfDoom(), 34315549139516);
```

# --seed--

## --seed-contents--

```js
function roomsOfDoom() {

  return true;
}

roomsOfDoom();
```

# --solutions--

```js
// solution required
```
