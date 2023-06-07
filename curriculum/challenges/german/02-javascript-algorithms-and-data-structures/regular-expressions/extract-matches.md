---
id: 587d7db4367417b2b2512b92
title: Treffer extrahieren
challengeType: 1
forumTopicId: 301340
dashedName: extract-matches
---

# --description--

Bisher hast du nur geprüft, ob ein Muster in einem String existiert oder nicht. Du kannst die gefundenen Treffer auch mit der Methode `.match()` extrahieren.

Um die Methode `.match()` zu verwenden, wendest du die Methode auf einen String an und gibst den Regex innerhalb der Klammern ein.

Hier ist ein Beispiel:

```js
"Hello, World!".match(/Hello/);
let ourStr = "Regular expressions";
let ourRegex = /expressions/;
ourStr.match(ourRegex);
```

Hier würde die erste Übereinstimmung (`match`) `["Hello"]` zurückgeben und die zweite `["expressions"]`.

Beachte, dass die `.match`-Syntax das "Gegenteil" der `.test`-Methode ist, die du bisher verwendet hast:

```js
'string'.match(/regex/);
/regex/.test('string');
```

# --instructions--

Wende die Methode `.match()` an, um den String `coding` zu extrahieren.

# --hints--

Das Ergebnis (`result`) sollte den String `coding` enthalten

```js
assert(result.join() === 'coding');
```

Dein Regex `codingRegex` sollte nach dem String `coding` suchen

```js
assert(codingRegex.source === 'coding');
```

Du solltest die Methode `.match()` verwenden.

```js
assert(code.match(/\.match\(.*\)/));
```

# --seed--

## --seed-contents--

```js
let extractStr = "Extract the word 'coding' from this string.";
let codingRegex = /change/; // Change this line
let result = extractStr; // Change this line
```

# --solutions--

```js
let extractStr = "Extract the word 'coding' from this string.";
let codingRegex = /coding/; // Change this line
let result = extractStr.match(codingRegex); // Change this line
```
