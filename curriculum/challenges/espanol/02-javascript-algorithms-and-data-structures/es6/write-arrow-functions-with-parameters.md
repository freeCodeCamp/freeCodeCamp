---
id: 587d7b88367417b2b2512b44
title: Escribe funciones flecha con parámetros
challengeType: 1
forumTopicId: 301223
dashedName: write-arrow-functions-with-parameters
---

# --description--

Al igual que una función regular, puedes pasar argumentos a una función flecha.

```js
const doubler = (item) => item * 2;
doubler(4);
```

`doubler(4)` devolvería el valor `8`.

Si una función flecha tiene un solo parámetro, los paréntesis que encierran el parámetro pueden ser omitidos.

```js
const doubler = item => item * 2;
```

Es posible pasar más de un argumento a una función flecha.

```js
const multiplier = (item, multi) => item * multi;
multiplier(4, 2);
```

`multiplier(4, 2)` devolverá el valor `8`.

# --instructions--

Reescribe la función `myConcat` que añade el contenido de `arr2` a `arr1` para que la función use la sintaxis de función flecha.

# --hints--

Debes reemplazar la palabra clave `var`.

```js
assert.notMatch(code, /var/g);
```

`myConcat` debe ser una variable constante (utilizando `const`).

```js
assert.match(code, /const\s+myConcat/g);
```

`myConcat` debe ser una función de flecha con dos parámetros

```js
assert(
  /myConcat=\(\w+,\w+\)=>/.test(code.replace(/\s/g, '')) &&
    typeof myConcat === 'function'
);
```

`myConcat()` debe devolver `[1, 2, 3, 4, 5]`.

```js
assert.deepEqual(myConcat([1, 2], [3, 4, 5]), [1, 2, 3, 4, 5]);
```

La palabra clave `function` no debe ser usada.

```js
assert.notMatch(code, /function/g);
```

# --seed--

## --seed-contents--

```js
var myConcat = function(arr1, arr2) {
  return arr1.concat(arr2);
};

console.log(myConcat([1, 2], [3, 4, 5]));
```

# --solutions--

```js
const myConcat = (arr1, arr2) =>  {
  return arr1.concat(arr2);
};

console.log(myConcat([1, 2], [3, 4, 5]));
```
