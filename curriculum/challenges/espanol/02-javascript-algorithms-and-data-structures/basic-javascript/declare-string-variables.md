---
id: bd7123c9c444eddfaeb5bdef
title: Declara variables de cadena
challengeType: 1
videoUrl: 'https://scrimba.com/c/c2QvWU6'
forumTopicId: 17557
dashedName: declare-string-variables
---

# --description--

Anteriormente utilizaste el siguiente código para declarar una variable:

```js
var myName;
```

Pero también puedes declarar una variable de cadena como esta:

```js
var myName = "your name";
```

`"your name"` es llamada una <dfn>cadena</dfn> <dfn>literal</dfn>. Una cadena literal o cadena es una serie de ceros o más caracteres encerrados en comillas simples o dobles.

# --instructions--

Crea dos nuevas variables de cadena: `myFirstName` y `myLastName` y asígnales los valores de tu nombre y apellido, respectivamente.

# --hints--

`myFirstName` debe ser una cadena con al menos un carácter en ella.

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

`myLastName` debe ser una cadena con al menos un carácter en ella.

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
