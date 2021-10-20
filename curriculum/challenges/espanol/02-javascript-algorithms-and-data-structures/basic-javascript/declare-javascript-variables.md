---
id: bd7123c9c443eddfaeb5bdef
title: Declara variables de JavaScript
challengeType: 1
videoUrl: 'https://scrimba.com/c/cNanrHq'
forumTopicId: 17556
dashedName: declare-javascript-variables
---

# --description--

En informática, los <dfn>datos</dfn> son cualquier cosa que tenga sentido para la computadora. JavaScript proporciona ocho <dfn>tipos de datos</dfn> diferentes, los cuales son `undefined`, `null`, `boolean`, `string`, `symbol`, `bigint`, `number`, y `object`.

Por ejemplo, las computadoras distinguen entre números, como el número `12` y cadenas (`strings`), tales como `"12"`, `"dog"`, o `"123 cats"`, que son colecciones de caracteres. Las computadoras pueden realizar operaciones matemáticas en un número, pero no en una cadena.

Las <dfn>variables</dfn> permiten a los ordenadores almacenar y manipular datos de forma dinámica. Hacen esto usando una "etiqueta" para apuntar a los datos en lugar de usar los datos en sí. Cualquiera de los ocho tipos de datos puede almacenarse en una variable.

Las variables son similares a las variables x, e y que usan en matemáticas, lo que significa que son un nombre simple para representar los datos a los que queremos hacer referencia. Las variables de computadora difieren de las variables matemáticas en que pueden almacenar diferentes valores en diferentes momentos.

Le decimos a JavaScript que cree o <dfn>declare</dfn> una variable poniendo la palabra clave `var` delante de ella, así:

```js
var ourName;
```

crea una variable llamada `ourName`. En JavaScript terminamos las sentencias con punto y coma. Los nombres de las variables pueden estar formados por números, letras y `$` o `_`, pero no pueden contener espacios ni empezar con un número.

# --instructions--

Utiliza la palabra clave `var` para crear una variable llamada `myName`.

**Sugerencia**  
Mira el ejemplo `ourName` de arriba si te quedas atascado.

# --hints--

Debes declarar `myName` con la palabra clave `var`, terminando con un punto y coma

```js
assert(/var\s+myName\s*;/.test(code));
```

# --seed--

## --after-user-code--

```js
if(typeof myName !== "undefined"){(function(v){return v;})(myName);}
```

## --seed-contents--

```js

```

# --solutions--

```js
var myName;
```
