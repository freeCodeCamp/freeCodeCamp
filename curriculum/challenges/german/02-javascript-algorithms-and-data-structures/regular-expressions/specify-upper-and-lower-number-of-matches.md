---
id: 587d7db9367417b2b2512ba5
title: Obere und untere Anzahl von Übereinstimmungen festlegen
challengeType: 1
forumTopicId: 301367
dashedName: specify-upper-and-lower-number-of-matches
---

# --description--

Erinnere dich daran, dass du das Pluszeichen `+` verwendest, um nach einem oder mehreren Zeichen und das Sternchen `*`, um nach null oder mehr Zeichen zu suchen. Diese sind praktisch, aber manchmal willst du eine bestimmte Reihe von Mustern abgleichen.

Du kannst die untere und obere Anzahl der Muster mit <dfn>Quantifizierer</dfn> festlegen. Quantifizierer werden mit geschweiften Klammern verwendet (`{` und`}`). Du setzt zwei Zahlen zwischen die geschweiften Klammern - für die untere und obere Anzahl der Muster.

Um zum Beispiel nur den Buchstaben `a` zu finden, der zwischen `3` und `5` Mal in dem String `ah` vorkommt, würde dein regulärer Ausdruck `/a{3,5}h/` lauten.

```js
let A4 = "aaaah";
let A2 = "aah";
let multipleA = /a{3,5}h/;
multipleA.test(A4);
multipleA.test(A2);
```

Der erste `test`-Aufruf würde `true`, während der zweite `false` zurückgeben würde.

# --instructions--

Ändere den regulären Ausdruck `ohRegex` so, dass er nur dann mit der gesamten Phrase `Oh no` übereinstimmt, wenn sie aus `3` bis `6` Buchstaben `h` besteht.

# --hints--

Dein regulärer Ausdruck sollte geschweifte Klammern verwenden.

```js
assert(ohRegex.source.match(/{.*?}/).length > 0);
```

Dein regulärer Ausdruck sollte nicht auf den String `Ohh no` passen.

```js
ohRegex.lastIndex = 0;
assert(!ohRegex.test('Ohh no'));
```

Dein regulärer Ausdruck sollte auf den String `Ohh no` passen.

```js
assert('Ohhh no'.match(ohRegex)[0].length === 7);
```

Dein regulärer Ausdruck sollte mit dem String `Ohhhh no` übereinstimmen.

```js
assert('Ohhhh no'.match(ohRegex)[0].length === 8);
```

Dein regulärer Ausdruck sollte auf den String `Ohhhh no` passen.

```js
assert('Ohhhhh no'.match(ohRegex)[0].length === 9);
```

Dein regulärer Ausdruck sollte mit dem String `Ohhhhh no` übereinstimmen.

```js
assert('Ohhhhhh no'.match(ohRegex)[0].length === 10);
```

Dein regulärer Ausdruck sollte nicht auf den String `Ohhhhhhh no` passen.

```js
ohRegex.lastIndex = 0;
assert(!ohRegex.test('Ohhhhhhh no'));
```

# --seed--

## --seed-contents--

```js
let ohStr = "Ohhh no";
let ohRegex = /change/; // Change this line
let result = ohRegex.test(ohStr);
```

# --solutions--

```js
let ohStr = "Ohhh no";
let ohRegex = /Oh{3,6} no/; // Change this line
let result = ohRegex.test(ohStr);
```
