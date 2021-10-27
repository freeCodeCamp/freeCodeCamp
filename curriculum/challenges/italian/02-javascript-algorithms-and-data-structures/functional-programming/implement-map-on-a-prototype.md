---
id: 587d7b8f367417b2b2512b62
title: Implementare map in un prototipo
challengeType: 1
forumTopicId: 301230
dashedName: implement-map-on-a-prototype
---

# --description--

Come hai visto applicando in precedenza `Array.prototype.map()`, o semplicemente `map()`, il metodo `map` restituisce un array della stessa lunghezza di quello su cui è stato chiamato. Inoltre non altera l'array originale, purché la sua funzione di callback non lo faccia.

In altre parole, `map` è una funzione pura, e il suo output dipende esclusivamente dai suoi input. Inoltre, prende un'altra funzione come suo argomento.

Potresti imparare molto sul metodo `map` implementandone la tua versione. Ti raccomandiamo di utilizzare un ciclo `for` o `Array.prototype.forEach()`.

# --instructions--

Scrivi il tuo `Array.prototype.myMap()`, che dovrebbe comportarsi esattamente come `Array.prototype.map()`. Non dovresti usare il metodo `map` integrato. L'istanza `Array` può essere consultata nel metodo `myMap` usando `this`.

# --hints--

`new_s` dovrebbe essere uguale a `[46, 130, 196, 10]`.

```js
assert(JSON.stringify(new_s) === JSON.stringify([46, 130, 196, 10]));
```

Il tuo codice non dovrebbe usare il metodo `map`.

```js
assert(!code.match(/\.?[\s\S]*?map/g));
```

# --seed--

## --seed-contents--

```js
// The global variable
const s = [23, 65, 98, 5];

Array.prototype.myMap = function(callback) {
  const newArray = [];
  // Only change code below this line

  // Only change code above this line
  return newArray;
};

const new_s = s.myMap(function(item) {
  return item * 2;
});
```

# --solutions--

```js
const s = [23, 65, 98, 5];

Array.prototype.myMap = function(callback) {
  const newArray = [];
  for (const elem of this) {
    newArray.push(callback(elem));
  }
  return newArray;
};

const new_s = s.myMap(function(item) {
  return item * 2;
});
```
