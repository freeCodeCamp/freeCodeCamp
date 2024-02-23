---
id: cf1111c1c11feddfaeb5bdef
title: Iterieren mit JavaScript For-Schleifen
challengeType: 1
videoUrl: 'https://scrimba.com/c/c9yNVCe'
forumTopicId: 18219
dashedName: iterate-with-javascript-for-loops
---

# --description--

Du kannst denselben Code mehrmals ausführen, indem du eine Schleife verwendest.

Die häufigste Art von JavaScript-Schleifen wird `for`-Schleife genannt, weil sie eine bestimmte Anzahl von Malen ausgeführt wird.

For-Schleifen werden mit drei optionalen Ausdrücken deklariert, die durch Semikolons getrennt sind:

`for (a; b; c)`, wobei `a` die Initialisierungsanweisung, `b` die Bedingungsanweisung und `c` der endgültige Ausdruck ist.

Die Initialisierungsanweisung wird nur einmal ausgeführt, bevor die Schleife beginnt. Sie wird normalerweise verwendet, um deine Schleifenvariable zu definieren und einzurichten.

Die Bedingungsanweisung wird zu Beginn jeder Schleifeniteration ausgewertet und wird so lange fortgesetzt, wie sie `true` ist. Wenn die Bedingung zu Beginn der Iteration `false` ist, wird die Schleife nicht weiter ausgeführt. Das bedeutet, dass deine Schleife nie ausgeführt wird, wenn die Bedingung als falsch beginnt.

Der abschließende Ausdruck wird am Ende jeder Schleifeniteration vor der nächsten Bedingungsprüfung ausgeführt und dient normalerweise dazu, deinen Schleifenzähler zu erhöhen (inkrementieren) oder zu verringern (dekrementieren).

Im folgenden Beispiel initialisieren wir mit `i = 0` und iterieren, solange unsere Bedingung `i < 5` wahr ist. Wir erhöhen `i` in jeder Schleifeniteration um `1` mit `i++` als abschließendem Ausdruck.

```js
const ourArray = [];

for (let i = 0; i < 5; i++) {
  ourArray.push(i);
}
```

`ourArray` wird jetzt den Wert `[0, 1, 2, 3, 4]` haben.

# --instructions--

Verwende eine `for`-Schleife, um die Werte 1 bis 5 in `myArray` zu übertragen.

# --hints--

Du solltest dafür eine `for`-Schleife verwenden.

```js
assert(/for\s*\([^)]+?\)/.test(code));
```

`myArray` sollte gleich `[1, 2, 3, 4, 5]` sein.

```js
assert.deepEqual(myArray, [1, 2, 3, 4, 5]);
```

# --seed--

## --after-user-code--

```js
if (typeof myArray !== "undefined"){(function(){return myArray;})();}
```

## --seed-contents--

```js
// Setup
const myArray = [];

// Only change code below this line

```

# --solutions--

```js
const myArray = [];
for (let i = 1; i < 6; i++) {
  myArray.push(i);
}
```
