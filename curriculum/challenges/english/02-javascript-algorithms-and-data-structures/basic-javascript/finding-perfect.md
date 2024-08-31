---
id: 661a72950a02b346c33e851f
title: Checking Perfect Numbers
challengeType: 1
dashedName: finding-perfect
---

# --description--

Objective: The objective of this challenge is to write a program that determines whether a given number is a perfect number or not.

Introduction: Perfect numbers are a special type of number where the sum of all its factors (excluding the number itself) is equal to the number itself. This challenge focuses on writing a program that efficiently identifies whether a given integer is a perfect number.

Challenge: Write a program that takes an integer from the user as input and determines whether the number is a perfect number or not. If the number is a perfect number, the program should output "Yes"; otherwise, it should output "No".

<h2>Hinglish</h2>

Lakshya: Iss challenge ka lakshya hai ek program likhna jo nirdharit kare ki ek di gayi sankhya ek poornank sankhya hai ya nahin.

Prastavana: Poornank sankhya voh vishesh prakar ki sankhya hain jahan uske sabhi bhajyapadon ka yog (sankhya ko chhodkar) sankhya ke samaan hota hai. Ye challenge us par dhyan kendrit karta hai ki ek diye gaye puraank ko kis tarah se prabhavshali tareeke se pahchane ki vah ek poornank sankhya hai ya nahin.

Chunauti: Ek program likho jo upyogakarta se ek puraank ko input ke roop mein lekar nirdharit kare ki sankhya ek poornank sankhya hai ya nahin. Agar sankhya ek poornank sankhya hai, toh program "Haan" ko prastut kare; anyatha, "Nahin" ko prastut kare.


**Examples:**

If the input number is `6`, it is a perfect number, so the output should be `Yes`.

```js
perfectNumberCheck(6) // Output: Yes
```

# --instructions--

Write a JavaScript function called `perfectNumberCheck` that takes a number as input and prints "Yes" if it's a perfect number and "No" otherwise.

1. Take a variable called sum.
2. Iterate a loop.
3. Check the condition to see if the number is perfect.
4. If the condition is true, count it as the sum variable.

**Prompts**
Click on this - <a href = "https://cs50.ai/chat">Link</a> to Go to CS50 AI.
And use this prompt.

1. Prompt 1: Could you describe your approach for checking if a number is a perfect number?
2. Prompt 2: Would you like us to consider any special cases or edge scenarios in our implementation?

# --hints--

`perfectNumberCheck(6)` should output `Yes`.

```js
assert(perfectNumberCheck(6) === "Yes");
```

`perfectNumberCheck(12)` should output `No`.


```js
assert(perfectNumberCheck(12) === "No");

```

`perfectNumberCheck(28)` should output `Yes`.

```js
assert(perfectNumberCheck(28) === "Yes");
```

Ensure that you accurately determine whether the number is perfect or not.

```js
assert(!code.match(/\/\//));

```

# --seed--
## --seed-contents--

```js
function perfectNumberCheck(number) {
   // Only change code below this line

  return
   // Only change code above this line
}

perfectNumberCheck(6);

perfectNumberCheck(12);
```

# --solutions--

```js
function perfectNumberCheck(number) {
   let sum = 0;
   for (let i = 1; i < number; i++) {
       if (number % i === 0) {
           sum += i;
       }
   }
   return(sum === number ? "Yes" : "No");
}
```

