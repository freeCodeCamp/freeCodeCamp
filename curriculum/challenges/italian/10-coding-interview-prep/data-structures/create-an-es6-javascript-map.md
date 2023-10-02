---
id: 587d825b367417b2b2512c8d
title: Creare una mappa JavaScript ES6
challengeType: 1
forumTopicId: 301635
dashedName: create-an-es6-javascript-map
---

# --description--

La nuova versione di JavaScript ci fornisce un oggetto Map incorporato che fornisce gran parte delle funzionalità che abbiamo scritto a mano nell'ultima sfida. Questo oggetto Map, anche se simile a oggetti JavaScript regolari, fornisce alcune funzionalità utili che agli oggetti normali mancano. Ad esempio, una Map ES6 tiene in memoria l'ordine di inserimento degli elementi che vengono aggiunti. Ecco una panoramica più completa dei suoi metodi:

- `.has(key)` restituisce vero o falso in base alla presenza di una chiave
- `.get(key)` restituisce il valore associato a una chiave
- `.set(key, value)` imposta una nuova coppia chiave-valore
- `.delete(key)` rimuove una coppia chiave-valore
- `.clear()` rimuove tutte le coppie chiave-valore
- `.entries()` restituisce un array di tutte le chiavi in ordine di inserimento
- `.values()` restituisce un array di tutti i valori in ordine di inserimento

# --instructions--

Definisci un oggetto Map JavaScript e assegna ad esso una variabile chiamata myMap. Aggiungi la coppia chiave-valore `freeCodeCamp`, `Awesome!` ad esso.

# --hints--

L'oggetto `myMap` dovrebbe esistere.

```js
assert(typeof myMap === 'object');
```

`myMap` dovrebbe contenere la coppia chiave-valore `freeCodeCamp`,`Awesome!`.

```js
assert(myMap.get('freeCodeCamp') === 'Awesome!');
```

# --seed--

## --seed-contents--

```js

```

# --solutions--

```js
const myMap = new Map();

myMap.set("freeCodeCamp", "Awesome!");
```
