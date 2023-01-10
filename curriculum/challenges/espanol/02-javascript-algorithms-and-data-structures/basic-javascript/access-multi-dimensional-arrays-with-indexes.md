---
id: 56592a60ddddeae28f7aa8e1
title: Accede a arreglos multidimensionales con índices
challengeType: 1
videoUrl: 'https://scrimba.com/c/ckND4Cq'
forumTopicId: 16159
dashedName: access-multi-dimensional-arrays-with-indexes
---

# --description--

Se puede pensar que un arreglo <dfn>multidimensional</dfn> es como un *arreglo de arreglos*. Cuando usas corchetes para acceder a un arreglo, el primer par de corchetes hace referencia a los elementos del arreglo más externo (el primer nivel), y cada par adicional va haciendo referencia a un nivel más interno.

**Ejemplo**

```js
const arr = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [[10, 11, 12], 13, 14]
];

const subarray = arr[3];
const nestedSubarray = arr[3][0];
const element = arr[3][0][1];
```

En este ejemplo, `subarray` tiene el valor `[[10, 11, 12], 13, 14]`, `nestedSubarray` tiene el valor `[10, 11, 12]`, y `element` tiene el valor `11`.

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
