---
id: 66edcccbba6dacdb65a59067
title: JavaScript Arrays Quiz
challengeType: 8
dashedName: quiz-javascript-arrays
---

# --description--

Answer all of the questions below correctly to pass the quiz.

# --quizzes--

## --quiz--

### --question--

#### --text--

What is the correct way to declare a JavaScript array?

#### --distractors--

`let arr = array(1, 2, 3);`

---

`let arr = "1, 2, 3"; `

---

`let arr = {1, 2, 3};`

#### --answer--

`let arr = [1, 2, 3];`

### --question--

#### --text--

What is the key difference between primitive and non-primitive data types?

#### --distractors--

Primitives can store multiple values.

---

Non-primitives cannot hold references to other objects.

---

Non-primitives store values directly.

#### --answer--

Primitives hold direct values, non-primitives hold references.

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

What will this code print to the console?

```js
const colors = ['red', 'blue', 'green', 'yellow'];
colors.splice(1, 2, 'purple');
console.log(colors);
```

#### --distractors--

`['red', 'purple', 'green', 'yellow']`

---

`['red', 'blue', 'yellow']`

---

`['red', 'blue', 'green', 'yellow']`

#### --answer--

`['red', 'purple', 'yellow']`

### --question--

#### --text--

What value will be assigned to the `slicedArr` variable?

```js
const arr = ['apple', 'banana', 'cherry', 'date'];
const slicedArr = arr.slice(1, 3);
console.log(slicedArr);
```

#### --distractors--

`['apple', 'banana']`

---

`['cherry', 'date']`

---

`['apple', 'cherry']`

#### --answer--

`['banana', 'cherry']`

### --question--

#### --text--

Which method returns the first index of a given element in an array?

#### --distractors--

`findIndex()`

---

`lastIndexOf()`

---

`slice()`

#### --answer--

`indexOf()`

### --question--

#### --text--

Which method removes the first element from an array and shifts all other elements down?

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

What does `Array.prototype.concat()` do?

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

What happens if you set an array's length to a value smaller than the current length?

#### --distractors--

It throws a syntax error.

---

The extra space is filled with `undefined`.

---

Nothing happens; the array remains the same size.

#### --answer--

The array gets truncated, removing elements beyond the new length.

### --question--

#### --text--

What will be the output of this code ?

```js
const fruits = ['apple', 'banana', 'cherry', 'apple', 'orange'];
const index = fruits.indexOf('apple');
if (index !== -1) {
    fruits.splice(index, 1);
}
console.log(fruits);
```

#### --distractors--

`['banana', 'cherry', 'orange']`

---

`['apple', 'cherry', 'apple', 'orange']`

---

`['banana', 'cherry', 'apple']`

#### --answer--

`['banana', 'cherry', 'apple', 'orange']`

### --question--

#### --text--

What is the final value of `result` in the following code?

```js
const arr1 = [1, 2];
const arr2 = [3, 4, 5];
const combined = arr1.concat(arr2);
const result = combined.includes(3);
console.log(result);
```

#### --distractors--

`false`

---

`[1, 2, 3, 4, 5]`

---

`undefined`

#### --answer--

`true`

### --question--

#### --text--

What does the following code output?

```js
const nums = [1, 2, 3, 4];
const doubled = nums.map(n => n * 2);
console.log(doubled.includes(8));
```

#### --distractors--

`false`

---

`[2, 4, 6, 8]`

---

`Error`

#### --answer--

`true`

### --question--

#### --text--

What is the output when using `splice()` to remove elements from a 2D array?

```js
let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];
matrix.splice(1, 1);
console.log(matrix);
```

#### --distractors--

`[[1, 2, 3], [4, 5, 6]]`

---

`[[1, 2], [4, 5], [7, 8]]`

---

`[[7, 8, 9]]`

#### --answer--

`[[1, 2, 3], [7, 8, 9]]`

### --question--

#### --text--

Which of the following statements about `.length` is correct?

#### --distractors--

It counts the number of values in a 2D array.

---

It returns `undefined` for empty arrays.

---

It gives the total number of elements in a 2D array.

#### --answer--

It counts the number of top-level elements in a 2D array.

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

What is the main difference between `push()` and `concat()` when working with arrays?

#### --distractors--

`push()` adds multiple arrays together, while `concat()` adds a single element.

---

`concat()` modifies the original array, while `push()` creates a new array.

---

Both `push()` and `concat()` are immutable methods.

#### --answer--

`push()` modifies the original array, while `concat()` creates a new array.

### --question--

#### --text--

How does the rest parameter `...rest` work in array destructuring in JavaScript?

#### --distractors--

It is used to add extra elements to the array.

---

It allows you to access elements outside the array's bounds.

---

It removes the last element of the array.

#### --answer--

It collects the remaining elements into a new array after the initial elements are assigned to variables.

### --question--

#### --text--

What will be the result of this code ?

```js
const numbers = [10, 20, 30];
numbers.push(40);
numbers.pop();
const length = numbers.length;
console.log(length);
```

#### --distractors--

2

---

5

---

4

#### --answer--

3

### --question--

#### --text--

Which method will return a new array without changing the original array?

#### --distractors--

`splice()`

---

`pop()`

---

`push()`

#### --answer--

`slice()`
