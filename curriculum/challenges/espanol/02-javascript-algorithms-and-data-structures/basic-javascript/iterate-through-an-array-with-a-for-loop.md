---
id: 5675e877dbd60be8ad28edc6
title: Itera a través de un arreglo con un bucle "for"
challengeType: 1
videoUrl: 'https://scrimba.com/c/caeR3HB'
forumTopicId: 18216
dashedName: iterate-through-an-array-with-a-for-loop
---

# --description--

Una tarea común en JavaScript es iterar a través del contenido de un arreglo. Una forma de hacerlo es con un bucle `for`. Este código mostrará cada elemento del arreglo `arr` en la consola:

```js
const arr = [10, 9, 8, 7, 6];

for (let i = 0; i < arr.length; i++) {
   console.log(arr[i]);
}
```

Recuerda que los arreglos tienen una indexación basada en cero, lo que significa que el último índice del arreglo es igual a su longitud menos uno (`length - 1`). Nuestra condición para este bucle es `i < arr.length`, que detiene el bucle cuando `i` es igual a `length`. En este caso, la última iteración es `i === 4`, es decir, cuando `i` se convierte en igual a `arr.length - 1` y resultados `6` a la consola. Entonces `i` aumenta a `5`, y el bucle termina `i < arr.length` es `false`.

# --instructions--

Declara e inicializa una variable `total` a `0`. Usa un bucle `for` para sumar el valor de cada elemento del arreglo `myArr` al `total`.

# --hints--

`total` debe declararse e inicializarse a 0.

```js
assert(code.match(/(var|let|const)\s*?total\s*=\s*0.*?;?/));
```

`total` debe ser igual a 20.

```js
assert(total === 20);
```

Debes usar un bucle `for` para iterar a través de `myArr`.

```js
assert(/for\s*\(/g.test(code) && /myArr\s*\[/g.test(code));
```

No debes intentar asignar directamente el valor 20 al `total`.

```js
assert(!__helpers.removeWhiteSpace(code).match(/total[=+-]0*[1-9]+/gm));
```

# --seed--

## --after-user-code--

```js
(function(){if(typeof total !== 'undefined') { return "total = " + total; } else { return "total is undefined";}})()
```

## --seed-contents--

```js
// Setup
const myArr = [2, 3, 4, 5, 6];

// Only change code below this line

```

# --solutions--

```js
const myArr = [2, 3, 4, 5, 6];
let total = 0;

for (let i = 0; i < myArr.length; i++) {
  total += myArr[i];
}
```
