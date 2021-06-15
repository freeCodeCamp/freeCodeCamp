---
id: 587d7b8f367417b2b2512b64
title: Implementare il metodo filter in un prototipo
challengeType: 1
forumTopicId: 301231
dashedName: implement-the-filter-method-on-a-prototype
---

# --description--

Potresti imparare molto sul metodo `filter` implementandone la tua versione. Ti raccomandiamo di utilizzare un ciclo `for` o `Array.prototype.forEach()`.

# --instructions--

Scrivi il tuo `Array.prototype.myFilter()`, che dovrebbe comportarsi esattamente come `Array.prototype.filter()`. Non dovresti usare il metodo `filter` incorporato. L'istanza `Array` può essere consultata nel metodo `myFilter` usando `this`.

# --hints--

`new_s` dovrebbe essere uguale a `[23, 65, 5]`.

```js
assert(JSON.stringify(new_s) === JSON.stringify([23, 65, 5]));
```

Il tuo codice non dovrebbe usare il metodo `filter`.

```js
assert(!code.match(/\.?[\s\S]*?filter/g));
```

# --seed--

## --seed-contents--

```js
// The global variable
var s = [23, 65, 98, 5];

Array.prototype.myFilter = function(callback) {
  // Only change code below this line
  var newArray = [];
  // Only change code above this line
  return newArray;
};

var new_s = s.myFilter(function(item) {
  return item % 2 === 1;
});
```

# --solutions--

```js
// the global Array
var s = [23, 65, 98, 5];

Array.prototype.myFilter = function(callback) {
  var newArray = [];
  // Only change code below this line
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i])) newArray.push(this[i]);
  }
  // Only change code above this line
  return newArray;
};

var new_s = s.myFilter(function(item) {
  return item % 2 === 1;
});
```
