---
id: 5900f46c1000cf542c50ff7e
title: 'Problem 256: Tatami-Free Rooms'
challengeType: 1
forumTopicId: 301904
dashedName: problem-256-tatami-free-rooms
---

# --description--

Tatami sind rechteckige Matten, die verwendet werden, um den Boden eines Raumes vollständig und ohne Überlappung zu bedecken.

Wenn man davon ausgeht, dass die einzige verfügbare Art von Tatami die Maße 1×2 hat, sind der Form und Größe der Räume, die abgedeckt werden können, natürlich Grenzen gesetzt.

Für dieses Problem betrachten wir nur rechteckige Räume mit Ganzzahl-Dimensionen $a$, $b$ und sogar Größe $s = a \times b$. Mit dem Begriff "Größe" bezeichnen wir die Bodenfläche des Raumes, und – ohne Verlust der Allgemeinheit – fügen wir die Bedingung $a ≤ b$ hinzu.

Es gibt eine Regel, die bei der Verlegung von Tatami befolgt werden muss: Es darf keine Punkte geben, an denen sich die Ecken von vier verschiedenen Matten treffen. Betrachte zum Beispiel die folgenden zwei Arrangements für einen 4×4 Raum:

<img class="img-responsive center-block" alt="zwei Anordnungen der Matten in einem 4x4 Raum" src="https://cdn.freecodecamp.org/curriculum/project-euler/tatami-free-rooms.gif" style="background-color: white; padding: 10px;" />

Das linke Arrangement ist akzeptabel, das auf der rechten Seite hingegen nicht: Ein rotes <strong><span style="color: red;">X</span></strong> in der Mitte markiert den Punkt, an dem sich vier Tatamis treffen.

Because of this rule, certain even-sized rooms cannot be covered with tatami: we call them tatami-free rooms. Weiterhin definieren wir $T(s)$ als die Anzahl der Tatami-freien Räume der Größe $s$.

Der kleinste Tatami-freie Raum hat die Größe $s = 70$ und die Maße 7×10. Alle anderen Räume mit der Größe $s = 70$ können mit Tatami bedeckt werden. Sie haben Maße von 1x70, 2x35 und 5x14. Folglich: $T(70) = 1$.

Ebenso können wir überprüfen, dass $T(1320) = 5$, weil es genau 5 Tatami-freie Räume von Größe $s = 1320$ gibt: 20×66, 22×60, 24×55, 30×44 und 33×40. Tatsächlich ist $s= 1320$ die kleinste Raumgröße $s$, für die $T(s) = 5$.

Finde die kleinste Raumgröße $s$, für die $T(n) = 200$.

# --hints--

`tatamiFreeRooms()` sollte `85765680` zurückgeben.

```js
assert.strictEqual(tatamiFreeRooms(), 85765680);
```

# --seed--

## --seed-contents--

```js
function tatamiFreeRooms() {

  return true;
}

tatamiFreeRooms();
```

# --solutions--

```js
// solution required
```
