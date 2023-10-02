---
id: 587d7b8e367417b2b2512b5e
title: Vermeide Veränderungen und Nebeneffekte durch die Verwendung von funktionaler Programmierung
challengeType: 1
forumTopicId: 301228
dashedName: avoid-mutations-and-side-effects-using-functional-programming
---

# --description--

Falls du es noch nicht herausgefunden hast: Das Problem in der letzten Aufgabe lag beim `splice`-Aufruf in der `tabClose()`-Funktion. Leider ändert `splice` das ursprüngliche Array, auf dem es aufgerufen wird so, dass der zweite Aufruf dazu ein modifiziertes Array verwendet und unerwartete Ergebnisse lieferte.

Dies ist ein kleines Beispiel für ein viel größeres Muster - du rufst eine Funktion für eine Variable, ein Array oder ein Objekt auf und die Funktion ändert die Variable oder etwas im Objekt.

Eines der Kernprinzipien der funktionalen Programmierung ist, die Dinge nicht zu ändern. Änderungen führen zu Bugs. Es ist einfacher, Fehler zu vermeiden, wenn du weißt, dass deine Funktionen nichts verändern, einschließlich der Funktionsargumente oder einer globalen Variable.

Das vorherige Beispiel hatte keine komplizierten Aktionen, aber die `splice` Methode veränderte das ursprüngliche Array und führte zu einem Fehler.

Denk daran, dass in der funktionalen Programmierung das Ändern oder Verändern von Dingen <dfn>Mutation</dfn> genannt wird und das Ergebnis wird <dfn>Nebenwirkung</dfn> genannt. Eine Funktion sollte idealerweise eine <dfn>pure function</dfn> sein, das heißt, sie verursacht keine Nebenwirkungen.

Lass uns versuchen, diese Disziplin zu meistern und keine Variablen oder Objekte in unserem Code zu verändern.

# --instructions--

Fülle den Code für die Funktion `incrementer` so aus, dass sie den Wert der globalen Variablen `fixedValue` plus eins zurückgibt.

# --hints--

Deine Funktion `incrementer` sollte den Wert von `fixedValue` (d.h. `4`) nicht ändern.

```js
incrementer();
assert(fixedValue === 4);
```

Deine `incrementer` Funktion sollte einen Wert zurückgeben, der größer ist als der Wert von `fixedValue`.

```js
const __newValue = incrementer();
assert(__newValue === 5);
```

Deine `incrementer` Funktion sollte einen Wert basierend auf dem globalen `fixedValue` Variablenwert zurückgeben.

```js
(function () {
  fixedValue = 10;
  const newValue = incrementer();
  assert(fixedValue === 10 && newValue === 11);
  fixedValue = 4;
})();
```

# --seed--

## --seed-contents--

```js
// The global variable
let fixedValue = 4;

function incrementer() {
  // Only change code below this line


  // Only change code above this line
}
```

# --solutions--

```js
let fixedValue = 4

function incrementer() {
  return fixedValue + 1
}
```
