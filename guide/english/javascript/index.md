---
title: Data Structure, Doubly Linked List in ES6
---
## What is a Doubly Linked List?
>A Doubly Linked List is a linked data structure that consists of a set of sequentially linked records called nodes. Each node contains two fields, called links, that are references to the previous and to the next node in the sequence of nodes. Source [Wikipedia](https://en.wikipedia.org/wiki/Doubly_linked_list).

# Complexity of Doubly Linked List
| Access        | Search        | Insertion  | Deletion |
| ------------- |:-------------:| :---------:|---------:|
|  O(n)         |       O(n)    | O(1)       |  O(1)    |


# The Code

```javascript
function Node(data) {
  this.data = data;
  this.previous = null;
  this.next = null;
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.numberOfValues = 0;
  }
  add(data) {
    const node = new Node(data);
    if(!this.head){
      this.head = node;
      this.tail = node;
    } else {
      node.previous = this.tail;
      this.tail.next = node;
      this.tail = node;
    }
    this.numberOfValues ++;
  }
  remove(data) {
    let current = this.head;
    while (current) {
      if (current.data === data) {
        if (current === this.head && current === this.tail) {
          this.head = null;
          this.tail = null;
        } else if (current === this.head) {
          this.head = this.head.next;
          this.head.previous = null;
        } else if (current === this.tail) {
          this.tail = this.tail.previous;
          this.tail.next = null;
        } else {
          current.previous.next =current.next;
          current.next.previous = current.previous;
        }
        this.numberOfValues --;
      }
      current = current.next;
    }
  }
  insertAfter(data, toData) {
    let current = this.head;
    while(current) {
      if (current.data === toData) {
        const node = new Node(data);
        if(current === this.tail) {
          this.add(data);
        } else {
          current.next.previous = node;
          node.previous = current;
          node.next = current.next;
          current.next = node;
          this.numberOfValues ++;
        }
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
    while (current) {
      string +=`${current.data}`;
      current = current.next;
    }
    console.log(string.trim());
  }
}
```
