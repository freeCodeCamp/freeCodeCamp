---
id: 587d7b7b367417b2b2512b13
title: Copia un arreglo con el operador de propagación
challengeType: 1
forumTopicId: 301157
dashedName: copy-an-array-with-the-spread-operator
---

# --description--

Mientras que `slice()` nos permite ser selectivos sobre qué elementos de un arreglo copiar, entre otras tareas útiles, el nuevo <dfn>operador de propagación</dfn> de ES6 nos permite copiar fácilmente *todos* los elementos de una arreglo, en orden, con una sintaxis simple y altamente legible. La sintaxis de propagación simplemente se ve así: `...`

En la práctica, podemos utilizar el operador de propagación para copiar un arreglo de esta manera:

```js
let thisArray = [true, true, undefined, false, null];
let thatArray = [...thisArray];
```

`thatArray` es igual a `[true, true, undefined, false, null]`. `thisArray` permanece sin cambios y `thatArray` contiene los mismos elementos que `thisArray`.

# --instructions--

Hemos definido una función, `copyMachine` que toma `arr` (un arreglo) y `num` (un número) como argumentos. Se supone que la función devuelve un nuevo arreglo compuesto por `num` copias de `arr`. Hemos hecho la mayor parte del trabajo por ti, pero aún no funciona del todo bien. Modifica la función usando sintaxis de propagación para que funcione correctamente (sugerencia: ¡otro método que ya hemos cubierto podría ser útil aquí!).

# --hints--

`copyMachine([true, false, true], 2)` debe devolver `[[true, false, true], [true, false, true]]`

```js
assert.deepEqual(copyMachine([true, false, true], 2), [
  [true, false, true],
  [true, false, true]
]);
```

`copyMachine([1, 2, 3], 5)` debe devolver `[[1, 2, 3], [1, 2, 3], [1, 2, 3], [1, 2, 3], [1, 2, 3]]`

```js
assert.deepEqual(copyMachine([1, 2, 3], 5), [
  [1, 2, 3],
  [1, 2, 3],
  [1, 2, 3],
  [1, 2, 3],
  [1, 2, 3]
]);
```

`copyMachine([true, true, null], 1)` debe devolver `[[true, true, null]]`

```js
assert.deepEqual(copyMachine([true, true, null], 1), [[true, true, null]]);
```

`copyMachine(["it works"], 3)` debe devolver `[["it works"], ["it works"], ["it works"]]`

```js
assert.deepEqual(copyMachine(['it works'], 3), [
  ['it works'],
  ['it works'],
  ['it works']
]);
```

La función `copyMachine` debe utilizar el `spread operator` (operador de propagación) con el arreglo `arr`

```js
assert(code.match(/\.\.\.arr/));
```

# --seed--

## --seed-contents--

```js
function copyMachine(arr, num) {
  let newArr = [];
  while (num >= 1) {
    // Only change code below this line

    // Only change code above this line
    num--;
  }
  return newArr;
}

console.log(copyMachine([true, false, true], 2));
```

# --solutions--

```js
function copyMachine(arr,num){
    let newArr=[];
    while(num >=1){
    newArr.push([...arr]);
    num--;
    }
    return newArr;
}
console.log(copyMachine([true, false, true], 2));
```
