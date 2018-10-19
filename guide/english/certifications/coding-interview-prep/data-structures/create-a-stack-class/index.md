---
title: Create a Stack Class
---
## Create a Stack Class

### Method:
- Stack is an abstract data structure.
- Stack follows LIFO/FILO principle.
- In this challenge, we need to add `.push()`, `.pop()`, `.peek()`, `.isEmpty()` and `.clear()` methods to the class.
- 
  - `push()` method pushes value to the stack.
  - `pop()` method pops the first value from the stack.
  - `peek()` method returns the first value from the stack.
  - `isEmpty()` method checks if ths stack is empty.
  - `.clear()` method removes all the elements from the stack.
-
| DS    | Access | Search | Insert | Delete |
| ----- | ------ | ------ | ------ | ------ |
| Stack |   n    |    n   |   1    |    1   |

### Solution:
#### Basic:
```js
function Stack() { 
    var collection = [];
    this.print = function() {
        console.log(collection);
    };
    this.push = function(val){
        return collection.push(val);
    }
    this.pop = function(){
        return collection.pop();
    }
    this.peek = function(){
        return collection[collection.length-1];
    }
    this.isEmpty = function(){
        return collection.length === 0;
    }
    this.clear = function(){
        collection.length = 0;
    }
}
```
#### Advanced - ES6 Class syntax:
```js

class Stack {
    constructor() {
        this.collection = [];
    }
    print(){
        console.log(this.collection);
    }
    push(val){
        retiurn this.collection.push(val);
    }
    pop(){
        return this.collection.pop();
    }
    peek(){
        return this.collection[this.collection.length-1];
    }
    isEmpty(){
        return this.collection.length === 0;
    }
    clear(){
        return this.collection.length = 0;
    }
}
```
 ### Resources:
 
- [Wikipedia](https://en.wikipedia.org/wiki/Stack_(abstract_data_type))
