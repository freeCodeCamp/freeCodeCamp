---
id: 66edc3ab8c6413c344f401bf
title: JavaScript Math Quiz
challengeType: 8
dashedName: quiz-javascript-math
---

# --description--

To pass the quiz, you must correctly answer at least 18 of the 20 questions below.

# --quizzes--

## --quiz--

### --question--

#### --text--

What does `NaN` stand for?

#### --distractors--

`Numeric and Number`

---

`Not a Null`

---

`Null and Number`

#### --answer--

`Not a Number`

### --question--

#### --text--

Which of the following is NOT an arithmetic operator in JavaScript?

#### --distractors--

`*`

---

`+`

---

`-`

#### --answer--

`??`

### --question--

#### --text--

What happens if you try to divide by zero in JavaScript?

#### --distractors--

JavaScript will output 0.

---

Nothing will happen.

---

JavaScript will throw an error.

#### --answer--

JavaScript will output `Infinity`

### --question--

#### --text--

Which of the following is the correct use of the exponentiation operator?

#### --distractors--

`2*3`

---

`2#3`

---

`2%3`

#### --answer--

`2**3`

### --question--

#### --text--

Which operator should you use when decrementing a variable in JavaScript?

#### --distractors--

`++`

---

`//`

---

`**`

#### --answer--

`--`

### --question--

#### --text--

Which of the following is NOT a bitwise operator?

#### --distractors--

`&`

---

`|`

---

`^`

#### --answer--

`>`

### --question--

#### --text--

Which of the following is the correct compound operator for getting the remainder?

#### --distractors--

`//=`

---

`\=`

---

`%%=`

#### --answer--

`%=`

### --question--

#### --text--

What is the difference between the `==` and `===` operators?

#### --distractors--

There is no difference. The comparison result will always have the same result.

---

The `==` operator is used to check if the data type is the same while the `===` is used to check if the value is equal.

---

The `==` operator can only be used with primitive types while the `===` operator is only used for objects.

#### --answer--

The `==` operator only compares values whereas the `===` operator compares values and types.

### --question--

#### --text--

What is the unary plus operator (`+`) used for?

#### --distractors--

It is used to decrement a value by one.

---

It is used to get the remainder from an operation.

---

It is used to invert the binary representation of a number.

#### --answer--

It is used to convert its operand into a number.

### --question--

#### --text--

Which of the following `Math` methods rounds a value to the nearest whole integer?

#### --distractors--

`Math.trunc()`

---

`Math.max()`

---

`Math.min()`

#### --answer--

`Math.round()`

### --question--

#### --text--

What does the `Math.sqrt()` method do?

#### --distractors--

This method returns a random floating point number.

---

This method returns the absolute value for a number.

---

This method returns the cube of a number.

#### --answer--

This method returns the square root of a number.

### --question--

#### --text--

Which of the following is NOT a valid method for the `Math` object?

#### --distractors--

`Math.ceil()`

---

`Math.pow()`

---

`Math.abs()`

#### --answer--

`Math.extend()`

### --question--

#### --text--

Which of the following will return `false`?

#### --distractors--

`isNaN("Matt")`

---

`isNaN()`

---

`isNaN(undefined)`

#### --answer--

`isNaN(7)`

### --question--

#### --text--

What does the `parseFloat()` method do?

#### --distractors--

It parses a string argument and performs a bitwise operation on it.

---

It parses a string argument and returns `false`.

---

It parses a string argument and returns an integer.

#### --answer--

It parses a string argument and returns a floating-point number.

### --question--

#### --text--

What will be logged to the console?

```js
let num = 5;
console.log(++num);
```

#### --distractors--

`error`

---

`null`

---

`5`

#### --answer--

`6`

### --question--

#### --text--

What would be the output for the following code?

```js
console.log(5 == '5');
```

#### --distractors--

`undefined`

---

`false`

---

`null`

#### --answer--

`true`

### --question--

#### --text--

What is operator precedence?

#### --distractors--

Operator precedence is used to check if the value on the left is less than the one on the right.

---

Operator precedence is used to raise a variable to the power of the specified number and reassigns the result to the variable.

---

Operator precedence is used to increase the value by one.

#### --answer--

Operator precedence determines the order in which operations are evaluated in an expression.

### --question--

#### --text--

Which of the following is NOT a comparison operator?

#### --distractors--

`>`

---

`>=`

---

`<`

#### --answer--

`!>`

### --question--

#### --text--

What does the unary negation operator (`-`) do?

#### --distractors--

It flips the boolean value of its operand.

---

It decreases the value by one.

---

It increases the value by one.

#### --answer--

It negates the operand.

### --question--

#### --text--

Which of the following is an example of using the nullish coalescing operator?

#### --distractors--

```js
const userSettings = {
 theme: null,
 volume: 0,
 notifications: false,
};

userSettings.theme () 'light';
```

---

```js
const userSettings = {
 theme: null,
 volume: 0,
 notifications: false,
};

userSettings.theme ** 'light';
```

---

```js
const userSettings = {
 theme: null,
 volume: 0,
 notifications: false,
};

userSettings.theme \\ 'light';
```

#### --answer--

```js
const userSettings = {
 theme: null,
 volume: 0,
 notifications: false,
};

userSettings.theme ?? 'light';
```

