---
id: 56533eb9ac21ba0edf2244b7
title: Concatena cadenas con el operador "más"
challengeType: 1
videoUrl: 'https://scrimba.com/c/cNpM8AN'
forumTopicId: 16802
dashedName: concatenating-strings-with-plus-operator
---

# --description--

En JavaScript, cuando el operador `+` se utiliza con un valor de cadena (`String`), se le llama operador de <dfn>concatenación</dfn>. Puedes construir una nueva cadena a partir de otras cadenas <dfn>concatenándolas</dfn> juntas.

**Ejemplo**

```js
'My name is Alan,' + ' I concatenate.'
```

**Nota:** Ten cuidado con los espacios. La concatenación no añade espacios entre las cadenas concatenadas, así que tendrás que añadirlos por tu cuenta.

Ejemplo:

```js
const ourStr = "I come first. " + "I come second.";
```

La cadena `I come first. I come second.` se mostraría en la consola.
# --instructions--

Construye `myStr` a partir de las cadenas `This is the start.` y `This is the end.` utilizando el operador `+`. Asegúrate de incluir un espacio entre las dos cadenas.

# --hints--

`myStr` Debe tener un solo carácter de espacio entre las dos cadenas.

```js
assert(/start\. This/.test(myStr));
```

`myStr` debe tener un valor de la cadena `This is the start. This is the end.`

```js
assert(myStr === 'This is the start. This is the end.');
```

Deberías usar el operador `+` para construir `myStr`.

```js
assert(code.match(/(["']).*\1\s*\+\s*(["']).*\2/g));
```

`myStr` Debe crearse una variable con la palabra reservada `const`.

```js
assert(/const\s+myStr/.test(code));
```

Debes asignar el resultado a la variable `myStr`.

```js
assert(/myStr\s*=/.test(code));
```

# --seed--

## --after-user-code--

```js
(function(){
  if(typeof myStr === 'string') {
    return 'myStr = "' + myStr + '"';
  } else {
    return 'myStr is not a string';
  }
})();
```

## --seed-contents--

```js
const myStr = ""; // Change this line
```

# --solutions--

```js
const myStr = "This is the start. " + "This is the end.";
```
