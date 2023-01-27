---
id: 587d78b2367417b2b2512b0e
title: Füge Elemente mit push() und unshift() einem Array hinzu
challengeType: 1
forumTopicId: 301151
dashedName: add-items-to-an-array-with-push-and-unshift
---

# --description--

Die Länge eines Arrays ist, wie die Datentypen, die es enthalten kann, nicht festgelegt. Arrays können mit einer beliebigen Anzahl von Elementen definiert werden, und Elemente können im Laufe der Zeit hinzugefügt oder entfernt werden; mit anderen Worten, Arrays sind <dfn>veränderlich (mutable)</dfn>. In dieser Aufgabe werden wir uns zwei Methoden ansehen, mit denen wir ein Array programmatisch verändern können: `Array.push()` und `Array.unshift()`.

Beide Methoden nehmen ein oder mehrere Elemente als Parameter entgegen und fügen diese Elemente dem Array hinzu, auf dem die Methode aufgerufen wird; die Methode `push()` fügt Elemente am Ende eines Arrays hinzu und `unshift()` fügt Elemente am Anfang hinzu. Beachte Folgendes:

```js
let twentyThree = 'XXIII';
let romanNumerals = ['XXI', 'XXII'];

romanNumerals.unshift('XIX', 'XX');
```

`romanNumerals` würde den Wert `['XIX', 'XX', 'XXI', 'XXII']` haben.

```js
romanNumerals.push(twentyThree);
```

`romanNumerals` würde den Wert `['XIX', 'XX', 'XXI', 'XXII', 'XXIII']` haben. Beachte, dass wir auch Variablen übergeben können, was uns noch mehr Flexibilität bei der dynamischen Änderung unserer Array-Daten ermöglicht.

# --instructions--

Wir haben eine Funktion definiert, `mixedNumbers`, der wir ein Array als Argument übergeben. Ändere die Funktion, indem du `push()` und `unshift()` verwendest, um `'I', 2, 'three'` am Anfang des Arrays und `7, 'VIII', 9` am Ende hinzuzufügen, sodass das zurückgegebene Array Darstellungen der Zahlen 1-9 in der Reihenfolge enthält.

# --hints--

`mixedNumbers(["IV", 5, "six"])` sollte jetzt `["I", 2, "three", "IV", 5, "six", 7, "VIII", 9]` zurückgeben.

```js
assert.deepEqual(mixedNumbers(['IV', 5, 'six']), [
  'I',
  2,
  'three',
  'IV',
  5,
  'six',
  7,
  'VIII',
  9
]);
```

Die Funktion `mixedNumbers` sollte die Methode `push()` verwenden.

```js
assert(mixedNumbers.toString().match(/\.push/));
```

Die Funktion `mixedNumbers` sollte die Methode `unshift()` verwenden.

```js
assert(mixedNumbers.toString().match(/\.unshift/));
```

# --seed--

## --seed-contents--

```js
function mixedNumbers(arr) {
  // Only change code below this line

  // Only change code above this line
  return arr;
}

console.log(mixedNumbers(['IV', 5, 'six']));
```

# --solutions--

```js
function mixedNumbers(arr) {
  arr.push(7,'VIII',9);
  arr.unshift('I',2,'three');
  return arr;
}
```
