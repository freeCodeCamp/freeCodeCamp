---
id: 587d7b87367417b2b2512b40
title: Vergleich der Geltungsbereiche der Schlüsselwörter var und let
challengeType: 1
forumTopicId: 301195
dashedName: compare-scopes-of-the-var-and-let-keywords
---

# --description--

Wenn du mit `let` nicht vertraut bist, schau dir <a href="/learn/javascript-algorithms-and-data-structures/basic-javascript/explore-differences-between-the-var-and-let-keywords" target="_blank" rel="noopener noreferrer nofollow">diese Aufgabe über den Unterschied von <code>let</code> und <code>var</code> an</a>.

Wenn du eine Variable mit dem Schlüsselwort `var` deklarierst, wird sie global deklariert oder lokal, wenn sie innerhalb einer Funktion deklariert wird.

Das Schlüsselwort `let` verhält sich ähnlich, aber mit einigen zusätzlichen Funktionen. Wenn du eine Variable mit dem Schlüsselwort `let` innerhalb eines Blocks, einer Anweisung oder eines Ausdrucks deklarierst, ist ihr Geltungsbereich auf diesen Block, diese Anwendung oder diesen Ausdruck beschränkt.

Zum Beispiel:

```js
var numArray = [];
for (var i = 0; i < 3; i++) {
  numArray.push(i);
}
console.log(numArray);
console.log(i);
```

Hier wird die Konsole die Werte `[0, 1, 2]` und `3` anzeigen.

Durch das Schlüsselwort `var` ist `i` global deklariert. Wenn also `i++` ausgeführt wird, aktualisiert das die globale Variable. Dieser Code ist ähnlich wie der Nachfolgende:

```js
var numArray = [];
var i;
for (i = 0; i < 3; i++) {
  numArray.push(i);
}
console.log(numArray);
console.log(i);
```

Hier wird die Konsole die Werte `[0, 1, 2]` und `3` anzeigen.

Dieses Verhalten wird Probleme verursachen, wenn du eine Funktion erstellst und sie zur späteren Verwendung innerhalb einer `for`-Schleife speicherst, die die Variable `i` verwendet. Das liegt daran, dass sich die gespeicherte Funktion immer auf den Wert der aktualisierten globalen Variable `i` bezieht.

```js
var printNumTwo;
for (var i = 0; i < 3; i++) {
  if (i === 2) {
    printNumTwo = function() {
      return i;
    };
  }
}
console.log(printNumTwo());
```

Hier wird in der Konsole der Wert `3` angezeigt.

Wie du sehen kannst, gibt `printNumTwo()` 3 und nicht 2 aus. Das liegt daran, dass der Wert `i` zugewiesen wurde, aktualisiert wurde und `printNumTwo()` das globale `i` zurückgibt und nicht den Wert, den `i` hatte, als die Funktion in der for-Schleife erstellt wurde. Das Schlüsselwort `let` verhält sich nicht so:

```js
let printNumTwo;
for (let i = 0; i < 3; i++) {
  if (i === 2) {
    printNumTwo = function() {
      return i;
    };
  }
}
console.log(printNumTwo());
console.log(i);
```

Hier zeigt die Konsole den Wert `2` an und die Fehlermeldung `i is not defined`.

`i` ist nicht definiert, weil es nicht im globalen Geltungsbereich deklariert wurde. Sie wird nur innerhalb der `for`-Schleifenanweisung deklariert. `printNumTwo()` gab den richtigen Wert zurück, weil drei verschiedene `i`-Variablen mit eindeutigen Werten (0, 1 und 2) durch das Schlüsselwort `let` innerhalb der Schleifenanweisung erstellt wurden.

# --instructions--

Ändere den Code so, dass `i`, das in der `if`-Anweisung deklariert wird, eine andere Variable ist als `i`, das in der ersten Zeile der Funktion deklariert wird. Achte darauf, dass du das Schlüsselwort `var` nirgendwo in deinem Code verwendest.

Diese Übung soll den Unterschied zwischen den Schlüsselwörtern `var` und `let` verdeutlichen, die der deklarierten Variable den Geltungsbereich zuweisen. Wenn du eine Funktion programmierst, die der in dieser Übung verwendeten ähnelt, ist es oft besser, verschiedene Variablennamen zu verwenden, um Verwechslungen zu vermeiden.

# --hints--

`var` sollte nicht im Code vorhanden sein.

```js
assert(!code.match(/var/g));
```

Die Variable `i`, die in der `if`-Anweisung deklariert wird, sollte gleich dem String `block scope` sein.

```js
assert(code.match(/(i\s*=\s*).*\s*.*\s*.*\1('|")block\s*scope\2/g));
```

`checkScope()` sollte den String `function scope` zurückgeben.

```js
assert(checkScope() === 'function scope');
```

# --seed--

## --seed-contents--

```js
function checkScope() {
  var i = 'function scope';
  if (true) {
    i = 'block scope';
    console.log('Block scope i is: ', i);
  }
  console.log('Function scope i is: ', i);
  return i;
}
```

# --solutions--

```js
function checkScope() {
  let i = 'function scope';
  if (true) {
    let i = 'block scope';
    console.log('Block scope i is: ', i);
  }

  console.log('Function scope i is: ', i);
  return i;
}
```
