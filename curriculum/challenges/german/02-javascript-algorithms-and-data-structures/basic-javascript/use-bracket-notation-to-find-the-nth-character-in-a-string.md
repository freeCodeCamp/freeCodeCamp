---
id: bd7123c9c450eddfaeb5bdef
title: Verwendung der Klammer-Notation, um das n-te Zeichen in einem String zu finden
challengeType: 1
videoUrl: 'https://scrimba.com/c/cWPVJua'
forumTopicId: 18343
dashedName: use-bracket-notation-to-find-the-nth-character-in-a-string
---

# --description--

Du kannst die <dfn>Klammer-Notation</dfn> auch verwenden, um das Zeichen an anderen Position innerhalb eines Strings zu erhalten.

Denke daran, dass Computer bei `0` zu zählen beginnen, so dass das erste Zeichen eigentlich das nullte Zeichen ist.

Beispiel:

```js
const firstName = "Ada";
const secondLetterOfFirstName = firstName[1];
```

`secondLetterOfFirstName` würde den Wert des Strings `d` besitzen.

# --instructions--

Versuchen wir, `thirdLetterOfLastName` so zu setzen, dass sie dem dritten Buchstaben der Variablen `lastName` entspricht, indem wir die Klammer-Notation verwenden.

**Hinweis:** Wenn du nicht weiterkommst, schau dir das Beispiel oben an.

# --hints--

Die Variable `thirdLetterOfLastName` sollte den Wert von `v` besitzen.

```js
assert(thirdLetterOfLastName === 'v');
```

Du solltest die Klammer-Notation verwenden.

```js
assert(code.match(/thirdLetterOfLastName\s*=\s*lastName\s*\[\s*\d\s*\]/));
```

# --seed--

## --after-user-code--

```js
(function(v){return v;})(thirdLetterOfLastName);
```

## --seed-contents--

```js
// Setup
const lastName = "Lovelace";

// Only change code below this line
const thirdLetterOfLastName = lastName; // Change this line
```

# --solutions--

```js
const lastName = "Lovelace";
const thirdLetterOfLastName = lastName[2];
```
