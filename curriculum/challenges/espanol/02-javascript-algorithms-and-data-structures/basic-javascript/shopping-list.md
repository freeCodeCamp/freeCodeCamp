---
id: 56533eb9ac21ba0edf2244bc
title: Lista de compras
challengeType: 1
videoUrl: 'https://scrimba.com/c/c9MEKHZ'
forumTopicId: 18280
dashedName: shopping-list
---

# --description--

Crea una lista de compras en la variable `myList`. La lista debe ser un arreglo multidimensional que contenga varios sub-arreglos.

El primer elemento de cada sub-arreglo debe contener una cadena con el nombre del artículo. El segundo elemento debe ser un número que represente la cantidad, por ejemplo.

```js
["Chocolate Bar", 15]
```

Debe haber al menos 5 sub-arreglos en la lista.

# --hints--

`myList` debe ser un arreglo.

```js
assert(isArray);
```

Los primeros elementos de cada sub-arreglo deben ser cadenas.

```js
assert(hasString);
```

Los segundos elementos de cada sub-arreglo deben ser números.

```js
assert(hasNumber);
```

Debes tener al menos 5 elementos en tu lista.

```js
assert(count > 4);
```

# --seed--

## --after-user-code--

```js
var count = 0;
var isArray = false;
var hasString = false;
var hasNumber = false;
(function(list){
  if(Array.isArray(myList)) {
    isArray = true;
    if(myList.length > 0) {
      hasString = true;
      hasNumber = true;
      for (var elem of myList) {
        if(!elem || !elem[0] || typeof elem[0] !== 'string') {
          hasString = false;
        }
        if(!elem || typeof elem[1] !== 'number') {
          hasNumber = false;
        }
      }
    }
    count = myList.length;
    return JSON.stringify(myList);
  } else {
    return "myList is not an array";
  }

})(myList);
```

## --seed-contents--

```js
const myList = [];
```

# --solutions--

```js
const myList = [
  ["Candy", 10],
  ["Potatoes", 12],
  ["Eggs", 12],
  ["Catfood", 1],
  ["Toads", 9]
];
```
