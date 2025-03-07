---
id: 66edcccbba6dacdb65a59067
title: JavaScript Arrays Quiz
challengeType: 8
dashedName: quiz-javascript-arrays
---

# --description--

To pass the quiz, you must correctly answer at least 18 of the 20 questions below.

# --quizzes--

## --quiz--

### --question--

#### --text--

What will be the output for the following code?

```js
const numbers = [1, 2, 3];
console.log(numbers[10]);
```

#### --distractors--

`[1, 2, 3]`

---

`null`

---

`10`

#### --answer--

`undefined`

### --question--

#### --text--

Which of the following is the correct way access the string `"Jessica"` from the `developers` array?

#### --distractors--

```js
const developers = ["Jessica", "Naomi", "Tom"];
developers[1]
```

---

```js
const developers = ["Jessica", "Naomi", "Tom"];
developers[2]
```

---

```js
const developers = ["Jessica", "Naomi", "Tom"];
developers[-1]
```

#### --answer--

```js
const developers = ["Jessica", "Naomi", "Tom"];
developers[0]
```

### --question--

#### --text--

What value will be assigned to the `index` variable?

```js
const numbers = [10, 20, 30, 40];
const index = numbers.indexOf(20);
console.log(index);
```

#### --distractors--

2

---

3

---

-1

#### --answer--

1

### --question--

#### --text--

What does the rest syntax do?

#### --distractors--

It is used to divide a string into an array of substrings.

---

It is used to add or remove elements from any position in an array.

---

It is used to add elements to the end of the array and will return the new length.

#### --answer--

It captures the remaining elements of an array into a new array.

### --question--

#### --text--

What is array destructuring?

#### --distractors--

It is used to concatenate all of the elements of an array into a single string.

---

It is used to check if an array contains a specific value.

---

It is used to remove the last element from an array and will return that removed element.

#### --answer--

It is used to extract values from arrays and assign them to variables in a more concise and readable way.

### --question--

#### --text--

What value will be assigned to the `arr2` variable?

```js
const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5];
console.log(arr2);
```

#### --distractors--

`[4, 5, 1, 2, 3]`

---

`[1, 2, [3, 4, 5]]`

---

`[1, 2, 3]`

#### --answer--

`[1, 2, 3, 4, 5]`

### --question--

#### --text--

What will this code log to the console?

```js
const colors = ["red", "blue", "green", "yellow"];
colors.splice(1, 2, "purple");
console.log(colors);
```

#### --distractors--

`["red", "blue", "green", "yellow"]`

---

`["red", "blue", "yellow"]`

---

`["red", "yellow"]`

#### --answer--

`["red", "purple", "yellow"]`

### --question--

#### --text--

What value will be assigned to the `slicedArr` variable?

```js
const arr = ["apple", "banana", "cherry", "date"];
const slicedArr = arr.slice(1, 3);
console.log(slicedArr);
```

#### --distractors--

`["apple", "banana"]`

---

`["cherry", "date"]`

---

`["apple", "cherry"]`

#### --answer--

`["banana", "cherry"]`

### --question--

#### --text--

Which method returns the first index of a given element in an array?

#### --distractors--

`firstIndex()`

---

`lastIndex()`

---

`searchIndex()`

#### --answer--

`indexOf()`

### --question--

#### --text--

Which method is used to remove the first element from an array and returns that removed element?

#### --distractors--

`pop()`

---

`slice()`

---

`splice()`

#### --answer--

`shift()`

### --question--

#### --text--

What does the `concat()` method do?

#### --distractors--

Joins array elements into a string.

---

Adds an element to the beginning of an array.

---

Removes an element from the array.

#### --answer--

Merges two arrays into a new array.

### --question--

#### --text--

What will be the output of this code?

```js
const fruits = ["apple", "banana", "cherry", "apple", "orange"];

fruits.splice(0, 1);

console.log(fruits);
```

#### --distractors--

`["apple", "banana", "cherry", "apple", "orange"]`

---

`["apple", "banana", "cherry"]`

---

`["cherry", 'apple']`

#### --answer--

`["banana", "cherry", "apple", "orange"]`

### --question--

#### --text--

What does the `includes()` method do?

#### --distractors--

It is used to divide a string into an array of substrings.

---

It is used to concatenate all of the elements of an array into a single string.

---

It is used to add or remove elements from any position in an array.

#### --answer--

It is used to check if an array contains a specific value.

### --question--

#### --text--

Which of the following methods is used to reverse an array in place?

#### --distractors--

`reversed()`

---

`reverseArr()`

---

`reversing()`

#### --answer--

`reverse()`

### --question--

#### --text--

What is a two dimensional array?

#### --distractors--

An array that only contains object literals.

---

An array of fixed length.

---

An array of floating point numbers.

#### --answer--

An array of arrays.

### --question--

#### --text--

Which of the following is true about the `indexOf()` method in arrays?

#### --distractors--

It always returns the last occurrence of the element.

---

It throws an error if the element is not found.

---

It requires the array to be sorted.

#### --answer--

It returns `-1` if the element is not found.

### --question--

#### --text--

Which of the following is NOT an array method?

#### --distractors--

`includes()`

---

`pop()`

---

`push()`

#### --answer--

`keys()`

### --question--

#### --text--

What will be the output for the following code?

```js
const arr = ["o", "l", "l", "e", "h"];
console.log(arr.join(""));
```

#### --distractors--

`["o", "l", "l", "e", "h"]`

---

`"hello"`

---

`undefined`

#### --answer--

`"olleh"`

### --question--

#### --text--

What will be the result of using the `shift()` method on an empty array?


#### --distractors--

`TypeError`

---

`[]`

---

`null`

#### --answer--

`undefined`

### --question--

#### --text--

Which method will return a new array without changing the original array?

#### --distractors--

`shift()`

---

`pop()`

---

`push()`

#### --answer--

`slice()`
