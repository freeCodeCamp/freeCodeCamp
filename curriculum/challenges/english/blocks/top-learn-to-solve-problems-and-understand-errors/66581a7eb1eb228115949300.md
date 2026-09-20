---
id: 66581a7eb1eb228115949300
title: Learn to Solve Problems and Understand Errors Lesson G
challengeType: 15
dashedName: learn-to-solve-problems-and-understand-errors-lesson-g
---

# --description--

Say you have two strings that you would like to combine to create one message, such as below:

```js
const str1 = "Hello";
const str2 = "World!";
const message = str1.push(str2);
```

<img src="https://cdn.statically.io/gh/TheOdinProject/curriculum/4ed59981b4ce2c60b5b83bf7415d3127b61821f5/foundations/javascript_basics/understanding_errors/imgs/03.png" style="width:100%" alt="an example of a type error in the Chrome developer console">

Here, you'll get a `TypeError` with a message stating that `str1.push is not a function`. This is a common error message that confuses learners because you might know that `.push()` is certainly a function (for example, if you have used it to add items to arrays before).

But that's the key - `.push()` is not a String method, it's an Array method. Hence, it is “not a function” that you can find as a String method. If you change`.push()` to `.concat()`, a proper String method, our code runs as intended!

A good note to keep in mind when faced with a `TypeError` is to consider the data type you are trying to run a method or operation against. You'll likely find that it is not what you think, or the operation or method is not compatible with that type.

# --questions-- 

## --text--

Why does the following JavaScript code result in a `TypeError`?

```js
const str1 = "Hello";
const str2 = "World!";
const message = str1.push(str2);
```

## --answers--

The `.push()` method can only be used on objects, not strings.

---

The `.push()` method is not available for strings because it is an Array method.

---

The `.push()` method is incorrectly spelled and should be .pusch().

---

The `TypeError` is a result of a syntax error in the JavaScript code.

## --video-solution--

2
