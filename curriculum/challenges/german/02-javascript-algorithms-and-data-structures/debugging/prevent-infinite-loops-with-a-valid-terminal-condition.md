---
id: 587d7b86367417b2b2512b3d
title: Verhindere Endlosschleifen mit einer gültigen Abschlussbedingung
challengeType: 1
forumTopicId: 301192
dashedName: prevent-infinite-loops-with-a-valid-terminal-condition
---

# --description--

Das letzte Thema ist die gefürchtete Endlosschleife. Schleifen sind großartige Werkzeuge, wenn dein Programm einen Codeblock eine bestimmte Anzahl von Malen ausführen soll oder bis eine Bedingung erfüllt ist, aber sie brauchen eine Abschlussbedingung, die die Schleife beendet. Endlosschleifen können dazu führen, dass der Browser einfriert oder abstürzt und die Programmausführung allgemein beeinträchtigt wird, was niemand will.

In der Einleitung zu diesem Abschnitt gab es ein Beispiel für eine Endlosschleife - sie hatte keine Abschlussbedingung, um aus der `while`-Schleife innerhalb von `loopy()` heraus zu kommen. Rufe diese Funktion NICHT auf!

```js
function loopy() {
  while(true) {
    console.log("Hello, world!");
  }
}
```

Es ist die Aufgabe des Programmierers, dafür zu sorgen, dass die Abschlussbedingung, die dem Programm sagt, wann es aus dem Schleifencode herauskommen soll, schließlich erreicht wird. Ein Fehler ist das Inkrementieren (Erhöhen) oder Dekrementieren (Verringern) einer Zählervariablen in der falschen Richtung vom Endzustand aus. Eine andere Möglichkeit ist das versehentliche Zurücksetzen eines Zählers oder einer Indexvariablen innerhalb des Schleifencodes, anstatt sie zu inkrementieren oder zu dekrementieren.

# --instructions--

Die Funktion `myFunc()` enthält eine Endlosschleife, weil die Abschlussbedingung `i != 4` niemals `false` ergibt (und die Schleife unterbricht) - `i` wird bei jedem Durchlauf um 2 erhöht und springt direkt über 4, da `i` zu Beginn ungerade ist. Korrigiere den Vergleichsoperator in der Abschlussbedingung, damit die Schleife nur für `i` kleiner oder gleich 4 läuft.

# --hints--

Dein Code sollte den Vergleichsoperator in der Abschlussbedingung (dem mittleren Teil) der `for`-Schleife ändern.

```js
assert(code.match(/i\s*?<=\s*?4;/g).length == 1);
```

Dein Code sollte den Vergleichsoperator in der Abschlussbedingung der Schleife korrigieren.

```js
assert(!code.match(/i\s*?!=\s*?4;/g));
```

# --seed--

## --seed-contents--

```js
function myFunc() {
  for (let i = 1; i != 4; i += 2) {
    console.log("Still going!");
  }
}
```

# --solutions--

```js
function myFunc() {
 for (let i = 1; i <= 4; i += 2) {
   console.log("Still going!");
 }
}
```
