---
title: Create a Circular Queue
---
## Create a Circular Queue

### Method:
- In this challenge we create a Circular Queue data structure.
- First, we need to create an array of `size` with all elements set to `null`.
- Then we create an equeue method, which moves the write pointer but doesnt exceed the read pointer.
- The dequeue method on the other hand, moves the read pointer but doesnt exceed the write pointer.
- Example:
  - First, we create an array of length 5:
  ```output
  [null, null, null, null, null]
   ^Read @ 0
   ^Write @ 0
  ```
  - Then we enqueue `a`, `b`, and `c`:
  ```output
  [a, b, c, null, null]
   ^Read @ 0
            ^Write @ 3
  ```
  - Now we dequeue all the enqueued items:
  ```output
  [null, null, null, null, null]
                     ^Read @ 3
                     ^Write @ 3
  ```
  - Finally, we enqueue `d`, `e` and `f`:
  ```output
  [f, null, null, d, e]
                  ^Read @ 3
      ^Write @ 1
  ```
### Solution:
```js
class CircularQueue {
    constructor(size) {
 
      this.queue = [];
      this.read = 0;
      this.write = 0;
      this.max = size - 1;
 
      while (size > 0) {
         this.queue.push(null);
         size--;
      }
 
    }
 
    print() {
      return this.queue;
    }
 
 
    enqueue(item) {
     if (this.queue[this.write] === null){
       this.queue[this.write++] = item;
 
       if (this.write > this.max) this.write = 0;
       return item;
     }
     return null;
    }
 
    dequeue() {
      if (this.queue[this.read] != null){
        let item = this.queue[this.read];
        this.queue[this.read++] = null;
        if (this.read > this.max) this.read = 0;
        return item;
      }
      return null;
    }
 }
 ```
### References:

- [Wikipedia](https://en.wikipedia.org/wiki/Circular_buffer)
