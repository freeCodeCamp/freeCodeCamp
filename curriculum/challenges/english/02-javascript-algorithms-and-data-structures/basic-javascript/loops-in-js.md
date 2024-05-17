---
id: 661a69e57f6c0c41f2128c3a
videoId: s9wW2PpJsmQ
title: Loops in JavaScript
challengeType: 11
dashedName: loops-in-js
---

# --description--


# Loops in JavaScript

In JavaScript, loops are used to execute a block of code repeatedly until a specified condition is met. There are several types of loops available in JavaScript:

## 1. for Loop

The `for` loop repeats a block of code a specified number of times. It consists of three optional expressions: initialization, condition, and final expression.

Example:

```javascript
for (let i = 0; i < 5; i++) {
  console.log(i);
}
```

This loop will log the numbers 0 to 4 to the console.

## 2. while Loop

The `while` loop repeats a block of code as long as a specified condition evaluates to true.

Example:

```javascript
let i = 0;
while (i < 5) {
  console.log(i);
  i++;
}
```

This loop will also log the numbers 0 to 4 to the console.

Loops are essential for iterating over arrays, processing data, and implementing various algorithms in JavaScript.

<h2>Hinglish</h2>

# JavaScript mein Loops

JavaScript mein, loops ka istemal ek block of code ko baar baar execute karne ke liye kiya jata hai jab tak ek nirdharit shart puri nahi hoti hai. JavaScript mein kai prakar ke loops uplabdh hain:

## 1. for Loop

`for` loop ek block of code ko ek nirdharit baar repeat karta hai. Isme teen optional expressions hote hain: initialization, condition, aur final expression.

Udaharan:

```javascript
for (let i = 0; i < 5; i++) {
  console.log(i);
}
```

Yeh loop console mein numbers 0 se lekar 4 tak ko log karega.

## 2. while Loop

`while` loop ek block of code ko tab tak repeat karta hai jab tak ek nirdharit shart true ho.

Udaharan:

```javascript
let i = 0;
while (i < 5) {
  console.log(i);
  i++;
}
```

Yeh loop bhi console mein numbers 0 se lekar 4 tak ko log karega.

Loops arrays par iterate karne, data ko process karne, aur JavaScript mein vibhinn algorithms ko implement karne ke liye avashyak hai.


# --question--

## --text--

Which is the correct example of a loop for printing from 1 to 20?

## --answers--

```js
let x = 1;
while (x<=20){
	console.log(x)
  x=x+1
}
```

---

```js
let x = 1;
while (x<20){
	console.log(x)
  x=x+1
}
```

---

```js
let x = 1;
while (x<20){
	console.log(x)
  x=x-1
}
```

---

```js
let x = 1;
while (x<=20){
	console.log(x)
  x=x-1
}
```

## --video-solution--

1
