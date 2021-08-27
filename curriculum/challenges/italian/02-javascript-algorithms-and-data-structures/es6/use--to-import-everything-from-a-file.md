---
id: 587d7b8c367417b2b2512b57
title: Usare * per importare tutto da un file
challengeType: 1
forumTopicId: 301210
dashedName: use--to-import-everything-from-a-file
---

# --description--

Supponiamo di avere un file e di voler importare tutti i suoi contenuti nel file corrente. Questo può essere fatto con la sintassi `import * as`. Ecco un esempio in cui il contenuto di un file chiamato `math_functions.js` viene importato in un file nella stessa directory:

```js
import * as myMathModule from "./math_functions.js";
```

L'istruzione `import` di cui sopra creerà un oggetto chiamato `myMathModule`. Questo è solo un nome di variabile, puoi chiamarlo in qualsiasi modo. L'oggetto conterrà tutte le esportazioni di `math_functions.js`, così potrai accedere alle funzioni come faresti con qualsiasi altra proprietà di un oggetto. Ecco come utilizzare le funzioni `add` e `subtract` che sono state importate:

```js
myMathModule.add(2,3);
myMathModule.subtract(5,3);
```

# --instructions--

Il codice in questo file richiede il contenuto del file: `string_functions.js`, che si trova nella stessa directory del file corrente. Usa la sintassi `import * as` per importare tutto dal file in un oggetto chiamato `stringFunctions`.

# --hints--

Il tuo codice dovrebbe utilizzare correttamente la sintassi `import * as`.

```js
assert(
  code.match(
    /import\s*\*\s*as\s+stringFunctions\s+from\s*('|")\.\/string_functions\.js\1/g
  )
);
```

# --seed--

## --seed-contents--

```js

// Only change code above this line

stringFunctions.uppercaseString("hello");
stringFunctions.lowercaseString("WORLD!");
```

# --solutions--

```js
import * as stringFunctions from "./string_functions.js";

// add code above this line
stringFunctions.uppercaseString("hello");
stringFunctions.lowercaseString("WORLD!");
```
