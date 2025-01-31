---
id: 66edd4f31ff19bf5573bf64b
title: JavaScript Functional Programming Quiz
challengeType: 8
dashedName: quiz-javascript-functional-programming
---

# --description--

To pass the quiz, you must correctly answer at least 9 of the 10 questions below.

# --quizzes--

## --quiz--

### --question--

#### --text--

What is a pure function?

#### --distractors--

A function that modifies global variables and returns either `undefined` or `null`.

---

A function that logs an output to the console.

---

A function that changes its behavior based on external factors and returns `null`.

#### --answer--

A function that always returns the same output for the same input and produces no side effects.

### --question--

#### --text--

What is a side effect in functional programming?

#### --distractors--

An unexpected `TypeError` in your code.

---

A function that takes too long to execute and crashes the program.

---

A recursive function call that produces an infinite loop and crashes the program.

#### --answer--

A change to the state of the program that are observable outside the function.

### --question--

#### --text--

What is currying in functional programming?

#### --distractors--

A technique for designing tests to help you ensure your code is 100% error free.

---

A more optimized way to write recursive functions so they run twice as fast as other functions.

---

The process of building, designing and testing your code to ensure that it meets the standards laid out by ECMAScript.

#### --answer--

The process of transforming a function with multiple arguments into a sequence of functions, each with a single argument.

### --question--

#### --text--

What will be the output for the following pure function?

```js
const add = (a, b) => a + b;
console.log(add(2, 5));
```

#### --distractors--

`3`

---

`4`

---

`undefined`

#### --answer--

`7`

### --question--

#### --text--

Which of the following is an example of currying?

#### --distractors--

```js
const curriedAverage = (a, b, c) => a + b + c / 3
```

---

```js
const curriedAverage = (a, b, c) => a + b + c
```

---

```js
function curriedAverage(a) {
  return a 
}

function curried(c) {
  return c
}
```

#### --answer--

```js
function curriedAverage(a) {
  return function(b) {
    return function(c) {
      return (a + b + c) / 3;
    };
  };
}
```

### --question--

#### --text--

Which of the following is a key principle of functional programming?

#### --distractors--

Modifying global variables frequently.

---

Using mutable data structures extensively.

---

Emphasizing object-oriented inheritance.

#### --answer--

Avoiding side effects and using immutable data.

### --question--

#### --text--

What is an impure function?

#### --distractors--

A function that returns an object.

---

A function without side effects.

---

A function that returns `null`

#### --answer--

A function with side effects.

### --question--

#### --text--

Which of the following is the correct way to call a curried function?

#### --distractors--

```js
curriedAverage(2 3 4);
```

---

```js
curriedAverage(2)==(3)==(4);
```

---

```js
curriedAverage(2)=>(3)=>(4);
```

#### --answer--

```js
curriedAverage(2)(3)(4);
```


### --question--

#### --text--

Which of the following is an example of an impure function?

#### --distractors--

```js
function example(num) {
  return num;
}
```

---

```js
function sum(num1, num2) {
 return num1 + num2
}
```

---

```js
function addToTotal(value) {
  let total = 0;
  total += value;
  return total;
}
```

#### --answer--

```js
let total = 0;
function addToTotal(value) {
  total += value;
  return total;
}
```

### --question--

#### --text--

Which of the following is NOT an example of a side effect?

#### --distractors--

Writing to a file.

---

Modifying a global variable. 

---

Making an API call.

#### --answer--

Returning the sum of two values.



