---
id: 661bbb0abe070c57af09be41
title: Create an Array of Natural Numbers
challengeType: 1
dashedName: create-array-of-natural-numbers
---

# --description--

Objective: The objective of this challenge is to write a program that creates an array containing the first 20 natural numbers.

Introduction: Natural numbers are positive integers starting from 1. Creating an array containing the first 20 natural numbers is a basic programming task that helps in understanding array initialization and manipulation.

Challenge: Write a program that creates an array containing the first 20 natural numbers and prints it.

<h2>Hinglish</h2>

Lakshya: Iss challenge ka uddeshya hai ek program likhna jo pehle 20 prakritik sankhyaon ko shamil karne wala ek array banata hai.

Prastavana: Prakritik sankhyaen 1 se shuru hote hue sakaratmak poorak sankhyaen hoti hain. Pehle 20 prakritik sankhyaon ko shamil karne wala ek array banane ka ye ek moolyankan karya hai jo array ki shuruaati karane aur parivartan ko samajhne mein madad karta hai.

Chunauti: Ek program likho jo pehle 20 prakritik sankhyaon ko shamil karne wala ek array banata hai aur use print karta hai.

# --instructions--

Write a program that creates an array containing the first 20 natural numbers and prints it.

**Prompt**
Click on this - <a href = "https://cs50.ai/chat">Link</a> to Go to CS50 AI.
And use this prompt.

1. Are there any particular programming concepts or algorithms you'd like to explore or learn for this challenge?

# --hints--

`createArray(5)` should return `[1,2,3,4,5]`.

```js
assert.deepEqual(createArray(5), [1, 2, 3, 4, 5], 'Expected output for input 5 is [1, 2, 3, 4, 5]');

```

`createArray(10)` should return `[1,2,3,4,5,6,7,8,9,10]`. 

```js
assert.deepEqual(createArray(10), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 'Expected output for input 10 is [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]');
```

# --seed--

## --seed-contents--

```js
function createArray(num){
  //Only change code below this line
  
  return
  
  //Only change code above this line
}

createArray(5);
createArray(10);

```

# --solutions--

```js
function createArray(num){
  const array = [];
  let i = 1;
  let j = 0;
  while (i<=num){
        array[j]=i;
        j++;
        i++;
    }
    return array;
}

createArray(10);
```

