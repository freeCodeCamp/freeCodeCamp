---
id: cf1111c1c11feddfaeb8bdef
title: Modifica los datos de un arreglo con índices
challengeType: 1
videoUrl: 'https://scrimba.com/c/czQM4A8'
forumTopicId: 18241
dashedName: modify-array-data-with-indexes
---

# --description--

A diferencia de las cadenas, las entradas de los arreglos son <dfn>mutables</dfn> y pueden cambiarse libremente, incluso si el arreglo fue declarado con `const`.

**Ejemplo**

```js
const ourArray = [50, 40, 30];
ourArray[0] = 15;
```

`ourArray` ahora tiene el valor `[15, 40, 30]`.

**Nota:** No debe haber espacios entre el nombre del arreglo y los corchetes, como `array [0]`. Aunque JavaScript pueda procesar esto correctamente, puedes confundir a otros programadores al leer tu código.

# --instructions--

Modifica los datos almacenados en el índice `0` de `myArray` a un valor de `45`.

# --hints--

`myArray` ahora debe ser `[45, 64, 99]`.

```js
assert(
  (function () {
    if (
      typeof myArray != 'undefined' &&
      myArray[0] == 45 &&
      myArray[1] == 64 &&
      myArray[2] == 99
    ) {
      return true;
    } else {
      return false;
    }
  })()
);
```

Debes usar el índice correcto para modificar el valor en `myArray`.

```js
assert(
  (function () {
    if (code.match(/myArray\[0\]\s*=\s*/g)) {
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
if(typeof myArray !== "undefined"){(function(){return myArray;})();}
```

## --seed-contents--

```js
// Setup
const myArray = [18, 64, 99];

// Only change code below this line

```

# --solutions--

```js
const myArray = [18, 64, 99];
myArray[0] = 45;
```
