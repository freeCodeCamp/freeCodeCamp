---
id: 587d78b3367417b2b2512b11
title: Aggiungere elementi usando splice()
challengeType: 1
forumTopicId: 301152
dashedName: add-items-using-splice
---

# --description--

Ricordi che nell'ultima sfida abbiamo detto che `splice()` può richiedere fino a tre parametri? Bene, è possibile utilizzare il terzo parametro, composto da uno o più elementi, per aggiungerli all'array. Questo può essere incredibilmente utile per scambiare rapidamente un elemento, o un insieme di elementi, con un altro.

```js
const numbers = [10, 11, 12, 12, 15];
const startIndex = 3;
const amountToDelete = 1;

numbers.splice(startIndex, amountToDelete, 13, 14);
console.log(numbers);
```

La seconda occorrenza di `12` viene rimossa, e aggiungiamo `13` e `14` allo stesso indice. L'array `numbers` ora è `[ 10, 11, 12, 13, 14, 15 ]`.

Qui iniziamo con una serie di numeri. Poi, passiamo i seguenti dati a `splice()`: L'indice a cui iniziare a eliminare gli elementi (3), il numero di elementi da eliminare (1) e i restanti argomenti (13, 14) saranno inseriti a partire dallo stesso indice. Nota che ci può essere un numero qualsiasi di elementi (separati da virgole) dopo `amountToDelete`, ognuno dei quali verrà inserito.

# --instructions--

Abbiamo definito una funzione, `htmlColorNames`, che prende un array di colori HTML come argomento. Modifica la funzione usando `splice()` per rimuovere i primi due elementi dell'array e aggiungere `'DarkSalmon'` e `'BlanchedAlmond'` nei rispettivi posti.

# --hints--

`htmlColorNames` dovrebbe restituire `["DarkSalmon", "BlanchedAlmond", "LavenderBlush", "PaleTurquoise", "FireBrick"]`

```js
assert.deepEqual(
  htmlColorNames([
    'DarkGoldenRod',
    'WhiteSmoke',
    'LavenderBlush',
    'PaleTurquoise',
    'FireBrick'
  ]),
  [
    'DarkSalmon',
    'BlanchedAlmond',
    'LavenderBlush',
    'PaleTurquoise',
    'FireBrick'
  ]
);
```

La funzione `htmlColorNames` dovrebbe utilizzare il metodo `splice()`

```js
assert(/.splice/.test(code));
```

Non dovresti usare `shift()` o `unshift()`.

```js
assert(!/shift|unshift/.test(code));
```

Non dovresti utilizzare la notazione a parentesi.

```js
assert(!/\[\d\]\s*=/.test(code));
```

# --seed--

## --seed-contents--

```js
function htmlColorNames(arr) {
  // Only change code below this line

  // Only change code above this line
  return arr;
}

console.log(htmlColorNames(['DarkGoldenRod', 'WhiteSmoke', 'LavenderBlush', 'PaleTurquoise', 'FireBrick']));
```

# --solutions--

```js
function htmlColorNames(arr) {
  arr.splice(0,2,'DarkSalmon', 'BlanchedAlmond');
  return arr;
}
```
