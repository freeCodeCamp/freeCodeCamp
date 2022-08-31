---
id: 587d7b85367417b2b2512b3a
title: Fange Argumente ab, die beim Aufruf einer Funktion in der falschen Reihenfolge übergeben wurden
challengeType: 1
forumTopicId: 301184
dashedName: catch-arguments-passed-in-the-wrong-order-when-calling-a-function
---

# --description--

Wenn man die Diskussion über aufrufende Funktionen fortsetzt, ist der nächste Fehler, auf den man achten sollte, die Angabe der Argumente einer Funktion in der falschen Reihenfolge. Wenn die Argumente von unterschiedlichem Typ sind, z. B. eine Funktion, die ein Array und eine ganze Zahl (Integer) erwartet, wird dies wahrscheinlich einen Laufzeitfehler auslösen. Wenn die Argumente vom gleichen Typ sind (zum Beispiel alle Integer), dann ergibt die Logik des Codes keinen Sinn. Stelle sicher, dass alle erforderlichen Argumente in der richtigen Reihenfolge angegeben sind, um diese Probleme zu vermeiden.

# --instructions--

Die Funktion `raiseToPower` erhöht eine Basis um einen Exponenten. Leider wird sie nicht richtig aufgerufen - korrigiere den Code, damit der Wert von `power` die erwartete 8 ergibt.

# --hints--

Dein Code sollte die Variable `power` so ändern, dass sie 2³ entspricht und nicht 3².

```js
assert(power == 8);
```

Dein Code sollte die richtige Reihenfolge der Argumente für den Funktionsaufruf von `raiseToPower` verwenden.

```js
assert(code.match(/raiseToPower\(\s*?base\s*?,\s*?exp\s*?\);/g));
```

# --seed--

## --seed-contents--

```js
function raiseToPower(b, e) {
  return Math.pow(b, e);
}

let base = 2;
let exp = 3;
let power = raiseToPower(exp, base);
console.log(power);
```

# --solutions--

```js
function raiseToPower(b, e) {
 return Math.pow(b, e);
}

let base = 2;
let exp = 3;
let power = raiseToPower(base, exp);
console.log(power);
```
