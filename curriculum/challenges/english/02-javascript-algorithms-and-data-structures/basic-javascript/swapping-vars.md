---
id: 6612636b1d3630f8831f390e
title: Swapping of Variables
challengeType: 1
dashedName: swapping-vars
---

# --description--

Introduction:
if you have a pen in your right hand and a pencil in your left hand, swapping them would mean putting the pen in your left hand and the pencil in your right hand. Similarly, variables in JavaScript can hold a value temporarily while you swap it with another.


Challenge:
Write a program that asks the user for two numbers and then swaps their values. Use a temporary variable to hold one value while swapping the other. Finally, print the swapped values.

Click on this - <a href = "https://cs50.ai/chat">Link</a> to Go to CS50 AI. 
And use this prompt prompt __________

Prompt 1:  How can we store the two user-entered numbers in variables? 
Prompt 2:  How can the helper put the first number in its new place?
Prompt 3:  How can we swap the second number using the helper?

# --instructions--

Swapping of Variables instructions.

# --hints--

`Swap(20,10)` should return `{10,20}`

```js
assert(Swap(20,10)==={10,20});

```

`Swap(5,6)` should return `{6,5}`

```js
assert(Swap(5,6)==={6,5});
```

# --seed--

## --seed-contents--


```js
function Swap(a,b){
  //Only change code below this line

}
```

# --solutions--

```js
function Swap(a,b){
  return {b,a};
}

Swap(20,10);
Swap(5,6);

```
