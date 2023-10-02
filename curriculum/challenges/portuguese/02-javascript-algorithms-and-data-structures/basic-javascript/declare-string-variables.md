---
id: bd7123c9c444eddfaeb5bdef
title: Declarar variáveis de string
challengeType: 1
videoUrl: 'https://scrimba.com/c/c2QvWU6'
forumTopicId: 17557
dashedName: declare-string-variables
---

# --description--

Anteriormente, você usou o seguinte código para declarar uma variável:

```js
var myName;
```

Mas você também pode declarar uma variável string assim:

```js
var myName = "your name";
```

`"your name"` é chamado de <dfn>string</dfn> <dfn>literal</dfn>. Uma string literal, ou string, é uma série de 0 ou mais caracteres entre aspas simples ou duplas.

# --instructions--

Crie duas novas variáveis de string: `myFirstName` e `myLastName` e atribua a elas os valores do seu primeiro e último nome, respectivamente.

# --hints--

`myFirstName` deve ser uma string com pelo menos um caractere.

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

`myLastName` deve ser uma string com pelo menos um caractere.

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
