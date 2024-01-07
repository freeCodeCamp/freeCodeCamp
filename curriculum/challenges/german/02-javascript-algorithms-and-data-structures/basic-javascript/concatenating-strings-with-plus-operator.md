---
id: 56533eb9ac21ba0edf2244b7
title: Verkettung von Zeichenketten mit Plus-Operator
challengeType: 1
videoUrl: 'https://scrimba.com/c/cNpM8AN'
forumTopicId: 16802
dashedName: concatenating-strings-with-plus-operator
---

# --description--

Wenn in JavaScript der Operator `+` mit einem `String`-Wert verwendet wird, nennt man ihn den <dfn>Verkettungsoperator</dfn>. Du kannst einen neuen String aus anderen Strings zusammensetzen, indem du sie <dfn>verkettest</dfn>.

**Beispiel**

```js
'My name is Alan,' + ' I concatenate.'
```

**Hinweis:** Achte auf Leerzeichen. Bei der Verkettung werden keine Leerzeichen zwischen den verketteten Zeichenfolgen eingefügt, so dass Sie diese selbst hinzufügen müssen.

Beispiel:

```js
const ourStr = "I come first. " + "I come second.";
```

Der String `I come first. I come second.` würde in der Konsole angezeigt werden.
# --instructions--

Erstelle `myStr` aus den Strings `This is the start.` und `This is the end.` mit dem Operator `+`. Achte darauf, dass zwischen den beiden Strings ein Leerzeichen steht.

# --hints--

`myStr` sollte ein einzelnes Leerzeichen zwischen beiden Strings enthalten.

```js
assert(/start\. This/.test(myStr));
```

`myStr` sollte auf den String-Wert `This is the start. This is the end.` gesetzt sein

```js
assert(myStr === 'This is the start. This is the end.');
```

Du solltest den Operator `+` zur Kreierung von `myStr` verwenden.

```js
assert(code.match(/(["']).*\1\s*\+\s*(["']).*\2/g));
```

`myStr` sollte mit dem Schlüsselwort `const` erstellt werden.

```js
assert(/const\s+myStr/.test(code));
```

Das Ergebnis solltest du der Variable `myStr` zuweisen.

```js
assert(/myStr\s*=/.test(code));
```

# --seed--

## --after-user-code--

```js
(function(){
  if(typeof myStr === 'string') {
    return 'myStr = "' + myStr + '"';
  } else {
    return 'myStr is not a string';
  }
})();
```

## --seed-contents--

```js
const myStr = ""; // Change this line
```

# --solutions--

```js
const myStr = "This is the start. " + "This is the end.";
```
