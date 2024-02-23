---
id: 587d8252367417b2b2512c67
title: Add Elements at a Specific Index in a Linked List
challengeType: 1
forumTopicId: 301619
dashedName: add-elements-at-a-specific-index-in-a-linked-list
---

# --description--

讓我們創建一個 addAt(index,element) 方法，在給定的索引處添加一個元素。 就像我們如何刪除給定索引處的元素一樣，我們需要在遍歷鏈表時跟蹤 currentIndex。 當 currentIndex 與給定索引匹配時，我們需要重新分配上一個節點的下一個屬性以引用新添加的節點。 並且新節點應該引用 currentIndex 中的下一個節點。 Returning to the conga line example, a new person wants to join the line, but he wants to join in the middle. You are in the middle of the line, so you take your hands off of the person ahead of you. The new person walks over and puts his hands on the person you once had hands on, and you now have your hands on the new person.

# --instructions--

Create an `addAt(index,element)` method that adds an element at a given index. Return false if an element could not be added. **Note:** Remember to check if the given index is a negative or is longer than the length of the linked list.

# --hints--

Your `addAt` method should reassign `head` to the new node when the given index is 0.

```js
assert(
  (function () {
    var test = new LinkedList();
    test.add('cat');
    test.add('dog');
    test.addAt(0, 'fish');
    return test.head().element === 'fish' && test.head().next.element === 'cat';
  })()
);
```

Your `addAt` method should increase the length of the linked list by one for each new node added to the linked list.

```js
assert(
  (function () {
    var test = new LinkedList();
    test.add('cat');
    test.add('dog');
    test.addAt(0, 'cat');
    return test.size() === 3;
  })()
);
```

Your `addAt` method should return `false` if a node was unable to be added.

```js
assert(
  (function () {
    var test = new LinkedList();
    test.add('cat');
    test.add('dog');
    return test.addAt(4, 'cat') === false;
  })()
);
```

# --seed--

## --seed-contents--

```js
function LinkedList() {
  var length = 0;
  var head = null;

  var Node = function(element) {
    this.element = element;
    this.next = null;
  };

  this.size = function() {
    return length;
  };

  this.head = function() {
    return head;
  };

  this.add = function(element) {
    var node = new Node(element);
    if (head === null) {
      head = node;
    } else {
      var currentNode = head;

      while (currentNode.next) {
        currentNode = currentNode.next;
      }

      currentNode.next = node;
    }
    length++;
  };

  // Only change code below this line

  // Only change code above this line
}
```

# --solutions--

```js
function LinkedList() {
  var length = 0;
  var head = null;

  var Node = function(element){
    this.element = element;
    this.next = null;
  };

  this.size = function(){
    return length;
  };

  this.head = function(){
    return head;
  };

  this.add = function(element){
    var node = new Node(element);
    if (head === null){
        head = node;
    } else {
      var currentNode = head;

      while (currentNode.next) {
        currentNode = currentNode.next;
      }

      currentNode.next = node;
    }
    length++;
  };
  this.addAt = function (index, element) {
    if (index > length || index < 0) {
      return false;
    }
    var newNode = new Node(element);
    var currentNode = head;
    if (index === 0) {
      head = newNode;
    } else {
      var previousNode = null;
      var i = 0;
      while (currentNode && i < index) {
        previousNode = currentNode;
        currentNode = currentNode.next;
        i++;
      }
      previousNode.next = newNode;
    }
    newNode.next = currentNode;
    length++;
  }
}
```
