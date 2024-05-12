---
id: 661a70248a02a745810c70fa
title: Counting Digits
challengeType: 1
dashedName: finding-digits
---

# --description--

**Objective:** The objective of this challenge is to write a program that counts the number of digits in a given number.

**Introduction:** Counting the number of digits in a number is a fundamental task in programming. This challenge focuses on writing a program that efficiently determines the number of digits in a given integer.

**Challenge:** Write a program that takes an integer from the user as input and prints the number of digits in the given number.

<h2>Hinglish</h2>

Lakshya: Diye gaye number mein digits ki ginti karna.

Parichay: Ek number mein digits ki ginti karna programming mein moolbhoot karya hai. Yeh challenge ek aise program par dhyan kendrit karta hai jo diye gaye pure sankhya mein digits ki sankhya ko prabhavi tareeke se nirdharit karta hai.

Challenge: Ek program likho jo ek puri sankhya ko user se input ke roop mein leta hai aur di gayi sankhya mein digits ki sankhya ko print karta hai.

**Examples:**

If the input number is `7685`, the number of digits in the given number is `4`.

```js
countDigits(456) // Output: 3
```

# --instructions--

Write a JavaScript function called `countDigits` that takes a number as input and prints the number of digits in the given number.

use (`Math.abs()`) and `String` function


Click on this - <a href = "https://cs50.ai/chat">Link</a> to Go to CS50 AI.
And use this prompt.

1. Prompt: Would you like us to consider any special cases or edge scenarios in our implementation?

# --hints--

Ensure that you calculate the number of digits accurately without using a loop.


```js
assert(!code.match(/for\s*\(/));
```

`countDigits(456)` should return `3`.

```js
assert(countDigits(456)===3)
```

`countDigits(0)` should return `1`.

```js
assert(countDigits(0)===1)
```

`countDigits(987654321)` should return `9`.

```js
assert(countDigits(987654321)===9)
```

# --seed--
## --seed-contents--

```js
function countDigits(number) {
   // Only change code below this line


   // Only change code above this line
   return ;
}

countDigits(456);
```

# --solutions--

```js
function countDigits(number) {
   return String(Math.abs(number)).length;

}
```

