---
id: 587d7b7b367417b2b2512b14
title: Prüfe das Vorhandensein eines Elements mit indexOf()
challengeType: 1
forumTopicId: 301154
dashedName: check-for-the-presence-of-an-element-with-indexof
---

# --description--

Da Arrays jederzeit geändert oder *mutiert* werden können, gibt es keine Garantie dafür, wo sich ein bestimmtes Datenelement in einem bestimmten Array befindet, oder ob es überhaupt noch existiert. Zum Glück bietet uns JavaScript eine andere eingebaute Methode, `indexOf()`, welche es uns erlaubt, schnell und einfach das Vorhandensein eines Elements in einem Array zu überprüfen. `indexOf()` benötigt ein Element als Parameter und gibt beim Aufrufen die Position oder den Index des Elements wieder, oder `-1`, wenn das Element nicht im Array existiert.

Zum Beispiel:

```js
let fruits = ['apples', 'pears', 'oranges', 'peaches', 'pears'];

fruits.indexOf('dates');
fruits.indexOf('oranges');
fruits.indexOf('pears');
```

`indexOf('dates')` gibt `-1` wieder, `indexOf('oranges')` gibt `2` wieder, und `indexOf('pears')` gibt `1` wieder (der erste Index, bei dem jedes Element existiert).

# --instructions--

`indexOf()` kann unglaublich nützlich für das schnelle Überprüfen zum Vorhandensein eines Elements in einem Array sein. Wir haben eine Funktion `quickCheck` definiert, welche einen Array und ein Element als Argumente benötigt. Ändere die Funktion, indem du `indexOf()` so benutzt, dass es `true` zurückgibt, wenn das übergebene Element im Array existiert, und `false`, wenn es nicht der Fall ist.

# --hints--

Die Funktion `quickCheck` sollte einen Boolean (`true` oder `false`) zurückgeben, keinen String (`"true"` oder `"false"`)

```js
assert.isBoolean(quickCheck(['squash', 'onions', 'shallots'], 'mushrooms'));
```

`quickCheck(["squash", "onions", "shallots"], "mushrooms")` sollte `false` zurückgeben

```js
assert.strictEqual(
  quickCheck(['squash', 'onions', 'shallots'], 'mushrooms'),
  false
);
```

`quickCheck(["onions", "squash", "shallots"], "onions")` sollte `true` zurückgeben

```js
assert.strictEqual(
  quickCheck(['onions', 'squash', 'shallots'], 'onions'),
  true
);
```

`quickCheck([3, 5, 9, 125, 45, 2], 125)` sollte `true` zurückgeben

```js
assert.strictEqual(quickCheck([3, 5, 9, 125, 45, 2], 125), true);
```

`quickCheck([true, false, false], undefined)` sollte `false` zurückgeben

```js
assert.strictEqual(quickCheck([true, false, false], undefined), false);
```

Die Funktion `quickCheck` sollte die Methode `indexOf()` verwenden

```js
assert.notStrictEqual(quickCheck.toString().search(/\.indexOf\(/), -1);
```

# --seed--

## --seed-contents--

```js
function quickCheck(arr, elem) {
  // Only change code below this line

  // Only change code above this line
}

console.log(quickCheck(['squash', 'onions', 'shallots'], 'mushrooms'));
```

# --solutions--

```js
function quickCheck(arr, elem) {
  return arr.indexOf(elem) >= 0; 
}
```
