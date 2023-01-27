---
id: 5a23c84252665b21eecc7ec4
title: JortSort
challengeType: 1
forumTopicId: 302293
dashedName: jortsort
---

# --description--

jortSort è un set di strumenti di ordinamento che permette all'utente di fare il lavoro e garantisce l'efficienza perché non è necessario riordinare nuovamente. È stato originariamente presentato da Jenn "Moneydollars" Schiffer al prestigioso JSConf2014.

jortSort dovrebbe essere una funzione che prende un singolo array di oggetti comparabili come argomento. Esso ordina l'array in ordine crescente e confronta l'array ordinato con l'array originariamente fornito. Se gli array corrispondono (cioè l'array originale è già stato ordinato), la funzione restituisce true. Se gli array non corrispondono (cioè l'array originale non è stato ordinato), la funzione restituisce false.

# --hints--

`jortsort` dovrebbe essere una funzione.

```js
assert(typeof jortsort == 'function');
```

`jortsort([1,2,3,4,5])` dovrebbe restituire un booleano.

```js
assert(typeof jortsort([1, 2, 3, 4, 5]) == 'boolean');
```

`jortsort([1,2,3,4,5])` dovrebbe restituire `true`.

```js
assert.equal(jortsort([1, 2, 3, 4, 5]), true);
```

`jortsort([1,2,13,4,5])` dovrebbe restituire `false`.

```js
assert.equal(jortsort([1, 2, 13, 4, 5]), false);
```

`jortsort([12,4,51,2,4])` dovrebbe restituire `false`.

```js
assert.equal(jortsort([12, 4, 51, 2, 4]), false);
```

`jortsort([1,2])` dovrebbe restituire `true`.

```js
assert.equal(jortsort([1, 2]), true);
```

`jortsort([5,4,3,2,1])` dovrebbe restituire `false`.

```js
assert.equal(jortsort([5, 4, 3, 2, 1]), false);
```

`jortsort([1,1,1,1,1])` dovrebbe restituire `true`.

```js
assert.equal(jortsort([1, 1, 1, 1, 1]), true);
```

# --seed--

## --seed-contents--

```js
function jortsort(array) {

}
```

# --solutions--

```js
function jortsort(array) {
  // sort the array
  var originalArray = array.slice(0);
  array.sort( function(a,b){return a - b} );

  // compare to see if it was originally sorted
  for (var i = 0; i < originalArray.length; ++i) {
    if (originalArray[i] !== array[i]) return false;
  }

  return true;
};
```
