---
id: 5900f4a71000cf542c50ffba
title: 'Problem 315: Digital root clocks'
challengeType: 1
forumTopicId: 301971
dashedName: problem-315-digital-root-clocks
---

# --description--

<img class="img-responsive center-block" alt="Animation von Sams und Max' Uhren, die digitale Wurzeln ausgehend von 137 berechnen" src="https://cdn.freecodecamp.org/curriculum/project-euler/digital-root-clocks.gif" style="background-color: white; padding: 10px;" />

Sam und Max sollen zwei Digitaluhren in zwei "Digitale Wurzel-Uhren" umwandeln.

Eine digitale Wurzel-Uhr ist eine digitale Uhr, die Schritt für Schritt digitale Wurzeln berechnet.

Wenn eine Uhr mit einer Zahl gefüttert wird, zeigt sie diese an und beginnt dann mit der Berechnung, wobei sie alle Zwischenwerte anzeigt, bis sie zum Ergebnis kommt. Wenn die Uhr zum Beispiel mit der Zahl 137 gefüttert wird, zeigt sie: `137` → `11` → `2` an und wird dann schwarz, während sie auf die nächste Zahl wartet.

Jede digitale Zahl besteht aus einigen Lichtsegmenten: drei horizontalen (oben, Mitte, unten) und vier vertikalen (oben links, oben rechts, unten links, unten rechts). Die Zahl `1` besteht aus vertikal oben-rechts und unten-rechts, die Zahl `4` besteht aus der mittleren Horizontalen und Vertikalen oben-links, oben-rechts und unten-rechts. Nummer `8` beleuchtet sie alle.

Die Uhren verbrauchen nur dann Energie, wenn die Segmente ein- und ausgeschaltet werden. Das Einschalten einer `2` kostet 5 Übergänge, während ein `7` nur 4 Übergänge kostet.

Sam und Max haben zwei verschiedene Uhren gebaut.

Sams Uhr wird z.B. mit der Nummer 137 gespeist: die Uhr zeigt `137`, dann wird das Panel ausgeschaltet, dann wird die nächste Zahl (`11`) eingeschaltet, dann wird das Panel wieder ausgeschaltet und schließlich wird die letzte Zahl (`2`) ein- und nach einiger Zeit wieder ausgeschaltet.

Für das Beispiel mit der Nummer 137 benötigt Sams Uhr:

- `137`: $(2 + 5 + 4) × 2 = 22$ Übergänge (`137` an/aus).
- `11`: $(2 + 2) × 2 = 8$ Übergänge (`11` an/aus).
- `2`: $(5) × 2 = 10$ Übergänge (`2` an/aus).

Für eine Gesamtsumme von 40 Übergängen.

Max's Uhr funktioniert anders. Anstatt das gesamte Panel abzuschalten, ist sie klug genug, nur jene Segmente auszuschalten, die für die nächste Nummer nicht benötigt werden.

Für die Nummer 137 ist Max' Uhr erforderlich:

- `137` : $2 + 5 + 4 = 11$ Übergänge (`137` angeschaltet), $7$ Übergänge (um die Segmente auszuschalten, die für Nummer `11` nicht benötigt werden).
- `11` : $0$ transitions (number `11` is already turned on correctly), $3$ transitions (to turn off the first `1` and the bottom part of the second `1`; the top part is common with number `2`).
- `2` : $4$ Übergänge (um die verbleibenden Segmente einzuschalten, um eine `2` zu erhalten), $5$ Übergänge (um die Zahlen `2` auszuschalten).

Für eine Gesamtsumme von 30 Übergängen.

Natürlich verbraucht die Uhr von Max weniger Strom als die von Sam. Den beiden Uhren werden alle Primzahlen zwischen $A = {10}^7$ und $B = 2 × {10}^7$ zugeführt. Ermittle die Differenz zwischen der Gesamtzahl der Übergänge, die Sams Uhr benötigt, und derjenigen, die Max' Uhr benötigt.

# --hints--

`digitalRootClocks()` sollte `13625242` zurückgeben.

```js
assert.strictEqual(digitalRootClocks(), 13625242);
```

# --seed--

## --seed-contents--

```js
function digitalRootClocks() {

  return true;
}

digitalRootClocks();
```

# --solutions--

```js
// solution required
```
