---
id: 587d7dab367417b2b2512b6f
title: Verwende die Methode some, um zu prüfen, ob ein Element in einem Array ein Kriterium erfüllt
challengeType: 1
forumTopicId: 301314
dashedName: use-the-some-method-to-check-that-any-elements-in-an-array-meet-a-criteria
---

# --description--

Die Methode `some` arbeitet mit Arrays, um zu prüfen, ob *ein* Element einen bestimmten Test besteht. Sie gibt einen booleschen Wert zurück - `true`, wenn einer der Werte die Kriterien erfüllt, `false`, wenn nicht.

Der folgende Code würde zum Beispiel prüfen, ob ein Element im Array `numbers` kleiner als 10 ist:

```js
const numbers = [10, 50, 8, 220, 110, 11];

numbers.some(function(currentValue) {
  return currentValue < 10;
});
```

Die Methode `some` würde `true` zurückgeben.

# --instructions--

Verwende die Methode `some` innerhalb der Funktion `checkPositive`, um zu prüfen, ob ein Element in `arr` positiv ist. Die Funktion sollte einen booleschen Wert zurückgeben.

# --hints--

Dein Code sollte die Methode `some` verwenden.

```js
assert(code.match(/\.some/g));
```

`checkPositive([1, 2, 3, -4, 5])` sollte `true` zurückgeben.

```js
assert(checkPositive([1, 2, 3, -4, 5]));
```

`checkPositive([1, 2, 3, 4, 5])` sollte `true` zurückgeben.

```js
assert(checkPositive([1, 2, 3, 4, 5]));
```

`checkPositive([-1, -2, -3, -4, -5])` sollte `false` zurückgeben.

```js
assert(!checkPositive([-1, -2, -3, -4, -5]));
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
  return arr.some(elem => elem > 0);
}
```
