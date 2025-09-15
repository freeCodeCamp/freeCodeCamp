---
id: 66edc47c11492ac5cf258ad9
title: JavaScript Comparisons and Conditionals Quiz
challengeType: 8
dashedName: quiz-javascript-comparisons-and-conditionals
---

# --description--

To pass the quiz, you must correctly answer at least 9 of the 10 questions below.

# --quizzes--

## --quiz--

### --question--

#### --text--

What's the result of the expression `undefined > 0`?

#### --distractors--

`true`

---

`undefined`

---

`null`

#### --answer--

`false`

### --question--

#### --text--

Which logical operation does `||` represent?

#### --distractors--

XOR

---

AND

---

NOT

#### --answer--

OR

### --question--

#### --text--

What's the output of the following code?

```js
console.log(5 === 2 + 3 || 4 == 2);
```

#### --distractors--

`undefined`

---

`false`

---

An error is raised.

#### --answer--

`true`

### --question--

#### --text--

What is a truthy and falsy value?

#### --distractors--

A value that's both `true` and `false`.

---

A value that changes depending on context.

---

A value that functions differently than `true` or `false` value.

#### --answer--

A value that is considered `true` or `false` when encountered in a Boolean context.

### --question--

#### --text--

What's logged to the console from the code below?

```js
if (1) {
  console.log("True!");
}
```

#### --distractors--

`false`

---

Nothing gets printed to the console.

---

An error is raised.

#### --answer--

`True!`

### --question--

#### --text--

What's the difference between `undefined` and `null`?

#### --distractors--

`null` and `undefined` point to an out-of-range memory location and are inaccessible.

---

`null` is the implicit value assigned to variables and it can not be changed, while `undefined` is the explicit value assigned to variables.

---

`null` is a global property, `undefined` is not.

#### --answer--

Variables without a value are `undefined`, while `null` represents an intentional absence of an object value.

### --question--

#### --text--

What happens when you don't include `break` while implementing a `switch` statement?

#### --distractors--

The `switch` statement will stop abruptly.

---

The `switch` statement will throw an error after previous statement.

---

The `switch` statement will exit after the first match.

#### --answer--

The code continues to evaluate the following `case` statements, even after finding a match.

### --question--

#### --text--

What is printed to the console from the code below?

```js
const a = 2;
if (1 == "1") {
  let b = 3;
  console.log(a + b);
}
console.log(b);
```

#### --distractors--

An error is raised.

---

```js
5
3
```

---

```js
5
undefined
```

#### --answer--

`5`, and then an error is raised.

### --question--

#### --text--

What will be the output of the following JavaScript code?

```js
let vehicle = "car";

switch (vehicle) {
  case "bike":
    console.log("Bikes are two-wheelers.");
    break;
  case "car":
    console.log("Some cars are 4x4.");
  case "truck":
    console.log("Trucks can carry heavy loads.");
    break;
  default:
    console.log("Unknown vehicle.");
}
```

#### --distractors--

```md
Some cars are 4x4.
```

---

```md
Some cars are 4x4.
Trucks can carry heavy loads.
Unknown vehicle.
```

---

```md
Unknown vehicle.
```

#### --answer--

```md
Some cars are 4x4.
Trucks can carry heavy loads.
```

### --question--

#### --text--

What is printed to the console with code below?  

```js
let x = 5;
if (x > 1 && x < 10) {
  console.log("x is between 1 and 10");
} else {
  console.log("x is not between 1 and 10");
}
```

#### --distractors--

An error is raised.

---

Nothing is printed.

---

`x is not between 1 and 10`

#### --answer--

`x is between 1 and 10`

