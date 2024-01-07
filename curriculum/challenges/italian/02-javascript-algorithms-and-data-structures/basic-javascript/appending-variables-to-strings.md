---
id: 56533eb9ac21ba0edf2244ed
title: Aggiungere variabili alle stringhe
challengeType: 1
videoUrl: 'https://scrimba.com/c/cbQmZfa'
forumTopicId: 16656
dashedName: appending-variables-to-strings
---

# --description--

Proprio come possiamo costruire una stringa su più righe di stringhe <dfn>letterali</dfn>, possiamo anche aggiungere delle variabili a una stringa usando l'operatore `+=`.

Esempio:

```js
const anAdjective = "awesome!";
let ourStr = "freeCodeCamp is ";
ourStr += anAdjective;
```

`ourStr` avrà il valore `freeCodeCamp is awesome!`.

# --instructions--

Imposta `someAdjective` a una stringa di almeno 3 caratteri e aggiungila a `myStr` utilizzando l'operatore `+=`.

# --hints--

`someAdjective` dovrebbe essere impostato su una stringa lunga almeno 3 caratteri.

```js
assert(typeof someAdjective !== 'undefined' && someAdjective.length > 2);
```

Dovresti aggiungere `someAdjective` a `myStr` usando l'operatore `+=`.

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
