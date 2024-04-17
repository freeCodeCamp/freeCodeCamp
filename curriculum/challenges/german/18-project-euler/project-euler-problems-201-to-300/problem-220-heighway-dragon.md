---
id: 5900f4481000cf542c50ff5b
title: 'Problem 220: Heighway-Drache'
challengeType: 1
forumTopicId: 301863
dashedName: problem-220-heighway-dragon
---

# --description--

Let $D_0$ be the two-letter string "Fa". Leite für $n ≥ 1$ $D_n$ aus $D_{n - 1}$ mit Hilfe der String-Umschreibregeln ab:

- "a" → "aRbFR"
- "b" → "LFaLb"

Somit ist $D_0$ = "Fa", $D_1$ = "FaRbFR", $D_2$ = "FaRbFRRLFaLbFR", und so weiter.

Diese Strings können als Anweisungen an ein Computergrafikprogramm interpretiert werden, wobei "F" für "eine Einheit vorwärts ziehen", "L" für "90 Grad nach links drehen", "R" für "90 Grad nach rechts drehen" steht und "a" und "b" ignoriert werden. Die Ausgangsposition des Computer-Cursors ist (0,0), er zeigt nach oben in Richtung (0,1).

Dann ist $D_n$ eine exotische Zeichnung, bekannt als der Heighway-Drache der Ordnung $n$. Zum Beispiel ist $D_{10}$ unten dargestellt; jedes "F" wird als ein Schritt gezählt, die hervorgehobene Stelle bei (18,16) ist die Position, die nach 500 Schritten erreicht wurde.

<img class="img-responsive center-block" alt="Zeichnung des Heighway Dragon nach 500 Schritten" src="https://cdn.freecodecamp.org/curriculum/project-euler/heighway-dragon.gif" style="background-color: white; padding: 10px;" />

Wie ist die Position des Cursors nach ${10}^{12}$ Schritten in $D_{50}$? Gib deine Antwort als String in der Form `x,y` ohne Leerzeichen an.

# --hints--

`heighwayDragon()` sollte einen String zurückgeben.

```js
assert(typeof heighwayDragon() === 'string');
```

`heighwayDragon()` sollte den String `139776,963904` zurückgeben.

```js
assert.strictEqual(heighwayDragon(), '139776,963904');
```

# --seed--

## --seed-contents--

```js
function heighwayDragon() {

  return true;
}

heighwayDragon();
```

# --solutions--

```js
// solution required
```
