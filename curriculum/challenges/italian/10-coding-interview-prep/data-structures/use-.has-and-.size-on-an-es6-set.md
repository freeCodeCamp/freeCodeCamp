---
id: 587d8255367417b2b2512c72
title: Usare .has e .size su un set ES6
challengeType: 1
forumTopicId: 301717
dashedName: use--has-and--size-on-an-es6-set
---

# --description--

Diamo un'occhiata ai metodi .has e .size disponibili sull'oggetto Set ES6.

Per prima cosa, crea un Set ES6

```js
var set = new Set([1,2,3]);
```

Il metodo .has controllerà se il valore è contenuto all'interno del set.

```js
var hasTwo = set.has(2);
```

Il metodo .size restituirà un numero intero rappresentante la dimensione del Set

```js
var howBig = set.size;
```

# --instructions--

In questo esercizio passeremo un array e un valore alla funzione checkSet(). La tua funzione dovrebbe creare un set ES& dall'argomento array. Scopri se il set contiene il valore argomento. Trova la dimensione del set. E restituire questi due valori in un array.

# --hints--

`checkSet([4, 5, 6], 3)` dovrebbe restituire [ false, 3 ]

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
