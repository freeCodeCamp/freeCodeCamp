---
id: 661a70d9105d3745fb8289f3
title: Reverse Digits
challengeType: 1
dashedName: revrse-digits
---

# --description--

Objective: The objective of this challenge is to write a program that reverses the digits of a given number.

Introduction: Reversing the digits of a number is a common task in programming. This challenge focuses on writing a program that efficiently reverses the digits of a given integer.

Challenge: Write a program that takes an integer from the user as input and prints the number formed by reversing the digits of the input number.

<h2>Hinglish</h2>

Lakshya:
 Is challenge ka uddeshya hai ek program likhna jo ek diye gaye number ke digits ko ulta karde.

Prastavana:
 Number ke digits ko ulta karna programming mein ek aam task hai. Ye challenge us par dhyan kendrit karta hai ki ek diye gaye puraank ke digits ko kis tarah se prabhavshali tareeke se ulta kiya ja sake.

Chunauti: Ek program likho jo upyogakarta se ek puraank ko input ke roop mein lekar uski digits ko ulta karke banne wale number ko print karta hai.

**Examples:**

If the input number is `478`, the number formed by reversing the digits is `874`.

```js
reverseDigits(478) // Output: 874
```

# --instructions--

Write a JavaScript function called `reverseDigits` that takes a number as input and prints the number formed by `reversing` the digits of the given number.

**Prompt** 
Click on this - <a href = "https://cs50.ai/chat">Link</a> to Go to CS50 AI.
And use this prompt.

1. Prompt 1: Are there any particular optimizations or techniques you'd like to employ to enhance the efficiency of the program?</br>
2. Prompt 2: Would you like us to consider any special cases or edge scenarios in our implementation?

# --hints--

`reverseDigits` should be a function.

```js
assert(typeof reverseDigits === 'function');
```

Ensure that the digits of the input number are reversed correctly and returned as a number.


```js
assert(reverseDigits(123) === 321, 'Digits are not reversed correctly.');

```

# --seed--
## --seed-contents--

```js
function reverseDigits(number) {
   // Only change code below this line

   return
   // Only change code above this line
}

reverseDigits(123);

```

# --solutions--

```js
function reverseDigits(number) {
    let reversed = 0;
    while (number > 0) {
        reversed = reversed * 10 + number % 10;
        number = Math.floor(number / 10);
    }
    return reversed;
}
```

