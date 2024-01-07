---
id: 587d7da9367417b2b2512b67
title: Aggiungere elementi alla fine di un array usando concat invece di push
challengeType: 1
forumTopicId: 301226
dashedName: add-elements-to-the-end-of-an-array-using-concat-instead-of-push
---

# --description--

La programmazione funzionale riguarda la creazione e l'utilizzo di funzioni non mutanti.

L'ultima sfida ha introdotto il metodo `concat` come modo per unire degli array in un nuovo array senza mutare gli array originali. Confronta `concat` con il metodo `push`. `push` aggiunge degli elementi alla fine dello stesso array sul quale viene chiamato, mutando quello stesso array. Ecco un esempio:

```js
const arr = [1, 2, 3];
arr.push(4, 5, 6);
```

`arr` avrà un valore modificato di `[1, 2, 3, 4, 5, 6]`, che non è in linea con la programmazione funzionale.

`concat` offre un modo per unire nuovi elementi alla fine di un array senza effetti collaterali di mutazione.

# --instructions--

Cambia la funzione `nonMutatingPush` in modo che utilizzi `concat` per aggiungere `newItem` alla fine di `original` senza mutare gli array `original` o `newItem`. La funzione dovrebbe restituire un array.

# --hints--

Dovresti usare il metodo `concat`.

```js
assert(code.match(/\.concat/g));
```

Non dovresti usare il metodo `push`.

```js
assert(!code.match(/\.?[\s\S]*?push/g));
```

L'array `first` non dovrebbe cambiare.

```js
assert(JSON.stringify(first) === JSON.stringify([1, 2, 3]));
```

L'array `second` non dovrebbe cambiare.

```js
assert(JSON.stringify(second) === JSON.stringify([4, 5]));
```

`nonMutatingPush([1, 2, 3], [4, 5])` dovrebbe restituire `[1, 2, 3, 4, 5]`.

```js
assert(
  JSON.stringify(nonMutatingPush([1, 2, 3], [4, 5])) ===
    JSON.stringify([1, 2, 3, 4, 5])
);
```

# --seed--

## --seed-contents--

```js
function nonMutatingPush(original, newItem) {
  // Only change code below this line
  return original.push(newItem);

  // Only change code above this line
}

const first = [1, 2, 3];
const second = [4, 5];
nonMutatingPush(first, second);
```

# --solutions--

```js
function nonMutatingPush(original, newItem) {
  return original.concat(newItem);
}
const first = [1, 2, 3];
const second = [4, 5];
```
