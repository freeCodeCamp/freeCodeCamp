---
id: 587d7db8367417b2b2512ba1
title: Alle nicht-numerischen Zeichen abgleichen
challengeType: 1
forumTopicId: 301347
dashedName: match-all-non-numbers
---

# --description--

In der letzten Aufgabe wurde gezeigt, wie man mit der Kurzform `\d` mit einem kleingeschriebenen `d` nach Ziffern sucht. Du kannst auch nach nicht-numerischen Zeichen suchen, indem du eine ähnliche Kurzform verwendest, die stattdessen ein großes `D` verwendet.

Die Kurzform für die Suche nach nicht-nummerischen Zeichen ist `\D`. Das ist identisch mit der Zeichenklasse `[^0-9]`, die nach einem einzelnen Zeichen sucht, das nicht eine Zahl zwischen null und neun ist.

# --instructions--

Verwende die abgekürzte Zeichenklasse `\D`, um zu zählen, wie viele nicht-numerische Zeichen in Filmtiteln enthalten sind.

# --hints--

Dein regulärer Ausdruck sollte die Kurzform verwenden, um nicht-numerische Zeichen abzugleichen

```js
assert(/\\D/.test(noNumRegex.source));
```

Dein regulärer Ausdruck sollte den globalen Flag verwenden.

```js
assert(noNumRegex.global);
```

Dein regulärer Ausdruck sollte keine nicht-numerischen Zeichen in dem String `9` finden.

```js
assert('9'.match(noNumRegex) == null);
```

Dein regulärer Ausdruck sollte 6 nicht-numerische Zeichen in dem String `Catch 22` finden.

```js
assert('Catch 22'.match(noNumRegex).length == 6);
```

Dein regulärer Ausdruck sollte 11 nicht-numerische Zeichen in dem String `101 Dalmatians` finden.

```js
assert('101 Dalmatians'.match(noNumRegex).length == 11);
```

Dein regulärer Ausdruck sollte 15 nicht-numerische Zeichen in dem String `One, Two, Three` finden.

```js
assert('One, Two, Three'.match(noNumRegex).length == 15);
```

Dein regulärer Ausdruck sollte 12 nicht-numerische Zeichen in dem String `21 Jump Street` finden.

```js
assert('21 Jump Street'.match(noNumRegex).length == 12);
```

Dein regulärer Ausdruck sollte 17 nicht-numersiche Zeichen in dem String `2001: A Space Odyssey` finden.

```js
assert('2001: A Space Odyssey'.match(noNumRegex).length == 17);
```

# --seed--

## --seed-contents--

```js
let movieName = "2001: A Space Odyssey";
let noNumRegex = /change/; // Change this line
let result = movieName.match(noNumRegex).length;
```

# --solutions--

```js
let movieName = "2001: A Space Odyssey";
let noNumRegex = /\D/g; // Change this line
let result = movieName.match(noNumRegex).length;
```
