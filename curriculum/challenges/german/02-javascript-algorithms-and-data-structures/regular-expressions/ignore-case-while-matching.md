---
id: 587d7db4367417b2b2512b91
title: Groß- und Kleinschreibung beim Abgleich ignorieren
challengeType: 1
forumTopicId: 301344
dashedName: ignore-case-while-matching
---

# --description--

Bis jetzt hast du dir Regexe angeschaut, um wörtliche Übereinstimmungen von Strings zu finden. Aber manchmal möchtest du vielleicht auch Unterschiede in der Groß- und Kleinschreibung abgleichen.

"Case" (oder manchmal auch "Letter Case") ist der Unterschied zwischen Großbuchstaben und Kleinbuchstaben. Beispiele für Großbuchstaben sind `A`, `B` und `C`. Beispiele für Kleinbuchstaben sind `a`, `b` und `c`.

Du kannst beide Fälle mit einem so genannten Flag ( (oder Modifikator) abgleichen. Es gibt noch andere Flags, aber hier konzentrierst du dich auf das Flag, das Groß- und Kleinschreibung ignoriert - das Flag `i`. Du kannst sie verwenden, indem du sie an den Regex anhängst. Ein Beispiel für die Verwendung dieses Flags ist `/ignorecase/i`. Dieser Regex kann auf die Strings `ignorecase`, `igNoreCase` und `IgnoreCase` passen.

# --instructions--

Schreibe ein Regex `fccRegex`, das mit `freeCodeCamp` übereinstimmt, egal wie groß es ist. Dein Regex sollte keine Abkürzungen oder Variationen mit Leerzeichen finden.

# --hints--

Dein Regex sollte mit dem String `freeCodeCamp` übereinstimmen

```js
fccRegex.lastIndex = 0; 
assert(fccRegex.test('freeCodeCamp'));
```

Dein Regex sollte mit dem String `FreeCodeCamp` übereinstimmen

```js
fccRegex.lastIndex = 0;
assert(fccRegex.test('FreeCodeCamp'));
```

Dein Regex sollte mit dem String `FreecodeCamp` übereinstimmen

```js
fccRegex.lastIndex = 0;
assert(fccRegex.test('FreecodeCamp'));
```

Dein Regex sollte mit dem String `FreeCodecamp` übereinstimmen

```js
fccRegex.lastIndex = 0;
assert(fccRegex.test('FreeCodecamp'));
```

Dein Regex sollte mit dem String `Free Code Camp` übereinstimmen

```js
fccRegex.lastIndex = 0;
assert(!fccRegex.test('Free Code Camp'));
```

Dein Regex sollte mit dem String `FreeCOdeCamp` übereinstimmen

```js
fccRegex.lastIndex = 0;
assert(fccRegex.test('FreeCOdeCamp'));
```

Dein Regex sollte nicht mit dem String `FCC` übereinstimmen

```js
fccRegex.lastIndex = 0;
assert(!fccRegex.test('FCC'));
```

Dein Regex sollte mit dem String `FrEeCoDeCamp` übereinstimmen

```js
fccRegex.lastIndex = 0;
assert(fccRegex.test('FrEeCoDeCamp'));
```

Dein Regex sollte mit dem String `FrEeCodECamp` übereinstimmen

```js
fccRegex.lastIndex = 0;
assert(fccRegex.test('FrEeCodECamp'));
```

Dein Regex sollte mit dem String `FReeCodeCAmp` übereinstimmen

```js
fccRegex.lastIndex = 0;
assert(fccRegex.test('FReeCodeCAmp'));
```

# --seed--

## --seed-contents--

```js
let myString = "freeCodeCamp";
let fccRegex = /change/; // Change this line
let result = fccRegex.test(myString);
```

# --solutions--

```js
let myString = "freeCodeCamp";
let fccRegex = /freecodecamp/i; // Change this line
let result = fccRegex.test(myString);
```
