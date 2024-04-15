---
id: 661a69e57f6c0c41f2128c3a
videoId: s9wW2PpJsmQ
title: Loops in JavaScript
challengeType: 11
dashedName: loops-in-js
---

# --description--

Certainly! Here's the complete content in a single Markdown file:

```markdown
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
