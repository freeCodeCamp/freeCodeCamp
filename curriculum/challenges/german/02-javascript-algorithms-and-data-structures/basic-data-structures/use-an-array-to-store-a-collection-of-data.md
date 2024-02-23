---
id: 587d7b7e367417b2b2512b20
title: Verwende ein Array, um eine Sammlung von Daten zu speichern
challengeType: 1
forumTopicId: 301167
dashedName: use-an-array-to-store-a-collection-of-data
---

# --description--

Unten ist ein Beispiel für die einfachste Implementierung einer Array-Datenstruktur. Dies ist als <dfn>eindimensionales Array</dfn>bekannt und bedeutet, dass es nur eine Ebene hat oder dass keine anderen Arrays in ihm verschachtelt sind. Beachte, dass sie <dfn>Booleans</dfn>, <dfn>Strings</dfn> und <dfn>Zahlen</dfn> enthält, neben anderen gültigen JavaScript-Datentypen:

```js
let simpleArray = ['one', 2, 'three', true, false, undefined, null];
console.log(simpleArray.length);
```

Der `console.log`-Aufruf zeigt `7` an.

Alle Arrays haben eine Längeneigenschaft, die, wie oben gezeigt, sehr einfach mit der Syntax `Array.length` abgerufen werden kann. Eine komplexere Implementierung eines Arrays ist im Folgenden zu sehen. Dies wird als <dfn>mehrdimensionales Array</dfn> bezeichnet, oder ein Array, das andere Arrays enthält. Beachte, dass dieses Array auch JavaScript-<dfn>Objekte</dfn> enthält, die wir im nächsten Abschnitt genauer unter die Lupe nehmen werden, aber für den Moment musst du nur wissen, dass Arrays auch komplexe Objekte speichern können.

```js
let complexArray = [
  [
    {
      one: 1,
      two: 2
    },
    {
      three: 3,
      four: 4
    }
  ],
  [
    {
      a: "a",
      b: "b"
    },
    {
      c: "c",
      d: "d"
    }
  ]
];
```

# --instructions--

Wir haben eine Variable namens `yourArray` definiert. Vervollständige die Anweisung, indem du der Variable `yourArray` ein Array mit einer Länge von mindestens 5 Elementen zuweist. Dein Array sollte mindestens einen <dfn>String</dfn>, eine <dfn>Zahl</dfn> und ein <dfn>Boolean</dfn> enthalten.

# --hints--

`yourArray` soll ein Array sein.

```js
assert.strictEqual(Array.isArray(yourArray), true);
```

`yourArray` soll mindestens 5 Elemente lang sein.

```js
assert.isAtLeast(yourArray.length, 5);
```

`yourArray` soll mindestens einen Boolean (`boolean`) enthalten.

```js
assert(yourArray.filter((el) => typeof el === 'boolean').length >= 1);
```

`yourArray` soll mindestens eine Zahl (`number`) enthalten.

```js
assert(yourArray.filter((el) => typeof el === 'number').length >= 1);
```

`yourArray` soll mindestens einen String (`string`) enthalten.

```js
assert(yourArray.filter((el) => typeof el === 'string').length >= 1);
```

# --seed--

## --seed-contents--

```js
let yourArray; // Change this line
```

# --solutions--

```js
let yourArray = ['a string', 100, true, ['one', 2], 'another string'];
```
