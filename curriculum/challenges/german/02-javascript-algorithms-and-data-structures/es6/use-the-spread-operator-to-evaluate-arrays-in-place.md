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

`...arr` gibt ein ungepacktes Array zurück. Mit anderen Worten: Es verteilt das Array. Der Spread-Operator funktioniert jedoch nur an Ort und Stelle, z. B. in einem Argument einer Funktion oder in einem Array-Literal. Zum Beispiel:

```js
const spreaded = [...arr];
```

Der folgende Code funktioniert jedoch nicht:

```js
const spreaded = ...arr;
```

# --instructions--

Kopiere alle Inhalte von `arr1` in ein anderes Array `arr2`, indem du den Spread-Operator benutzt.

# --hints--

`arr2` sollte die korrekte Kopie von `arr1` sein.

```js
assert(arr2.every((v, i) => v === arr1[i]) && arr2.length);
```

Der Spread-Operator `...` sollte zum Duplizieren von `arr1` verwendet werden.

```js
assert(__helpers.removeJSComments(code).match(/Array\(\s*\.\.\.arr1\s*\)|\[\s*\.\.\.arr1\s*\]/));
```

`arr2` sollte unverändert bleiben, wenn `arr1` geändert wird.

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
