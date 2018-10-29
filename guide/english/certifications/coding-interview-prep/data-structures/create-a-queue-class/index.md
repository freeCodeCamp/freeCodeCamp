---
title: Create a Queue Class
---
## Create a Queue Class


### Method:
- A Queue is an abstract Data Structure.
- A Queue folow FIFO/LILO principle.
- In this challenge we nede to implement `enqueue()`, `dequeue()`, `front()`, `size()`, `isEmpty()` methods.
  - `enqueue()` - This method adds the element to the queue.
  - `dequeue()` - This method removes the first element from the queue.
  - `front()` - This method returns the first element in the queue that'd be dequeue'd.
  - `size()` - This method returns the size of the queue.
  - `isEmpty()` - This method returns if the queue is empty.
- 
  | DS    | Access | Search | Insert | Delete |
  | ----- | ------ | ------ | ------ | ------ |
  | Queue |   n    |    n   |   1    |    1   |
  
 - ![Queue in action](https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Data_Queue.svg/405px-Data_Queue.svg.png)

### Solution:

#### Basic:
##### Note: 
- This solution is not exactly a queue, the shift() method used in the dequeue() method is of complexity `O(n)` and not `O(1)`. However, the advanced solution rectifies this and uses Object(HashTables) instead of Array to implement Queue. 
```js
function Queue () { 
    var collection = [];
    this.print = function() {
        console.log(collection);
    };
    this.enqueue = function(val){
        collection.push(val);
    };
    this.dequeue = function(){
        return collection.shift();
    }
    this.front = function(){
        return collection[0];
    }
    this.size = function(){
        return collection.length;
    }
    this.isEmpty = function(){
        return collection.length === 0;
    }
}
```
#### Advanced - ES6 class syntax:
```js
class Queue {
    constructor(){
        this.collection = {};
        this.start = 0;
        this.end = 0;
    }
    print(){
        console.log(this.collection);
    }
    enqueue(val){
        this.collection[this.end++] = val; 
    }
    dequeue(){
        return this.collection[this.start++];
    }
    front(){
        return this.collection[this.start];
    }
    size(){
        return this.end - this.start;
    }
    isEmpty(){
        return this.size() === 0;
    }
}
```
### References:
- [Wikipedia](https://en.wikipedia.org/wiki/Queue_(abstract_data_type))
