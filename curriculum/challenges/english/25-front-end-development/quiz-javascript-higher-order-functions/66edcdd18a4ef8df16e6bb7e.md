---
id: 66edcdd18a4ef8df16e6bb7e
title: JavaScript Higher Order Functions Quiz
challengeType: 8
dashedName: quiz-javascript-higher-order-functions
---

# --description--

Answer all of the questions below correctly to pass the quiz.

# --quizzes--

## --quiz--

### --question--

#### --text--

Consider the following statements about JavaScript higher-order functions. Which one presents a common misconception?

#### --distractors--

Higher-order functions can greatly enhance code readability and maintainability by enabling functional programming techniques.

---

Higher-order functions like map, filter, and reduce are powerful tools for array manipulation, but they are not unique to functional programming.

---

Higher-order functions may introduce complexity in understanding code, but they can also lead to more expressive and concise solutions.

#### --answer--

All functions in JavaScript, including those that do not take or return other functions, can be classified as higher-order functions.

### --question--

#### --text--

Which of the following statements about closures and higher-order functions is true?

#### --distractors--

Higher-order functions must always return a new function; otherwise, they are not considered higher-order.

---

Closures and higher-order functions are unrelated concepts in JavaScript.

---

Higher-order functions cannot create closures since they do not return inner functions.

#### --answer--

Closures created by higher-order functions can capture the lexical scope, allowing for state preservation.

### --question--

#### --text--

What is the result of this code?

```js
const numbers = [1, 1, 1, 1, 1];
let sum = 0;
const forEachRes = numbers.forEach(num => {
  return (sum += num);
});
const mapRes = numbers.map(num => {
  return (sum += num);
});
```

#### --distractors--

`forEachRes` is `undefined` and `mapRes` is `[1,2,3,4,5]`

---

`forEachRes` is `0` and `mapRes` is `[1,2,3,4,5]`

---

`forEachRes` is `5` and `mapRes` is `[1,2,3,4,5]`

#### --answer--

`forEachRes` is `undefined` and `mapRes` is `[6,7,8,9,10]`

### --question--

#### --text--

What is the result of this code?

```js
[, undefined, 'a', 'b', { 20: 5 }].sort();
```

#### --distractors--

Unsupported elements for an array to be sorted, hence error.

---

Callback not supplied, hence error.

---

```js
[empty, 'a', 'b', undefined, { '20': 5 }]
```

#### --answer--

```js
[{ '20': 5 }, 'a', 'b', undefined, empty]
```

### --question--

#### --text--

Which of the following describes a callback function in JavaScript?

#### --distractors--

A function that is called immediately upon declaration.

---

A function that is invoked with a specific context.

---

A function that returns another function.

#### --answer--

A function passed as an argument to another function, to be executed by that function's logic.

### --question--

#### --text--

What is the result of using `reduce()` on an array?

#### --distractors--

A boolean indicating whether any elements meet a condition.

---

An Array with all elements reduced by specified callback function.

---

An Array of booleans.

#### --answer--

It varies depending on the accumulator's initial value and the callback function.

### --question--

#### --text--

How does the `sort()` method behave if no comparison function is provided?

#### --distractors--

It sorts the array as strings based on UTF-16 code units, sorting `undefined`, empty slots, and object references to the beginning of the array.

---

It returns an error.

---

It sorts the array in reverse order.

#### --answer--

It sorts the array as strings based on UTF-16 code units. Objects are compared as the string `"[object Object]"`. Empty slots are moved to the end of the array.

### --question--

#### --text--

What is the purpose of the `some()` method in JavaScript?

#### --distractors--

To create a new array with the results of a function applied to each element.

---

To iterate through an array without producing a result.

---

To reduce an array to a single value based on a callback function.

#### --answer--

To determine if any elements in an array pass a specified test.

### --question--

#### --text--

Which of the following is a valid example of method chaining?

#### --distractors--

```js
Math.random();
```

---

```js
array.push(1).pop();
```

---

```js
console.log('Hello');
```

#### --answer--

```js
str.toLowerCase().trim().replace(' ', '_');
```

### --question--

#### --text--

What must a method return to allow for method chaining?

#### --distractors--

A primitive value.

---

A boolean value.

---

An array.

#### --answer--

The same object (`this`) or another object that has more methods.

### --question--

#### --text--

Which of the following benefits does method chaining provide?

#### --distractors--

It inherently optimizes performance by reducing the execution time of functions.

---

It eliminates the need for temporary variables, but may increase memory usage in some cases.

---

It allows for error handling and debugging to be more straightforward.

#### --answer--

It promotes simplified syntax and more readable code by allowing multiple operations in a single expression.

### --question--

#### --text--

In the context of method chaining, what is a fluent interface?

#### --distractors--

A way to handle errors in method calls.

---

A type of function that returns a promise.

---

A design pattern for asynchronous programming.

#### --answer--

A style that allows method chaining for more natural syntax.

### --question--

#### --text--

What is the impact of using `bind()` on a higher-order function in JavaScript?

#### --distractors--

`bind()` creates a new function with a specific `this` context, but does not change the function's parameters.

---

`bind()` can modify the original function's implementation.

---

`bind()` ensures the function is executed immediately with the specified context.

#### --answer--

`bind()` creates a new function with a specific `this` context, allowing the higher-order function to retain the intended context when called later.

### --question--

#### --text--

Which of the following methods supports method chaining?

#### --distractors--

```js
Array.prototype.concat();
```

---

```js
Array.prototype.map();
```

---

```js
Array.prototype.filter();
```

#### --answer--

All options mentioned.

### --question--

#### --text--

What will `[2, , 2].every((x) => x === 2)` return?

#### --distractors--

`false`, `every()` will not run its predicate on empty slots.

---

`undefined`

---

`null`

#### --answer--

`true`, `every()` will not run its predicate on empty slots.

### --question--

#### --text--

What does the following code demonstrate about the `.filter()` method in JavaScript?

```js
const originalArray = [{ id: 1 }, { id: 2 }, { id: 3 }];
const filteredArray = originalArray.filter(item => item.id > 1);
filteredArray[0].id = 4;

console.log(originalArray);
```

#### --distractors--

`originalArray` remains unchanged.

---

`originalArray` only retains the elements filtered out.

---

`originalArray` is completely different from `filteredArray`.

#### --answer--

`originalArray` reflects changes made to `filteredArray` due to shallow copying.

### --question--

#### --text--

What would be the output of the following code?

```js
const multiply = (a) => (b) => a * b;
const operations = [multiply(2), multiply(3)];
const result = operations.reduce((acc, fn) => fn(acc), 5);

console.log(result);
```

#### --distractors--

`10`

---

`100`

---

`20`

#### --answer--

`30`

### --question--

#### --text--

What is the purpose of the `initialValue` parameter in the `reduce()` method?

#### --distractors--

To set the length of the array.

---

To limit the number of iterations.

---

To specify the return type of the function.

#### --answer--

To define the starting value for the accumulator.

### --question--

#### --text--

What is the recommended practice when using the `map()` method instead of `forEach()`?

#### --distractors--

Always chain it with the `forEach()` method.

---

Always use it to modify existing objects.

---

Use it to delete elements from the array.

#### --answer--

Use it with pure functions, avoid it when using functions making side effects.

### --question--

#### --text--

What happens when `map()` is called on a sparse array?

#### --distractors--

It fills in the empty slots with null.

---

The callback function is called for every index, including empty slots.

---

The array is automatically compacted to remove empty slots.

#### --answer--

The returned array remains sparse, and the callback is not invoked for empty slots.

