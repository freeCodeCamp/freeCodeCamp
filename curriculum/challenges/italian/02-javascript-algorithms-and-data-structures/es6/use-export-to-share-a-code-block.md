---
id: 587d7b8c367417b2b2512b56
title: Usare export per condividere un blocco di codice
challengeType: 1
forumTopicId: 301219
dashedName: use-export-to-share-a-code-block
---

# --description--

Immagina un file chiamato `math_functions.js` che contiene diverse funzioni relative alle operazioni matematiche. Una di esse è memorizzata in una variabile, `add`, che prende due numeri e restituisce la loro somma. Vuoi utilizzare questa funzione in diversi file JavaScript. Per condividerlo con questi altri file, devi prima farne l'`export`.

```js
export const add = (x, y) => {
  return x + y;
}
```

Quanto sopra è un metodo comune per esportare una singola funzione, ma è possibile ottenere la stessa cosa in questo modo:

```js
const add = (x, y) => {
  return x + y;
}

export { add };
```

Quando si esporta una variabile o funzione, è possibile importarla in un altro file e usarla senza dover riscriverne il codice. È possibile esportare più cose ripetendo il primo esempio per ogni cosa che si desidera esportare, o inserendoli tutti nella dichiarazione di esportazione del secondo esempio, così:

```js
export { add, subtract };
```

# --instructions--

Nell'editor ci sono due funzioni relative alle stringhe. Esporta entrambi utilizzando un metodo a tua scelta.

# --hints--

Dovresti esportare correttamente `uppercaseString`.

```js
assert(
  code.match(
    /(export\s+const\s+uppercaseString|export\s*{\s*(uppercaseString[^}]*|[^,]*,\s*uppercaseString\s*)})/g
  )
);
```

Dovresti esportare correttamente `lowercaseString`.

```js
assert(
  code.match(
    /(export\s+const\s+lowercaseString|export\s*{\s*(lowercaseString[^}]*|[^,]*,\s*lowercaseString\s*)})/g
  )
);
```

# --seed--

## --seed-contents--

```js
const uppercaseString = (string) => {
  return string.toUpperCase();
}

const lowercaseString = (string) => {
  return string.toLowerCase()
}
```

# --solutions--

```js
export const uppercaseString = (string) => {
  return string.toUpperCase();
}

export const lowercaseString = (string) => {
  return string.toLowerCase()
}
```
