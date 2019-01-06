---
id: 5a23c84252665b21eecc7e1f
title: Doubly-linked list/Definition
challengeType: 5
---

## Description
<section id='description'>
Write a function that takes an array as a parameter. This array contains queries that specify operations to be
performed on a doubly linked list. The operations are in the form of <code>[ type, args... ]</code>. The type can be
<code>head</code>, <code>tail</code> or <code>after</code>.
If the type is <code>head</code>, insert the second element of the operation to the beginning of the list. If the type
is <code>tail</code>, insert at end of list. If it's <code>after</code>, the second and third elements of the operation
will be an index and a value. The value should be inserted after the given index.
Return the doubly linked list object after performing the operations.
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

``` yml
tests:
  - text: <code>doubLinkedList</code> should be a function.
    testString: assert(typeof doubLinkedList == 'function', '<code>doubLinkedList</code> should be a function.');
  - text: <code>forwardTraverse(doubLinkedList([["head", 1], ["head", 2], ["head", 3], ["head", 4], ["head", 5]]))</code> should return a array.
    testString: assert(Array.isArray(forwardTraverse(doubLinkedList([["head", 1], ["head", 2], ["head", 3], ["head", 4], ["head", 5]]))), '<code>forwardTraverse(doubLinkedList([["head", 1], ["head", 2], ["head", 3], ["head", 4], ["head", 5]]))</code> should return a array.');
  - text: <code>forwardTraverse(doubLinkedList([["head", 1], ["head", 2], ["head", 3], ["head", 4], ["head", 5]]))</code> should return <code>[5, 4, 3, 2, 1]</code>.
    testString: assert.deepEqual(forwardTraverse(doubLinkedList([["head", 1], ["head", 2], ["head", 3], ["head", 4], ["head", 5]])), [5, 4, 3, 2, 1], '<code>forwardTraverse(doubLinkedList([["head", 1], ["head", 2], ["head", 3], ["head", 4], ["head", 5]]))</code> should return <code>[5, 4, 3, 2, 1]</code>.');
  - text: <code>forwardTraverse(doubLinkedList([["tail", 1], ["after", 0, 2], ["tail", 3], ["tail", 5], ["after", 2, 4]]))</code> should return <code>[1, 2, 3, 4, 5]</code>.
    testString: assert.deepEqual(forwardTraverse(doubLinkedList([["tail", 1], ["after", 0, 2], ["tail", 3], ["tail", 5], ["after", 2, 4]])), [1, 2, 3, 4, 5], '<code>forwardTraverse(doubLinkedList([["tail", 1], ["after", 0, 2], ["tail", 3], ["tail", 5], ["after", 2, 4]]))</code> should return <code>[1, 2, 3, 4, 5]</code>.');
  - text: <code>forwardTraverse(doubLinkedList([["head", 31], ["tail", 26], ["head", 33], ["tail", 15], ["head", 24]]))</code> should return <code>[24, 33, 31, 26, 15]</code>.
    testString: assert.deepEqual(forwardTraverse(doubLinkedList([["head", 31], ["tail", 26], ["head", 33], ["tail", 15], ["head", 24]])), [24, 33, 31, 26, 15], '<code>forwardTraverse(doubLinkedList([["head", 31], ["tail", 26], ["head", 33], ["tail", 15], ["head", 24]]))</code> should return <code>[24, 33, 31, 26, 15]</code>.');
  - text: <code>forwardTraverse(doubLinkedList([["head", 2], ["head", 0], ["after", 0, 3], ["after", 0, 4], ["tail", 12]]))</code> should return <code>[0, 4, 3, 2, 12]</code>.
    testString: assert.deepEqual(forwardTraverse(doubLinkedList([["head", 2], ["head", 0], ["after", 0, 3], ["after", 0, 4], ["tail", 12]])), [0, 4, 3, 2, 12], '<code>forwardTraverse(doubLinkedList([["head", 2], ["head", 0], ["after", 0, 3], ["after", 0, 4], ["tail", 12]]))</code> should return <code>[0, 4, 3, 2, 12]</code>.');
  - text: <code>forwardTraverse(doubLinkedList([["tail", 1], ["after", 0, 2], ["head", 3], ["tail", 5], ["head", 42]]))</code> should return <code>[42, 3, 1, 2, 5]</code>.
    testString: assert.deepEqual(forwardTraverse(doubLinkedList([["tail", 1], ["after", 0, 2], ["head", 3], ["tail", 5], ["head", 42]])), [42, 3, 1, 2, 5], '<code>forwardTraverse(doubLinkedList([["tail", 1], ["after", 0, 2], ["head", 3], ["tail", 5], ["head", 42]]))</code> should return <code>[42, 3, 1, 2, 5]</code>.');
  - text: <code>reverseTraverse(doubLinkedList([["head", 1], ["head", 2], ["head", 3], ["head", 4], ["head", 5]]))</code> should return <code>[1, 2, 3, 4, 5]</code>.
    testString: assert.deepEqual(reverseTraverse(doubLinkedList([["head", 1], ["head", 2], ["head", 3], ["head", 4], ["head", 5]])), [1, 2, 3, 4, 5], '<code>reverseTraverse(doubLinkedList([["head", 1], ["head", 2], ["head", 3], ["head", 4], ["head", 5]]))</code> should return <code>[1, 2, 3, 4, 5]</code>.');
  - text: <code>reverseTraverse(doubLinkedList([["tail", 1], ["after", 0, 2], ["tail", 3], ["tail", 5], ["after", 2, 4]]))</code> should return <code>[5, 4, 3, 2, 1]</code>.
    testString: assert.deepEqual(reverseTraverse(doubLinkedList([["tail", 1], ["after", 0, 2], ["tail", 3], ["tail", 5], ["after", 2, 4]])), [5, 4, 3, 2, 1], '<code>reverseTraverse(doubLinkedList([["tail", 1], ["after", 0, 2], ["tail", 3], ["tail", 5], ["after", 2, 4]]))</code> should return <code>[5, 4, 3, 2, 1]</code>.');
  - text: <code>reverseTraverse(doubLinkedList([["head", 31], ["tail", 26], ["head", 33], ["tail", 15], ["head", 24]]))</code> should return <code>[15, 26, 31, 33, 24]</code>.
    testString: assert.deepEqual(reverseTraverse(doubLinkedList([["head", 31], ["tail", 26], ["head", 33], ["tail", 15], ["head", 24]])), [15, 26, 31, 33, 24], '<code>reverseTraverse(doubLinkedList([["head", 31], ["tail", 26], ["head", 33], ["tail", 15], ["head", 24]]))</code> should return <code>[15, 26, 31, 33, 24]</code>.');
  - text: <code>reverseTraverse(doubLinkedList([["head", 2], ["head", 0], ["after", 0, 3], ["after", 0, 4], ["tail", 12]]))</code> should return <code>[12, 2, 3, 4, 0]</code>.
    testString: assert.deepEqual(reverseTraverse(doubLinkedList([["head", 2], ["head", 0], ["after", 0, 3], ["after", 0, 4], ["tail", 12]])), [12, 2, 3, 4, 0], '<code>reverseTraverse(doubLinkedList([["head", 2], ["head", 0], ["after", 0, 3], ["after", 0, 4], ["tail", 12]]))</code> should return <code>[12, 2, 3, 4, 0]</code>.');
  - text: <code>reverseTraverse(doubLinkedList([["tail", 1], ["after", 0, 2], ["head", 3], ["tail", 5], ["head", 42]]))</code> should return <code>[5, 2, 1, 3, 42]</code>.
    testString: assert.deepEqual(reverseTraverse(doubLinkedList([["tail", 1], ["after", 0, 2], ["head", 3], ["tail", 5], ["head", 42]])), [5, 2, 1, 3, 42], '<code>reverseTraverse(doubLinkedList([["tail", 1], ["after", 0, 2], ["head", 3], ["tail", 5], ["head", 42]]))</code> should return <code>[5, 2, 1, 3, 42]</code>.');
```

