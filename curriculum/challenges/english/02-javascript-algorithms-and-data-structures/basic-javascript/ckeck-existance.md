---
id: 661bc0e16083b65a7f3a3cb1
title: Check Existance of an Element in an Array
challengeType: 1
dashedName: ckeck-existance
---

# --description--

Objective: The objective of this challenge is to write a program that checks whether a target number is present in a given array.

Introduction: Searching for a specific number in an array is a common task in programming. This challenge focuses on writing a program that efficiently determines whether a target number exists in a given array.

Challenge: Write a program that takes the size of the array, the array elements, and the target number as input from the user, and checks whether the target number exists in the array or not. If the target number is found in the array, the program should output "Yes"; otherwise, it should output "No".

<h2>Hinglish</h2>

Lakshya: Iss challenge ka lakshya hai ek program likhna jo di gayi array mein kisi nishchit sankhya ka anveshan karta hai.

Prastavana: Kisi vishesh sankhya ko array mein khojna programming mein ek aam karya hai. Ye challenge us par dhyan kendrit karta hai ki ek diye gaye array mein ek lakshya sankhya maujood hai ya nahin, yeh kis tarah se prabhavshali tareeke se nirdharit kiya ja sake.

Chunauti: Ek program likho jo upyogakarta se array ki size, array ke tatvon, aur lakshya sankhya ko input ke roop mein le, aur yeh check kare ki lakshya sankhya array mein maujood hai ya nahin. Agar lakshya sankhya array mein mil jaati hai, toh program "Haan" ko prastut kare; anyatha, "Nahin" ko prastut kare.

**Examples:**

Given array `[1, 2, 3, 4, 5, 6, 7]` with a size of `7` and a target of `3`, the output should be:

```js
checkTargetExists(7, [1, 2, 3, 4, 5, 6, 7], 3); // Output: Yes
```

After calling the function, capture its output and compare it with the expected result to verify if the function is returning the correct value.

```js
const expectedOutput = 'Yes'; // Change this to the expected output
const actualOutput = checkTargetExists(7, [1, 2, 3, 4, 5, 6, 7], 3); // Call the function
assert(actualOutput === expectedOutput, `Expected output: ${expectedOutput}, but got: ${actualOutput}`);
```

# --instructions--

Write a JavaScript function called `checkTargetExists` that takes three parameters: `size` (size of the array), `arr` (the array itself), and `target` (the target number to check). The function should return 'Yes' if the target exists in the array, and 'No' otherwise.

**Prompts**
Click on this - <a href = "https://cs50.ai/chat">Link</a> to Go to CS50 AI.
And use this prompt.

1. Prompt 1:  Are there any particular programming concepts or algorithms you'd like to explore or learn for this challenge?</br>
2. Prompt 2: Could you describe your approach for checking whether a number is present in an array?

# --hints--

Use a loop to iterate through the array elements and check if the target exists in the array.


```js
assert(code.match(/for\s*\(/));

```

# --seed--
## --seed-contents--

```js
function checkTargetExists(size, arr, target) {
   // Only change code below this line

    return
   // Only change code above this line
}

checkTargetExists(7, [1, 2, 3, 4, 5, 6, 7], 3);
```

# --solutions--

```js
function checkTargetExists(size, arr, target) {
   for (let i = 0; i < size; i++) {
       if (arr[i] === target) {
           return 'Yes';
       }
   }
   return 'No';
}

```

