---
id: 56592a60ddddeae28f7aa8e1
title: Accede a arreglos multidimensionales con índices
challengeType: 1
videoUrl: 'https://scrimba.com/c/ckND4Cq'
forumTopicId: 16159
dashedName: access-multi-dimensional-arrays-with-indexes
---

# --description--

Se puede pensar que un arreglo <dfn>multidimensional</dfn> es como un *arreglo de arreglos*. Cuando usas corchetes para acceder a tu arreglo, el primer par de corchetes se refiere a las entradas en el arreglo externo (el primer nivel) y cada par adicional de corchetes se refiere al siguiente nivel de entradas.

**Ejemplo**

```js
const arr = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [[10, 11, 12], 13, 14]
];

arr[3];
arr[3][0];
arr[3][0][1];
```

`arr[3]` es `[[10, 11, 12], 13, 14]`, `arr[3][0]` es `[10, 11, 12]` y `arr[3][0][1]` es `11`.

**Nota:** No debe haber ningún espacio entre el nombre del arreglo y los corchetes, ni `array [0][0]` o `array [0] [0]` están permitidos. Aunque JavaScript pueda procesar esto correctamente, puedes confundir a otros programadores al leer tu código.

# --instructions--

Usa la notación de corchetes para seleccionar un elemento de `myArray` de tal manera que `myData` sea igual a `8`.

# --hints--

`myData` debe ser igual a `8`.

```js
assert(myData === 8);
```

Debes usar notación de corchetes para leer el valor correcto de `myArray`.

```js
assert(/myData=myArray\[2\]\[1\]/.test(__helpers.removeWhiteSpace(code)));
```

# --seed--

## --after-user-code--

```js
if(typeof myArray !== "undefined"){(function(){return "myData: " + myData + " myArray: " + JSON.stringify(myArray);})();}
```

## --seed-contents--

```js
const myArray = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [[10, 11, 12], 13, 14],
];

const myData = myArray[0][0];
```

# --solutions--

```js
const myArray = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [[10, 11, 12], 13, 14]];
const myData = myArray[2][1];
```
