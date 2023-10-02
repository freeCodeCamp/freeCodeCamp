---
id: 5900f4591000cf542c50ff6b
title: 'Problem 236: Luxury Hampers'
challengeType: 1
forumTopicId: 301881
dashedName: problem-236-luxury-hampers
---

# --description--

Die Anbieter "A" und "B" lieferten die folgende Anzahl von Produkten für den Markt für Luxuskörbe:

| Produkt            | 'A'  | 'B'  |
| ------------------ | ---- | ---- |
| Beluga-Kaviar      | 5248 | 640  |
| Weihnachtskuchen   | 1312 | 1888 |
| Gammon Joint       | 2624 | 3776 |
| Vintage-Port       | 5760 | 3776 |
| Champagner Trüffel | 3936 | 5664 |

Obwohl sich die Lieferanten sehr bemühen, ihre Waren in einwandfreiem Zustand zu versenden, kommt es zwangsläufig zu einem gewissen Verderb - d.h. zu verdorbenen Produkten.

Die Anbieter vergleichen ihre Leistungen anhand von zwei Arten von Statistiken:

- Die fünf Verderbnisraten pro Produkt für jeden Lieferanten entsprechen der Anzahl der verdorbenen Produkte geteilt durch die Anzahl der gelieferten Produkte, und zwar für jedes der fünf Produkte der Reihe nach.
- Die Gesamtverderbnisrate für jeden Lieferanten ist gleich der Gesamtzahl der verdorbenen Produkte geteilt durch die Gesamtzahl der von diesem Lieferanten gelieferten Produkte.

Zu ihrer Überraschung stellten die Lieferanten fest, dass jede der fünf Verderbnisraten pro Produkt bei "B" um denselben Faktor (Verhältnis der Verderbnisraten), $m > 1$, schlechter (höher) war als bei "A"; und dennoch war paradoxerweise die Gesamtverderbnisrate bei "A" schlechter als bei "B", ebenfalls um einen Faktor $m$.

Es gibt fünfunddreißig $m > 1$, für die dieses überraschende Ergebnis eingetreten sein könnte, wobei die kleinste davon $\frac{1476}{1475}$ ist.

Was ist der größtmögliche Wert von $m$? Gib deine Antwort als Zeichenkette mit dem auf die kleinsten Terme reduzierten Bruch in der Form `u/v` an.

# --hints--

`luxuryHampers()` sollte einen String zurückgeben.

```js
assert(typeof luxuryHampers() === 'string');
```

`luxuryHampers()` sollte einen String `123/59` zurückgeben.

```js
assert.strictEqual(luxuryHampers(), '123/59');
```

# --seed--

## --seed-contents--

```js
function luxuryHampers() {

  return true;
}

luxuryHampers();
```

# --solutions--

```js
// solution required
```
