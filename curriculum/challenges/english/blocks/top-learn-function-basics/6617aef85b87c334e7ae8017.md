---
id: 6617aef85b87c334e7ae8017
title: Learn Function Basics Lesson F
challengeType: 15
dashedName: learn-function-basics-lesson-f
---

# --description--

Arrow functions are a more modern way to write functions in JavaScript. They provide a more compact syntax compared to traditional function expressions. Arrow functions are defined using the `=>` syntax. 

```js
const add = (a, b) => {
  return a + b;
}
```

In the example above, the arrow function `add` takes two parameters `a` and `b` and returns their sum. The `return` keyword is used to return the result of the addition operation.

If the arrow function has only one expression, the curly braces `{}` and the `return` keyword can be omitted. The expression will be implicitly returned.

```js
const add = (a, b) => a + b;
```

In the example above, the arrow function `add` takes two parameters `a` and `b` and returns their sum. The `return` keyword and curly braces `{}` are omitted, and the result of the addition operation is implicitly returned.

# --questions--

## --text--

What makes arrow functions different from traditional function expressions in JavaScript?

## --answers--

They cannot return values.

---

They cannot take parameters.

---

They have a more compact syntax compared to traditional function expressions.

---

They require the use of the `function` keyword.

## --video-solution--

3
