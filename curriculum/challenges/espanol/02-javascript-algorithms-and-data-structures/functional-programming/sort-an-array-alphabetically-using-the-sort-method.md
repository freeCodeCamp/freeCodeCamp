---
id: 587d7da9367417b2b2512b69
title: Ordena un arreglo alfabéticamente con el método sort
challengeType: 1
forumTopicId: 18303
dashedName: sort-an-array-alphabetically-using-the-sort-method
---

# --description--

El método `sort` ordena los elementos de un arreglo de acuerdo a la función callback.

Por ejemplo:

```js
function ascendingOrder(arr) {
  return arr.sort(function(a, b) {
    return a - b;
  });
}

ascendingOrder([1, 5, 2, 3, 4]);
```

Esto devolvería el valor de `[1, 2, 3, 4, 5]`.

```js
function reverseAlpha(arr) {
  return arr.sort(function(a, b) {
    return a === b ? 0 : a < b ? 1 : -1;
  });
}

reverseAlpha(['l', 'h', 'z', 'b', 's']);
```

Esto devolvería el valor de `['z', 's', 'l', 'h', 'b']`.

Por defecto, JavaScript ordena basándose en el valor "Unicode" de la cadena de caracteres, lo cual puede dar resultados inesperados. Por lo tanto, se recomienda proporcionar una función callback para especificar como se deben ordenar los elementos del arreglo. Cuando se proporciona dicha función callback, normalmente llamada `compareFunction`, los elementos del arreglo se ordenan de acuerdo al valor que devuelve la función `compareFunction`: Si `compareFunction(a,b)` devuelve un valor menor que 0 para dos elementos `a` y `b`, entonces `a` irá antes que `b`. Si `compareFunction(a,b)` devuelve un valor mayor a 0 para dos elementos `a` y `b`, entonces `b` irá antes que `a`. Si `compareFunction(a,b)` devuelve un valor igual a 0 para dos elementos `a` y `b`, entonces `a` y `b` se dejarán sin cambios.

# --instructions--

Utiliza el método `sort` en la función `alphabeticalOrder` para ordenar los elementos de `arr` en orden alfabético. La función debe devolver el arreglo ordenado.

# --hints--

Tu código debe usar el método `sort`.

```js
assert(code.match(/\.sort/g));
```

`alphabeticalOrder(["a", "d", "c", "a", "z", "g"])` debe devolver `["a", "a", "c", "d", "g", "z"]`.

```js
assert(
  JSON.stringify(alphabeticalOrder(['a', 'd', 'c', 'a', 'z', 'g'])) ===
    JSON.stringify(['a', 'a', 'c', 'd', 'g', 'z'])
);
```

`alphabeticalOrder(["x", "h", "a", "m", "n", "m"])` debe devolver `["a", "h", "m", "m", "n", "x"]`.

```js
assert(
  JSON.stringify(alphabeticalOrder(['x', 'h', 'a', 'm', 'n', 'm'])) ===
    JSON.stringify(['a', 'h', 'm', 'm', 'n', 'x'])
);
```

`alphabeticalOrder(["a", "a", "a", "a", "x", "t"])` debe devolver `["a", "a", "a", "a", "t", "x"]`.

```js
assert(
  JSON.stringify(alphabeticalOrder(['a', 'a', 'a', 'a', 'x', 't'])) ===
    JSON.stringify(['a', 'a', 'a', 'a', 't', 'x'])
);
```

# --seed--

## --seed-contents--

```js
function alphabeticalOrder(arr) {
  // Only change code below this line

  return arr
  // Only change code above this line
}

alphabeticalOrder(["a", "d", "c", "a", "z", "g"]);
```

# --solutions--

```js
function alphabeticalOrder(arr) {
  return arr.sort();
}
```
