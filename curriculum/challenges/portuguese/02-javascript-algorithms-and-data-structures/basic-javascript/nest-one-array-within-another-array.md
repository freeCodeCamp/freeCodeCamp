---
id: cf1111c1c11feddfaeb7bdef
title: Aninhe um Array com Outro Array
challengeType: 1
videoUrl: 'https://scrimba.com/c/crZQZf8'
forumTopicId: 18247
dashedName: nest-one-array-within-another-array
---

# --description--

Você também pode aninhar arrays dentro de outros arrays, como abaixo:

```js
[["Bulls", 23], ["White Sox", 45]]
```

Isso é chamado um <dfn>array multidimensional</dfn>.

# --instructions--

Crie um array aninhado chamado de `myArray`.

# --hints--

`myArray` deve ter pelo menos um array aninhado dentro de outro array.

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
var myArray = [];
```

# --solutions--

```js
var myArray = [[1,2,3]];
```
