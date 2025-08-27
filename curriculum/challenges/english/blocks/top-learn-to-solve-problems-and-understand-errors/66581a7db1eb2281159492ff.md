---
id: 66581a7db1eb2281159492ff
title: Learn to Solve Problems and Understand Errors Lesson F
challengeType: 15
dashedName: learn-to-solve-problems-and-understand-errors-lesson-f
---

# --description--

Another important part of an error is the stack trace. This helps you understand when the error was thrown in your application, and what functions were called that led up to the error. So, for example, if you have the following code:

```javascript
const a = 5;
const b = 10;

function add() {
  return c;
}

function print() {
  add();
}

print();
```

Our function `print()` should call on `add()`, which returns a variable named `c`, which currently has not been declared. The corresponding error is as follows:

<img src="https://cdn.statically.io/gh/TheOdinProject/curriculum/284f0cdc998be7e4751e29e8458323ad5d320303/foundations/javascript_basics/understanding_errors/imgs/01.png" width="100%" alt="An error showing with a stacktrace in the developer console">

The stack trace tells us that:

1. `c is not defined` in scope of `add()`, which is declared on line 5.
1. `add()` was called by `print()`, which was declared on line 9.
1. `print()` itself was called on line 12.

Thus the stack trace lets you trace the evolution of an error back to its origin, which here is the declaration of `add()`.

# --questions--

## --text--

How does the stack trace help in debugging the error in the provided JavaScript code?

## --answers--  

The stack trace shows that the function `add()` correctly returns the value of `c`.

---

The stack trace indicates which line in the code needs to be edited to correct a syntax error.

---

The stack trace provides a detailed path of function calls leading to the error, helping identify where `c` is incorrectly referenced.

---

The stack trace only indicates that `print()` was called, but does not provide details about the error in `add()`.

## --video-solution--

3
