---
id: 587d7b83367417b2b2512b37
title: Entendiendo las diferencias entre la consola de freeCodeCamp y la del navegador
challengeType: 1
forumTopicId: 301193
dashedName: understanding-the-differences-between-the-freecodecamp-and-browser-console
---

# --description--

Habrás notado que algunos desafíos de freeCodeCamp tienen su propia consola. Esta consola se comporta un poco diferente a la consola del navegador.

Hay muchos métodos para usar con `console` para mostrar mensajes. `log`, `warn` y `clear` para nombrar algunos. La consola de freeCodeCamp solamente mostrará mensajes de tipo `log`, mientras que la consola del navegador mostrará todos los mensajes. Cuando hagas cambios a tu código, se ejecutara automáticamente y mostrará los registros. La consola de freeCodeCamp se borra cada vez que ejecutas tu código.

# --instructions--

Primero, abre tu consola del navegador para que puedas ver los registros. Para hacer eso, puedes hacer clic derecho en la barra de navegación superior de freeCodeCamp y seleccionar `inspect` en la mayoría de los navegadores. Luego busca la pestaña `console` en la ventana que se abra.

Después, utiliza `console.log` para mostrar la variable `output`. Ve ambas consolas para ver los registros. Finalmente, utiliza `console.clear` luego de tu registro para borrar la consola del navegador. Ve la diferencia entre las dos consolas.

# --hints--

Debes utilizar `console.log()` para imprimir la variable `output`.

```js
assert(__helpers.removeWhiteSpace(code).match(/console\.log\(output\)/));
```

Debes utilizar `console.clear()` para borrar la consola del navegador.

```js
assert(
  __helpers
    .removeWhiteSpace(code)
    .match(/console.clear\(\)/)
);
```

Debes borrar la consola luego de tu registro.

```js
assert(
  __helpers
    .removeWhiteSpace(code)
    .match(/console\.log\(output\)[\s\S]*console.clear\(\)/)
);
```

# --seed--

## --seed-contents--

```js
let output = "Get this to show once in the freeCodeCamp console and not at all in the browser console";

```

# --solutions--

```js
let output = "Get this to show once in the freeCodeCamp console and not at all in the browser console";

console.log(output);
console.clear();
```
