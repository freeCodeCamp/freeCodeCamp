---
id: 56533eb9ac21ba0edf2244ba
title: Comprende la inmutabilidad de las cadenas
challengeType: 1
videoUrl: 'https://scrimba.com/c/cWPVaUR'
forumTopicId: 18331
dashedName: understand-string-immutability
---

# --description--

En JavaScript, los valores de cadena (`String`) son <dfn>inmutables</dfn>, lo que significa que no pueden ser alterados una vez creados.

Por ejemplo, el siguiente código:

```js
var myStr = "Bob";
myStr[0] = "J";
```

no puede cambiar el valor de `myStr` a `Job`, porque el contenido de `myStr` no puede ser alterado. Ten en cuenta que esto *no* significa que `myStr` no puede cambiarse, solo que los caracteres individuales de una <dfn>cadena literal</dfn> no pueden ser cambiados. La única forma de cambiar `myStr` sería asignarla con una nueva cadena, como esta:

```js
var myStr = "Bob";
myStr = "Job";
```

# --instructions--

Corrige la asignación de `myStr` para que contenga el valor de cadena `Hello World` usando el método mostrado en el ejemplo anterior.

# --hints--

`myStr` debe tener una cadena con valor `Hello World`.

```js
assert(myStr === 'Hello World');
```

No debes cambiar el código por encima del comentario especificado.

```js
assert(/myStr = "Jello World"/.test(code));
```

# --seed--

## --after-user-code--

```js
(function(v){return "myStr = " + v;})(myStr);
```

## --seed-contents--

```js
// Setup
var myStr = "Jello World";

// Only change code below this line
myStr[0] = "H"; // Change this line
// Only change code above this line
```

# --solutions--

```js
var myStr = "Jello World";
myStr = "Hello World";
```
