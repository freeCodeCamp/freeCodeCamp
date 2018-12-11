---
title: Create a Priority Queue Class
---
## Create a Priority Queue Class

### Method:
- Priority Queue is an Abstract Data Type.
- It can be implemented using other Data Structures but is commonly implemented using a Heap.
- Each node contains a priority. When we enqueue a node to the queue, it's "bubbled up" to its place in the queue.
- In this challenge we need to create a Priority Queue class based on Min-Heap with a few methods:
  - enqueue() - It enqueue's the new node to it's appropriate place in queue.
  - dequeue() - It removes the first node from the queue.
  - front() - This method returns the first node to be dequeued.
  - size() - Returns the size of the queue.
  - isEmpty() - Returns if the queue is empty.
- | DS    | Access | Search | Insert | Delete |
  | ----- | ------ | ------ | ------ | ------ |
  | Priority Queue |   1    |    1   |   logn    |    logn   |


### Solution:
```js
//function which swaps elements in array, using ES6 syntax
function swap(arr, i, j) {
  [arr[i], arr[j]] = [arr[j], arr[i]];
}

class PriorityQueue {
  constructor() {
    //initializing queue
    this.collection = [];
  }

  printCollection() {
    console.log(this.collection);
  }

  //enqueues the node to the queue
  enqueue(node) {
    this.collection.push(node);
    //calling the helper method which bubbles up the node to the correct position
    this.bubbleUp();
  }

  //helper method which bubbles the node to its correct position
  bubbleUp() {
    let i = this.size() - 1;
    let node = this.collection[i];

    while (true) {
      //getting the parent node's index
      let parent = Math.floor((i - 1) / 2);
      if (parent < 0) return;

      //comparing with parent, if the node is smaller then swapping
      if (this.collection[parent][1] > node[1]) {
        swap(this.collection, parent, i);
        i = parent;
      } else break;
    }
  }

  //dequeues the node and returns its value
  dequeue() {
    if (this.isEmpty()) return;
    if (this.size() === 1) {
      return this.collection.pop()[0];
    }
    //getting the first element from the queue
    let pop = this.collection[0];

    //replacing the first element by last
    this.collection[0] = this.collection.pop();

    //calling the buubleDown method which bubbles down the node to the correct position
    this.bubbleDown();
    return pop[0];
  }

  //helper method which bubble's down the node to the correct position
  bubbleDown() {
    let node = this.collection[0];
    let i = 0;

    while (true) {
      //getting the two child node's index
      let child1 = 2 * i + 1;
      let child2 = 2 * i + 2;

      //edge case
      if (child2 >= this.size()) return;

      //getting the minimum of two child
      let min =
        this.collection[child1][1] > this.collection[child2][1]
          ? child2
          : child1;

      //if the child is smaller than node then swap
      if (this.collection[min][1] < node[1]) {
        swap(this.collection, i, min);
        i = min;
      } else break;
    }
  }

  //returns the first element from queue
  front() {
    return this.collection[0];
  }

  // returns the size of the queue
  size() {
    return this.collection.length;
  }

  // returns if the queue is empty
  isEmpty() {
    return this.size() === 0;
  }
}
```
- [Run Code](https://repl.it/@ezioda004/Priority-Queue)
### References:
- [Wikipedia](https://en.wikipedia.org/wiki/Priority_queue)
