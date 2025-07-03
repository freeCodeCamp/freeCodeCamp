---
id: 661e27588602567c118451d5
title: Learn Arrays and Loops Lesson E
challengeType: 15
dashedName: learn-arrays-and-loops-lesson-e
---
# --description--

Now that you have a basic understanding about arrays, let's talk about loops. Loops are used to execute a block of code multiple times. One of those loops is the `while` loop. The `while` loop executes a block of code as long as the condition is true. The syntax of the `while` loop is as follows:

```javascript
while (condition) {
  // code block to be executed
}
```

For example, the following code snippet prints the numbers from 1 to 5:

```javascript
let i = 1;
while (i <= 5) {
  console.log(i);
  i++;
}
```

The above code snippet initializes a variable `i` with the value `1`. The `while` loop executes the block of code as long as the value of `i` is less than or equal to `5`. The value of `i` is incremented by `1` in each iteration.

# --questions--

## --text--

What will be the output of the following JavaScript code snippet?

```javascript
let i = 5;
while (i >= 0) {
  console.log(i);
  i--;
}
```


## --answers--

`5`, `4`, `3`, `2`, `1`, `0`

---

`5`, `4`, `3`, `2`, `1`

---

`5`, `4`, `3`, `2`, `1`, `0`, `-1`

---

`1`, `2`, `3`, `4`, `5`

## --video-solution--

1
