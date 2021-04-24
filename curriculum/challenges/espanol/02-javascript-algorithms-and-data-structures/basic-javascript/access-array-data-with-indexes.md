---
id: 56bbb991ad1ed5201cd392ca
title: Accede a los datos de un arreglo con índices
challengeType: 1
videoUrl: 'https://scrimba.com/c/cBZQbTz'
forumTopicId: 16158
dashedName: access-array-data-with-indexes
---

# --description--

Podemos acceder a los datos dentro de un arreglo usando <dfn>índices</dfn>.

Los índices de los arreglos se escriben en la misma notación de corchetes que usan las cadenas de texto, con la excepción que en vez de especificar un carácter, se especifica una entrada en el arreglo. Así como las cadenas de texto, los arreglos usan indexación <dfn>empezando desde cero</dfn>, en donde el primer elemento de un arreglo tiene como índice `0`.

<br>

**Ejemplo**

```js
var array = [50,60,70];
array[0];
var data = array[1];
```

`array[0]` ahora es `50` y `data` tiene el valor `60`.

**Nota:** No debe haber espacios entre el nombre del arreglo y los corchetes, como `array [0]`. Aunque JavaScript pueda procesar esto correctamente, puedes confundir a otros programadores al leer tu código.

# --instructions--

Crea una variable llamada `myData` e iguálala al primer valor de `myArray` usando notación de corchetes.

# --hints--

La variable `myData` debe ser igual al primer valor de `myArray`.

```js
assert(
  (function () {
    if (
      typeof myArray !== 'undefined' &&
      typeof myData !== 'undefined' &&
      myArray[0] === myData
    ) {
      return true;
    } else {
      return false;
    }
  })()
);
```

Los datos en la variable `myArray` deben ser accedidos utilizando notación de corchetes.

```js
assert(
  (function () {
    if (code.match(/\s*=\s*myArray\[0\]/g)) {
      return true;
    } else {
      return false;
    }
  })()
);
```

# --seed--

## --after-user-code--

```js
if(typeof myArray !== "undefined" && typeof myData !== "undefined"){(function(y,z){return 'myArray = ' + JSON.stringify(y) + ', myData = ' + JSON.stringify(z);})(myArray, myData);}
```

## --seed-contents--

```js
var myArray = [50,60,70];


```

# --solutions--

```js
var myArray = [50,60,70];
var myData = myArray[0];
```
