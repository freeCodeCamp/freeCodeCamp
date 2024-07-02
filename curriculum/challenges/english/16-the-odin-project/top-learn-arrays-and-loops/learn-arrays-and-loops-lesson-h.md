---
id: 661e275a8602567c118451d8
title: Learn Arrays and Loops Lesson H
challengeType: 15
dashedName: learn-arrays-and-loops-lesson-h
---
# --description--

One other useful array method is the `filter()` method. The `filter()` method creates a new array with all elements that pass the test implemented by the provided function. The syntax of the `filter()` method is as follows:

```javascript
const numbers = [2, 5, 6, 1, 9, -1]

const newNumbers = numbers.filter((number) => {
  return number > 2;
});

console.log(newNumbers); // Output: [5, 6, 9]
```

The `filter()` method creates a new array with all elements that are greater than 2. The `filter()` method does not change the original array.

# --question--

## --text--

What will be the output of the following JavaScript code snippet?

```javascript
const strings = ['apple', 'banana', 'cherry', 'orange', 'kiwi', 'mango'];
const newStrings = strings.filter((string) => {
  return string.length > 5;
});

console.log(newStrings);
```

## --answers--

`['apple', 'banana', 'cherry', 'orange', 'kiwi', 'mango']`

---

`['apple', 'banana', 'cherry', 'orange', 'kiwi']`

---

`['banana, 'cherry', 'orange']`

---

`['apple', 'banana', 'cherry', 'orange', 'kiwi']`


## --video-solution--

3
