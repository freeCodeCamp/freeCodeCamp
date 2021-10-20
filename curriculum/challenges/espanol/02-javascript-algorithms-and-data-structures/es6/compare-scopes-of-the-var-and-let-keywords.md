---
id: 587d7b87367417b2b2512b40
title: Compara el alcance de las palabras clave "var" y "let"
challengeType: 1
forumTopicId: 301195
dashedName: compare-scopes-of-the-var-and-let-keywords
---

# --description--

Cuando declaras una variable con la palabra `var`, esta es declarada globalmente o localmente sí es declarada dentro de una función.

La palabra `let` se comporta de forma similar, pero con algunas funciones adicionales. Cuanto declaras una variable con la palabra `let` dentro de un bloque, una declaración o expresión. Su alcance está limitado a ese bloque, declaración o expresión.

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

Con la palabra clave `var`, `i` es declarada globalmente. Así, cuando se ejecuta la instrucción `i++`, la variable global es actualizada. Este código es similar al siguiente:

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

Como puedes ver, `printNumTwo()` imprime 3 y no 2. Esto se debe a que el valor asignado a `i` se actualizó y la función `printNumTwo()` devuelve el valor de la variable `i` global y no el valor que tenía `i` cuando la función fue creada en el bucle for. La palabra clave `let` no sigue este comportamiento:

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

Aquí la consola mostrará el valor `2` y el error `i is not defined`.

`i` no está definida, porque no ha sido declarada en el ámbito global. Solo ha sido declarada dentro de la instrucción de bucle `for`. `printNumTwo()` devolvió el valor correcto porque la palabra clave `let` creó tres variables `i` diferentes con valores únicos (0, 1 y 2) dentro de la declaración de bucle.

# --instructions--

Corrige el código para que la variable `i`, declarado en la sentencia `if` sea una variable separada de la variable `i`, declarada en la primera línea de la función. Asegúrate de no utilizar la palabra clave `var` en ninguna parte de tu código.

Este ejercicio está diseñado para ilustrar la diferencia entre cómo las palabras clave `var` y `let` asignan alcance a la variable declarada. Al programar una función similar a la utilizada en este ejercicio, suele ser mejor usar diferentes nombres de variable para evitar confusiones.

# --hints--

`var` no debería existir en el código.

```js
assert(!code.match(/var/g));
```

La variable `i` declarada en la instrucción `if` debe ser igual a la cadena `block scope`.

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
