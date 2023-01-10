---
id: 587d7db8367417b2b2512ba0
title: Alles außer Buchstaben und Zahlen finden
challengeType: 1
forumTopicId: 301353
dashedName: match-everything-but-letters-and-numbers
---

# --description--

Du hast gelernt, dass du eine Kurzform für alphanumerische Zeichen `[A-Za-z0-9_]` mit `\w` verwenden kannst. Ein natürliches Muster, nach dem du suchen kannst, ist das Gegenteil von alphanumerischen Zeichen.

Mit `\W` kannst du nach dem Gegenteil von `\w` suchen. Beachte, dass das entgegengesetzte Muster einen Großbuchstaben verwendet. Diese Kurzform ist das Gleiche wie `[^A-Za-z0-9_]`.

```js
let shortHand = /\W/;
let numbers = "42%";
let sentence = "Coding!";
numbers.match(shortHand);
sentence.match(shortHand);
```

Der erste `match`-Aufruf würde den Wert `["%"]` und der zweite würde `["!"]` zurückgeben.

# --instructions--

Verwende die Kurzzeichen-Klasse `\W`, um die Anzahl der nicht alphanumerischen Zeichen in verschiedenen Zitaten und Strings zu zählen.

# --hints--

Dein regulärer Ausdruck sollte den globalen Flag verwenden.

```js
assert(nonAlphabetRegex.global);
```

Dein regulärer Ausdruck sollte 6 nicht-alphanumerische Zeichen in dem String `The five boxing wizards jump quickly.` finden.

```js
assert(
  'The five boxing wizards jump quickly.'.match(nonAlphabetRegex).length == 6
);
```

Dein regulärer Ausdruck sollte das Kurzzeichen verwenden, um Zeichen zu finden, die nicht alphanumerisch sind.

```js
assert(/\\W/.test(nonAlphabetRegex.source));
```

Dein regulärer Ausdruck sollte 8 nicht-alphanumerische Zeichen in dem String `Pack my box with five dozen liquor jugs.` finden.

```js
assert(
  'Pack my box with five dozen liquor jugs.'.match(nonAlphabetRegex).length == 8
);
```

Dein regulärer Ausdruck sollte 6 nicht-alphanumerische Zeichen in dem String `How vexingly quick daft zebras jump!` finden.

```js
assert(
  'How vexingly quick daft zebras jump!'.match(nonAlphabetRegex).length == 6
);
```

Dein regulärer Ausdruck sollte 12 nicht-alphanumerische Zeichen in dem String `123 456 7890 ABC def GHI jkl MNO pqr STU vwx YZ.` finden.

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
