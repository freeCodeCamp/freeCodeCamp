---
id: 6606d1f8bf5baa18fea7b77e
title: Nest one array within another array
challengeType: 1
dashedName: nested-arrs
---

# --description--

You can also nest arrays within other arrays, like below:

```js
const teams = [["Bulls", 23], ["White Sox", 45]];
```

This is also called a <dfn>multi-dimensional array</dfn>.

Aap ek array ko doosri array ke andar bhi daal sakte hain, jaise neeche dikhaya gaya hai:

```js
const teams = [["Bulls", 23], ["White Sox", 45]];
```

Isse ek <dfn>multi-dimensional array</dfn> bhi kehte hain.

# --instructions--

Create a nested array called `myArray`.

# --hints--

`myArray` should have at least one array nested within another array.

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
