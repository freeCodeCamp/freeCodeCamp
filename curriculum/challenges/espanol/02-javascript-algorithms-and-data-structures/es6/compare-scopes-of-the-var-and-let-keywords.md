---
id: 587d7b87367417b2b2512b40
title: Compara el alcance de las palabras clave "var" y "let"
challengeType: 1
forumTopicId: 301195
dashedName: compare-scopes-of-the-var-and-let-keywords
---

# --description--

Si no estás familiarizado con `let`, verifica <a href="/learn/javascript-algorithms-and-data-structures/basic-javascript/explore-differences-between-the-var-and-let-keywords" target="_blank" rel="noopener noreferrer nofollow">este desafío sobre la diferencia entre <code>let</code> y <code>var</code></a>.

Cuando declaras una variable con la palabra clave `var`, esta es declarada globalmente o localmente sí es declarada dentro de una función.

La palabra clave `let` se comporta de forma similar, pero con algunas características adicionales. Cuanto declaras una variable con la palabra clave `let` dentro de un bloque, una declaración o expresión. Su alcance está limitado a ese bloque, declaración o expresión.

Por ejemplo:

```js
var numArray = [];
for (var i = 0; i < 3; i++) {
  numArray.push(i);
}
console.log(numArray);
console.log(i);
```

Aquí la consola mostrará los valores `[0, 1, 2]` y `3`.

Con la palabra clave `var`, `i` es declarada globalmente. Así, cuando `i++` es ejecutado, la variable global es actualizada. Este código es similar al siguiente:

```js
var numArray = [];
var i;
for (i = 0; i < 3; i++) {
  numArray.push(i);
}
console.log(numArray);
console.log(i);
```

Aquí la consola mostrará los valores `[0, 1, 2]` y `3`.

Este comportamiento causará problemas si creas una función y la almacenas para su uso posterior dentro de un bucle `for` que usa la variable `i`. Esto se debe a que la función almacenada siempre se referirá al valor de la variable global `i` actualizada.

```js
var printNumTwo;
for (var i = 0; i < 3; i++) {
  if (i === 2) {
    printNumTwo = function() {
      return i;
    };
  }
}
console.log(printNumTwo());
```

Aquí la consola mostrará el valor `3`.

Como puedes ver, `printNumTwo()` imprime 3 y no 2. Esto es porque el valor asignado a `i` fue actualizado y la función `printNumTwo()` devuelve el global de `i` y no el valor que tenía `i` cuando la función fue creada en el bucle for. La palabra clave `let` no sigue este comportamiento:

```js
let printNumTwo;
for (let i = 0; i < 3; i++) {
  if (i === 2) {
    printNumTwo = function() {
      return i;
    };
  }
}
console.log(printNumTwo());
console.log(i);
```

Aquí la consola mostrará el valor `2` y el error que `i is not defined`.

`i` no está definida, porque no ha sido declarada en el ámbito global. Solo ha sido declarada dentro de la sentencia de bucle `for`. `printNumTwo()` devolvió el valor correcto, porque tres variables diferentes de `i` con valores únicos (0, 1 y 2) fueron creadas por la palabra clave `let` dentro de la sentencia del bucle.

# --instructions--

Corrige el código para que la variable `i`, declarada en la sentencia `if` sea una variable separada de la variable `i`, declarada en la primera línea de la función. Asegúrate de no utilizar la palabra clave `var` en ninguna parte de tu código.

Este ejercicio está diseñado para ilustrar la diferencia entre como las palabras claves `var` y `let` asignan ámbito a la variable declarada. Cuando programas una función similar a la que es usada en este ejercicio, es a menudo mejor usar diferentes nombres de variables para evitar confusión.

# --hints--

`var` no debería existir en el código.

```js
assert(!code.match(/var/g));
```

La variable `i` declarada en la sentencia `if` debe ser igual a la cadena `block scope`.

```js
assert(code.match(/(i\s*=\s*).*\s*.*\s*.*\1('|")block\s*scope\2/g));
```

`checkScope()` debe devolver la cadena `function scope`

```js
assert(checkScope() === 'function scope');
```

# --seed--

## --seed-contents--

```js
function checkScope() {
  var i = 'function scope';
  if (true) {
    i = 'block scope';
    console.log('Block scope i is: ', i);
  }
  console.log('Function scope i is: ', i);
  return i;
}
```

# --solutions--

```js
function checkScope() {
  let i = 'function scope';
  if (true) {
    let i = 'block scope';
    console.log('Block scope i is: ', i);
  }

  console.log('Function scope i is: ', i);
  return i;
}
```
