---
id: 587d7b84367417b2b2512b36
title: 'Captura paréntesis, corchetes, llaves y comillas sin cerrar'
challengeType: 1
forumTopicId: 301190
dashedName: catch-unclosed-parentheses-brackets-braces-and-quotes
---

# --description--

Otro error de sintaxis a tener en cuenta es que todos los paréntesis de apertura, corchetes, llaves y comillas tienen un par de cierre. Olvidar una pieza suele suceder cuando se edita el código existente y se insertan elementos con uno de los tipos de pares. También hay que tener cuidado al anidar bloques de código dentro de otros, como agregar una función de callback como argumento de un método.

Una forma de evitar este error es, tan pronto como se escriba el caracter de apertura, incluir inmediatamente su caracter de cierre, luego mover el cursor hacia atrás entre ellos y continuar escribiendo. Afortunadamente, la mayoría de los editores de código modernos generan la segunda mitad del par automáticamente.

# --instructions--

Corrige los dos errores de par en el código.

# --hints--

Tu código debe arreglar la pieza que falta en el arreglo.

```js
assert(code.match(/myArray\s*?=\s*?\[\s*?1\s*?,\s*?2\s*?,\s*?3\s*?\];/g));
```

Tu código debe arreglar la pieza que falta del método `.reduce()`. La salida de la consola debe mostrar `Sum of array values is: 6`.

```js
assert(arraySum === 6);
```

# --seed--

## --seed-contents--

```js
let myArray = [1, 2, 3;
let arraySum = myArray.reduce((previous, current =>  previous + current);
console.log(`Sum of array values is: ${arraySum}`);
```

# --solutions--

```js
let myArray = [1, 2, 3];
let arraySum = myArray.reduce((previous, current) =>  previous + current);
console.log(`Sum of array values is: ${arraySum}`);
```
