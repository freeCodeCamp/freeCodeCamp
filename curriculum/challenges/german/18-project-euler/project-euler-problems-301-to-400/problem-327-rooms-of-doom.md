---
id: 5900f4b31000cf542c50ffc6
title: 'Problem 327: Rooms of Doom'
challengeType: 1
forumTopicId: 301984
dashedName: problem-327-rooms-of-doom
---

# --description--

A series of three rooms are connected to each other by automatic doors.

<img class="img-responsive center-block" alt="eine Reihe von drei Räumen, die durch automatische Türen miteinander verbunden sind" src="https://cdn.freecodecamp.org/curriculum/project-euler/rooms-of-doom.gif" style="background-color: white; padding: 10px;" />

Each door is operated by a security card. Once you enter a room, the door automatically closes, and that security card cannot be used again. A machine will dispense an unlimited number of cards at the start, but each room (including the starting room) contains scanners. Wenn sie feststellen, dass du mehr als drei Sicherheitskarten bei dir hast, oder wenn sie eine unbeaufsichtigte Sicherheitskarte auf dem Boden entdecken, werden alle Türen dauerhaft verschlossen. Jeder Raum enthält jedoch ein Fach, in dem du eine beliebige Anzahl von Sicherheitskarten sicher aufbewahren kannst, um sie zu einem späteren Zeitpunkt zu verwenden.

Wenn du einfach versucht hättest, die Räume nacheinander zu durchqueren, hättest du beim Betreten von Raum 3 alle drei Karten benutzt und wärst für immer in diesem Raum gefangen!

Wenn du jedoch die Aufbewahrungsboxen benutzt, ist eine Flucht möglich. Du könntest zum Beispiel Raum 1 mit deiner ersten Karte betreten, eine Karte in die Aufbewahrungsbox legen und deine dritte Karte benutzen, um den Raum wieder zu verlassen. Nachdem du drei weitere Karten aus dem Automaten geholt hast, kannst du eine davon benutzen, um Raum 1 zu betreten und die Karte zu holen, die du soeben in den Kasten gelegt hast. Du hast nun wieder drei Karten und kannst durch die restlichen drei Türen reisen. Mit dieser Methode kannst du mit insgesamt sechs Sicherheitskarten durch alle drei Räume reisen.

Es ist möglich, sechs Räume mit insgesamt 123 Sicherheitskarten zu durchqueren, wobei maximal 3 Karten mitgeführt werden können.

Let $C$ be the maximum number of cards which can be carried at any time.

Let $R$ be the number of rooms to travel through.

Let $M(C, R)$ be the minimum number of cards required from the dispensing machine to travel through $R$ rooms carrying up to a maximum of $C$ cards at any time.

For example, $M(3, 6) = 123$ and $M(4, 6) = 23$.

And, $\sum M(C, 6) = 146$ for $3 ≤ C ≤ 4$.

You are given that $\sum M(C, 10) = 10382$ for $3 ≤ C ≤ 10$.

Find $\sum M(C, 30)$ for $3 ≤ C ≤ 40$.

# --hints--

`roomsOfDoom()` should return `34315549139516`.

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
