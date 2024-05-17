---
id: 66288f543b9f6a171d8d635c
title: Merging Arrays
challengeType: 1
dashedName: merging-arrays
---

# --description--

The objective of this challenge is to write a program that merges two sorted arrays into a single sorted array without using sorting algorithms.

Merging two sorted arrays into a single sorted array is a common task in programming. This challenge focuses on writing a program that efficiently merges two sorted arrays into a single sorted array without using sorting algorithms.

<h2>Hinglish</h2>

Iss challenge ka lakshya hai ek program likhna jo do sorted arrays ko sorting algorithms ka istemal kiye bina ek single sorted array mein merge karta hai.

Do sorted arrays ko ek single sorted array mein merge karna programming mein ek aam karya hai. Ye challenge us par dhyan kendrit karta hai ki sorting algorithms ka istemal kiye bina do sorted arrays ko ek single sorted array mein prabhavshali tareeke se kaise merge kiya ja sake.

# --instructions--

Write a program that takes two sorted arrays of size M and N as input from the user. The program should then merge the two arrays into a single sorted array of size M + N without using any sorting algorithms.

**Prompts**
Click on this - <a href = "https://cs50.ai/chat">Link</a> to Go to CS50 AI.
And use this prompt.

1. Prompt 1: What approach would you take to efficiently merge two sorted arrays without using sorting algorithms?</br>
2. Prompt 2: Are there any particular programming concepts or algorithms you'd like to explore or learn for this challenge?


# --hints--

`mergeSortedArrays([1,2,5,6], [3,4,7,9])` should return `[1,2,3,4,5,6,7,9]`.

```js
assert.deepStrictEqual(mergeSortedArrays([1,2,5,6], [3,4,7,9]),[1,2,3,4,5,6,7,9])
```

# --seed--

## --seed-contents--

```js
function mergeSortedArrays(arr1, arr2) {
   
   return

}

mergeSortedArrays();
```

# --solutions--

```js

function mergeSortedArrays(arr1, arr2) {
    let i = 0, j = 0;

    // Iterate through arr2 and insert its elements into arr1 maintaining sorted order
    while (j < arr2.length) {
        // Find the position in arr1 where the current element of arr2 should be inserted
        while (arr1[i] <= arr2[j]) {
            i++;
            if (i === arr1.length) break;
        }
        // Insert the current element of arr2 into arr1 at position i
        arr1.splice(i, 0, arr2[j]);
        j++;
    }

    return arr1;
}

```

