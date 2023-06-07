---
id: 587d7db7367417b2b2512b9f
title: Alle Buchstaben und Zahlen finden
challengeType: 1
forumTopicId: 301346
dashedName: match-all-letters-and-numbers
---

# --description--

Mithilfe von Zeichenklassen konntest du mit `[a-z]` nach allen Buchstaben des Alphabets suchen. Diese Art von Zeichenklasse ist so häufig, dass es eine Kurzform dafür gibt, obwohl sie auch ein paar zusätzliche Zeichen enthält.

Die nächstgelegene Zeichenklasse in JavaScript, die dem Alphabet entspricht, ist `\w`. Diese Kurzform ist gleich `[A-Za-z0-9_]`. Diese Zeichenklasse umfasst Groß- und Kleinbuchstaben sowie Zahlen. Beachte, dass diese Zeichenklasse auch das Unterstrichzeichen \[Underscore\] (`_`) enthält.

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

Alle vier dieser `test`-Aufrufe würden `true` zurückgeben.

Diese Kurzformen von Zeichenklassen sind auch als <dfn>Kurzzeichen-Klassen</dfn> bekannt.

# --instructions--

Verwende die Kurzzeichen-Klasse `\w`, um die Anzahl der alphanumerischen Zeichen in verschiedenen Zitaten und Strings zu zählen.

# --hints--

Dein regulärer Ausdruck sollte den globalen Flag verwenden.

```js
assert(alphabetRegexV2.global);
```

Dein regulärer Ausdruck sollte das Kurzzeichen `\w` verwenden, um alle alphanumerischen Zeichen zu finden.

```js
assert(/\\w/.test(alphabetRegexV2.source));
```

Dein regulärer Ausdruck sollte 31 alphanumerische Zeichen in dem String `The five boxing wizards jump quickly.` finden.

```js
assert(
  'The five boxing wizards jump quickly.'.match(alphabetRegexV2).length === 31
);
```

Dein regulärer Ausdruck sollte 32 alphanumerische Zeichen in dem String `Pack my box with five dozen liquor jugs.` finden.

```js
assert(
  'Pack my box with five dozen liquor jugs.'.match(alphabetRegexV2).length ===
    32
);
```

Dein regulärer Ausdruck sollte 30 alphanumerische Zeichen in dem String `How vexingly quick daft zebras jump!` finden.

```js
assert(
  'How vexingly quick daft zebras jump!'.match(alphabetRegexV2).length === 30
);
```

Dein regulärer Ausdruck sollte 36 alphanumerische Zeichen in dem String `123 456 7890 ABC def GHI jkl MNO pqr STU vwx YZ.` finden.

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
