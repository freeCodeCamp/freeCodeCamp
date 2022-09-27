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

Por ejemplo, el siguiente código producirá un error debido a que la letra `B` en la cadena `Bob` no puede ser cambiada por la letra `J`:

```js
let myStr = "Bob";
myStr[0] = "J";
```

Nota que esto *no* significa que `myStr` no pueda ser reasignado. La única manera de cambiar el valor de `myStr` seria asignándole un nuevo valor, como en el siguiente ejemplo:

```js
let myStr = "Bob";
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
let myStr = "Jello World";

// Only change code below this line
myStr[0] = "H"; // Change this line
// Only change code above this line
```

# --solutions--

```js
let myStr = "Jello World";
myStr = "Hello World";
```
