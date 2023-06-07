---
id: 587d8254367417b2b2512c71
title: Eliminar elementos de un conjunto en ES6
challengeType: 1
forumTopicId: 301713
dashedName: remove-items-from-a-set-in-es6
---

# --description--

Vamos a practicar eliminar elementos de un Set ES6 utilizando el método `delete`.

Primero, crear un conjunto ES6:

```js
var set = new Set([1,2,3]);
```

Ahora elimine un elemento del Set con el método `delete`.

```js
set.delete(1);
console.log([...set]) // should return [ 2, 3 ]
```

# --instructions--

Ahora, cree un conjunto con los enteros 1, 2, 3, 4, & 5.

Elimina los valores 2 y 5, y luego devuelve el conjunto.

# --hints--

Tu Set debe contener los valores 1, 3, & 4

```js
assert(
  (function () {
    var test = checkSet();
    return test.has(1) && test.has(3) && test.has(4) && test.size === 3;
  })()
);
```

# --seed--

## --seed-contents--

```js
function checkSet(){
  // Only change code below this line
  var set = null;

  // Only change code above this line
  return set;   
}
```

# --solutions--

```js
function checkSet(){
var set = new Set([1,2,3,4,5]);
set.delete(2);
set.delete(5);
return set;}
```
