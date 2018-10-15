---
title: Catch Off By One Errors When Using Indexing
---
## Catch Off By One Errors When Using Indexing

### Basics

Due to the way JavaScript indexes work `firstFive` has **five elements** but they are indexed from **0 to 4**!
```javascript
console.log(len); // 5
console.log(firstFive[0]); // 1
/**/
console.log(firstFive[4]); // 5
console.log(firstFive[5]); // undefined
```
That should give you enough to grasp the limits of `firstFive`. Direct your attention to the loop. What does it do? You could try debugging it to find out!

### Debugging

You are given this code:
```javascript
  for (let i = 1; i <= len; i++) {
    console.log(firstFive[i]);
  }
```
To debug this piece of code, use `console.clear()`. What would be the best place for it? The answer is right before the `for` statement!
```javascript
  console.clear();
  for (let i = 1; i <= len; i++) {
    console.log(firstFive[i]);
  }
```
Console output:
```text
  Console was cleared.
  2
  3
  4
  5
  undefined
```
### Analysis
Examine the output. Under these conditions the loop first prints the element positioned at 1... which is 2! It also tries to print the element indexed at 5 which is `undefined`.

This can be considered the point of this challenge. Keep `console.log()` and `console.clear()` present. They will help you understand how your code works.
### Solution
The most straightforward way to fix this is to alter the for() conditions.
Make `i` start at 0. Also the loop **should not** be executed for i == 5. In other words, the relationship between `i` and `len` should be `false` when i == 5. That can be achieved by using `i < len` (Is 5 < len? false, and the loop won't be executed!).
```javascript
  for (let i = 0; i < len; i++) {
```
**Happy Coding!** :computer:
### Resources
- [For statements challenge at FreeCodeCamp](https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-javascript/iterate-with-javascript-for-loops)
- [For statements at MDN web docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration#for_statement)
