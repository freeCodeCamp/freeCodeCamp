---
title: Prevent Infinite Loops with a Valid Terminal Condition
---
## Prevent Infinite Loops with a Valid Terminal Condition

- To prevent an infinite loop, the `while-condition` must reach a terminal condition to exit out of the loop.
- So the error in this challenge occurs due to the condition - `i != 4` - in the for loop.
- If you take a closer look at the code:
```javascript
function myFunc() {
  for (let i = 1; i != 4; i += 2) {
    console.log("Still going!");
  }
}
```
- You will see that `i` is first initialised as 1 and after every iteration of the loop, `i` is incremented by 2.
- Using this logic, after the first iteration - `i = 3` and the second iteration `i = 5`, the condition `i != 4` will never be met and an infinite loop will occur.

## Solution:
```javascript
function myFunc() {
  for (let i = 1; i <= 4; i += 2) {
    console.log("Still going!");
  }
}
```
