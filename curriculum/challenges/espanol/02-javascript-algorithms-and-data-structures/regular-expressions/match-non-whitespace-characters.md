---
id: 587d7db9367417b2b2512ba4
title: Haz coincidir caracteres que no sean espacios en blanco
challengeType: 1
forumTopicId: 18210
dashedName: match-non-whitespace-characters
---

# --description--

Aprendiste a buscar espacios en blanco usando `\s`, con una `s` en minúscula. También puedes buscar todo excepto los espacios en blanco.

Busca caracteres que no sean espacios en blanco usando `\S`, la cual es una `s` mayúscula. Este patrón no coincidirá con los caracteres de espacios en blanco, retorno de carro, tabulaciones, alimentación de formulario y saltos de línea. Puedes pensar que es similar a la clase de caracteres `[^ \r\t\f\n\v]`.

```js
let whiteSpace = "Whitespace. Whitespace everywhere!"
let nonSpaceRegex = /\S/g;
whiteSpace.match(nonSpaceRegex).length;
```

El valor devuelto por el método `.length` sería `32`.

# --instructions--

Cambia la expresión regular `countNonWhiteSpace` para buscar varios caracteres que no sean espacios en blanco en una cadena.

# --hints--

Tu expresión regular debe usar la bandera global.

```js
assert(countNonWhiteSpace.global);
```

Tu expresión regular debe usar el carácter abreviado `\S` para que coincida con todos los caracteres que no sean espacios en blanco.

```js
assert(/\\S/.test(countNonWhiteSpace.source));
```

Tu expresión regular debe encontrar 35 caracteres que no sean espacios en la cadena `Men are from Mars and women are from Venus.`

```js
assert(
  'Men are from Mars and women are from Venus.'.match(countNonWhiteSpace)
    .length == 35
);
```

Tu expresión regular debe encontrar 23 caracteres que no sean espacios en la cadena `Space: the final frontier.`

```js
assert('Space: the final frontier.'.match(countNonWhiteSpace).length == 23);
```

Tu expresión regular debe encontrar 21 caracteres que no sean espacios en la cadena `MindYourPersonalSpace`

```js
assert('MindYourPersonalSpace'.match(countNonWhiteSpace).length == 21);
```

# --seed--

## --seed-contents--

```js
let sample = "Whitespace is important in separating words";
let countNonWhiteSpace = /change/; // Change this line
let result = sample.match(countNonWhiteSpace);
```

# --solutions--

```js
let sample = "Whitespace is important in separating words";
let countNonWhiteSpace = /\S/g; // Change this line
let result = sample.match(countNonWhiteSpace);
```
