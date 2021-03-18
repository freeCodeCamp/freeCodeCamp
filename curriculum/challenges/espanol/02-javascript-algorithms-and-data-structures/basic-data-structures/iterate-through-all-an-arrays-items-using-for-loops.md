---
id: 587d7b7b367417b2b2512b15
title: Itera a través de todos los elementos de un arreglo utilizando bucles "for"
challengeType: 1
forumTopicId: 301161
dashedName: iterate-through-all-an-arrays-items-using-for-loops
---

# --description--

A veces, cuando se trabaja con arreglos, es muy útil poder iterar a través de cada elemento para encontrar uno o más elementos que podamos necesitar, o manipular un arreglo en función de los elementos de datos que cumplen un determinado conjunto de criterios. JavaScript ofrece varios métodos incorporados que iteran sobre arreglos de formas ligeramente diferentes para conseguir distintos resultados (como `every()`, `forEach()`, `map()`, etc.), sin embargo, la técnica que es más flexible y nos ofrece la mayor cantidad de control es un simple bucle `for`.

Considera lo siguiente:

```js
function greaterThanTen(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 10) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

greaterThanTen([2, 12, 8, 14, 80, 0, 1]);
```

Usando un bucle `for`, esta función itera y accede a cada elemento del arreglo, y lo somete a una simple prueba que hemos creado. De esta manera, hemos determinado de forma sencilla y programática qué elementos de datos son mayores que `10`, y hemos devuelto un nuevo arreglo, `[12, 14, 80]`, que contiene esos elementos.

# --instructions--

Hemos definido una función, `filteredArray`, que toma `arr`, un arreglo anidado, y `elem` como argumentos, y devuelve un nuevo arreglo. `elem` representa un elemento que puede o no estar presente en uno o más de los arreglos anidados dentro de `arr`. Modifica la función, usando un bucle `for`, para que devuelva una versión filtrada del arreglo pasado de forma que cualquier arreglo anidado dentro de `arr` que contenga `elem` haya sido eliminado.

# --hints--

`filteredArray([[10, 8, 3], [14, 6, 23], [3, 18, 6]], 18)` debe devolver `[[10, 8, 3], [14, 6, 23]]`

```js
assert.deepEqual(
  filteredArray(
    [
      [10, 8, 3],
      [14, 6, 23],
      [3, 18, 6]
    ],
    18
  ),
  [
    [10, 8, 3],
    [14, 6, 23]
  ]
);
```

`filteredArray([["trumpets", 2], ["flutes", 4], ["saxophones", 2]], 2)` debe devolver `[["flutes", 4]]`

```js
assert.deepEqual(
  filteredArray(
    [
      ['trumpets', 2],
      ['flutes', 4],
      ['saxophones', 2]
    ],
    2
  ),
  [['flutes', 4]]
);
```

`filteredArray([["amy", "beth", "sam"], ["dave", "sean", "peter"]], "peter")` debe devolver `[["amy", "beth", "sam"]]`

```js
assert.deepEqual(
  filteredArray(
    [
      ['amy', 'beth', 'sam'],
      ['dave', 'sean', 'peter']
    ],
    'peter'
  ),
  [['amy', 'beth', 'sam']]
);
```

`filteredArray([[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 3, 9]], 3)` debe devolver `[]`

```js
assert.deepEqual(
  filteredArray(
    [
      [3, 2, 3],
      [1, 6, 3],
      [3, 13, 26],
      [19, 3, 9]
    ],
    3
  ),
  []
);
```

La función `filteredArray` debe utilizar un bucle `for`

```js
assert.notStrictEqual(filteredArray.toString().search(/for/), -1);
```

# --seed--

## --seed-contents--

```js
function filteredArray(arr, elem) {
  let newArr = [];
  // Only change code below this line

  // Only change code above this line
  return newArr;
}

console.log(filteredArray([[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 3, 9]], 3));
```

# --solutions--

```js
function filteredArray(arr, elem) {
  let newArr = [];
  for (let i = 0; i<arr.length; i++) {
    if (arr[i].indexOf(elem) < 0) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}
```
