---
id: 661bbd211675cd580e7cb917
title: Resverse Array
challengeType: 1
dashedName: reverse-array
---

# --description--

Write a program to reverse the given array and print the reversed array.


**Examples:**

Given array `L` is `[23, 45, 32, 25, 46, 33, 71, 90]`. After reversing, the output should be:

```js
reverseAndPrintArray(L); // Output: 90 71 33 46 25 32 45 23

```

# --instructions--

Write a JavaScript function called `reverseAndPrintArray` that takes an array as input, reverses it, and then prints the reversed array.

# --hints--

`reverseAndPrintArray` should be a function.

```js
assert(typeof reverseAndPrintArray === 'function');
```

`reverseAndPrintArray` function should return [90,71,23,45].

```js
assert.deepEqual(reverseAndPrintArray(L), [90, 71, 45, 23], "The output is not correct.");
```

After reversing the array, print each element of the reversed array using a loop.
dont use `reverse` function.

```js
assert(!code.match(/\.reverse/));

```

# --seed--
## --seed-contents--

```js
const L = [23, 45, 71, 90];

function reverseAndPrintArray(arr) {
    const reversedArray = []
   // Only change code below this line


   // Only change code above this line
   return(reversedArray);
}

reverseAndPrintArray(L);
```

# --solutions--

```js
const L = [23, 45, 71, 90];
function reverseAndPrintArray(arr) {
   const reversedArray = [];
   for (let i = arr.length - 1; i >= 0; i--) {
       reversedArray.push(arr[i]);
   }
   for (let i = 0; i < reversedArray.length; i++) {
       console.log(reversedArray[i]);
   } 
   return(reversedArray);

}

reverseAndPrintArray(L);
```

