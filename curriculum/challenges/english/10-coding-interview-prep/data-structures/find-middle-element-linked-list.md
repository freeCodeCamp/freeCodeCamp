---
id: 9972879df9c3f907659c82e6
title: Find the Middle Element in a Linked List
challengeType: 1
forumTopicId: 3301722
dashedName: find-the-middle-element-in-a-linked-list
---

# --description--

Now that you understand binary trees, let's take a step back and explore another important data structure: the **linked list**.  

A linked list is a sequence of nodes where each node contains some data and a pointer (or reference) to the next node in the sequence. Unlike arrays, linked lists do not store elements in contiguous memory locations. Instead, each element "points" to the next one, forming a chain-like structure.  

Common terms:  

- The **head** is the first node in the list.  
- The **tail** is the last node, which usually points to `null`.  
- Each **node** contains a value and a pointer to the next node.  

A simple problem is to find the **middle element** of a linked list. For example:  

- If the list is `1 → 2 → 3 → 4 → 5`, the middle element is `3`.  
- If the list is `1 → 2 → 3 → 4 → 5 → 6`, the middle element is usually defined as the **second of the two middle nodes** (so, `4`).  

One efficient way to find the middle is to use **two pointers**:  

- Move one pointer (`slow`) by one step at a time.  
- Move another pointer (`fast`) by two steps at a time.  
- When the fast pointer reaches the end, the slow pointer will be at the middle.  

# --instructions--

We’ve provided a basic `Node` and `LinkedList` class.  
Your task: Implement a method called `findMiddle` in the `LinkedList` class. This method should return the **value** of the middle node.  

If the list is empty, return `null`.  

# --hints--

The `LinkedList` data structure should exist.  

```js
assert(typeof LinkedList !== 'undefined');
```

The `LinkedList` should have a method called `findMiddle`.  

```js
assert(typeof (new LinkedList()).findMiddle === 'function');
```

The `findMiddle` method should return the correct middle element for odd-length lists.  

```js
const list = new LinkedList();
[1,2,3,4,5].forEach(v => list.add(v));
assert(list.findMiddle() === 3);
```

The `findMiddle` method should return the second middle element for even-length lists.  

```js
const list = new LinkedList();
[10,20,30,40,50,60].forEach(v => list.add(v));
assert(list.findMiddle() === 40);
```

If the list is empty, `findMiddle` should return `null`.  

```js
const list = new LinkedList();
assert(list.findMiddle() === null);
```

# --seed--

## --seed-contents--

```js
function Node(value) {
  this.value = value;
  this.next = null;
}

function LinkedList() {
  this.head = null;

  this.add = function(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      return;
    }
    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    current.next = newNode;
  };

  // Only change code below this line
  

  // Only change code above this line
}
```

# --solutions--

```js
function Node(value) {
  this.value = value;
  this.next = null;
}

function LinkedList() {
  this.head = null;

  this.add = function(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      return;
    }
    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    current.next = newNode;
  };

  this.findMiddle = function() {
    if (!this.head) return null;
    let slow = this.head;
    let fast = this.head;
    while (fast && fast.next) {
      slow = slow.next;
      fast = fast.next.next;
    }
    return slow.value;
  };
}
```
