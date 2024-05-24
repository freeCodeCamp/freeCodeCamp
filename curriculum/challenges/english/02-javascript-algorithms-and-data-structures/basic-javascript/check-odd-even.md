---
id: 661bb3ac21bbd0556144beb2
title: Check Odd or Even
challengeType: 1
dashedName: check-odd-even
---


# --description--

Learn how to check if a number is even or odd using JavaScript.

In programming, we often need to know if a number is even or odd. This challenge will teach you how to write JavaScript code to do that!

<h2>Hinglish</h2>

JavaScript me odd ya even check karna sikhen.

Programming mein, humko aksar yeh jaanne ki zaroorat hoti hai ki koi number even hai ya odd. Yeh challenge aapko yeh sikhayega ki kaise JavaScript code likha jaye jo yeh kaam kare!

# --instructions--

Ask for a number, and check if it is "Even" or "Odd" accordingly.

Create a variable named `result` to store the value.

**Hints**

Click on this <a href = "https://cs50.ai/chat">Link</a> - to Go to CS50 AI. And use this prompt.

1. Prompt: What mathematical operation can help us identify even or odd?

# --hints--

You should use console.log() statements to print the `result`.

```js
assert(code.includes('console.log'), "Code does not contain 'console.log'");
```

You should create a variable `result`.

```js
assert(/result/.test(code), "Variable 'result' is not present");
```

`result` should return `"Even"`.

```js
assert(result==="Even");
```

# --seed--
## --seed-contents--

```js
var number=32;
var result;
//  Only change code below this line

```

# --solutions--

```js
var number=32
var result;
if (number % 2 === 0) {
    result= "Even";
} else {
    result= "Odd";
}

```
