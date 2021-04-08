---
id: 56533eb9ac21ba0edf2244a8
title: Almacenar valores con el operador de asignación
challengeType: 1
videoUrl: 'https://scrimba.com/c/cEanysE'
forumTopicId: 18310
dashedName: storing-values-with-the-assignment-operator
---

# --description--

En JavaScript, puedes almacenar un valor en una variable con el operador de <dfn>asignación</dfn> (`=`).

```js
myVariable = 5;
```

Esto asigna el valor numérico (`Number`) `5` a `myVariable`.

Si hay algunos cálculos a la derecha del operador `=`, se realizan antes de que el valor se asigne a la variable a la izquierda del operador.

```js
var myVar;
myVar = 5;
```

Primero, este código crea una variable llamada `myVar`. Luego, el código asigna `5` a `myVar`. Ahora, si `myVar` aparece de nuevo en el código, el programa lo tratará como si fuera `5`.

# --instructions--

Asigna el valor `7` a la variable `a`.

# --hints--

No debes cambiar el código por encima del comentario especificado.

```js
assert(/var a;/.test(code));
```

`a` debe tener un valor de 7.

```js
assert(typeof a === 'number' && a === 7);
```

# --seed--

## --before-user-code--

```js
if (typeof a != 'undefined') {
  a = undefined;
}
```

## --after-user-code--

```js
(function(a){return "a = " + a;})(a);
```

## --seed-contents--

```js
// Setup
var a;

// Only change code below this line
```

# --solutions--

```js
var a;
a = 7;
```