</section>

## Challenge Seed
<section id='challengeSeed'>
<div id='js-seed'>

```js
function doublyLinkedList() {
  this.length = 0;
  this.head = null;
  this.tail = null;
}

function Node(val) {
  this.val = val;
  this.prev = null;
  this.next = null;
}

function doubLinkedList (queries) {
  // Good luck!
}
```

</div>
</section>

### Before Test
<div id='js-setup'>

```js
function forwardTraverse(list) {
    var vals = [], temp = list.head;
    while (temp) {
        vals.push(temp.val);
        temp = temp.next;
    }
    return vals;
}

function reverseTraverse(list) {
    var vals = [], temp = list.tail;
    while (temp) {
        vals.push(temp.val);
        temp = temp.prev;
    }
    return vals;
}
```

</div>

## Solution
<section id='solution'>

```js
function doublyLinkedList() {
  this.length = 0;
  this.head = null;
  this.tail = null;
}

function Node(val) {
  this.val = val;
  this.prev = null;
  this.next = null;
}

function doubLinkedList (queries) {
  // Good luck!
}
function doubLinkedList (queries) {
  doublyLinkedList.prototype.insertAtHead = function(val) {
    var node=new Node(val);
    if(this.head){
      node.next=this.head;
      this.head.prev=node;
      this.head=node;
    }else{
      this.head=node;
      this.tail=node;
    }
    this.length++;
  }

  doublyLinkedList.prototype.insertAfter = function(index, val) {
    var temp=this.head;

    if(this.length==1){
      this.insertAtTail(val)
    }else{
      for(var i=0;i<index;i++){
        temp=temp.next;
      }

      if(temp==this.tail){
        this.insertAtTail(val)
      }else{
        var node=new Node(val);
        var tempNext=temp.next;
        temp.next=node;
        tempNext.prev=node;
        node.prev=temp;
        node.next=tempNext;
      }
    }
    this.length++;
  }

  doublyLinkedList.prototype.insertAtTail = function(val) {
    if(this.head){
      var node=new Node(val);
      node.prev=this.tail;
      this.tail.next=node;
      this.tail=node;
    }else{
      this.insertAtHead(val)
    }
    this.length++;
  }

  var list = new doublyLinkedList();

  queries.forEach(function(e) {
    switch (e[0]) {
      case 'head':
        list.insertAtHead(e[1]);
        break;
      case 'after':
        list.insertAfter(e[1], e[2]);
        break;
      case 'tail':
        list.insertAtTail(e[1]);
        break;
    }
  })

  return list
}
```

</section>