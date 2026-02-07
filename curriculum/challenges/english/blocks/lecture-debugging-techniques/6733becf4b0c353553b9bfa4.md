---
id: 6733becf4b0c353553b9bfa4
title: How Does the Debugger Statement Work?
challengeType: 19
dashedName: how-does-the-debugger-statement-work
---

# --description--

The `debugger` statement is a powerful JavaScript tool that lets you pause your code at a specific line to investigate what's going on in the program. When used correctly, the `debugger` statement can save you a lot of time trying to figure out why something is not working as it should.

JavaScript executes your code from top to bottom. While JavaScript executes your code and hits a `debugger` statement, it immediately pauses execution at that line. This gives you the chance to inspect variables, check functions, and the flow of the code in general.

With that, you can see exactly what is going right or wrong. However, this only happens if your browser's developer tools are open. Otherwise, the `debugger` statement is ignored, and the code continues to run as usual.

In addition, when you use the `debugger` statement, modern browsers will pause code execution at the specified line. They also allow you to resume execution by clicking the play button, but the page itself does not automatically reload unless manually triggered.

To use the `debugger` statement, place it at the line in which you want the code execution to pause. Here's an example:

```js
let firstNumber = 5;
let secondNumber = 10;
debugger; // Code execution pauses here
let sum = firstNumber + secondNumber;
console.log(sum);
```

With this example, if you don't have the console open before the code runs and you eventually open it, you'll see `15` in there. While the console is open and you reload the page, the execution is paused for you so you can inspect the code. 

Here's a more complex example:

```js
function calculateTotalPrice(price, discountPercentage) {
 debugger
 let discountAmount = (price * discountPercentage) / 100
 let totalPrice = price - discountAmount

 console.log(`Original Price: ${price}`)
 console.log(`Discount Amount: ${discountAmount}`)
 console.log(`Total Price after Discount: ${totalPrice}`)

 return totalPrice
}

let price = 100
let discount = 15

let finalPrice = calculateTotalPrice(price, discount)
console.log(`Final Price: ${finalPrice}`);
```

In this example the `debugger` statement is placed at the top of the `calculateTotalPrice`. When the function is called, the function execution will be paused.

If you reload the page with the console opened, you'll see that the page keeps reloading, confirming that the execution of the code is only paused, not stopped. If you want the execution to continue, you can click the play button.

As you continue to build out your JavaScript programs, test out the `debugger` statement in your code to see how it can help you better understand the flow of execution, inspect variables in real-time, and quickly identify where things might be going wrong.

# --questions--

## --text--

What is the `debugger` used for?

## --answers--

Fixing and debugging code.

### --feedback--

Think about how you can inspect code and quickly identify where things might be going wrong.

---

Highlighting code with incorrect syntax.

### --feedback--

Think about how you can inspect code and quickly identify where things might be going wrong.

---

Pausing code execution.

---

Highlighting undeclared variables.

### --feedback--

Think about how you can inspect code and quickly identify where things might be going wrong.

## --video-solution--

3

## --text--

What additional behavior do modern browsers provide when encountering a `debugger` statement?

## --answers--

They automatically fix the error and continue execution.

### --feedback--

Think about how browsers handle pausing and resuming code.

---

They keep reloading the page and allow you to resume by clicking a play button.

---

They skip the `debugger` statement and continue execution.

### --feedback--

Think about how browsers handle pausing and resuming code.

---

They terminate the program entirely.

### --feedback--

Think about how browsers handle pausing and resuming code.

## --video-solution--

2

## --text--

What will be the output of the following code while the console is open?

```js
let firstNumber = 23;
let secondNumber = 4;
debugger;
let sum = firstNumber + secondNumber;
console.log(sum);
```

## --answers--

`27`

### --feedback--

Think about what the `debugger` statement is used for.

---

`sum`

### --feedback--

Think about what the `debugger` statement is used for.

---

The code execution pauses at the `debugger` statement.

---

A syntax error is thrown.

### --feedback--

Think about what the `debugger` statement is used for.

## --video-solution--

3
