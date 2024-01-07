---
id: 587d78b3367417b2b2512b11
title: Füge Elemente mit der splice() Methode hinzu
challengeType: 1
forumTopicId: 301152
dashedName: add-items-using-splice
---

# --description--

Kannst du dich an die letzte Herausforderung erinnern, in der wir erwähnten, dass `splice()` bis zu drei Parameter aufnehmen kann? Nun, du kannst den dritten Parameter, welcher aus einem oder mehreren Element(en) besteht, dem Array hinzufügen. Das kann unglaublich nützlich sein, um schnell ein Element oder ein Satz an Elementen für ein anderes auszutauschen.

```js
const numbers = [10, 11, 12, 12, 15];
const startIndex = 3;
const amountToDelete = 1;

numbers.splice(startIndex, amountToDelete, 13, 14);
console.log(numbers);
```

Das zweite Auftreten von `12` wird entfernt und wir fügen `13` und `14` an den gleichen Index hinzu. Der `numbers` Array würde jetzt `[ 10, 11, 12, 13, 14, 15 ]` sein.

Hier starten wir mit einem Zahlen-Array. Anschließend übergeben wir Folgendes an `splice()`: Der Index, mit dem Elemente gelöscht werden sollen (3), die Anzahl der zu löschenden Elemente (1), und die verbleibenden Argumente (13, 14) werden am selben Index beginnend eingefügt. Beachte, dass es beliebig viele Elemente geben kann (durch Kommata getrennt), welche dem `amountToDelete` folgen, von denen jedes eingefügt wird.

# --instructions--

Wir haben eine Funktion `htmlColorNames` definiert, die ein Array aus HTML-Farben als Argument verwendet. Ändere die Funktion, indem du `splice()` benutzt, um die ersten zwei Elemente des Arrays zu entfernen und um `'DarkSalmon'` und `'BlanchedAlmond'` an ihre jeweiligen Stellen hinzuzufügen.

# --hints--

`htmlColorNames` sollte `["DarkSalmon", "BlanchedAlmond", "LavenderBlush", "PaleTurquoise", "FireBrick"]` zurückgeben.

```js
assert.deepEqual(
  htmlColorNames([
    'DarkGoldenRod',
    'WhiteSmoke',
    'LavenderBlush',
    'PaleTurquoise',
    'FireBrick'
  ]),
  [
    'DarkSalmon',
    'BlanchedAlmond',
    'LavenderBlush',
    'PaleTurquoise',
    'FireBrick'
  ]
);
```

Die Funktion `htmlColorNames` sollte die Methode `splice()` verwenden.

```js
assert(/.splice/.test(code));
```

Du solltest nicht`shift()` oder `unshift()` verwenden.

```js
assert(!/shift|unshift/.test(code));
```

Du solltest keine Array-Klammernotation verwenden.

```js
assert(!/\[\d\]\s*=/.test(code));
```

# --seed--

## --seed-contents--

```js
function htmlColorNames(arr) {
  // Only change code below this line

  // Only change code above this line
  return arr;
}

console.log(htmlColorNames(['DarkGoldenRod', 'WhiteSmoke', 'LavenderBlush', 'PaleTurquoise', 'FireBrick']));
```

# --solutions--

```js
function htmlColorNames(arr) {
  arr.splice(0,2,'DarkSalmon', 'BlanchedAlmond');
  return arr;
}
```
