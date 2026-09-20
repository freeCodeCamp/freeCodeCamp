---
id: 66edd10913f078e7669eca81
title: Debugging JavaScript Quiz
challengeType: 8
dashedName: quiz-debugging-javascript
---

# --description--

To pass the quiz, you must correctly answer at least 18 of the 20 questions below.

# --quizzes--

## --quiz--

### --question--

#### --text--

What type of error occurs when a variable is used before it is defined?

#### --distractors--

`SyntaxError`

---

`LogicalError`

---

`RangeError`

#### --answer--

`ReferenceError`

### --question--

#### --text--

Which JavaScript statement can be used to intentionally pause the execution of your code for debugging purposes?

#### --distractors--

`try...catch`

---

`console.log()`

---

`alert()`

#### --answer--

`debugger`

### --question--

#### --text--

Which console method can be used to display data as a table?

#### --distractors--

`console.log()`

---

`console.warn()`

---

`console.error()`

#### --answer--

`console.table()`

### --question--

#### --text--

How can you inspect network requests in Chrome developer tools?

#### --distractors--

By using the "Network Links" tab.

---

By using the "Console" tab.

---

By using the "Sources" tab.

#### --answer--

By using the "Network" tab.

### --question--

#### --text--

What is the correct syntax for using `try...catch` in JavaScript?

#### --distractors--

`try { ... } else { ... }`

---

`try { ... } stack(catch) { ... }`

---

`try { ... } error { ... }`

#### --answer--

`try { ... } catch(error) { ... }`

### --question--

#### --text--

Which of the following is an example of a `SyntaxError`?

#### --distractors--

Using a variable before it is declared.

---

Using a variable twice in the same scope.

---

Using a variable that is out of scope.

#### --answer--

Missing a comma between elements of an array.

### --question--

#### --text--

What is the purpose of breakpoints in JavaScript debugging?

#### --distractors--

Automatically correct code mistakes.

---

Prevent code from being executed.

---

Log messages to the console.

#### --answer--

Pause execution at a specific point.

### --question--

#### --text--

What happens when the `throw` statement is executed?

#### --distractors--

The program terminates immediately, ignoring all remaining code.

---

The throw statement logs an error to the console but does not stop execution.

---

It pauses code execution until resumed by disabling breakpoints.

#### --answer--

An exception is thrown and the `catch` block (if present) is executed.

### --question--

#### --text--

Which method would you use to inspect variables or expressions during debugging in developer tools?

#### --distractors--

`inspect()`

---

`trace()`

---

`console.error()`

#### --answer--

`console.log()`

### --question--

#### --text--

What type of error will occur when the following code is executed?

```js
function example() {
  console.log(a);
  let a = 5;
}

example();
```

#### --distractors--

`FunctionError`

---

`SyntaxError`

---

Stack overflow error

#### --answer--

`ReferenceError`

### --question--

#### --text--

Which tool is commonly used to step through code line by line during debugging?

#### --distractors--

`console.log()`

---

`alert()`

---

`throw` statement.

#### --answer--

Breakpoints in Developer Tools.

### --question--

#### --text--

What type of error occurs when attempting to access a property of `undefined`?

#### --distractors--

`SyntaxError`

---

`LogicalError`

---

`RangeError`

#### --answer--

`TypeError`

### --question--

#### --text--

What does the `finally` block do in a `try...catch` statement?

#### --distractors--

Only executes if there's an error.

---

Skips execution if `catch` is triggered.

---

Exits the code block immediately.

#### --answer--

Always executes, regardless of errors.

### --question--

#### --text--

What would be the result of running the following code?

```js
const arr = [];
arr.length = -1; 
```

#### --distractors--

The code will throw a `SyntaxError`.

---

The code will log an empty array to the console.

---

The code will throw an out of memory error.

#### --answer--

The code will throw a `RangeError`.

### --question--

#### --text--

Which of the following answers is true about the `debugger` statement in JavaScript?

#### --distractors--

The `debugger` statement is always ignored by the browser.

---

The `debugger` statement sends an error report to the server.

---

The `debugger` statement always reloads the page and clears the console.

#### --answer--

The `debugger` statement is ignored when the developer tools are not open.

### --question--

#### --text--

What is the primary purpose of "profiling" in JavaScript?

#### --distractors--

To write unit tests for JavaScript functions and create profiles of code execution.

---

To pause code execution and release the captured resources like memory and CPU.

---

To convert JavaScript code into machine code for faster execution.

#### --answer--

To identify performance bottlenecks by recording CPU usage, function calls, and execution time.

### --question--

#### --text--

What is a "watcher" in the context of debugging?

#### --distractors--

A tool for pausing code execution.

---

A built-in function for logging errors.

---

A JavaScript method for handling exceptions.

#### --answer--

A tool for monitoring the value of variables.

### --question--

#### --text--

When should you use `console.error()` instead of `console.log()`?

#### --distractors--

To display table data.

---

To log messages only during debugging.

---

To log information about the browser.

#### --answer--

To log error messages.

### --question--

#### --text--

What does the `Error()` constructor do in JavaScript?

#### --distractors--

Logs error messages to the console.

---

Runs code in a sandbox.

---

Terminates the program.

#### --answer--

Creates a new error object that can be thrown.

### --question--

#### --text--

What is the purpose of the `console.dir()` method in JavaScript?

#### --distractors--

To create a separate directory for log files for individual error type.

---

To generate a visual representation of the console output and save it in a pdf file.

---

To stop the program execution and display an error message related to memory and CPU usage.

#### --answer--

To output a hierarchical, interactive list of properties for a specified JavaScript object.

