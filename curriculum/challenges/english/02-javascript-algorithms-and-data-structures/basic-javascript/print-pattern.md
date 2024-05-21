---
id: 66288d9daeeabf161b9ccb3c
title: Print Pattern from an Array
challengeType: 1
dashedName: print-pattern
---

# --description--

Objective: The objective of this challenge is to write a program that prints a pattern based on the elements present in an array.

Introduction: Printing patterns based on array elements is a common task in programming. This challenge focuses on writing a program that efficiently prints a pattern according to the elements present in a given array.

Challenge: Write a program that takes an array of numbers as input from the user. The program should then print a pattern based on the elements of the array, where each element determines the number of characters to be printed in each line.

<h2>Hinglish</h2>

Lakshya: Iss challenge ka lakshya hai ek program likhna jo ek array mein maujood tatvon ke adhaar par ek pattern print karta hai.

Prastavana: Array ke tatvon ke adhaar par pattern print karna programming mein ek aam karya hai. Ye challenge us par dhyan kendrit karta hai ki ek diye gaye array mein maujood tatvon ke adhaar par kis tarah se prabhavshali tareeke se ek pattern print kiya ja sake.

Chunauti: Ek program likho jo upyogakarta se ek sankhyaon ka array input ke roop mein lekar. Phir program ko array ke tatvon ke adhaar par ek pattern print karna chahiye, jahan har tatva har line mein print karne ke liye aksharon ki sankhya ko nirdharit karta hai.

# --instructions--


Write a function `printPattern` that takes an `array` of numbers as input and prints a pattern based on the elements of the array.

**Example** 

`[2,4,5,2]` should print a pattern as follows:- 

```js
>>
>>>>
>>>>>
>>
```


**Prompts**
Click on this - <a href = "https://cs50.ai/chat">Link</a> to Go to CS50 AI.
And use this prompt.

1. Prompt 1: Are there any considerations for performance with large array elements that we should keep in mind?</br>
2. Prompt 2: Could you share any ideas for optimizing the time it takes to print the pattern, especially for arrays with a large number of elements?

# --hints--

`[2, 3, 5, 2, 1]` should return `">>\n>>>\n>>>>\n>>\n>"`.

```js
assert(printPattern([2, 3, 5, 2, 1]) === ">>\n>>>\n>>>>>\n>>\n>");
```

# --seed--
## --seed-contents--

```js
function printPattern(arr) {
  // Only change code below this line

  return
  
  // Only change code above this line
}

printPattern([2, 3, 5, 2, 1]);
```

# --solutions--

```js
function printPattern(arr) {
 for (let numIndex = 0; numIndex < arr.length; numIndex++) {
    let pattern = "";
    for (let i = 0; i < arr[numIndex]; i++) {
      pattern += ">";
    }
    console.log(pattern);
    if (numIndex !== arr.length - 1) {
      console.log(""); 
    }
  }
}

```

