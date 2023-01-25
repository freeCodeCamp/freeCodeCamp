---
id: 56bbb991ad1ed5201cd392ce
title: Manipulate Arrays With unshift Method
challengeType: 1
videoUrl: 'https://scrimba.com/c/ckNDESv'
forumTopicId: 18239
dashedName: manipulate-arrays-with-unshift
---

# --description--

No solo puedes desplazar (`shift`) elementos del comienzo de un arreglo, también puedes des-desplazar (`unshift`) elementos al comienzo de un arreglo. Por ejemplo añadir elementos delante del arreglo.

`.unshift()` funciona exactamente como `.push()`, pero en lugar de añadir el elemento al final del arreglo, `unshift()` añade el elemento al principio del arreglo.

Ejemplo:

```js
const ourArray = ["Stimpson", "J", "cat"];
ourArray.shift();
ourArray.unshift("Happy");
```

Después del `shift`, `ourArray` tendrá el valor `["J", "cat"]`. Después del `unshift`, `ourArray` tendrá el valor `["Happy", "J", "cat"]`.

# --instructions--

Agrega `["Paul", 35]` al principio de la variable `myArray` usando `unshift()`.

# --hints--

`myArray` debe contener ahora `[["Paul", 35], ["dog", 3]]`.

```js
assert(
  (function (d) {
    if (
      typeof d[0] === 'object' &&
      d[0][0] == 'Paul' &&
      d[0][1] === 35 &&
      d[1][0] != undefined &&
      d[1][0] == 'dog' &&
      d[1][1] != undefined &&
      d[1][1] == 3
    ) {
      return true;
    } else {
      return false;
    }
  })(myArray)
);
```

# --seed--

## --after-user-code--

```js
(function(y, z){return 'myArray = ' + JSON.stringify(y);})(myArray);
```

## --seed-contents--

```js
// Setup
const myArray = [["John", 23], ["dog", 3]];
myArray.shift();

// Only change code below this line

```

# --solutions--

```js
const myArray = [["John", 23], ["dog", 3]];
myArray.shift();
myArray.unshift(["Paul", 35]);
```
