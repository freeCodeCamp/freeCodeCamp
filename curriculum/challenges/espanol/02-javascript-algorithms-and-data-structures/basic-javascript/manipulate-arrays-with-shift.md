---
id: 56bbb991ad1ed5201cd392cd
title: Manipulate Arrays With shift Method
challengeType: 1
videoUrl: 'https://scrimba.com/c/cRbVETW'
forumTopicId: 18238
dashedName: manipulate-arrays-with-shift
---

# --description--

`pop()` siempre elimina el último elemento de un arreglo. ¿Qué tal si quieres eliminar el primero?

Ahí es donde entra `.shift()`. Funciona igual que `.pop()`, excepto que elimina el primer elemento en lugar del último.

Ejemplo:

```js
const ourArray = ["Stimpson", "J", ["cat"]];
const removedFromOurArray = ourArray.shift();
```

`removedFromOurArray` tendrá una cadena con valor `Stimpson` y `ourArray` tendrá `["J", ["cat"]]`.

# --instructions--

Utiliza la función `.shift()` para eliminar el primer elemento de `myArray`, y asigna el valor "desplazado" a un variable nuevo `removedFromMyArray`.

# --hints--

`myArray` debe ser igual a `[["dog", 3]]`.

```js
assert(
  (function (d) {
    if (d[0][0] == 'dog' && d[0][1] === 3 && d[1] == undefined) {
      return true;
    } else {
      return false;
    }
  })(myArray)
);
```

`removedFromMyArray` debe contener `["John", 23]`.

```js
assert(
  (function (d) {
    if (
      d[0] == 'John' &&
      d[1] === 23 &&
      typeof removedFromMyArray === 'object'
    ) {
      return true;
    } else {
      return false;
    }
  })(removedFromMyArray)
);
```

# --seed--

## --after-user-code--

```js
if (typeof removedFromMyArray !== 'undefined') (function(y, z){return 'myArray = ' + JSON.stringify(y) + ' & removedFromMyArray = ' + JSON.stringify(z);})(myArray, removedFromMyArray);
```

## --seed-contents--

```js
// Setup
const myArray = [["John", 23], ["dog", 3]];

// Only change code below this line

```

# --solutions--

```js
const myArray = [["John", 23], ["dog", 3]];

// Only change code below this line
const removedFromMyArray = myArray.shift();
```
