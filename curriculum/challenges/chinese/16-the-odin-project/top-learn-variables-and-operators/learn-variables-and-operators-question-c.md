---
id: 65e1957a500d930ce8ed90a6
title: Learn Variables and Operators Question C
challengeType: 15
dashedName: learn-variables-and-operators-question-c
---
# --description--

To declare a constant (unchanging) variable, use `const` instead of `let`:

```javascript
const myBirthday = '16-09-2003';
```

Variables declared using `const` are called "constants". They cannot be reassigned. An attempt to do so would cause an error:

```javascript
const myBirthday = '16-09-2003';

myBirthday = '01-01-2001'; // error, can't reassign the constant!
```

When a programmer is sure that a variable will never change, they can declare it with `const` to guarantee and communicate that fact to everyone.

# --question--

## --text--

What is the result of attempting to reassign a `const` declared variable in JavaScript?

## --answers--

The reassignment succeeds with no errors.

---

An error is thrown because `const` declared variables cannot be reassigned.

---

JavaScript silently ignores the reassignment.

---

The variable type is automatically changed to `let`.


## --video-solution--

2
