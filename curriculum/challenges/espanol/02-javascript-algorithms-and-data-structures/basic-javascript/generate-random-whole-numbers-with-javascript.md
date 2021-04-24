---
id: cf1111c1c12feddfaeb1bdef
title: Genera números enteros aleatorios con JavaScript
challengeType: 1
videoUrl: 'https://scrimba.com/c/cRn6bfr'
forumTopicId: 18186
dashedName: generate-random-whole-numbers-with-javascript
---

# --description--

Es genial que podamos generar números decimales aleatorios, pero es incluso más útil si lo usamos para generar números enteros aleatorios.

<ol><li>Usa <code>Math.random()</code> para generar un decimal aleatorio.</li><li>Multiplica ese decimal aleatorio por <code>20</code>.</li><li>Utiliza otra función, <code>Math.floor()</code> para redondear el número hacia abajo a su número entero más cercano.</li></ol>

Recuerda que `Math.random()` nunca devolverá un `1` y porque estamos redondeando hacia abajo, es imposible obtener `20`. Esta técnica nos dará un número entero entre `0` y `19`.

Poniendo todo junto, así es como se ve nuestro código:

```js
Math.floor(Math.random() * 20);
```

Estamos llamando a `Math.random()`, multiplicando el resultado por 20 y pasando el valor a la función `Math.floor()` para redondear el valor hacia abajo al número entero más cercano.

# --instructions--

Utiliza esta técnica para generar y devolver un número entero aleatorio entre `0` y `9`.

# --hints--

El resultado de `randomWholeNum` debe ser un número entero.

```js
assert(
  typeof randomWholeNum() === 'number' &&
    (function () {
      var r = randomWholeNum();
      return Math.floor(r) === r;
    })()
);
```

Debes usar `Math.random` para generar un número aleatorio.

```js
assert(code.match(/Math.random/g).length >= 1);
```

Debes haber multiplicado el resultado de `Math.random` por 10 para convertirlo en un número entre cero y nueve.

```js
assert(
  code.match(/\s*?Math.random\s*?\(\s*?\)\s*?\*\s*?10[\D]\s*?/g) ||
    code.match(/\s*?10\s*?\*\s*?Math.random\s*?\(\s*?\)\s*?/g)
);
```

Debes usar `Math.floor` para eliminar la parte decimal del número.

```js
assert(code.match(/Math.floor/g).length >= 1);
```

# --seed--

## --after-user-code--

```js
(function(){return randomWholeNum();})();
```

## --seed-contents--

```js
function randomWholeNum() {

  // Only change code below this line

  return Math.random();
}
```

# --solutions--

```js
function randomWholeNum() {
  return Math.floor(Math.random() * 10);
}
```
