---
id: 587d7b87367417b2b2512b41
title: Declara una variable de sólo lectura con la palabra clave const
challengeType: 1
forumTopicId: 301201
dashedName: declare-a-read-only-variable-with-the-const-keyword
---

# --description--

La palabra clave `let` no es la única manera nueva de declarar variables. En ES6, tú puedes declarar variables usando la palabra clave `const`.

`const` tiene todas las características increíbles que tiene `let`, con el bono añadido de que las variables declaradas usando `const` son de solo lectura. Son un valor constante, lo que significa que una vez que una variable es asignada con `const`, no se puede reasignar.

```js
const FAV_PET = "Cats";
FAV_PET = "Dogs";
```

La consola mostrará un error debido a la reasignación del valor de `FAV_PET`.

Como puedes ver, intentar reasignar una variable declarada con `const` arrojará un error. Siempre debes nombrar variables que no quieras reasignar usando la palabra clave `const`. Esto ayuda cuando intentas reasignar accidentalmente una variable que está destinada a permanecer constante. Una práctica común al nombrar constantes es utilizar todas las letras en mayúsculas, con palabras separadas por un guion bajo.

**Nota:** Es común que los desarrolladores usen identificadores de variables en mayúsculas para valores inmutables y minúsculas o camelCase para valores mutables (objetos y arreglos). En un desafío posterior verás un ejemplo de un identificador de variable en minúsculas que se usa para un arreglo.

# --instructions--

Cambia el código para que todas las variables sean declaradas usando `let` o `const`. Usa `let` cuando quieras que la variable cambie y `const` cuando quieras que la variable permanezca constante. Además, renombra las variables declaradas con `const` para adaptarse a las prácticas comunes, lo que significa que las constantes deben estar todas en mayúsculas.

# --hints--

`var` no debe existir en tu código.

```js
(getUserInput) => assert(!getUserInput('index').match(/var/g));
```

`SENTENCE` debe ser una variable constante declarada con `const`.

```js
(getUserInput) => assert(getUserInput('index').match(/(const SENTENCE)/g));
```

`i` debe ser declarada con `let`.

```js
(getUserInput) => assert(getUserInput('index').match(/(let i)/g));
```

`console.log` debe cambiarse para imprimir la variable `SENTENCE`.

```js
(getUserInput) =>
  assert(getUserInput('index').match(/console\.log\(\s*SENTENCE\s*\)\s*;?/g));
```

# --seed--

## --seed-contents--

```js
function printManyTimes(str) {

  // Only change code below this line

  var sentence = str + " is cool!";
  for (var i = 0; i < str.length; i+=2) {
    console.log(sentence);
  }

  // Only change code above this line

}
printManyTimes("freeCodeCamp");
```

# --solutions--

```js
function printManyTimes(str) {

  const SENTENCE = str + " is cool!";
  for (let i = 0; i < str.length; i+=2) {
    console.log(SENTENCE);
  }

}
printManyTimes("freeCodeCamp");
```
