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

## 3. do...while Loop

The `do...while` loop is similar to the `while` loop, but it always executes the block of code at least once before checking the condition.

Example:

```javascript
let i = 0;
do {
  console.log(i);
  i++;
} while (i < 5);
```

This loop will also log the numbers 0 to 4 to the console.

## 4. for...in Loop

The `for...in` loop iterates over the enumerable properties of an object, in arbitrary order.

Example:

```javascript
const person = { name: 'John', age: 30 };

for (let key in person) {
  console.log(key, person[key]);
}
```

This loop will log the keys (`name`, `age`) and their corresponding values to the console.

## 5. for...of Loop

The `for...of` loop iterates over iterable objects (arrays, strings, etc.) and provides a concise syntax for iterating.

Example:

```javascript
const fruits = ['apple', 'banana', 'cherry'];

for (let fruit of fruits) {
  console.log(fruit);
}
```

This loop will log each fruit in the `fruits` array to the console.

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

## 3. do...while Loop

`do...while` loop `while` loop ki tarah hota hai, lekin yeh hamesha block of code ko ek baar execute karta hai condition ko check karne se pehle.

Udaharan:

```javascript
let i = 0;
do {
  console.log(i);
  i++;
} while (i < 5);
```

Yeh loop bhi console mein numbers 0 se lekar 4 tak ko log karega.

## 4. for...in Loop

`for...in` loop ek object ke enumerable properties par iterate karta hai, arbitrary order mein.

Udaharan:

```javascript
const person = { name: 'John', age: 30 };

for (let key in person) {
  console.log(key, person[key]);
}
```

Yeh loop keys (`name`, `age`) aur unke corresponding values ko console mein log karega.

## 5. for...of Loop

`for...of` loop iterable objects (arrays, strings, etc.) par iterate karta hai aur iterating ke liye ek concise syntax pradan karta hai.

Udaharan:

```javascript
const fruits = ['apple', 'banana', 'cherry'];

for (let fruit of fruits) {
  console.log(fruit);
}
```

Yeh loop `fruits` array mein har fruit ko console mein log karega.

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
