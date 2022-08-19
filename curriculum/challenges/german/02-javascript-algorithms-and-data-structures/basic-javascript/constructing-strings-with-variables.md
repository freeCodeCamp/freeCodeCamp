---
id: 56533eb9ac21ba0edf2244b9
title: Strings mit Variablen erstellen
challengeType: 1
videoUrl: 'https://scrimba.com/c/cqk8rf4'
forumTopicId: 16805
dashedName: constructing-strings-with-variables
---

# --description--

Manchmal musst du einen String erstellen. Mit dem Verkettungsoperator (`+`) kannst du eine oder mehrere Variablen in einen String einfügen, den du erstellst.

Beispiel:

```js
const ourName = "freeCodeCamp";
const ourStr = "Hello, our name is " + ourName + ", how are you?";
```

`ourStr` hätte einen Wert des Strings `Hello, our name is freeCodeCamp, how are you?`.

# --instructions--

Setze `myName` auf einen String, der deinem Namen entspricht, und bilde `myStr` mit `myName` zwischen den Strings `My name is` und `and I am well!`

# --hints--

`myName` sollte auf einen String mit mindestens 3 Zeichen Länge gesetzt werden.

```js
assert(typeof myName !== 'undefined' && myName.length > 2);
```

Du solltest zwei Operatoren `+` verwenden, um `myStr` mit `myName` darin zu bilden.

```js
assert(code.match(/["']\s*\+\s*myName\s*\+\s*["']/g).length > 0);
```

# --seed--

## --after-user-code--

```js
(function(){
  var output = [];
  if(typeof myName === 'string') {
    output.push('myName = "' + myName + '"');
  } else {
    output.push('myName is not a string');
  }
  if(typeof myStr === 'string') {
    output.push('myStr = "' + myStr + '"');
  } else {
    output.push('myStr is not a string');
  }
  return output.join('\n');
})();
```

## --seed-contents--

```js
// Only change code below this line
const myName = "";
const myStr = "";
```

# --solutions--

```js
const myName = "Bob";
const myStr = "My name is " + myName + " and I am well!";
```
