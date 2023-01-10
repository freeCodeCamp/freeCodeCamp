---
id: 587d7db5367417b2b2512b97
title: Zahlen und Buchstaben des Alphabets abgleichen
challengeType: 1
forumTopicId: 301356
dashedName: match-numbers-and-letters-of-the-alphabet
---

# --description--

Die Verwendung des Bindestrichs (`-`) für eine Reihe von Zeichen ist nicht auf Buchstaben beschränkt. Es funktioniert auch, um eine Reihe von Zahlen abzugleichen.

Zum Beispiel passt `/[0-5]/` zu jeder Zahl zwischen `0` und `5`, einschließlich der `0` und `5`.

Es ist auch möglich, eine Reihe von Buchstaben und Zahlen in einem einzigen Zeichensatz zu kombinieren.

```js
let jennyStr = "Jenny8675309";
let myRegex = /[a-z0-9]/ig;
jennyStr.match(myRegex);
```

# --instructions--

Erstelle einen einzelnen regulärer Ausdruck, der auf einen Bereich von Buchstaben zwischen `h` und `s` und einen Bereich von Zahlen zwischen `2` und `6` passt. Vergiss nicht, die entsprechenden Flags in den regulärer Ausdruck einzufügen.

# --hints--

Dein regulärer Ausdruck `myRegex` sollte 17 Einträge finden.

```js
assert(result.length == 17);
```

Dein regulärer Ausdruck `myRegex` sollte das globale Flag verwenden.

```js
assert(myRegex.flags.match(/g/).length == 1);
```

Dein regulärer Ausdruck `myRegex` sollte die Groß-/Kleinschreibung nicht berücksichtigen.

```js
assert(myRegex.flags.match(/i/).length == 1);
```

# --seed--

## --seed-contents--

```js
let quoteSample = "Blueberry 3.141592653s are delicious.";
let myRegex = /change/; // Change this line
let result = myRegex; // Change this line
```

# --solutions--

```js
let quoteSample = "Blueberry 3.141592653s are delicious.";
let myRegex = /[h-s2-6]/gi; // Change this line
let result = quoteSample.match(myRegex); // Change this line
```
