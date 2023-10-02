---
id: bd7123c9c444eddfaeb5bdef
title: Dichiarare variabili stringa
challengeType: 1
videoUrl: 'https://scrimba.com/c/c2QvWU6'
forumTopicId: 17557
dashedName: declare-string-variables
---

# --description--

In precedenza hai usato il seguente codice per dichiarare una variabile:

```js
var myName;
```

Ma puoi anche dichiarare una variabile con valore stringa in questo modo:

```js
var myName = "your name";
```

`"your name"` è chiamato una <dfn>stringa</dfn> <dfn>letterale</dfn>. Una stringa letterale, o stringa, è una serie di zero o più caratteri racchiusi in virgolette singole o doppie.

# --instructions--

Crea due nuove variabili stringa: `myFirstName` e `myLastName` e assegna loro i valori rispettivamente del tuo nome e del tuo cognome.

# --hints--

`myFirstName` dovrebbe essere una stringa con almeno un carattere al suo interno.

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

`myLastName` dovrebbe essere una stringa con almeno un carattere al suo interno.

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
