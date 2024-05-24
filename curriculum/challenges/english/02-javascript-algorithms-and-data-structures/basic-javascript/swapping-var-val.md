---
id: 661a6798129b0c40e6cc6fed
title: Swapping Variable-values
challengeType: 1
dashedName: swapping-var-val
---

# --description--

If you have a pen in your right hand and a pencil in your left hand, swapping them would mean putting the pen in your left hand and the pencil in your right hand. Similarly, variables in JavaScript can hold a value temporarily while you swap it with another.

# --instructions--

Write a program that asks the user for two numbers and then swaps their values. Use a temporary variable to hold one value while swapping the other. Finally, print the swapped values.

<h2>Hinglish</h2>
Agar aapke right hand mein ek pen hai aur aapke left hand mein ek pencil hai, to unhe swap karna matlab hai pen ko apne left hand mein rakhna aur pencil ko apne right hand mein rakhna. Isi tarah, JavaScript mein variables ek value ko temporarily hold kar sakte hain jab aap use kisi aur value ke saath swap karte hain.

Ek program likhiye jo user se do numbers poochhe aur phir unki values ko swap kare. Ek temporary variable ka istemal karein ek value ko hold karne ke liye jab aap doosri value ke saath swap karte hain. Ant mein, swap ki gayi values ko print karein.

**Hints** 

Click on this <a href = "https://cs50.ai/chat">Link</a> -  to Go to CS50 AI. And use these prompts.

1. Prompt 1:  How can we store the two user-entered numbers in variables? 
2. Prompt 2:  How can the helper put the first number in its new place?
3. Prompt 3:  How can we swap the second number using the helper? 


# --hints--

Use a third variable named `temp`.

```js
assert(code.match(/temp\s*=/g));
```

After swapping, `a` and `b` should be  `99` and `45` respectively.

```js
assert(a===99 && b===45);
```

# --seed--

## --seed-contents--

```js

var a = 45;
var b = 99;
// Only change code below this line



 // Only change code above this line
console.log(a);
console.log(b);
```

# --solutions--

```js
var a = 12;
var b = 4;

var temp = a;
a = b;
b = temp;

console.log(value1);
console.log(value2);

``` 
