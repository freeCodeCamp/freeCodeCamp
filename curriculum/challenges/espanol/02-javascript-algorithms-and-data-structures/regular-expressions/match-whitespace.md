---
id: 587d7db8367417b2b2512ba3
title: Haz coincidir espacios en blanco
challengeType: 1
forumTopicId: 301359
dashedName: match-whitespace
---

# --description--

Los desafíos por el momento han cubierto las letras que coinciden con el alfabeto y los números. También puedes hacer que coincidan los espacios en blanco o los espacios entre las letras.

Puedes buscar los espacios en blanco usando `\s` que es una `s` minúscula. Este patrón no solo coincide con los espacios en blanco, también con los caracteres de retorno de carro, tabulaciones, alimentación de formulario y saltos de línea. Puedes pensar que es similar a las clases de caracteres `[ \r\t\f\n\v]`.

```js
let whiteSpace = "Whitespace. Whitespace everywhere!"
let spaceRegex = /\s/g;
whiteSpace.match(spaceRegex);
```

Esta llamada a `match` debe devolver `[" ", " "]`.
# --instructions--

Cambia la expresión regular `countWhiteSpace` para buscar múltiples caracteres de espacio en blanco en una cadena.

# --hints--

Tu expresión regular debe usar una bandera global.

```js
assert(countWhiteSpace.global);
```

Tu expresión regular debe usar el carácter abreviado `\s` para que coincida con los caracteres de espacio en blanco.

```js
assert(/\\s/.test(countWhiteSpace.source));
```

Tu expresión regular debe encontrar ocho espacios en la cadena `Men are from Mars and women are from Venus.`

```js
assert(
  'Men are from Mars and women are from Venus.'.match(countWhiteSpace).length ==
    8
);
```

Tu expresión regular debe encontrar tres espacios en la cadena `Space: the final frontier.`

```js
assert('Space: the final frontier.'.match(countWhiteSpace).length == 3);
```

Tu expresión no debe encontrar espacios en la cadena `MindYourPersonalSpace`

```js
assert('MindYourPersonalSpace'.match(countWhiteSpace) == null);
```

# --seed--

## --seed-contents--

```js
let sample = "Whitespace is important in separating words";
let countWhiteSpace = /change/; // Change this line
let result = sample.match(countWhiteSpace);
```

# --solutions--

```js
let sample = "Whitespace is important in separating words";
let countWhiteSpace = /\s/g;
let result = sample.match(countWhiteSpace);
```
