---
id: 6617aef05b87c334e7ae8016
title: Learn Function Basics Question E
challengeType: 15
dashedName: learn-function-basics-question-e
---

# --description--

As you have seen before, functions can return a value using the `return` keyword. The `return` keyword is used to return a value from a function. When the `return` keyword is used, the function will stop executing and return the value specified after the `return` keyword.

```js
function add(a, b) {
  return a + b
}

console.log(add(2, 3)); // Output: 5
```

But what happens if the `return` keyword is used before the end of the function?
To answer this question, consider the following example:

```js
function add(a, b) {
  if(a > 2){
    return b;
  }

  return a + b;
}

console.log(add(3, 7)); // Output: 7
``` 

In the example above, the function `add` has a conditional statement that checks if the value of `a` is greater than `2`. If the condition is met, the function will return the value of `b` and stop executing. If the condition is not met, the function will return the sum of `a` and `b`.

# --question--

## --text--

What is the output of the following code snippet?

```js
function add(a, b = 12) {
  if(b > 11){
    return b * 2;
  } else if(a > 3){
    return b;
  }

  return a + b;
}

console.log(add(3));
```

## --answers--

The output is `24`.

---

The output is `14`.

---

The output is `15`.

---

The output is `12`.

## --video-solution--

1
