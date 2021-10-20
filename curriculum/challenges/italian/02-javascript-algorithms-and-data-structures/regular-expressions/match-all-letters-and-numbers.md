---
id: 587d7db7367417b2b2512b9f
title: Riconoscere tutte le lettere e i numeri
challengeType: 1
forumTopicId: 301346
dashedName: match-all-letters-and-numbers
---

# --description--

Usando le classi carattere, sei stato in grado di cercare tutte le lettere dell'alfabeto con `[a-z]`. Questo tipo di classe di caratteri è così comune da avere una scorciatoia, anche se riconosce alcuni caratteri in più.

La classe di caratteri più vicina al riconoscimento dell'alfabeto in JavaScript è `\w`. Questa scorciatoia è uguale a `[A-Za-z0-9_]`. Questa classe di caratteri riconosce le lettere maiuscole e minuscole più i numeri. Nota che questa classe di caratteri include anche il carattere underscore (`_`).

```js
let longHand = /[A-Za-z0-9_]+/;
let shortHand = /\w+/;
let numbers = "42";
let varNames = "important_var";
longHand.test(numbers);
shortHand.test(numbers);
longHand.test(varNames);
shortHand.test(varNames);
```

Tutte e quattro queste chiamate di `test` restituiranno `true`.

Queste scorciatoie di classi di caratteri sono note anche come <dfn>classi di caratteri abbreviate</dfn>.

# --instructions--

Usa la classe di caratteri abbreviata `\w` per contare il numero di caratteri alfanumerici in varie citazioni e stringhe.

# --hints--

La tua espressione regolare dovrebbe usare il flag global.

```js
assert(alphabetRegexV2.global);
```

La tua espressione regolare dovrebbe usare la scorciatoia di carattere `\w` per riconoscere tutti i caratteri alfanumerici.

```js
assert(/\\w/.test(alphabetRegexV2.source));
```

La tua espressione regolare dovrebbe trovare 31 caratteri alfanumerici nella stringa `The five boxing wizards jump quickly.`

```js
assert(
  'The five boxing wizards jump quickly.'.match(alphabetRegexV2).length === 31
);
```

La tua espressione regolare dovrebbe trovare 32 caratteri alfanumerici nella stringa `Pack my box with five dozen liquor jugs.`

```js
assert(
  'Pack my box with five dozen liquor jugs.'.match(alphabetRegexV2).length ===
    32
);
```

La tua espressione regolare dovrebbe trovare 30 caratteri alfanumerici nella stringa `How vexingly quick daft zebras jump!`

```js
assert(
  'How vexingly quick daft zebras jump!'.match(alphabetRegexV2).length === 30
);
```

La tua espressione regolare dovrebbe trovare 36 caratteri alfanumerici nella stringa `123 456 7890 ABC def GHI jkl MNO pqr STU vwx YZ.`

```js
assert(
  '123 456 7890 ABC def GHI jkl MNO pqr STU vwx YZ.'.match(alphabetRegexV2)
    .length === 36
);
```

# --seed--

## --seed-contents--

```js
let quoteSample = "The five boxing wizards jump quickly.";
let alphabetRegexV2 = /change/; // Change this line
let result = quoteSample.match(alphabetRegexV2).length;
```

# --solutions--

```js
let quoteSample = "The five boxing wizards jump quickly.";
let alphabetRegexV2 = /\w/g; // Change this line
let result = quoteSample.match(alphabetRegexV2).length;
```
