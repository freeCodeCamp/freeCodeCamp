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

`[23, 65, 98, 5, 13].myMap(item => item * 2)` dovrebbe essere uguale a `[46, 130, 196, 10, 26]`.

```js
const _test_s = [23, 65, 98, 5, 13];
const _callback = item => item * 2;
assert(JSON.stringify(_test_s.map(_callback)) === JSON.stringify(_test_s.myMap(_callback)));
```

`["naomi", "quincy", "camperbot"].myMap(element => element.toUpperCase())` dovrebbe restituire `["NAOMI", "QUINCY", "CAMPERBOT"]`.

```js
const _test_s = ["naomi", "quincy", "camperbot"];
const _callback = element => element.toUpperCase();
assert(JSON.stringify(_test_s.map(_callback)) === JSON.stringify(_test_s.myMap(_callback)));
```

`[1, 1, 2, 5, 2].myMap((element, index, array) => array[index + 1] || array[0])` dovrebbe restituire `[1, 2, 5, 2, 1]`.

```js
const _test_s = [1, 1, 2, 5, 2];
const _callback = (element, index, array) => array[index + 1] || array[0];
assert(JSON.stringify(_test_s.map(_callback)) === JSON.stringify(_test_s.myMap(_callback)));
```

Il tuo codice non dovrebbe usare il metodo `map`.

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
