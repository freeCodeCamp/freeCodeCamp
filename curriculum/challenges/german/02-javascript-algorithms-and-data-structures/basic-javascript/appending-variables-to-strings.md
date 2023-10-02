---
id: 56533eb9ac21ba0edf2244ed
title: Anhängen von Variablen an Strings
challengeType: 1
videoUrl: 'https://scrimba.com/c/cbQmZfa'
forumTopicId: 16656
dashedName: appending-variables-to-strings
---

# --description--

Genauso wie wir einen String über mehrere Zeilen aus <dfn>Literalen</dfn> aufbauen können, können wir auch Variablen an einen String anhängen, indem wir den Plus-Gleichheits-Operator (`+=`) verwenden.

Beispiel:

```js
const anAdjective = "awesome!";
let ourStr = "freeCodeCamp is ";
ourStr += anAdjective;
```

`ourStr` hätte dann den Wert `freeCodeCamp is awesome!`.

# --instructions--

Setze `someAdjective` auf einen String von mindestens 3 Zeichen und füge ihn mit dem Operator `+=` an `myStr` an.

# --hints--

`someAdjective` sollte auf einen String mit mindestens 3 Zeichen Länge gesetzt werden.

```js
assert(typeof someAdjective !== 'undefined' && someAdjective.length > 2);
```

Du solltest `someAdjective` an `myStr` mit dem Operator `+=` anhängen.

```js
assert(code.match(/myStr\s*\+=\s*someAdjective\s*/).length > 0);
```

# --seed--

## --after-user-code--

```js
(function(){
  var output = [];
  if(typeof someAdjective === 'string') {
    output.push('someAdjective = "' + someAdjective + '"');
  } else {
    output.push('someAdjective is not a string');
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
// Change code below this line
const someAdjective = "";
let myStr = "Learning to code is ";
```

# --solutions--

```js
const someAdjective = "neat";
let myStr = "Learning to code is ";
myStr += someAdjective;
```
