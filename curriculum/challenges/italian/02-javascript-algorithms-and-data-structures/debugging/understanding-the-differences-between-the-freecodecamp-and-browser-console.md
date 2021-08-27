---
id: 587d7b83367417b2b2512b37
title: Comprendere le differenze tra la console di freeCodeCamp e quella del Browser
challengeType: 1
forumTopicId: 301193
dashedName: understanding-the-differences-between-the-freecodecamp-and-browser-console
---

# --description--

Potresti aver notato che alcune sfide JavaScript di freeCodeCamp includono la propria console. Questa console si comporta in modo leggermente diverso rispetto alla console del browser utilizzata nell'ultima sfida.

La seguente sfida è destinata a evidenziare la differenza principale tra la console di freeCodeCamp e la console del browser.

Quando eseguirai del JavaScript ordinario, la console del browser ti farà visualizzare i comandi `console.log()` per il numero esatto di volte che li hai chiamati.

La console freeCodeCamp ti farà visualizzare i comandi `console.log()` poco tempo dopo che l'editor rileva un cambiamento nello script, così come durante i test.

La console freeCodeCamp viene cancellata prima che i test vengano eseguiti e, per evitare spam, visualizza i log solo durante il primo test (cfr. la nota sottostante per le eccezioni).

Se desideri vedere ogni log per ogni test, esegui i test e apri la console del browser. Se preferisci usare la console del browser, e vuoi che imiti la console di freeCodeCamp, posiziona il comando `console.clear()` prima di qualsiasi altra chiamata `console`, per pulire la console del browser.

**Nota:** le chiamate `console.log` all'interno delle funzioni vengono visualizzate sulla console di freeCodeCamp ogni volta che queste funzioni vengono chiamate. Questo può aiutare a fare il debug delle funzioni che vengono chiamate nel test.

# --instructions--

Innanzitutto, usa `console.log` per visualizzare la variabile `output`. Quindi, utilizza `console.clear` per pulire la console del browser.

# --hints--

Dovresti usare `console.clear()` per cancellare la console del browser.

```js
assert(
  __helpers
    .removeWhiteSpace(code)
    .match(/console.clear\(\)/)
);
```

Dovresti usare `console.log()` per visualizzare la variabile `output`.

```js
assert(__helpers.removeWhiteSpace(code).match(/console\.log\(output\)/));
```

# --seed--

## --seed-contents--

```js
// Open your browser console.
let output = "Get this to log once in the freeCodeCamp console and twice in the browser console";
// Use console.log() to print the output variable.

// Run the tests to see the difference between the two consoles.

// Now, add console.clear() before your console.log() to clear the browser console, and pass the tests.
```

# --solutions--

```js
// Open your browser console.
let output = "Get this to log once in the freeCodeCamp console and twice in the browser console";
// Use console.log() to print the output variable.
console.clear();
console.log(output);

// Run the tests to see the difference between the two consoles.

// Now, add console.clear() before your console.log() to clear the browser console, and pass the tests.
```
