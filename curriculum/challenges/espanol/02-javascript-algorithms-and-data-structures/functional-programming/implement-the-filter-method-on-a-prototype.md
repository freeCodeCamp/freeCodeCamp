---
id: 587d7b8f367417b2b2512b64
title: Implementa el método filter en un prototipo
challengeType: 1
forumTopicId: 301231
dashedName: implement-the-filter-method-on-a-prototype
---

# --description--

Puedes aprender mucho sobre el método `filter` si implementas tu propia versión. Se recomienda utilizar un bucle `for` o `Array.prototype.forEach()`.

# --instructions--

Escribe tu propio `Array.prototype.myFilter()`, que debe comportarse exactamente como `Array.prototype.filter()`. No debes utilizar el método incorporado `filter`. Se puede acceder a la instancia `Array` en el método `myFilter` usando `this`.

# --hints--

`new_s` debe ser igual a `[23, 65, 5]`.

```js
assert(JSON.stringify(new_s) === JSON.stringify([23, 65, 5]));
```

Tu código no debe utilizar el método `filter`.

```js
assert(!code.match(/\.?[\s\S]*?filter/g));
```

# --seed--

## --seed-contents--

```js
// The global variable
const s = [23, 65, 98, 5];

Array.prototype.myFilter = function(callback) {
  // Only change code below this line
  const newArray = [];
  // Only change code above this line
  return newArray;
};

const new_s = s.myFilter(function(item) {
  return item % 2 === 1;
});
```

# --solutions--

```js
const s = [23, 65, 98, 5];

Array.prototype.myFilter = function(callback) {
  const newArray = [];
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i])) newArray.push(this[i]);
  }
  return newArray;
};

const new_s = s.myFilter(function(item) {
  return item % 2 === 1;
});
```
