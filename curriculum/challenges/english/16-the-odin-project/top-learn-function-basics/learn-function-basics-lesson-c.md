---
id: 6617aee05b87c334e7ae8014
title: Learn Function Basics Lesson C
challengeType: 15
dashedName: learn-function-basics-lesson-c
---

# --description--

A variable declared inside a function is only visible inside a function. This is called the scope of the variable, this particular scope is called the local scope. Variables declared outside of a function are called global variables and are visible throughout the program. For example, the following code will raise an error:

```js
function myFunction() {
  let x = 10;
}

console.log(x);
```

The variable `x` is declared inside the function `myFunction` and is not visible outside of the function. The code will raise a `ReferenceError` because `x` is not defined.

If you declare a variable outside of a function, it is called a global variable and is visible throughout the program. For example, the following code will work:

```js
let x = 10;

function myFunction() {
  console.log(x);
}

myFunction();
```

If a same-named variable is declared inside the function then it shadows the outer one.

# --question--

## --text--

What will be the output of the following code?

```js
let x = 10;

function myFunction() {
  let x = 20;
  console.log(x);
}
```

## --answers--

10

---

20


## --video-solution--

2
