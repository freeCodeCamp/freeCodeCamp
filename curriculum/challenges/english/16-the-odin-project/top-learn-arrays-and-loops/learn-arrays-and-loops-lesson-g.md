---
id: 661e275a8602567c118451d7
title: Learn Arrays and Loops Lesson G
challengeType: 15
dashedName: learn-arrays-and-loops-lesson-g
---
# --description--

Now that you know about the most common ways to iterate over values and arrays, there are a few more ways to iterate over arrays. Arrays have a built-in method called `map()`, which is used to create a new array by applying a function to each element of the original array. The `map()` method does not change the original array. The syntax of the `map()` method is as follows:

```javascript
const array = [1, 2, 3, 4, 5];

const newArray = array.map((arrayValue) => {
  return arrayValue * 2;
});

console.log(newArray); // Output: [2, 4, 6, 8, 10]
```

The `map()` method creates a new array by applying the function `(arrayValue) => { return arrayValue * 2;` to each element of the original array. This is particularly useful when you want to transform the elements of an array without changing the original array.

# --question--

## --text--

What will be the output of the following JavaScript code snippet?

```javascript
const numbers = [1, 2, 3, 4, 5];
const newNumbers = numbers.map((number) => {
  return number * 3;
});

console.log(newNumbers);
```

## --answers--

`[1, 2, 3, 4, 5]`

---

`[3, 6, 9, 12, 15]`

---

`[1, 3, 5, 7, 9]`

---

`[3, 6, 9, 12, 15, 18]`

## --video-solution--

2
