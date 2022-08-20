---
id: 587d7b8e367417b2b2512b5f
title: Übergabe von Argumenten zur Vermeidung externer Abhängigkeiten in einer Funktion
challengeType: 1
forumTopicId: 301234
dashedName: pass-arguments-to-avoid-external-dependence-in-a-function
---

# --description--

Die letzte Aufgabe hat uns den Prinzipien der funktionalen Programmierung einen Schritt näher gebracht, aber es fehlt noch etwas.

Wir haben den Wert der globalen Variable nicht verändert, aber die Funktion `incrementer` würde nicht funktionieren, wenn die globale Variable `fixedValue` nicht vorhanden wäre.

Ein weiterer Grundsatz der funktionalen Programmierung ist, dass du deine Abhängigkeiten immer explizit deklarierst. Das heißt, wenn eine Funktion vom Vorhandensein einer Variablen oder eines Objekts abhängt, übergibst du diese Variable oder dieses Objekt direkt als Argument an die Funktion.

Aus diesem Prinzip ergeben sich mehrere gute Konsequenzen. Die Funktion ist einfacher zu testen, du weißt genau, welche Eingaben sie benötigt und sie hängt nicht von anderen Teilen deines Programms ab.

Das kann dir mehr Sicherheit geben, wenn du den Code änderst, entfernst oder neu hinzufügst. Du würdest wissen, was du ändern kannst und was nicht, und du könntest sehen, wo die möglichen Fallstricke sind.

Schließlich würde die Funktion immer die gleiche Ausgabe für die gleiche Menge an Eingaben produzieren, egal welcher Teil des Codes sie ausführt.

# --instructions--

Aktualisieren wir die Funktion `incrementer`, um ihre Abhängigkeiten klar zu deklarieren.

Schreibe die Funktion `incrementer` so, dass sie ein Argument annimmt und dann ein Ergebnis zurückgibt, nachdem sie den Wert um eins erhöht hat.

# --hints--

Deine Funktion `incrementer` sollte den Wert von `fixedValue` (der `4` ist) nicht verändern.

```js
assert(fixedValue === 4);
```

Deine Funktion `incrementer` sollte ein Argument benötigen.

```js
assert(incrementer.length === 1);
```

Deine Funktion `incrementer` sollte einen Wert zurückgeben, der um eins größer ist als der Wert von `fixedValue`.

```js
const __newValue = incrementer(fixedValue);
assert(__newValue === 5);
```

# --seed--

## --seed-contents--

```js
// The global variable
let fixedValue = 4;

// Only change code below this line
function incrementer() {


  // Only change code above this line
}
```

# --solutions--

```js
let fixedValue = 4;

function incrementer(fixedValue) {
  return fixedValue + 1;
}
```
