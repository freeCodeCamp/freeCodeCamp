---
id: 587d7b83367417b2b2512b37
title: Entendiendo las diferencias entre la consola de freeCodeCamp y la del navegador
challengeType: 1
forumTopicId: 301193
dashedName: understanding-the-differences-between-the-freecodecamp-and-browser-console
---

# --description--

Habrás notado que algunos desafíos de JavaScript de freeCodeCamp incluyen su propia consola. Esta consola se comporta un poco diferente a la consola del navegador que utilizaste en el último desafío.

El siguiente desafío pretende destacar la principal diferencia entre la consola de freeCodeCamp y la de tu navegador.

Cuando se ejecuta JavaScript ordinario, la consola del navegador mostrará sus declaraciones `console.log()` el número exacto de veces que se llama.

La consola de freeCodeCamp imprimirá sus declaraciones `console.log()` poco después de que el editor detecte un cambio en el script, así como durante las pruebas.

La consola de freeCodeCamp se borra antes de que se ejecuten las pruebas y, para evitar el spam, sólo imprime los registros durante la primera prueba (véase la nota siguiente para las excepciones).

Si quieres ver todos los registros de cada prueba, ejecuta las pruebas y abre la consola del navegador. Si prefieres usar la consola del navegador, y quieres que imite la consola de freeCodeCamp, coloca `console.clear()` antes de cualquier otra llamada a `console`, para limpiar la consola del navegador.

**Nota: ** las funciones internas de `console.log` se imprimen en la consola de freeCodeCamp siempre que se llaman. Esto puede ayudar a depurar funciones que se llaman durante la prueba.

# --instructions--

Primero, usa `console.log` para imprimir la variable `output`. Luego, usa `console.clear` para limpiar la consola del navegador.

# --hints--

Debes utilizar `console.clear()` para limpiar la consola del navegador.

```js
assert(
  __helpers
    .removeWhiteSpace(__helpers.removeJSComments(code))
    .match(/console.clear\(\)/)
);
```

Debes utilizar `console.log()` para imprimir la variable `output`.

```js
assert(__helpers.removeWhiteSpace(code).match(/console\.log\(output\)/));
```

# --seed--

## --seed-contents--

```js
// Open your browser console.
let output = "Get this to log once in the freeCodeCamp console and twice in the browser console";
// Use console.log() to print the output variable.

// Run the tests to see the difference between the two consoles.

// Now, add console.clear() before your console.log() to clear the browser console, and pass the tests.
```

# --solutions--

```js
// Open your browser console.
let output = "Get this to log once in the freeCodeCamp console and twice in the browser console";
// Use console.log() to print the output variable.
console.clear();
console.log(output);

// Run the tests to see the difference between the two consoles.

// Now, add console.clear() before your console.log() to clear the browser console, and pass the tests.
```
