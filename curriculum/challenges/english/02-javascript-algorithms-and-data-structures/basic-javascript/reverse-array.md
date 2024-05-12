---
id: 661bbd211675cd580e7cb917
title: Resverse Array
challengeType: 1
dashedName: reverse-array
---

# --description--

Objective: The objective of this challenge is to write a program that reverses an array and prints the reversed array.

Introduction: Reversing an array involves swapping elements from the start and end of the array until the entire array is reversed. This challenge focuses on writing a program that efficiently reverses an array and prints the reversed array.

Challenge: Write a program that takes an array of numbers as input, reverses the array, and then prints the reversed array.

<h2>Hinglish</h2>

Lakshya: Iss challenge ka uddeshya hai ek program likhna jo ek array ko ulta karke ulta array ko print karta hai.

Prastavana: Ek array ko ulta karna arambh se aur array ke ant tak tatvon ko badalna shaamil hai jab tak poori array ulta nahi hoti. Ye challenge us par dhyan kendrit karta hai ki ek diye gaye array ko kis tarah se prabhavshali tareeke se ulta kiya ja sake aur ulta array ko print kiya ja sake.

Chunauti: Ek program likho jo sankhyon ka ek array input ke roop mein le, array ko ulta kare, aur phir ulta array ko print kare.

**Examples:**

Given array `L` is `[23, 45, 32, 25, 46, 33, 71, 90]`. After reversing, the output should be:

```js
reverseAndPrintArray(L); // Output: 90 71 33 46 25 32 45 23

```

# --instructions--

Write a JavaScript function called `reverseAndPrintArray` that takes an array as input, reverses it, and then prints the reversed array.

**Prompts**
Click on this - <a href = "https://cs50.ai/chat">Link</a> to Go to CS50 AI.
And use this prompt.

1. Prompt 1: Are there any specific techniques or algorithms you'd like to employ for array reversal?
2. Prompt 2: Would you like us to consider any special cases or edge scenarios in our implementation?

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

