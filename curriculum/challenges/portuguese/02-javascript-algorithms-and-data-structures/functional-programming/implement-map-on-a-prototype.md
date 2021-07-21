---
id: 587d7b8f367417b2b2512b62
title: Implementar map em um protótipo
challengeType: 1
forumTopicId: 301230
dashedName: implement-map-on-a-prototype
---

# --description--

Como você viu ao aplicar `Array.prototype.map()`, ou simplesmente `map()` mais cedo, o método `map` retorna um array do mesmo tamanho que o no qual chamamos o método. Ele também não altera o array original desde que a sua função callback não o faça.

Em outras palavras, `map` é uma função pura e a sua saída depende somente de suas entradas. Além disso, ele recebe outra função como argumento.

Você pode aprender muito sobre o método `map` se você implementá-lo por conta própria. Recomenda-se que você use um loop `for` ou o método `Array.prototype.forEach()`.

# --instructions--

Escreva o seu próprio `Array.prototype.myMap()` e faça com que ele se comporte como o `Array.prototype.map()`. Você não deve usar o método `map` disponibilizado. O objeto `Array` pode ser acessado dentro de `myMap` pelo `this`.

# --hints--

`new_s` deve ser `[46, 130, 196, 10]`.

```js
assert(JSON.stringify(new_s) === JSON.stringify([46, 130, 196, 10]));
```

Você não deve usar o método `map`.

```js
assert(!code.match(/\.?[\s\S]*?map/g));
```

# --seed--

## --seed-contents--

```js
// The global variable
var s = [23, 65, 98, 5];

Array.prototype.myMap = function(callback) {
  var newArray = [];
  // Only change code below this line

  // Only change code above this line
  return newArray;
};

var new_s = s.myMap(function(item) {
  return item * 2;
});
```

# --solutions--

```js
// the global Array
var s = [23, 65, 98, 5];

Array.prototype.myMap = function(callback) {
  var newArray = [];
  // Only change code below this line
  for (var elem of this) {
    newArray.push(callback(elem));
  }
  // Only change code above this line
  return newArray;
};

var new_s = s.myMap(function(item) {
  return item * 2;
});
```
