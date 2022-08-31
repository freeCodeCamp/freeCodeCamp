---
id: 587d7dab367417b2b2512b6e
title: Prüfe mit der Methode every, ob jedes Element in einem Array ein Kriterium erfüllt
challengeType: 1
forumTopicId: 301312
dashedName: use-the-every-method-to-check-that-every-element-in-an-array-meets-a-criteria
---

# --description--

Die Methode `every` arbeitet mit Arrays, um zu prüfen, ob *jedes* Element einen bestimmten Test besteht. Sie gibt einen booleschen Wert zurück - `true`, wenn alle Werte die Kriterien erfüllen, `false`, wenn nicht.

Der folgende Code würde zum Beispiel prüfen, ob jedes Element im Array `numbers` kleiner als 10 ist:

```js
const numbers = [1, 5, 8, 0, 10, 11];

numbers.every(function(currentValue) {
  return currentValue < 10;
});
```

Die Methode `every` würde hier `false` zurückgeben.

# --instructions--

Verwende die Methode `every` innerhalb der Funktion `checkPositive`, um zu prüfen, ob jedes Element in `arr` positiv ist. Die Funktion sollte einen booleschen Wert zurückgeben.

# --hints--

Dein Code sollte die Methode `every` verwenden.

```js
assert(code.match(/\.every/g));
```

`checkPositive([1, 2, 3, -4, 5])` sollte `false` zurückgeben.

```js
assert.isFalse(checkPositive([1, 2, 3, -4, 5]));
```

`checkPositive([1, 2, 3, 4, 5])` sollte `true` zurückgeben.

```js
assert.isTrue(checkPositive([1, 2, 3, 4, 5]));
```

`checkPositive([1, -2, 3, -4, 5])` sollte `false` zurückgeben.

```js
assert.isFalse(checkPositive([1, -2, 3, -4, 5]));
```

# --seed--

## --seed-contents--

```js
function checkPositive(arr) {
  // Only change code below this line


  // Only change code above this line
}

checkPositive([1, 2, 3, -4, 5]);
```

# --solutions--

```js
function checkPositive(arr) {
  return arr.every(num => num > 0);
}
```
