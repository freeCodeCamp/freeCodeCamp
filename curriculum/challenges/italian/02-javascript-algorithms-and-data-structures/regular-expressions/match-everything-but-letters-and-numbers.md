---
id: 587d7db8367417b2b2512ba0
title: Riconoscere tutto tranne le lettere e i numeri
challengeType: 1
forumTopicId: 301353
dashedName: match-everything-but-letters-and-numbers
---

# --description--

Hai imparato che puoi usare una scorciatoia per riconoscere i caratteri alfanumerici `[A-Za-z0-9_]` usando `\w`. Un pattern naturale che potresti voler cercare è l'opposto degli alfanumerici.

Puoi cercare l'opposto di `\w` con `\W`. Nota che il modello opposto utilizza una lettera maiuscola. Questa scorciatoia è la stessa di `[^A-Za-z0-9_]`.

```js
let shortHand = /\W/;
let numbers = "42%";
let sentence = "Coding!";
numbers.match(shortHand);
sentence.match(shortHand);
```

La prima chiamata a `match` restituirà il valore `["%"]` e la seconda restituirà `["!"]`.

# --instructions--

Usa la scorciatoia per la classe di caratteri `\W` per contare il numero di caratteri non alfanumerici in varie frasi e stringhe.

# --hints--

La tua espressione regolare dovrebbe usare il flag global.

```js
assert(nonAlphabetRegex.global);
```

La tua espressione regolare dovrebbe trovare 6 caratteri non alfanumerici nella stringa `The five boxing wizards jump quickly.`.

```js
assert(
  'The five boxing wizards jump quickly.'.match(nonAlphabetRegex).length == 6
);
```

La tua espressione regolare dovrebbe usare il carattere abbreviato per riconoscere caratteri non alfanumerici.

```js
assert(/\\W/.test(nonAlphabetRegex.source));
```

La tua espressione regolare dovrebbe trovare 8 caratteri non alfanumerici nella stringa `Pack my box with five dozen liquor jugs.`

```js
assert(
  'Pack my box with five dozen liquor jugs.'.match(nonAlphabetRegex).length == 8
);
```

La tua espressione regolare dovrebbe trovare 6 caratteri non alfanumerici nella stringa `How vexingly quick daft zebras jump!`

```js
assert(
  'How vexingly quick daft zebras jump!'.match(nonAlphabetRegex).length == 6
);
```

La tua espressione regolare dovrebbe trovare 12 caratteri non alfanumerici nella stringa `123 456 7890 ABC def GHI jkl MNO pqr STU vwx YZ.`

```js
assert(
  '123 456 7890 ABC def GHI jkl MNO pqr STU vwx YZ.'.match(nonAlphabetRegex)
    .length == 12
);
```

# --seed--

## --seed-contents--

```js
let quoteSample = "The five boxing wizards jump quickly.";
let nonAlphabetRegex = /change/; // Change this line
let result = quoteSample.match(nonAlphabetRegex).length;
```

# --solutions--

```js
let quoteSample = "The five boxing wizards_jump quickly.";
let nonAlphabetRegex = /\W/g; // Change this line
let result = quoteSample.match(nonAlphabetRegex).length;
```
