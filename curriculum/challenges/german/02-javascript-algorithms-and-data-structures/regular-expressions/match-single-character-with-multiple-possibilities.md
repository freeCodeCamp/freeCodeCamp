---
id: 587d7db5367417b2b2512b95
title: Ein einzelnes Zeichen mit mehreren Möglichkeiten abgleichen
challengeType: 1
forumTopicId: 301357
dashedName: match-single-character-with-multiple-possibilities
---

# --description--

Du hast gelernt, wie man literale Muster (`/literal/`) erkennt und das Wildcardzeichen (`/./`) verwendet. Das sind die Extreme der regulären Ausdrücke, von denen der eine exakte Übereinstimmungen findet und der andere alles abdeckt. Es gibt Möglichkeiten, die ein Gleichgewicht zwischen den beiden Extremen darstellen.

Mit <dfn>Zeichenklassen</dfn> kannst du mit einer gewissen Flexibilität nach einem literalen Muster suchen. Mit Zeichenklassen kannst du eine Gruppe von Zeichen definieren, die du abgleichen möchtest, indem du sie in eckige (`[` und `]`) Klammern setzt.

Du willst zum Beispiel `bag`, `big` und `bug` finden, aber nicht `bog`. Du kannst dafür den Regex `/b[aiu]g/` erstellen. `[aiu]` ist die Zeichenklasse, die nur auf die Zeichen `a`, `i` oder `u` passt.

```js
let bigStr = "big";
let bagStr = "bag";
let bugStr = "bug";
let bogStr = "bog";
let bgRegex = /b[aiu]g/;
bigStr.match(bgRegex);
bagStr.match(bgRegex);
bugStr.match(bgRegex);
bogStr.match(bgRegex);
```

In dieser Reihenfolge würden die vier `match`-Aufrufe die Werte `["big"]`, `["bag"]`, `["bug"]` und `null` zurückgeben.

# --instructions--

Verwende eine Zeichenklasse mit den Vokalen (`a`, `e`, `i`, `o`, `u`) in deinem Regex `vowelRegex`, um alle Vokale in dem String `quoteSample` zu finden.

**Hinweis:** Achte darauf, dass sowohl Groß- als auch Kleinbuchstaben übereinstimmen.

# --hints--

Du solltest alle 25 Vokale finden.

```js
assert(result.length == 25);
```

Dein Regex `vowelRegex` sollte eine Zeichenklasse verwenden.

```js
assert(/\[.*\]/.test(vowelRegex.source));
```

Dein Regex `vowelRegex` sollte den global Flag verwenden.

```js
assert(vowelRegex.flags.match(/g/).length == 1);
```

Dein Regex `vowelRegex` sollte die Groß-/Kleinschreibung nicht berücksichtigen.

```js
assert(vowelRegex.flags.match(/i/).length == 1);
```

Dein Regex sollte keine Konsonanten enthalten.

```js
assert(!/[b-df-hj-np-tv-z]/gi.test(result.join()));
```

# --seed--

## --seed-contents--

```js
let quoteSample = "Beware of bugs in the above code; I have only proved it correct, not tried it.";
let vowelRegex = /change/; // Change this line
let result = vowelRegex; // Change this line
```

# --solutions--

```js
let quoteSample = "Beware of bugs in the above code; I have only proved it correct, not tried it.";
let vowelRegex = /[aeiou]/gi; // Change this line
let result = quoteSample.match(vowelRegex); // Change this line
```
