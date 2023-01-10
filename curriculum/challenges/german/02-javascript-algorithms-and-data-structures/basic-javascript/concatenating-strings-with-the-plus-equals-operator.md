---
id: 56533eb9ac21ba0edf2244b8
title: Verkettung von Strings mit dem Plus-Gleich-Operator
challengeType: 1
videoUrl: 'https://scrimba.com/c/cbQmmC4'
forumTopicId: 16803
dashedName: concatenating-strings-with-the-plus-equals-operator
---

# --description--

Wir können auch den Operator `+=` verwenden, um einen String an das Ende einer bestehenden String-Variablen zu <dfn>verketten</dfn>. Dies kann sehr hilfreich sein, um einen langen String auf mehrere Zeilen zu verteilen.

**Hinweis:** Achte auf die Leerzeichen. Bei der Verkettung werden keine Leerzeichen zwischen den verketteten Strings eingefügt, so dass du sie selbst hinzufügen musst.

Beispiel:

```js
let ourStr = "I come first. ";
ourStr += "I come second.";
```

`ourStr` hat jetzt einen Wert des Strings `I come first. I come second.`.

# --instructions--

Erstelle `myStr` über mehrere Zeilen, indem du diese beiden Strings verkettest: `This is the first sentence.` und `This is the second sentence.` mit Hilfe des Operators `+=`. Verwende den Operator `+=` ähnlich wie im Beispiel und achte darauf, dass ein Leerzeichen zwischen den beiden Strings steht. Weise zunächst den ersten String `myStr` zu und füge dann den zweiten String hinzu.

# --hints--

`myStr` sollte ein einzelnes Leerzeichen zwischen beiden Strings enthalten.

```js
assert(/sentence\. This/.test(myStr));
```

`myStr` sollte auf den Wert des Strings `This is the first sentence. This is the second sentence.` gesetzt sein.

```js
assert(myStr === 'This is the first sentence. This is the second sentence.');
```

Du solltest den Operator `+=` zur Kreierung von `myStr` verwenden.

```js
assert(code.match(/myStr\s*\+=\s*(["']).*\1/g));
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
let myStr;
```

# --solutions--

```js
let myStr = "This is the first sentence. ";
myStr += "This is the second sentence.";
```
