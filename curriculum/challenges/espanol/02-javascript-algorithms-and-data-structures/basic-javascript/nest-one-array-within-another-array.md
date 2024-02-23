---
id: cf1111c1c11feddfaeb7bdef
title: Anida un arreglo dentro de otro arreglo
challengeType: 1
videoUrl: 'https://scrimba.com/c/crZQZf8'
forumTopicId: 18247
dashedName: nest-one-array-within-another-array
---

# --description--

También puedes anidar arreglos dentro de otros arreglos, como a continuación:

```js
const teams = [["Bulls", 23], ["White Sox", 45]];
```

Esto también es conocido como <dfn>arreglo multidimensional</dfn>.

# --instructions--

Crea un arreglo anidado llamado `myArray`.

# --hints--

`myArray` debe tener al menos un arreglo anidado dentro de otro arreglo.

```js
assert(Array.isArray(myArray) && myArray.some(Array.isArray));
```

# --seed--

## --after-user-code--

```js
if(typeof myArray !== "undefined"){(function(){return myArray;})();}
```

## --seed-contents--

```js
// Only change code below this line
const myArray = [];
```

# --solutions--

```js
const myArray = [[1, 2, 3]];
```
