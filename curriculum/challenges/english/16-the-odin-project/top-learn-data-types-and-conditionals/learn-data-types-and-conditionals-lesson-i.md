---
id: 65e97280484dd50f720e6fee
title: Learn Data Types and Conditionals Question I
challengeType: 15
dashedName: learn-data-types-and-conditionals-question-i
---
# --description--

In the last example, you had two choices `if` or `else`. But what if you want to have more than two choices? You can use the `else if` statement to add more conditions to our code. The `else if` statement allows us to check multiple conditions and execute a block of code when the first condition is true. If the first condition is false, it will check the next condition and so on. If none of the conditions are true, the `else` block will be executed.

Here is an example of the `else if` statement:

```javascript
let x = 5;

if (x > 10) {
  console.log("x is greater than 10");
} else if (x > 5) {
  console.log("x is greater than 5");
} else {
  console.log("x is less than or equal to 5");
}
```

In this example, the `x` variable is compared to the number `10` using the `>` operator. If `x` is greater than `10`, the first block of code will be executed. Otherwise, the `else if` statement will check the next condition. If `x` is greater than `5`, the second block of code will be executed. Otherwise, the `else` block will be executed.

# --question--

## --text--

What will be the output of the following code?

```javascript
let x = 4;

if (x > 10) {
  console.log("x is greater than 10");
} else if (x > 5) {
  console.log("x is greater than 5");
} else {
  console.log("x is less than or equal to 5");
}
```

## --answers--

`x is less than or equal to 5`

---

`x is greater than 5`

---

`x is greater than 10`

## --video-solution--

1
