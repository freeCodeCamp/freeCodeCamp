---
id: cf1111c1c12feddfaeb1bdef
title: Genera números enteros aleatorios con JavaScript
challengeType: 1
videoUrl: 'https://scrimba.com/c/cRn6bfr'
forumTopicId: 18186
dashedName: generate-random-whole-numbers-with-javascript
---

# --description--

Puedes generar números decimales aleatorios con `Math.random()`, pero a veces es necesario generar números enteros aleatorios. El siguiente proceso te dará un número entero aleatorio menor que `20`:

1. Usa `Math.random()` para generar un número decimal aleatorio.
2. Multiplica ese número decimal aleatorio por `20`.
3. Usa `Math.floor()` para redondear este número hacia abajo a su número entero más cercano.

Recuerda que `Math.random()` nunca puede devolver un `1`, así que es imposible obtener `20` ya que estás redondeando hacia abajo con `Math.floor()`. Este proceso te dará un número entero aleatorio en el rango de `0` a `19`.

Poniendo todo junto, así es como se ve nuestro código:

```js
Math.floor(Math.random() * 20);
```

Estás llamando a `Math.random()`, multiplicando el resultado por 20 y pasando el valor a la función `Math.floor()` para redondear el valor hacia abajo al número entero más cercano.

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

Debes haber multiplicado el resultado de `Math.random` por 10 para convertirlo en un número en el rango de cero a nueve.

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
  return Math.random();
}
```

# --solutions--

```js
function randomWholeNum() {
  return Math.floor(Math.random() * 10);
}
```
