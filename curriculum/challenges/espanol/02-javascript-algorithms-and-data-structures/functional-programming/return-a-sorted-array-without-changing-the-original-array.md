---
id: 587d7da9367417b2b2512b6a
title: Devuelve un arreglo ordenado sin cambiar el arreglo original
challengeType: 1
forumTopicId: 301237
dashedName: return-a-sorted-array-without-changing-the-original-array
---

# --description--

Un efecto secundario del método `sort` es que cambia el orden de los elementos en el arreglo original. En otras palabras, muta el arreglo en su sitio. Una forma de evitar esto es concatenar primero un arreglo vacío al que está siendo ordenado (recuerda que `slice` y `concat` devuelven un nuevo arreglo), luego ejecutar el método `sort`.

# --instructions--

Utiliza el método `sort` en la función `nonMutatingSort` para ordenar los elementos de un arreglo en orden ascendente. La función debe devolver un nuevo arreglo y no mutar la variable `globalArray`.

# --hints--

Tu código debe usar el método `sort`.

```js
assert(nonMutatingSort.toString().match(/\.sort/g));
```

La variable `globalArray` no debe cambiar.

```js
assert(JSON.stringify(globalArray) === JSON.stringify([5, 6, 3, 2, 9]));
```

`nonMutatingSort(globalArray)` debe devolver `[2, 3, 5, 6, 9]`.

```js
assert(
  JSON.stringify(nonMutatingSort(globalArray)) ===
    JSON.stringify([2, 3, 5, 6, 9])
);
```

`nonMutatingSort(globalArray)` no debe ser programada manualmente.

```js
assert(!nonMutatingSort.toString().match(/\[.*?[23569].*?\]/gs));
```

La función debe devolver un nuevo arreglo, no el arreglo que se le pasa.

```js
assert(nonMutatingSort(globalArray) !== globalArray);
```

`nonMutatingSort([1, 30, 4, 21, 100000])` debe devolver `[1, 4, 21, 30, 100000]`.

```js
assert(JSON.stringify(nonMutatingSort([1, 30, 4, 21, 100000])) ===
    JSON.stringify([1, 4, 21, 30, 100000]))
```

`nonMutatingSort([140000, 104, 99])` debe devolver `[99, 104, 140000]`.

```js
assert(JSON.stringify(nonMutatingSort([140000, 104, 99])) ===
    JSON.stringify([99, 104, 140000]))
```

# --seed--

## --seed-contents--

```js
const globalArray = [5, 6, 3, 2, 9];

function nonMutatingSort(arr) {
  // Only change code below this line


  // Only change code above this line
}

nonMutatingSort(globalArray);
```

# --solutions--

```js
const globalArray = [5, 6, 3, 2, 9];
function nonMutatingSort(arr) {
  return [].concat(arr).sort((a,b) => a-b);
}
```
