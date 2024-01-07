---
id: bd7123c9c444eddfaeb5bdef
title: String-Variablen deklarieren
challengeType: 1
videoUrl: 'https://scrimba.com/c/c2QvWU6'
forumTopicId: 17557
dashedName: declare-string-variables
---

# --description--

Zuvor hast du den folgenden Code verwendet, um eine Variable zu deklarieren:

```js
var myName;
```

Du kannst aber auch eine String-Variable wie folgt deklarieren:

```js
var myName = "your name";
```

`"your name"` wird als <dfn>String</dfn> <dfn>literal</dfn> bezeichnet. Ein String-Literal oder String ist eine Reihe von null oder mehr Zeichen, die in einfache oder doppelte Anführungszeichen eingeschlossen sind.

# --instructions--

Erstelle zwei neue String-Variablen: `myFirstName` und `myLastName` und weise ihnen die Werte deines Vor- bzw. Nachnamens zu.

# --hints--

`myFirstName` sollte ein String sein, der mindestens ein Zeichen enthält.

```js
assert(
  (function () {
    if (
      typeof myFirstName !== 'undefined' &&
      typeof myFirstName === 'string' &&
      myFirstName.length > 0
    ) {
      return true;
    } else {
      return false;
    }
  })()
);
```

`myLastName` sollte ein String sein, der mindestens ein Zeichen enthält.

```js
assert(
  (function () {
    if (
      typeof myLastName !== 'undefined' &&
      typeof myLastName === 'string' &&
      myLastName.length > 0
    ) {
      return true;
    } else {
      return false;
    }
  })()
);
```

# --seed--

## --after-user-code--

```js
if(typeof myFirstName !== "undefined" && typeof myLastName !== "undefined"){(function(){return myFirstName + ', ' + myLastName;})();}
```

## --seed-contents--

```js

```

# --solutions--

```js
var myFirstName = "Alan";
var myLastName = "Turing";
```
