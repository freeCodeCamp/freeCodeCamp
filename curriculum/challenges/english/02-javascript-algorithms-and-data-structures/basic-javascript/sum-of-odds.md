---
id: 661a6e055483ba4385d58e4d
title: Sum of Odd Numbers
challengeType: 1
dashedName: sum-of-odds
---

# --description--

**Objective:** 

The objective of this challenge is to write a program that calculates the sum of all odd numbers up to a specified input value.

**Introduction:** 

Embark on an adventurous quest to uncover the secrets of numbers! Today's mission leads you to the intriguing realm of odd numbers. Odd numbers, unlike their even counterparts, leave a remainder of 1 when divided by 2. Your task is to calculate the sum of all odd numbers up to a chosen value.

**Challenge:** 

Write a program that takes an integer N from the user as input and prints the sum of all odd numbers from 1 up to N.

**Examples:**
If the input number is `20`, the sum of odd numbers up to `20` is `100`.

```js
sumOfOddNumbers(20) 
Output: 100
```

<h2>Hinglish</h2>
**Lakshya:**

Diye gaye input moolya tak sabhi visham sankhyaon ka yog ganana karna.

**Parichay:**

Sankhyon ke raaz ko khulne ki koshish mein kadam rakho! Aaj ka mission tumhe vishesh sankhyon ke romanchak kshetra mein le jata hai. Vishesh sankhyayen, apne samanta saathiyo ke vipreet, jab 2 se vibhaajit kiya jata hai to ek shesh bachata hai. Tumhara karya hai ek chuninda moolya tak sabhi visham sankhyon ka yog ganana karna.

**Challenge:**

Ek program likho jo ek puri sankhya N ko upayogakarta se input ke roop mein leta hai aur 1 se lekar N tak ke sabhi visham sankhyon ka yog print karta hai.

**Examples:**

Agar input number `20` hai, toh phle `20` odd numbers ka sum `100` hota hai.

```js
sumOfOddNumbers(20) 
Output: 100
```


# --instructions--
Write a JavaScript function called `sumOfOddNumbers` that takes a number `N` as an argument and prints the sum of all the odd numbers up to `N`.
Click on this <a href= "https://cs50.ai/chat">Link</a> to Go to CS50 AI.
And use this prompt.

1. Are there any unique considerations related to the range or calculation of odd numbers that we should be aware of?

# --hints--
`sumOfOddNumbers` should be `a` function.

```js
assert(typeof sumOfOddNumbers === 'function');
```

You should use the modulus operator `%` to check for odd numbers.

```js
assert(code.match(/%/));
```

# --seed--
## --seed-contents--

```js
function sumOfOddNumbers(N) {
   // Only change code below this line
   
   
   
   // Only change code above this line
}
sumOfOddNumbers(20);
```

# --solutions--

```js
function sumOfOddNumbers(N) {
   let sum = 0;
   for (let i = 1; i <= N; i++) {
       if (i % 2 !== 0) {
           sum += i;
       }
   }
   console.log(sum);
}
```

