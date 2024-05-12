---
id: 663385f778c882f0a886c6ea
title: Find Greater of Two Numbers
challengeType: 1
dashedName: find-greator-of-two-numbers
---

# --description--

Objective:  Write JavaScript code to compare two numbers and identify the larger one.

Introduction: Comparing numbers is essential in programming. This challenge will teach you how to find the bigger number entered by the user using JavaScript.

Challenge : This challenge will test your JavaScript skills! Write a program that asks the user for two numbers. Then, use conditional statements to figure out which number is bigger.

Functions can accept multiple parameters. You pass arguments to a function call, and the values you provide are referred to as arguments. Multiple parameters are separated by a comma.
For example, this function takes two numbers as parameters and add them.

<h2>Hinglish</h2>

Lakshya: JavaScript code likho jisme do numbers ko tulna karo aur bada number pehchaano.

Prastavana: Numbers ki tulna programming mein mahatvapurn hai. Yeh challenge aapko sikhayega ki JavaScript ka istemal karke user dwara diye gaye bade number ko kaise pata kiya jata hai.

Chunauti: Yeh challenge aapke JavaScript ke kshamataon ko parakhne wala hai! Ek program likho jo user se do numbers poochhe. Fir, conditional statements ka istemal karke pata karo ki kaun sa number bada hai.

Functions kayi parameters ko svikar kar sakti hain. Tum ek function call mein arguments ko pass karte ho, aur diye gaye values ko arguments kaha jata hai. Multiple parameters comma se alag kiye jaate hain.
Udaharan ke liye, yeh function do numbers ko parameters ke roop mein lekar unhe jodta hai.




```js
function findSum(number1, number2) {
	const sumOfNumbers = number1 + number2;
	return sumOfNumbers;
}
```


Click on this - <a href = "https://cs50.ai/chat">Link</a> to Go to CS50 AI.
And use this prompt prompt __________
Prompt: How can we use different messages based on the comparison using conditional statements



# --hints--

`findGreaterNumber(20,3)` should return `20`

```js
assert(findGreaterNumber(20, 3)===20);
```

`findGreaterNumber(5,7)` should return `7`

```js
assert(findGreaterNumber(5, 7)===7);
```


# --seed--

## --seed-contents--

```js
function findGreaterNumber(number1, number2) {
    // Only change code below this line
    return ;
}
findGreaterNumber(5,7)

```

# --solutions--

```js
function findGreaterNumber(number1, number2) {
    if (number1 > number2) {
        return number1;
    } else if (number2 > number1) {
        return number2;
    } else {
        return "Both numbers are equal.";
    }
}


// Call the function to find the greater number
findGreaterNumber(20,3)
findGreaterNumber(5, 7);
```

