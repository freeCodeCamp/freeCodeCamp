---
id: 587d7b85367417b2b2512b38
title: Verwendung des Zuweisungsoperators anstelle des Gleichheitsoperators abfangen
challengeType: 1
forumTopicId: 301191
dashedName: catch-use-of-assignment-operator-instead-of-equality-operator
---

# --description--

Verzweigende Programme, d.h. solche, die verschiedene Dinge tun, wenn bestimmte Bedingungen erfüllt sind, basieren auf `if`, `else if` und `else` Anweisungen in JavaScript. Die Bedingung hat manchmal die Form einer Prüfung, ob ein Ergebnis gleich einem Wert ist.

Diese Logik kann (zumindest im Englischen und Deutschen) als "wenn x gleich y ist, dann ..." ausgedrückt werden, was buchstäblich mit dem `=` oder Zuweisungsoperator in Code übersetzt werden kann. Das führt zu einem unerwarteten Kontrollfluss in deinem Programm.

Wie in den vorherigen Aufgaben behandelt, ordnet der Zuweisungsoperator (`=`) in JavaScript einem Variablennamen einen Wert zu. Und die Operatoren `==` und `===` prüfen auf Gleichheit (das Tripel `===` prüft auf strikte Gleichheit, d. h. Wert und Typ sind gleich).

Der folgende Code weist `x` den Wert 2 zu, was als `true` ausgewertet wird. Fast jeder Wert in JavaScript wird als `true` ausgewertet, außer den sogenannten "falsy" Werten: `false`, `0`, `""` (ein leerer String), `NaN`, `undefined` und `null`.

```js
let x = 1;
let y = 2;
if (x = y) {

} else {

}
```

In diesem Beispiel wird der Codeblock innerhalb der `if`-Anweisung für jeden beliebigen Wert von `y` ausgeführt, es sei denn, `y` ist falsy. Der `else`-Block, von dem wir erwarten, dass er hier ausgeführt wird, wird nicht wirklich ausgeführt.

# --instructions--

Korrigiere die Bedingung, damit das Programm die richtige Verzweigung ausführt und `result` der richtige Wert zugewiesen wird.

# --hints--

Dein Code sollte die Bedingung so ändern, dass er auf Gleichheit prüft, anstatt eine Zuweisung zu verwenden.

```js
assert(result == 'Not equal!');
```

Die Bedingung sollte entweder `==` oder `===` verwenden, um auf Gleichheit zu testen.

```js
assert(code.match(/x\s*?===?\s*?y/g));
```

# --seed--

## --seed-contents--

```js
let x = 7;
let y = 9;
let result = "to come";

if(x = y) {
  result = "Equal!";
} else {
  result = "Not equal!";
}

console.log(result);
```

# --solutions--

```js
let x = 7;
let y = 9;
let result = "to come";

if(x === y) {
 result = "Equal!";
} else {
 result = "Not equal!";
}

console.log(result);
```
