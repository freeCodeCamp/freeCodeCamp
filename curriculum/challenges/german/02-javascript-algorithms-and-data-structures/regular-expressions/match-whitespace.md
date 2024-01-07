---
id: 587d7db8367417b2b2512ba3
title: Leerzeichen abgleichen
challengeType: 1
forumTopicId: 301359
dashedName: match-whitespace
---

# --description--

Bei den bisherigen Aufgaben ging es darum, Buchstaben des Alphabets und Zahlen zu finden. Du kannst auch die Leerzeichen zwischen den Buchstaben abgleichen.

Du kannst nach Leerzeichen suchen, indem du `\s` verwendest, das ist ein kleingeschriebenes `s`. Dieses Muster passt nicht nur auf Leerzeichen, sondern auch auf Wagenrücklauf (carriage return)-, Tabulator-, Seitenvorschub- und Zeilenvorschubzeichen. Du kannst dir das so ähnlich vorstellen wie die Zeichenklasse `[ \r\t\f\n\v]`.

```js
let whiteSpace = "Whitespace. Whitespace everywhere!"
let spaceRegex = /\s/g;
whiteSpace.match(spaceRegex);
```

Dieser `match`-Aufruf würde `[" ", " "]` zurückgeben.
# --instructions--

Ändere den regulärer Ausdruck `countWhiteSpace`, um nach mehreren Leerzeichen in einem String zu suchen.

# --hints--

Dein regulärer Ausdruck sollte den globalen Flag verwenden.

```js
assert(countWhiteSpace.global);
```

Dein regulärer Ausdruck sollte das Kurzzeichen `\s` verwenden, um alle Leerzeichen abzugleichen.

```js
assert(/\\s/.test(countWhiteSpace.source));
```

Dein regulärer Ausdruck sollte acht Leerzeichen in dem String `Men are from Mars and women are from Venus.` finden.

```js
assert(
  'Men are from Mars and women are from Venus.'.match(countWhiteSpace).length ==
    8
);
```

Dein regulärer Ausdruck sollte drei Leerzeichen in dem String `Space: the final frontier.` finden.

```js
assert('Space: the final frontier.'.match(countWhiteSpace).length == 3);
```

Dein regulärer Ausdruck sollte keine Leerzeichen in dem String `MindYourPersonalSpace` finden.

```js
assert('MindYourPersonalSpace'.match(countWhiteSpace) == null);
```

# --seed--

## --seed-contents--

```js
let sample = "Whitespace is important in separating words";
let countWhiteSpace = /change/; // Change this line
let result = sample.match(countWhiteSpace);
```

# --solutions--

```js
let sample = "Whitespace is important in separating words";
let countWhiteSpace = /\s/g;
let result = sample.match(countWhiteSpace);
```
