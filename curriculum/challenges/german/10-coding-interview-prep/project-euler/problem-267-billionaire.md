---
id: 5900f4771000cf542c50ff8a
title: 'Problem 267: Milliardär'
challengeType: 1
forumTopicId: 301916
dashedName: problem-267-billionaire
---

# --description--

Du erhälst eine einzigartige Investitionsmöglichkeit.

Wenn du mit einem Kapital von £1 beginnst, kannst du einen festen Anteil $f$ deines Kapitals wählen, um 1000 Mal auf einen fairen Münzwurf zu wetten.

Dein Gewinn ist das Doppelte deines Einsatzes bei Kopf und du verlierst deinen Einsatz bei Zahl.

Zum Beispiel, wenn $f = \frac{1}{4}$, setzt du für den ersten Wurf £0.25, wenn Kopf erscheint, gewinnst du £0.5 und hast somit £1.5. Dann setzt du £0.375 und wenn der zweite Wurf Zahl ergibt, hast du £1.125.

Wenn du $f$ wählst, um deine Chancen zu maximieren, nach 1.000 Umdrehungen mindestens £1.000.000.000 zu besitzen, wie hoch ist dann die Wahrscheinlichkeit, dass du Milliardär wirst?

Alle Berechnungen werden als genau angenommen (keine Rundungen), gebe aber deine Antwort gerundet auf 12 Dezimalstellen hinter dem Komma in der Form 0.abcdefghijkl an.

# --hints--

`billionaire()` sollte `0.999992836187` zurückgeben.

```js
assert.strictEqual(billionaire(), 0.999992836187);
```

# --seed--

## --seed-contents--

```js
function billionaire() {

  return true;
}

billionaire();
```

# --solutions--

```js
// solution required
```
