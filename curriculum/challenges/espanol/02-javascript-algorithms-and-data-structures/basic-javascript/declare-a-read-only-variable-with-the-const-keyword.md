---
id: 587d7b87367417b2b2512b41
title: Declara una variable de solo lectura con la palabra clave const
challengeType: 1
forumTopicId: 301201
dashedName: declare-a-read-only-variable-with-the-const-keyword
---

# --description--

La palabra clave `let` no es la única manera nueva de declarar variables. En ES6, tú también puedes declarar variables usando la palabra clave `const`.

`const` tiene todas las características increíbles que tiene `let`, con el bono añadido de que las variables declaradas usando `const` son de solo lectura. Son un valor constante, lo que significa que una vez que una variable es asignada con `const`, no se puede reasignar:

```js
const FAV_PET = "Cats";
FAV_PET = "Dogs";
```

La consola mostrará un error debido a la reasignación del valor de `FAV_PET`.

Siempre debes nombrar variables que no quieras reasignar usando la palabra clave `const`. Esto ayuda cuando intentas reasignar accidentalmente una variable que está destinada a permanecer constante.

**Nota:** Es común que los desarrolladores usen identificadores de variables en mayúsculas para valores inmutables y minúsculas o camelCase para valores mutables (objetos y arreglos). Aprenderás más sobre objetos, arreglos y valores inmutables y mutables en desafíos posteriores. También en desafíos posteriores, verás ejemplos de identificadores de variables mayúsculas, minúsculas o camelCase.

# --instructions--

Cambia el código para que todas las variables se declaren con `let` o `const`. Usa `let` cuando quieras que la variable cambie y `const` cuando quieras que la variable permanezca constante. Además, renombra variables declaradas con `const` para adaptarse a las prácticas comunes. No debes cambiar las palabras asignadas a las variables.

# --hints--

`var` no debe existir en tu código.

```js
assert.notMatch(code, /var/g);
```

Debes cambiar `fCC` a todas mayúsculas.

```js
assert.match(code, /(FCC)/);
assert.notMatch(code, /(fCC)/);
```

`FCC` debe ser una variable constante declarada con `const`.

```js
assert.match(code, /const\s+FCC/);
```

La cadena asignada a `FCC` no debe ser cambiada.

```js
assert.equal(FCC, 'freeCodeCamp');
```

`fact` debe ser declarada con `let`.

```js
assert.match(code, /(let\s+fact)/g);
```

`console.log` debe cambiarse para imprimir las variables `FCC` y `fact`.

```js
assert.match(code, /console\.log\(\s*FCC\s*\,\s*fact\s*\)\s*;?/g);
```

# --seed--

## --seed-contents--

```js
var fCC = "freeCodeCamp"; // Change this line
var fact = "is cool!"; // Change this line
fact = "is awesome!";
console.log(fCC, fact); // Change this line
```

# --solutions--

```js
const FCC = "freeCodeCamp";
let fact = "is cool!";

fact = "is awesome!";
console.log(FCC, fact);
```
