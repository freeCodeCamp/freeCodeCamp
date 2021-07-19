---
id: 587d7b8f367417b2b2512b64
title: Implemente o Método filter em um Protótipo
challengeType: 1
forumTopicId: 301231
dashedName: implement-the-filter-method-on-a-prototype
---

# --description--

Você pode aprender muito sobre o método `filter` se você implementá-lo por conta própria. Recomenda-se que você use um loop `for` ou o método `Array.prototype.forEach()`.

# --instructions--

Escreva o seu próprio `Array.prototype.myFilter()` e faça com que ele se comporte como o `Array.prototype.filter()`. Você não deve usar o método `filter` disponibilizado. O objeto `Array` pode ser acessado dentro de `myFilter` pelo `this`.

# --hints--

`new_s` deve ser `[23, 65, 5]`.

```js
assert(JSON.stringify(new_s) === JSON.stringify([23, 65, 5]));
```

Você não deve usar o método `filter`.

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
