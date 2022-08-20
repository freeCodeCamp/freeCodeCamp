---
id: 587d78b2367417b2b2512b10
title: Rimuovere elementi usando splice()
challengeType: 1
forumTopicId: 301166
dashedName: remove-items-using-splice
---

# --description--

Ok, quindi abbiamo imparato a rimuovere gli elementi dall'inizio e dalla fine degli array usando `shift()` e `pop()`, ma cosa succede se vogliamo rimuovere un elemento da qualche parte nel mezzo? O rimuovere più di un elemento alla volta? Beh, ecco dove entra in gioco `splice()`. `splice()` ci permette di fare proprio questo: **rimuovere qualunque numero di elementi consecutivi** da qualsiasi punto di un array.

`splice()` può richiedere fino a 3 parametri, ma per ora ci concentreremo solo sui primi 2. I primi due parametri di `splice()` sono interi che rappresentano indici, o posizioni, dell'array sul quale viene chiamato `splice()`. E ricorda, gli array sono *indicizzati a zero*, quindi per indicare il primo elemento di un array, useremo `0`. Il primo parametro di `splice()`rappresenta l'indice dell'array da cui iniziare a rimuovere gli elementi, mentre il secondo parametro indica il numero di elementi da eliminare. Ad esempio:

```js
let array = ['today', 'was', 'not', 'so', 'great'];

array.splice(2, 2);
```

Qui rimuoviamo 2 elementi a partire dal terzo (all'indice 2). `array` avrà il valore `['today', 'was', 'great']`.

`splice()` non solo modifica l'array su cui viene chiamato, ma restituisce anche un nuovo array contenente il valore degli elementi rimossi:

```js
let array = ['I', 'am', 'feeling', 'really', 'happy'];

let newArray = array.splice(3, 2);
```

`newArray` ha il valore `['really', 'happy']`.

# --instructions--

Abbiamo inizializzato un array `arr`. Usa `splice()` per rimuovere gli elementi da `arr`, in modo che contenga solo elementi la cui somma sia `10`.

# --hints--

Non devi cambiare la riga originale `const arr = [2, 4, 5, 1, 7, 5, 2, 1];`.

```js
assert(
  __helpers.removeWhiteSpace(code).match(/constarr=\[2,4,5,1,7,5,2,1\];?/)
);
```

`arr` dovrebbe contenere solo elementi la cui somma è `10`.

```js
assert.strictEqual(
  arr.reduce((a, b) => a + b),
  10
);
```

Il tuo codice dovrebbe utilizzare il metodo `splice()` su `arr`.

```js
assert(__helpers.removeWhiteSpace(code).match(/arr\.splice\(/));
```

Splice dovrebbe solo rimuovere elementi da `arr` e non aggiungere altri elementi a `arr`.

```js
assert(
  !__helpers.removeWhiteSpace(code).match(/arr\.splice\(\d+,\d+,\d+.*\)/g)
);
```

# --seed--

## --seed-contents--

```js
const arr = [2, 4, 5, 1, 7, 5, 2, 1];
// Only change code below this line

// Only change code above this line
console.log(arr);
```

# --solutions--

```js
const arr = [2, 4, 5, 1, 7, 5, 2, 1];
arr.splice(1, 4);
```
