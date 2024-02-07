---
id: 594d8d0ab97724821379b1e6
title: Mittelwerte/Modus
challengeType: 1
forumTopicId: 302226
dashedName: averagesmode
---

# --description--

Write a function `mode` to find the value that appears most in an array.

Der Fall, dass die Sammlung leer ist, kann ignoriert werden. Der Fall, dass der Modus nicht eindeutig ist, muss sorgfältig behandelt werden.

Wenn es nicht angebracht oder möglich ist, eine allgemeine Sammlung zu unterstützen, verwende nach Möglichkeit einen Vektor (Array). Wenn es nicht sinnvoll oder möglich ist, einen nicht spezifizierten Werttyp zu unterstützen, verwende Ganzzahlen.

# --hints--

`mode` sollte eine Funktion sein.

```js
assert(typeof mode === 'function');
```

`mode([1, 3, 6, 6, 6, 6, 7, 7, 12, 12, 17])` sollte `[6]` entsprechen

```js
assert.deepEqual(mode(arr1), [6]);
```

`mode([1, 2, 4, 4, 1])` sollte `[1, 4]` entsprechen.

```js
assert.deepEqual(mode(arr2).sort(), [1, 4]);
```

# --seed--

## --after-user-code--

```js
const arr1 = [1, 3, 6, 6, 6, 6, 7, 7, 12, 12, 17];
const arr2 = [1, 2, 4, 4, 1];
```

## --seed-contents--

```js
function mode(arr) {

  return true;
}
```

# --solutions--

```js
function mode(arr) {
  const counter = {};
  let result = [];
  let max = 0;
  // for (const i in arr) {
  arr.forEach(el => {
    if (!(el in counter)) {
      counter[el] = 0;
    }
    counter[el]++;

    if (counter[el] === max) {
      result.push(el);
    }
    else if (counter[el] > max) {
      max = counter[el];
      result = [el];
    }
  });
  return result;
}
```
