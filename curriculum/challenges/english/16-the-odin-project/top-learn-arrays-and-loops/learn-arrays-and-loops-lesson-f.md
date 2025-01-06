---
id: 661e27598602567c118451d6
title: Learn Arrays and Loops Lesson F
challengeType: 15
dashedName: learn-arrays-and-loops-lesson-f
---
# --description--

The `for` loop is another type of loop that is used to execute a block of code multiple times. The `for` loop is used when the number of iterations is known. The syntax of the `for` loop is as follows:

```javascript
for (initialization; condition; increment/decrement) {
  // code block to be executed
}
```

For example, the following code snippet prints the numbers from 1 to 5:

```javascript
for (let i = 1; i <= 5; i++) {
  console.log(i);
}
```

To iterate over an array using a `for` loop, you can use the array's length property. For example, the following code snippet prints the elements of an array:

```javascript
const arr = [1, 2, 3, 4, 5];
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}
```

# --questions--

## --text--

What will be the output of the following JavaScript code snippet?

```javascript
const items = ['apple', 'banana', 'cherry', 'date'];
for (let i = 1; i < items.length; i++) {
  console.log(items[i]);
}
```

## --answers--

```bash
apple
banana
cherry
date
```

---

```bash
banana
cherry
```

---

```bash
apple
banana
cherry
```

---

```bash
banana
cherry
date
```

## --video-solution--

4
