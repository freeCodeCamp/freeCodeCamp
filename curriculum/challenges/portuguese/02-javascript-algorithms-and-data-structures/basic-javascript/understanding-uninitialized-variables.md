---
id: 56533eb9ac21ba0edf2244aa
title: Entender variáveis não inicializadas
challengeType: 1
videoUrl: 'https://scrimba.com/c/cBa2JAL'
forumTopicId: 18335
dashedName: understanding-uninitialized-variables
---

# --description--

Quando as variáveis de JavaScript são declaradas, elas têm um valor inicial de `undefined`. Se você fizer uma operação matemática em uma variável `undefined`, seu resultado será `NaN`, o que significa que <dfn>"Não é um número"</dfn>. Se você concatenar uma string com uma variável `undefined`, você receberá uma <dfn>string</dfn> com o valor `undefined`.

# --instructions--

Inicialize as três variáveis `a`, `b` e `c` com `5`, `10`, e `"I am a"` respectivamente para que eles não sejam `undefined`.

# --hints--

`a` deve ser definido e ter o valor de `6`.

```js
assert(typeof a === 'number' && a === 6);
```

`b` deve ser definido e ter o valor de `15`.

```js
assert(typeof b === 'number' && b === 15);
```

`c` não deve conter `undefined` e deve ter o valor final de string `I am a String!`

```js
assert(!/undefined/.test(c) && c === 'I am a String!');
```

Você não deve mudar o código abaixo do comentário especificado.

```js
assert(
  /a = a \+ 1;/.test(code) &&
    /b = b \+ 5;/.test(code) &&
    /c = c \+ " String!";/.test(code)
);
```

# --seed--

## --after-user-code--

```js
(function(a,b,c){ return "a = " + a + ", b = " + b + ", c = '" + c + "'"; })(a,b,c);
```

## --seed-contents--

```js
// Only change code below this line
var a;
var b;
var c;
// Only change code above this line

a = a + 1;
b = b + 5;
c = c + " String!";
```

# --solutions--

```js
var a = 5;
var b = 10;
var c = "I am a";
a = a + 1;
b = b + 5;
c = c + " String!";
```
