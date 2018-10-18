---
title: Learn how a Stack Works
---
## Learn how a Stack Works

### Method:
- Stacks are an abstract data structures.
- They follow LIFO (Last In First Out) or FILO (First In Last Out) principle.
- Stack's insertion and deletion operations are of **O(1)** time complexity.
- In Javascript, arrays can be treated as a Stack since `.push()` and `.pop()` methods have time complexity of **O(1)**.
- In this challenge we need to `.pop()` and then `.push()` into the stack.

### Solution:
```js
var homeworkStack = ["BIO12","HIS80","MAT122","PSY44"];

homeworkStack.pop();
homeworkStack.push("CS50");
```
### Reference:

- [Wikipedia](https://en.wikipedia.org/wiki/Stack_(abstract_data_type))
- Video by [Hackerrank](https://www.youtube.com/watch?v=wjI1WNcIntg)
