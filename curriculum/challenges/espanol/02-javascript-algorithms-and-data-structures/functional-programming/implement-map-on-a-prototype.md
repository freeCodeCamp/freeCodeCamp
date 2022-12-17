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

`[23, 65, 98, 5, 13].myMap(item => item * 2)` debe ser igual a: `[46, 130, 196, 10, 26]`.

```js
const _test_s = [23, 65, 98, 5, 13];
const _callback = item => item * 2;
assert(JSON.stringify(_test_s.map(_callback)) === JSON.stringify(_test_s.myMap(_callback)));
```

`["naomi", "quincy", "camperbot"].myMap(element => element.toUpperCase())`debe devolver `["NAOMI", "QUINCY", "CAMPERBOT"]`.

```js
const _test_s = ["naomi", "quincy", "camperbot"];
const _callback = element => element.toUpperCase();
assert(JSON.stringify(_test_s.map(_callback)) === JSON.stringify(_test_s.myMap(_callback)));
```

`[1, 1, 2, 5, 2].myMap((element, index, array) => array[index + 1] || array[0])` debería devolver `[1, 2, 5, 2, 1]`.

```js
const _test_s = [1, 1, 2, 5, 2];
const _callback = (element, index, array) => array[index + 1] || array[0];
assert(JSON.stringify(_test_s.map(_callback)) === JSON.stringify(_test_s.myMap(_callback)));
```

Tu código no debe usar el método `map`.

```js
assert(!code.match(/\.?[\s\S]*?map/g));
```

# --seed--

## --seed-contents--

```js
Array.prototype.myMap = function(callback) {
  const newArray = [];
  // Only change code below this line

  // Only change code above this line
  return newArray;
};
```

# --solutions--

```js
Array.prototype.myMap = function(callback) {
  const newArray = [];
  for (let i = 0; i < this.length; i++) {
    newArray.push(callback(this[i], i, this));
  }
  return newArray;
};

// Test case
const s = [23, 65, 98, 5];
const doubled_s = s.myMap(item => item * 2);
```
