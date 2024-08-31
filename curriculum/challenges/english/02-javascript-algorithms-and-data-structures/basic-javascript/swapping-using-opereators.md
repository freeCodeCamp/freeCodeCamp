---
id: 6612dad1c726f003e1d542b1
title: Swapping Variables using Operators
challengeType: 1
dashedName: swapping-using-opereators
---

# --description--

**Objective:** Swap two numbers without using an extra variable!

**Introduction:**

Want to swap two numbers in JavaScript without needing a temporary space? This challenge will test your understanding of arithmetic operators!

Challenge:

Write a program that prompts the user for two numbers. Then, swap the values of these two numbers without using a temporary variable. Finally, print the swapped values

<h2>Hinglish</h2>

**Objective:** Bina kisi extra variable ke do numbers ko swap karna hai!

**Introduction:**

JavaScript mein do numbers ko temporary space ke bina swap karna chahte hain? Ye challenge aapke arithmetic operators ke samajh ko test karega!

Challenge:

Ek program likhiye jo user se do numbers ke liye input le. Fir, in do numbers ke values ko bina kisi temporary variable ke swap kare. Aakhir mein, swapped values ko print kare.

# --instructions--

Swap the values of `a` and `b` without using a third variable.

**Hints** 

Click on this <a href = "https://cs50.ai/chat">Link</a> - to Go to CS50 AI. And use this prompt.

1. Prompt: Can you manipulate the variables with math to achieve the swap without a temporary one? 


# --hints--

`2,3` should return `3,2`

```js
assert(a,b===3,2);
```

# --seed--
## --seed-contents--

```js
let a=2;
let b=3;
//Only change code below this line


//Only change code above this line
console.log(a);
console.log(b);

```

# --solutions--

```js
let a= 2
let b= 3
a = a + b;
b = a - b;
a = a - b;
console.log(a);
console.log(b);
```
