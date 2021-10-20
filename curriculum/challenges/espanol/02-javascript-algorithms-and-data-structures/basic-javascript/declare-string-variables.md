---
id: bd7123c9c444eddfaeb5bdef
title: Declara variables de cadena
challengeType: 1
videoUrl: 'https://scrimba.com/c/c2QvWU6'
forumTopicId: 17557
dashedName: declare-string-variables
---

# --description--

Anteriormente hemos usado el código

```js
var myName = "your name";
```

`"your name"` es conocida como una <dfn>cadena</dfn> <dfn>literal</dfn>. Es una cadena porque es una serie de cero o más caracteres encerrados en comillas simples o dobles.

# --instructions--

Crea dos nuevas variables de tipo cadena: `myFirstName`(miNombre) y `myLastName`(miApellido) y asígnales tu nombre y apellido, respectivamente.

# --hints--

`myFirstName` debe ser una cadena con al menos un carácter.

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
