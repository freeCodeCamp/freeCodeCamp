---
id: 587d7b86367417b2b2512b3b
title: Captura los errores por uno al utilizar indexación
challengeType: 1
forumTopicId: 301189
dashedName: catch-off-by-one-errors-when-using-indexing
---

# --description--

<dfn>Los errores por uno o por un paso</dfn> (en inglés: Off-by-one error -OBOE) aparecen cuando se intenta apuntar a un índice específico de una cadena o arreglo (para cortar o acceder a un segmento), o cuando se hace un bucle sobre los índices de los mismos. La indexación en JavaScript comienza en cero, no en uno, lo que significa que el último índice es siempre uno menos que la longitud del elemento. Si intentas acceder a un índice igual a la longitud, el programa puede lanzar un error de referencia "index out of range" (índice fuera de rango) o imprimir `undefined`.

Cuando se utilizan métodos de cadenas o arreglos que toman rangos de índices como argumentos, es útil leer la documentación y entender si son inclusivos (el elemento en el índice dado es parte de lo que se devuelve) o no. Estos son algunos ejemplos de errores por un paso:

```js
let alphabet = "abcdefghijklmnopqrstuvwxyz";
let len = alphabet.length;
for (let i = 0; i <= len; i++) {
  console.log(alphabet[i]);
}
for (let j = 1; j < len; j++) {
  console.log(alphabet[j]);
}
for (let k = 0; k < len; k++) {
  console.log(alphabet[k]);
}
```

El primer ejemplo aquí hace un bucle de más, y el segundo hace un bucle de menos (falta el primer índice, 0). El tercer ejemplo es correcto.

# --instructions--

Corrige los dos errores de indexación en la siguiente función para que todos los números del 1 al 5 se impriman en la consola.

# --hints--

Tu código debe establecer la condición inicial del bucle para que comience en el primer índice.

```js
assert(code.match(/i\s*?=\s*?0\s*?;/g).length == 1);
```

Tu código debe corregir la condición inicial del bucle para que el índice comience en 0.

```js
assert(!code.match(/i\s?=\s*?1\s*?;/g));
```

Tu código debe establecer la condición terminal del bucle para que se detenga en el último índice.

```js
assert(code.match(/i\s*<\s*len\s*;|i\s*<=\s*len\s*-\s*1\s*;/g).length == 1);
```

Tu código debe corregir la condición terminal del bucle para que se detenga en 1 antes de la longitud.

```js
assert(!code.match(/i\s*?<=\s*?len;/g));
```

# --seed--

## --seed-contents--

```js
function countToFive() {
  let firstFive = "12345";
  let len = firstFive.length;
  // Only change code below this line
  for (let i = 1; i <= len; i++) {
  // Only change code above this line
    console.log(firstFive[i]);
  }
}

countToFive();
```

# --solutions--

```js
function countToFive() {
 let firstFive = "12345";
 let len = firstFive.length;
 // Only change code below this line
 for (let i = 0; i < len; i++) {
 // Only change code above this line
   console.log(firstFive[i]);
 }
}

countToFive();
```
