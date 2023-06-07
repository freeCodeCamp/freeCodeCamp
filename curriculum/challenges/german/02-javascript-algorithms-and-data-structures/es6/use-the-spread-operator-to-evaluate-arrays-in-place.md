---
id: 587d7b89367417b2b2512b48
title: Verwende den Spread-Operator, um Arrays an Ort und Stelle auszuwerten
challengeType: 1
forumTopicId: 301222
dashedName: use-the-spread-operator-to-evaluate-arrays-in-place
---

# --description--

ES6 führt den <dfn>Spread-Operator</dfn> ein, mit dem wir Arrays und andere Ausdrücke an Stellen erweitern können, an denen mehrere Parameter oder Elemente erwartet werden.

Der folgende ES5-Code verwendet `apply()`, um den maximalen Wert in einem Array zu berechnen:

```js
var arr = [6, 89, 3, 45];
var maximus = Math.max.apply(null, arr);
```

`maximus` hätte dann einen Wert von `89`.

Wir mussten `Math.max.apply(null, arr)` verwenden, weil `Math.max(arr)` `NaN` zurückgibt. `Math.max()` erwartet kommagetrennte Argumente, aber kein Array. Durch den Spread-Operator lässt sich diese Syntax viel besser lesen und pflegen.

```js
const arr = [6, 89, 3, 45];
const maximus = Math.max(...arr);
```

`maximus` hätte dann einen Wert von `89`.

`...arr` gibt ein ungepacktes Array zurück. In other words, it spreads the array. Der Spread-Operator funktioniert jedoch nur an Ort und Stelle, z. B. in einem Argument einer Funktion oder in einem Array-Literal. For example:

```js
const spreaded = [...arr];
```

However, the following code will not work:

```js
const spreaded = ...arr;
```

# --instructions--

Copy all contents of `arr1` into another array `arr2` using the spread operator.

# --hints--

`arr2` should be correct copy of `arr1`.

```js
assert(arr2.every((v, i) => v === arr1[i]) && arr2.length);
```

`...` spread operator should be used to duplicate `arr1`.

```js
assert(code.match(/Array\(\s*\.\.\.arr1\s*\)|\[\s*\.\.\.arr1\s*\]/));
```

`arr2` should remain unchanged when `arr1` is changed.

```js
assert((arr1, arr2) => {
  arr1.push('JUN');
  return arr2.length < arr1.length;
});
```

# --seed--

## --seed-contents--

```js
const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2;

arr2 = [];  // Change this line

console.log(arr2);
```

# --solutions--

```js
const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2;

arr2 = [...arr1];
```
