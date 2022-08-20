---
id: 56533eb9ac21ba0edf2244aa
title: Comprendiendo las variables no inicializadas
challengeType: 1
videoUrl: 'https://scrimba.com/c/cBa2JAL'
forumTopicId: 18335
dashedName: understanding-uninitialized-variables
---

# --description--

Cuando las variables de JavaScript son declaradas, tienen un valor inicial de `undefined` (indefinido). Si haces una operación matemática en una variable `undefined`, tu resultado será `NaN` lo que significa <dfn>"Not a Number"</dfn> (no es un número). Si concatenas una cadena con una variable `undefined`, obtendrás una <dfn>cadena</dfn> de `undefined`.

# --instructions--

Inicializa las tres variables `a`, `b`, y `c` con `5`, `10` y `"I am a"` respectivamente para que no sean `undefined`.

# --hints--

`a` debe estar definida y tener un valor final de `6`.

```js
assert(typeof a === 'number' && a === 6);
```

`b` debe estar definido y tener un valor final de `15`.

```js
assert(typeof b === 'number' && b === 15);
```

`c` no debe contener `undefined` y debe tener un valor final de la cadena `I am a String!`

```js
assert(!/undefined/.test(c) && c === 'I am a String!');
```

No debes cambiar el código debajo del comentario especificado.

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
