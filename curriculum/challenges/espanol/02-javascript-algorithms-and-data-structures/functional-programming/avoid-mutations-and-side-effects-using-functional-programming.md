---
id: 587d7b8e367417b2b2512b5e
title: Evita mutaciones y efectos secundarios utilizando programación funcional
challengeType: 1
forumTopicId: 301228
dashedName: avoid-mutations-and-side-effects-using-functional-programming
---

# --description--

Si aún no te has dado cuenta, el problema en el desafío anterior estaba en la llamada `splice` de la función `tabClose()`. Desafortunadamente, `splice` modifica el arreglo original a la que se llama, por lo que la segunda llamada a ella utilizo un arreglo modificado, y dio resultados inesperados.

Este es un pequeño ejemplo de un patrón mucho mayor: se llama a una función en una variable, arreglo o un objeto, y la función modifica la variable o algo en el objeto.

Uno de los principios fundamentales de la programación funcional es no cambiar las cosas. Los cambios conducen a errores. Es más fácil evitar errores sabiendo que las funciones no cambian nada, incluyendo los argumentos de la función o cualquier variable global.

El ejemplo anterior no tenía operaciones complicadas, pero el método `splice` modificó el arreglo original y dio como resultado en un error.

Recuerda que en la programación funcional, cambiar o alterar cosas se denomina <dfn>mutación</dfn>, y el resultado es conocido como <dfn>efecto secundario</dfn>. Una función, idealmente, debe ser una <dfn>función pura</dfn>, lo que significa que no provoca ningún efecto secundario.

Intentemos dominar esta disciplina y no alterar ninguna variable u objeto en nuestro código.

# --instructions--

Completa el código de la función `incrementer` para que devuelva el valor de la variable global `fixedValue` incrementada en uno.

# --hints--

Tu función `incrementer` no debe cambiar el valor de `fixedValue` (que es `4`).

```js
incrementer();
assert(fixedValue === 4);
```

La función `incrementer` debe devolver el valor de `fixedValue` más uno.

```js
const __newValue = incrementer();
assert(__newValue === 5);
```

La función `incrementer` debe devolver un valor basado en el valor de la variable global `fixedValue`.

```js
(function () {
  fixedValue = 10;
  const newValue = incrementer();
  assert(fixedValue === 10 && newValue === 11);
  fixedValue = 4;
})();
```

# --seed--

## --seed-contents--

```js
// The global variable
let fixedValue = 4;

function incrementer() {
  // Only change code below this line


  // Only change code above this line
}
```

# --solutions--

```js
let fixedValue = 4

function incrementer() {
  return fixedValue + 1
}
```
