---
id: 587d7b8f367417b2b2512b62
title: Implementa map en un prototipo
challengeType: 1
forumTopicId: 301230
dashedName: implement-map-on-a-prototype
---

# --description--

Como has visto anteriormente, al aplicar `Array.prototype.map()`, o simplemente `map()`, el método `map` devuelve un arreglo de la misma longitud que el arreglo dentro del que fue llamado. Esto tampoco altera el arreglo original, siempre y cuando su función callback no lo haga.

En otras palabras, `map` es una función pura, y su salida depende únicamente de sus entradas. Además, toma otra función como argumento.

Puedes aprender mucho sobre el método `map` si implementas tu propia versión. Se recomienda utilizar un bucle `for` o `Array.prototype.forEach()`.

# --instructions--

Escribe tu propio `Array.prototype.myMap()`, el cual debe comportarse exactamente como `Array.prototype.map()`. No debes utilizar el método incorporado `map`. Se puede acceder a la instancia de `Array` en el método `myMap` usando `this`.

# --hints--

`new_s` debe ser igual a `[46, 130, 196, 10]`.

```js
assert(JSON.stringify(new_s) === JSON.stringify([46, 130, 196, 10]));
```

Tu código no debe utilizar el método `map`.

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
