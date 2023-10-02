---
id: 587d7b8c367417b2b2512b55
title: Riutilizzare codice JavaScript usando import
challengeType: 1
forumTopicId: 301208
dashedName: reuse-javascript-code-using-import
---

# --description--

`import` ti permette di scegliere quali parti di un file o di un modulo caricare. Nella lezione precedente, gli esempi esportavano `add` dal file `math_functions.js`. Ecco come è possibile importarlo per usarlo in un altro file:

```js
import { add } from './math_functions.js';
```

Qui, `import` troverà `add` nel file `math_functions.js`, importerà solo quella funzione per il tuo utilizzo ed ignorerà il resto. Il `./` dice all'importazione di cercare il file `math_functions.js` nella stessa cartella del file attuale. Il percorso relativo del file (`./`) e l'estensione del file (`.js`) sono necessari quando si utilizza import in questo modo.

È possibile importare più di un elemento dal file aggiungendoli nell'istruzione `import` in questo modo:

```js
import { add, subtract } from './math_functions.js';
```

# --instructions--

Aggiungi l'istruzione `import` appropriata che permetterà al file corrente di utilizzare le funzioni `uppercaseString` e `lowercaseString` che hai esportato nella lezione precedente. Queste funzioni sono in un file chiamato `string_functions.js`, che si trova nella stessa cartella del file corrente.

# --hints--

Dovresti importare correttamente `uppercaseString`.

```js
assert(
  code.match(
    /import\s*{\s*(uppercaseString[^}]*|[^,]*,\s*uppercaseString\s*)}\s+from\s+('|")\.\/string_functions\.js\2/g
  )
);
```

Dovresti importare correttamente `lowercaseString`.

```js
assert(
  code.match(
    /import\s*{\s*(lowercaseString[^}]*|[^,]*,\s*lowercaseString\s*)}\s+from\s+('|")\.\/string_functions\.js\2/g
  )
);
```

# --seed--

## --seed-contents--

```js

// Only change code above this line

uppercaseString("hello");
lowercaseString("WORLD!");
```

# --solutions--

```js
import { uppercaseString, lowercaseString } from './string_functions.js';

uppercaseString("hello");
lowercaseString("WORLD!");
```
