---
id: bd7123c9c549eddfaeb5bdef
title: Verwendung der Klammer-Notation, um das erste Zeichen in einem String zu finden
challengeType: 1
videoUrl: 'https://scrimba.com/c/ca8JwhW'
forumTopicId: 18341
dashedName: use-bracket-notation-to-find-the-first-character-in-a-string
---

# --description--

<dfn>Die Klammer-Notation</dfn> ist eine Methode, um ein Zeichen an einem bestimmten Index innerhalb eines Strings zu erhalten.

Die meisten modernen Programmiersprachen, wie z. B. JavaScript, beginnen nicht bei 1 zu zählen, wie es Menschen tun. Sie beginnen bei 0. Dies wird als <dfn>nullbasierte</dfn> Indizierung bezeichnet.

Zum Beispiel ist das Zeichen bei Index 0 im Wort `Charles` das `C`. Wenn also `const firstName = "Charles"`, kannst du den Wert des ersten Buchstabens des Strings erhalten, indem du `firstName[0]` verwendest.

Beispiel:

```js
const firstName = "Charles";
const firstLetter = firstName[0];
```

`firstLetter` hätte den Wert `C`.

# --instructions--

Verwende die Klammer-Notation, um das erste Zeichen in der Variablen `lastName` zu finden und weise es `firstLetterOfLastName` zu.

**Hinweis:** Wenn du nicht weiterkommst, schau dir das Beispiel oben an.

# --hints--

Die Variable `firstLetterOfLastName` sollte den Wert von `L` haben.

```js
assert(firstLetterOfLastName === 'L');
```

Du solltest die Klammer-Notation verwenden.

```js
assert(code.match(/firstLetterOfLastName\s*=\s*lastName\s*\[\s*\d\s*\]/));
```

# --seed--

## --after-user-code--

```js
(function(v){return v;})(firstLetterOfLastName);
```

## --seed-contents--

```js
// Setup
let firstLetterOfLastName = "";
const lastName = "Lovelace";

// Only change code below this line
firstLetterOfLastName = lastName; // Change this line
```

# --solutions--

```js
let firstLetterOfLastName = "";
const lastName = "Lovelace";

// Only change code below this line
firstLetterOfLastName = lastName[0];
```
