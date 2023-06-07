---
id: 587d7db5367417b2b2512b96
title: Buchstaben des Alphabets abgleichen
challengeType: 1
forumTopicId: 301354
dashedName: match-letters-of-the-alphabet
---

# --description--

Du hast gesehen, wie du <dfn>Zeichensätze</dfn> verwenden kannst, um eine Gruppe von Zeichen zu bestimmen, die übereinstimmen sollen, aber das ist eine Menge Tipparbeit, wenn du einen großen Bereich von Zeichen abgleichen musst (zum Beispiel alle Buchstaben des Alphabets). Zum Glück gibt es eine eingebaute Funktion, die dies schnell und einfach erledigt.

Im Zeichensatz können Bindestriche (`-`) verwendet werden, um den Bereich der zu übereinstimmenden Zeichen zu definieren.

Um zum Beispiel die Kleinbuchstaben `a` bis `e` zu finden, würdest du `[a-e]` verwenden.

```js
let catStr = "cat";
let batStr = "bat";
let matStr = "mat";
let bgRegex = /[a-e]at/;
catStr.match(bgRegex);
batStr.match(bgRegex);
matStr.match(bgRegex);
```

In dieser Reihenfolge würden die drei `match`-Aufrufe die Werte `["cat"]`, `["bat"]` und `null` zurückgeben.

# --instructions--

Finde alle Buchstaben in dem String `quoteSample`.

**Hinweis**: Achte darauf, dass sowohl Groß- als auch Kleinbuchstaben übereinstimmen.

# --hints--

Dein Regex `alphabetRegex` sollte 35 Einträge finden.

```js
assert(result.length == 35);
```

Dein Regex `alphabetRegex` sollte den globale Flag verwenden.

```js
assert(alphabetRegex.flags.match(/g/).length == 1);
```

Dein regulärer Ausdruck `alphabetRegex` sollte die Groß- und Kleinschreibung nicht berücksichtigen.

```js
assert(alphabetRegex.flags.match(/i/).length == 1);
```

# --seed--

## --seed-contents--

```js
let quoteSample = "The quick brown fox jumps over the lazy dog.";
let alphabetRegex = /change/; // Change this line
let result = alphabetRegex; // Change this line
```

# --solutions--

```js
let quoteSample = "The quick brown fox jumps over the lazy dog.";
let alphabetRegex = /[a-z]/gi; // Change this line
let result = quoteSample.match(alphabetRegex); // Change this line
```
