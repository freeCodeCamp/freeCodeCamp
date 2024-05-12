---
id: 66288ccd87056f15c01c3abc
title: Find Duplicates
challengeType: 1
dashedName: find-duplicates
---

# --description--

Objective: The objective of this challenge is to write a program that identifies duplicate numbers in a given array.

Introduction: Identifying duplicate numbers in an array is a common task in programming. This challenge focuses on writing a program that efficiently finds and prints the duplicate numbers present in a given array.

Challenge: Write a program that takes the size of the array and the array elements as input from the user. The program should then identify and print the duplicate numbers present in the array.

<h2>Hinglish</h2>

Lakshya: Iss challenge ka lakshya hai ek program likhna jo di gayi array mein duplicate numbers ko pehchaan sakta hai.

Prastavana: Array mein duplicate numbers ko pehchaanne ka kaam programming mein aam hota hai. Ye challenge us par dhyan kendrit karta hai ki ek diye gaye array mein maujood duplicate numbers ko kis tarah se prabhavshali tareeke se dhoondhkar print kiya ja sake.

Chunauti: Ek program likho jo upyogakarta se array ki size aur array ke tatvon ko input ke roop mein le. Phir program ko array mein maujood duplicate numbers ko pehchaan karke print karna chahiye.

# --instructions--

Identifying duplicate numbers in an array is a common task in programming. This challenge focuses on writing a program that efficiently finds and prints the duplicate numbers present in a given array.

Write a program that takes the size of the array and the array elements as input from the user. The program should then identify and print the duplicate numbers present in the array.

Use `add`, `join`, `from` function to solve it.

**prompts**
Click on this - <a href = "https://cs50.ai/chat">Link</a> to Go to CS50 AI.
And use this prompt.

1. Prompt 1: What approach would you take to efficiently identify duplicate numbers in an array?
2. Prompt 2: How would you handle cases where there are multiple duplicates of the same number in the array? 

# --hints--

`findDuplicates(5, [2, 4, 2, 6, 3])` should return `"2"`.

```js
assert(findDuplicates(5, [2, 4, 2, 6, 3]) === "2");
```

`findDuplicates(6, [2, 4, 6, 3, 3, 2])` should return `"2 3"`.

```js
assert(findDuplicates(6, [2, 4, 6, 3, 3, 2]) === "2 3");

```

# --seed--
## --seed-contents--

```js
function findDuplicates(size, arr) {
  // Only change code below this line
  return "";
  // Only change code above this line
}
(findDuplicates(5, [2, 4, 2, 6, 3])); 
(findDuplicates(6, [2, 4, 6, 3, 3, 2])); 
```

# --solutions--

```js
function findDuplicates(size, arr) {
  let seen = {};
  let duplicates = [];
  
  for (let i = 0; i < size; i++) {
    let num = arr[i];
    if (seen[num]) {
      duplicates.push(num);
    } else {
      seen[num] = true;
    }
  }
  
  return duplicates.join(" ");
}
```

