---
id: cf1111c1c11feddfaeb7bdef
title: Nidificare un array in un altro array
challengeType: 1
videoUrl: 'https://scrimba.com/c/crZQZf8'
forumTopicId: 18247
dashedName: nest-one-array-within-another-array
---

# --description--

È anche possibile nidificare array all'interno di altri array, come nell'esempio:

```js
const teams = [["Bulls", 23], ["White Sox", 45]];
```

Questo viene anche chiamato un <dfn>array multidimensionale</dfn>.

# --instructions--

Crea un array annidato chiamato `myArray`.

# --hints--

`myArray` dovrebbe avere almeno un array annidato all'interno di un altro array.

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
