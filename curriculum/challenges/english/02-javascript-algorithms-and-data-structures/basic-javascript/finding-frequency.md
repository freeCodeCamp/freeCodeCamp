---
id: 6641370f1d4553192737b462
title: Finding Frequency
challengeType: 1
dashedName: finding-frequency
---

# --description--

Objective: The objective of this challenge is to write a program that calculates the frequency of each element present in a given array.

Introduction: Determining the frequency of elements in an array is a common task in programming. This challenge focuses on writing a program that efficiently computes and prints the frequency of each number present in a given array.

Challenge: Write a program that takes the size of the array and the array elements as input from the user. The program should then calculate and print the frequency of each number present in the array.

<h2>Hinglish</h2>

Lakshya: Iss challenge ka uddeshya hai ek program likhna jo di gayi array mein maujood har element ka aksar gina hai.</br>

Prastavana: Ek array mein maujood tatvon ka aksar gina karne ka ek samanya karya hai programming mein. Ye challenge ek aise program par dhyan karta hai jo di gayi array mein maujood har sankhya ka aksar prapt karta hai aur print karta hai.

Chunauti: Ek program likho jo istemalakarta se array ka size aur array ke tatvaon ko input ke roop mein le. Fir program ko array mein maujood har sankhya ka aksar gina aur print karna hai.

# --instructions--

Write a program that takes the size of the array and the array elements as input from the user. The program should then calculate and print the frequency of each number present in the array.

**Prompts**
Click on this - <a href = "https://cs50.ai/chat">Link</a> to Go to CS50 AI.
And use this prompt.

1. Prompt 1: What approach would you take to efficiently calculate the frequency of each element in the array?
2. Prompt 2: Would you like us to consider any special cases or edge scenarios in our implementation?


# --hints--

For the input array `[2, 4, 2, 6, 3, 6]`, the expected output is: `[[2, 2], [4, 1], [6, 2], [3, 1]]`


```js
assert.deepEqual(findFrequency(6, [2, 4, 2, 6, 3, 6]), [[2, 2], [4, 1], [6, 2], [3, 1]]);

```

# --seed--

## --seed-contents--

```js
function findFrequency(size, arr) {
  // Only change code below this line
  return
  // Only change code above this line
}

findFrequency(6, [2, 4, 2, 6, 3, 6]);

```

# --solutions--

```js
function findFrequency(size, arr) {
    let frequency = [];
    for (let i = 0; i < size; i++) {
        let found = false;
        for (let j = 0; j < frequency.length; j++) {
            if (frequency[j][0] === arr[i]) {
                frequency[j][1]++;
                found = true;
                break;
            }
        }
        if (!found) {
            frequency.push([arr[i], 1]);
        }
    }
    return frequency;
}

findFrequency(6, [2, 4, 2, 6, 3, 6]);

```
