---
id: 6606d17360f6cb18637f1ed7
title: Access Array data with indexes
challengeType: 1
dashedName: acc-arr-idx
---

# --description--

We can access the data inside arrays using <dfn>indexes</dfn>.

Array indexes are written in the same bracket notation that strings use, except that instead of specifying a character, they are specifying an entry in the array. Like strings, arrays use <dfn>zero-based</dfn> indexing, so the first element in an array has an index of `0`.

<h2>Hinglish</h2>

Hum arrays ke andar ke data ko <dfn>indexes</dfn> ka istemal karke access kar sakte hain.

Array indexes ko wahi bracket notation mein likha jata hai jo strings mein istemal hota hai, bas fark itna hai ki character ko specify karne ki jagah, ye array mein ek entry ko specify karte hain. Jaise strings, arrays bhi <dfn>zero-based</dfn> indexing ka istemal karte hain, isliye ek array mein pehla element ka index 0 hota hai.
<br>

**Example**

```js
const array = [50, 60, 70];
console.log(array[0]);
const data = array[1];
```

The `console.log(array[0])` prints `50`, and `data` has the value `60`.

# --instructions--

Create a variable called `myData` and set it to equal the first value of `myArray` using bracket notation.

Bracket notation ka istemal karke `myArray` ke pehle value ko access karne ke liye ek variable `myData` create karein aur isko myArray ke pehle value ke barabar set karein.

# --hints--

The variable `myData` should equal the first value of `myArray`.

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

The data in variable `myArray` should be accessed using bracket notation.

```js
assert(
  (function () {
    if (__helpers.removeJSComments(code).match(/\s*=\s*myArray\[0\]/g)) {
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
const myArray = [50, 60, 70];


```

# --solutions--

```js
const myArray = [50, 60, 70];
const myData = myArray[0];
```
