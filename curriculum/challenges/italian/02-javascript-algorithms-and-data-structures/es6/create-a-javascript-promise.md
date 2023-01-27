---
id: 5cdafbb0291309899753167f
title: Creare una promise in JavaScript
challengeType: 1
forumTopicId: 301197
dashedName: create-a-javascript-promise
---

# --description--

Una promise (promessa) in JavaScript è esattamente quello che sembra - si usa per promettere di fare qualcosa, di solito in modo asincrono. Quando l'azione è completata, o adempi alla tua promessa o non riesci a farlo. `Promise` è una funzione costruttore, quindi è necessario utilizzare la parola chiave `new` per crearne una. Prende per argomento una funzione con due parametri - `resolve` e `reject`. Questi sono metodi utilizzati per determinare il risultato della promise. La sintassi si presenta così:

```js
const myPromise = new Promise((resolve, reject) => {

});
```

# --instructions--

Crea una nuova promise chiamata `makeServerRequest`. Passa al costruttore una funzione con i parametri `resolve` e `reject`.

# --hints--

Dovresti assegnare una promise alla dichiarazione di una variabile chiamata `makeServerRequest`.

```js
assert(makeServerRequest instanceof Promise);
```

La tua promise dovrebbe ricevere una funzione con `resolve` e `reject` come parametri.

```js
assert(
  code.match(
    /Promise\s*\(\s*(function\s*\(\s*resolve\s*,\s*reject\s*\)\s*{|\(\s*resolve\s*,\s*reject\s*\)\s*=>\s*{)[^}]*}/g
  )
);
```

# --seed--

## --seed-contents--

```js

```

# --solutions--

```js
const makeServerRequest = new Promise((resolve, reject) => {

});
```
