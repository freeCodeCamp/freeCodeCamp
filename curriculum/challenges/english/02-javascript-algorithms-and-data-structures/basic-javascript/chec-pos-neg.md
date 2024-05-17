---
id: 6612f0aa105bf609c2c8ba7b
title: Check if Positive or Negative
challengeType: 1
dashedName: chec-pos-neg
---

# --description--

Write a JavaScript code that efficiently determines a function is returning positive, negative, or zero. This skill is essential for various programming tasks involving numerical comparisons.

In programming, understanding a number's sign (positive, negative, or zero) is a fundamental concept. This challenge introduces you to conditional statements (like if statements) in Javascript.

In this JavaScript challenge, you'll build a program that checks a number you enter.  Will it be positive, negative, or zero? We'll use either if statements

# --instructions--

Click on this <a href = "https://cs50.ai/chat">Link</a>  to Go to CS50 AI 
And use this prompt prompt __________
Prompt: What does it mean to 'identify the number's sign' in this context?

<h2>Hinglish</h2>
Here is the text in Hinglish:

JavaScript mein ek code likho jo efficiently decide kare kiek function ki return value positive hai, negative hai, ya zero hai. Ye skill various programming tasks mein numerical comparisons ke liye essential hai.

Programming mein, ek number ka sign (positive, negative, ya zero) samajhna ek moolya concept hai. Ye challenge aapko conditional statements (jaise if statements) ke saath parichit karta hai.

Is JavaScript challenge mein, aap ek program banayenge jo aapke dwaara enter kiye gaye number ko check karega. Woh positive hoga, negative hoga, ya zero? Hum if statements ka istemal karenge.


Is <a href="https://cs50.ai/chat">link</a> par click karo CS50 AI mein jaane ke liye
Aur ye prompt use karo: "Identify the number's sign ka matlab is context mein kya hai?"

# --hints--

`checkNumber(6)` should return `Positive`

```js
assert(checkNumber(6)==="Positive")

```

`checkNumber(0)` should return `Zero`

```js
assert(checkNumber(0)==="Zero")

```

`checkNumber(-6)` should return `Negative`

```js
assert(checkNumber(-6)==="Negative")

```

# --seed--
## --seed-contents--

```js
function checkNumber(number) {
    //  Only change code below this line
}

```

# --solutions--

```js
function checkNumber(number) {
    if (number > 0) {
        return "Positive";
    } else if (number < 0) {
        return "Negative";
    } else {
        return "Zero";
    }
}
checkNumber(6)
checkNumber(-6)
checkNumber(0)
```
