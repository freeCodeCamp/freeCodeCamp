---
id: 587d8255367417b2b2512c72
title: Usa .has y .size en un Set ES6
challengeType: 1
forumTopicId: 301717
dashedName: use--has-and--size-on-an-es6-set
---

# --description--

Veamos a los métodos .has y .size disponibles en el objeto Set de ES6.

Primero, creamos un Set ES6

```js
var set = new Set([1,2,3]);
```

El método .has comprobará si el valor esta almacenado dentro del set.

```js
var hasTwo = set.has(2);
```

El método .size devuelve un entero representando el tamaño del Set

```js
var howBig = set.size;
```

# --instructions--

En este ejercicio pasamos un arreglo y un valor a la función checkSet(). Tu función debería crear un set ES6 set desde el argumento arreglo. Encuentra si el set contiene el argumento valor. Encuentra el tamaño de el set. Y devuelve estos dos valores en un arreglo.

# --hints--

`checkSet([4, 5, 6], 3)` debería devolver [ false, 3 ]

```js
assert(
  (function () {
    var test = checkSet([4, 5, 6], 3);
    return DeepEqual(test, [false, 3]);
  })()
);
```

# --seed--

## --seed-contents--

```js
function checkSet(arrToBeSet, checkValue){

   // Only change code below this line

   // Only change code above this line

}
```

# --solutions--

```js
function checkSet(arrToBeSet, checkValue){
var set = new Set(arrToBeSet);
var result = [
set.has(checkValue),
set.size
];
return result;
}
```
