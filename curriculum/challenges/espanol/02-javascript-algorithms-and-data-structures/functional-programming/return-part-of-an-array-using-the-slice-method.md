---
id: 587d7b90367417b2b2512b65
title: Devolver parte de un arreglo mediante el método slice
challengeType: 1
forumTopicId: 301239
dashedName: return-part-of-an-array-using-the-slice-method
---

# --description--

El método `slice` devuelve una copia de ciertos elementos de un arreglo. Puede tomar dos argumentos, el primero da el índice de dónde comenzar el corte, el segundo es el índice de dónde terminar el corte (y no es inclusivo). Si no se proporcionan los argumentos, el valor predeterminado es comenzar desde el principio del arreglo hasta el final, la cual es una manera fácil de hacer una copia de todo el arreglo. El método `slice` no muta el arreglo original, pero devuelve uno nuevo.

Por ejemplo:

```js
const arr = ["Cat", "Dog", "Tiger", "Zebra"];
const newArray = arr.slice(1, 3);
```

`newArray` tendría el valor de `["Dog", "Tiger"]`.

# --instructions--

Utiliza el método `slice` en la función `sliceArray` para retornar parte del arreglo `anim` dados los índices `beginSlice` y `endSlice`. La función debe devolver un arreglo.

# --hints--

Tu código debe usar el método `slice`.

```js
assert(code.match(/\.slice/g));
```

La variable `inputAnim` no debe cambiar.

```js
assert(
  JSON.stringify(inputAnim) ===
    JSON.stringify(['Cat', 'Dog', 'Tiger', 'Zebra', 'Ant'])
);
```

`sliceArray(["Cat", "Dog", "Tiger", "Zebra", "Ant"], 1, 3)` debe devolver `["Dog", "Tiger"]`.

```js
assert(
  JSON.stringify(sliceArray(['Cat', 'Dog', 'Tiger', 'Zebra', 'Ant'], 1, 3)) ===
    JSON.stringify(['Dog', 'Tiger'])
);
```

`sliceArray(["Cat", "Dog", "Tiger", "Zebra", "Ant"], 0, 1)` debe devolver `["Cat"]`.

```js
assert(
  JSON.stringify(sliceArray(['Cat', 'Dog', 'Tiger', 'Zebra', 'Ant'], 0, 1)) ===
    JSON.stringify(['Cat'])
);
```

`sliceArray(["Cat", "Dog", "Tiger", "Zebra", "Ant"], 1, 4)` debe devolver `["Dog", "Tiger", "Zebra"]`.

```js
assert(
  JSON.stringify(sliceArray(['Cat', 'Dog', 'Tiger', 'Zebra', 'Ant'], 1, 4)) ===
    JSON.stringify(['Dog', 'Tiger', 'Zebra'])
);
```

# --seed--

## --seed-contents--

```js
function sliceArray(anim, beginSlice, endSlice) {
  // Only change code below this line


  // Only change code above this line
}

const inputAnim = ["Cat", "Dog", "Tiger", "Zebra", "Ant"];
sliceArray(inputAnim, 1, 3);
```

# --solutions--

```js
function sliceArray(anim, beginSlice, endSlice) {
  return anim.slice(beginSlice, endSlice);
}
const inputAnim = ["Cat", "Dog", "Tiger", "Zebra", "Ant"];
```
