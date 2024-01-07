---
id: 587d8255367417b2b2512c73
title: Usare sprea e notes per integrazione del Set() ES5
challengeType: 1
forumTopicId: 301720
dashedName: use-spread-and-notes-for-es5-set-integration
---

# --description--

Ricordi l'operatore di diffusione in ES6 `...`?

`...` può prendere oggetti iterabili in ES6 e trasformarli in array.

Creiamo un Set e controlliamo la funzione di diffusione.

```js
var set = new Set([1,2,3]);
var setToArr = [...set]
console.log(setToArr) // returns [ 1, 2, 3 ]
```

# --instructions--

In questo esercizio passeremo un oggetto set alla funzione `checkSet`. Dovrebbe restituire un array contenente i valori del Set.

Ora hai imparato con successo come usare l'oggetto ES6 `Set()`, buon lavoro!

# --hints--

`checkSet(new Set([1,2,3,4,5,6,7])` dovrebbe restituire `[1, 2, 3, 4, 5, 6, 7]`.

```js
assert(
  (function () {
    var test = checkSet(new Set([1, 2, 3, 4, 5, 6, 7]));
    return DeepEqual(test, [1, 2, 3, 4, 5, 6, 7]);
  })()
);
```

# --seed--

## --seed-contents--

```js
function checkSet(set){
   // Only change code below this line

   // Only change code above this line
}
```

# --solutions--

```js
function checkSet(set){
return [...set];}
```
