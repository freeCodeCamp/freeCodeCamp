---
id: 5ee127a03c3b35dd45426493
title: Asigna el valor de una variable a otra variable
challengeType: 1
videoUrl: ''
forumTopicId: 418265
dashedName: assigning-the-value-of-one-variable-to-another
---

# --description--

Después de asignar un valor a una variable usando el operador de <dfn>asignación</dfn>, puedes asignar el valor de esa variable a otra variable usando el mismo operador de <dfn>asignación</dfn>.

```js
var myVar;
myVar = 5;
var myNum;
myNum = myVar;
```

Lo anterior declara una variable `myVar` sin valor, y luego le asigna el valor `5`. A continuación, una variable llamada `myNum` es declarada, tambien sin valor. Luego, el contenido de `myVar` (que es `5`) se asigna a la variable `myNum`. Ahora, `myNum` también tiene el valor de `5`.

# --instructions--

Asigna el contenido de `a` a la variable `b`.

# --hints--

No debes cambiar el código por encima del comentario especificado.

```js
assert(/var a;/.test(code) && /a = 7;/.test(code) && /var b;/.test(code));
```

`b` debe tener un valor de `7`.

```js
assert(typeof b === 'number' && b === 7);
```

`a` debe ser asignado a `b` utilizando `=`.

```js
assert(/b\s*=\s*a\s*/g.test(code));
```

# --seed--

## --before-user-code--

```js
if (typeof a != 'undefined') {
  a = undefined;
}
if (typeof b != 'undefined') {
  b = undefined;
}
```

## --after-user-code--

```js
(function(a, b) {
  return 'a = ' + a + ', b = ' + b;
})(a, b);
```

## --seed-contents--

```js
// Setup
var a;
a = 7;
var b;

// Only change code below this line
```

# --solutions--

```js
var a;
a = 7;
var b;
b = a;
```
