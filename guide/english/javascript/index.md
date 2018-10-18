---
title: Data Structure, Singly Linked List in ES6
---
## What is a Singly Linked List?
>A Singly Linked List is a linear collection of data elements, called nodes pointing to the next node by means of pointer. It is a data structure consisting of a group of nodes which together represent a sequence. Under the simplest form, each node is composed of data and a reference (in other words, a link) to the next node in the sequence. Source [Wikipedia](https://en.wikipedia.org/wiki/Linked_list).

# Complexity of Singly Linked List
| Access        | Search        | Insertion  | Deletion |
| ------------- |:-------------:| :---------:|---------:|
|  O(n)         |       O(n)    | O(1)       |  O(1)    |


# The Code

```javascript
function Node(data) {
  this.data = data;
  this.next = null;
}
class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.numberOfValues = 0;
  }
  add(data) {
    const node = new Node(data)
    if (!this.head) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
    this.numberOfValues ++;
  }
  remove(data) {
    let previous = this.head;
    let current = this.head;
    while (current) {
      if(current.data === data){
        if(current === this.head){
          this.head = this.head.next;
        }
        if (current === this.tail) {
          this.tail = previous;
        }
        previous.next = current.next;
        this.numberOfValues --;
      } else {
        previous = current;
      }
      current = current.next;
    }
  }
  insertAfter(data, toData) {
    let current = this.head;
    while(current) {
      if(current.data === toData){
        const node = new Node(data);
        if(current === this.tail) {
          this.tail.next = node;
          this.tail = node;
        } else {
          node.next = current.next;
          current.next= node;
        }
        this.numberOfValues ++;
      }
      current = current.next;
    }
  }
  length() {
    return this.numberOfValues;
  }
  print() {
    let string = '';
    let current = this.head;
    while(current) {
      string += `${current.data}`;
      current = current.next;
    }
    console.log(string.trim());
  }
}
```
