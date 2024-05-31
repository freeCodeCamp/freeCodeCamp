---
id: 65e9726d484dd50f720e6fec
title: Learn Data Types and Conditionals Lesson G
challengeType: 15
dashedName: learn-data-types-and-conditionals-lesson-g
---
# --description--

JavaScript also has the ability to compare types and values using the strict equality operator `===`. This operator checks if the two values are equal and of the same type. For example:

```javascript
let x = 5;
let y = "5";

let result = x === y;

console.log(result); // false
```

In this example, the `result` variable will contain `false` because `x` is a number and `y` is a string. But if you use the `==` operator, the result will be `true` because JavaScript will convert the string to a number and compare the values.

This operator is called the strict equality operator because it checks for both value and type equality. It is often recommended to use the `===` operator to avoid unexpected results when comparing values.

There is also a strict inequality operator `!==` that checks if the two values are not equal and of the same type.

There are a lot of ways to use the strict equality operator, and it's important to understand how it works.

# --assignment--

Read <a href="https://javascript.info/comparison" target="_blank" rel="noopener noreferrer nofollow">this article on JavaScript.info</a> to learn more about the strict equality operator.

# --question--

## --text--

What happens when you use the strict equality operator `===` to compare a number of the value `0` and a boolean of the value `false`?

## --answers--

The output would be `true`.

---

The output would be `false`.

---

You cannot compare a number and a boolean using the strict equality operator.


## --video-solution--

2
