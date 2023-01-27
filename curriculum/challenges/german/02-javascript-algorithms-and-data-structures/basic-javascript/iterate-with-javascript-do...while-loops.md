---
id: 5a2efd662fb457916e1fe604
title: Mit JavaScript Do...While-Schleifen iterieren
challengeType: 1
videoUrl: 'https://scrimba.com/c/cDqWGcp'
forumTopicId: 301172
dashedName: iterate-with-javascript-do---while-loops
---

# --description--

Die nächste Art von Schleife, die du lernen wirst, heißt `do...while`-Schleife. Sie wird `do...while`-Schleife genannt, weil sie zuerst `do` einen Durchlauf des Codes innerhalb der Schleife macht, egal was passiert, und dann die Schleife `while` weiterlaufen lässt, wenn die angegebene Bedingung als `true` ausgewertet wird.

```js
const ourArray = [];
let i = 0;

do {
  ourArray.push(i);
  i++;
} while (i < 5);
```

Das obige Beispiel verhält sich ähnlich wie andere Arten von Schleifen, und das resultierende Array sieht folgendermaßen aus: `[0, 1, 2, 3, 4]`. Was die `do...while`-Schleife jedoch von anderen Schleifen unterscheidet, ist, wie sie sich verhält, wenn die Bedingung bei der ersten Überprüfung fehlschlägt. Schauen wir uns das in Aktion an. Hier ist eine reguläre `while`-Schleife, die den Code in der Schleife so lange ausführt, wie `i < 5` gilt:

```js
const ourArray = []; 
let i = 5;

while (i < 5) {
  ourArray.push(i);
  i++;
}
```

In diesem Beispiel initialisieren wir den Wert von `ourArray` auf ein leeres Array und den Wert von `i` auf 5. Wenn wir die `while`-Schleife ausführen, wird die Bedingung als `false` ausgewertet, weil `i` nicht kleiner als 5 ist. Das Ergebnis ist, dass `ourArray` am Ende keine Werte mehr enthält und immer noch wie `[]` aussieht, wenn der Code im obigen Beispiel vollständig ausgeführt wurde. Sieh dir jetzt eine `do...while`-Schleife an:

```js
const ourArray = []; 
let i = 5;

do {
  ourArray.push(i);
  i++;
} while (i < 5);
```

In diesem Fall initialisieren wir den Wert von `i` auf 5, genau wie in der `while` Schleife. Wenn wir zur nächsten Zeile kommen, gibt es keine Bedingung, die wir auswerten müssen, also gehen wir zum Code innerhalb der geschweiften Klammern und führen ihn aus. Wir fügen dem Array ein einzelnes Element hinzu und erhöhen dann `i`, bevor wir zur Bedingungsprüfung kommen. Wenn wir schließlich die Bedingung `i < 5` in der letzten Zeile auswerten, sehen wir, dass `i` jetzt 6 ist, was die Bedingungsprüfung nicht bestanden hat, also verlassen wir die Schleife und sind fertig. Am Ende des obigen Beispiels ist der Wert von `ourArray` `[5]`. Eine `do...while`-Schleife sorgt dafür, dass der Code innerhalb der Schleife mindestens einmal ausgeführt wird. Versuchen wir, eine `do...while`-Schleife zum Laufen zu bringen, indem wir Werte in ein Array einfügen.

# --instructions--

Ändere die `while`-Schleife im Code in eine `do...while`-Schleife, damit die Schleife nur die Zahl `10` in `myArray` einfügt und `i` gleich `11` ist, wenn dein Code zu Ende ausgeführt wurde.

# --hints--

Du solltest für diese Übung eine `do...while`-Schleife verwenden.

```js
assert(code.match(/do/g));
```

`myArray` sollte gleich `[10]` sein.

```js
assert.deepEqual(myArray, [10]);
```

`i` sollte gleich `11` sein

```js
assert.equal(i, 11);
```

# --seed--

## --after-user-code--

```js
if(typeof myArray !== "undefined"){(function(){return myArray;})();}
```

## --seed-contents--

```js
// Setup
const myArray = [];
let i = 10;

// Only change code below this line
while (i < 5) {
  myArray.push(i);
  i++;
}
```

# --solutions--

```js
const myArray = [];
let i = 10;
do {
  myArray.push(i);
  i++;
} while (i < 5)
```
