---
id: 587d8251367417b2b2512c65
title: 按索引从链接列表中删除元素
challengeType: 1
videoUrl: ''
dashedName: remove-elements-from-a-linked-list-by-index
---

# --description--

在我们继续讨论另一个数据结构之前，让我们先了解链接列表的最后几点练习。让我们编写一个`removeAt`方法，删除给定`index`处的`element` 。该方法应该称为`removeAt(index)` 。要删除某个`index`处的`element` ，我们需要在沿着链表移动时保持每个节点的运行计数。用于遍历链表的元素的常用技术涉及<dfn>“转轮”</dfn>或“哨兵”，它们“指向”代码所比较的节点。在我们的情况下，开始于`head`我们的名单中，我们先从一个`currentIndex`始于变量`0` 。对于我们传递的每个节点， `currentIndex`应该增加1。就像我们的`remove(element)`方法一样，当我们在removeAt（index）方法中删除节点时，我们需要注意不要孤立列表的其余部分。我们通过确保引用已删除节点的节点具有对下一节点的引用来保持节点连续。

# --instructions--

编写`removeAt(index)`方法，删除并返回给定`index`处的节点。如果给定`index`为负数，或者大于或等于链表`length` ，则该方法应返回`null` 。注意请记住保持`currentIndex`计数。

# --hints--

您的`LinkedList`类应该有一个`removeAt`方法。

```js
assert(
  (function () {
    var test = new LinkedList();
    return typeof test.removeAt === 'function';
  })(),
  'Your <code>LinkedList</code> class should have a <code>removeAt</code> method.'
);
```

您的`removeAt`方法应该减少链表的`length`

```js
assert(
  (function () {
    var test = new LinkedList();
    test.add('cat');
    test.add('dog');
    test.add('kitten');
    test.removeAt(1);
    return test.size() === 2;
  })(),
  'Your <code>removeAt</code> method should reduce the <code>length</code> of the linked list'
);
```

您的`removeAt`方法还应该返回已删除节点的元素。

```js
assert(
  (function () {
    var test = new LinkedList();
    test.add('cat');
    test.add('dog');
    test.add('kitten');
    return test.removeAt(1) === 'dog';
  })(),
  'Your <code>removeAt</code> method should also return the element of the removed node.'
);
```

如果给定索引小于`0`则`removeAt`方法也应返回`null`

```js
assert(
  (function () {
    var test = new LinkedList();
    test.add('cat');
    test.add('dog');
    test.add('kitten');
    return test.removeAt(-1) === null;
  })(),
  'Your <code>removeAt</code> method should also return <code>null</code> if the given index is less than <code>0</code>'
);
```

如果给定索引等于或大于链表的`length` ，则`removeAt`方法也应返回`null` 。

```js
assert(
  (function () {
    var test = new LinkedList();
    test.add('cat');
    test.add('dog');
    test.add('kitten');
    return test.removeAt(3) === null;
  })(),
  'Your <code>removeAt</code> method should also return <code>null</code> if the given index is equal or more than the <code>length</code> of the linked list.'
);
```

# --seed--

## --seed-contents--

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
    if(head === null){
      head = node;
    } else {
      var currentNode = head;

      while(currentNode.next){
        currentNode  = currentNode.next;
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

  var Node = function (element) {
    this.element = element;
    this.next = null;
  };

  this.size = function () {
    return length;
  };

  this.head = function () {
    return head;
  };

  this.add = function (element) {
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

  this.removeAt = function (index) {
    var currentNode = head;
    var previous = head;
    var count = 0;
    if (index >= length || index < 0) {
      return null;
    }
    if (index === 0) {
      var removed = head.element;
      head = currentNode.next;
    } else {
      while (count < index) {
        previous = currentNode;
        currentNode = currentNode.next;
        count++;
      }
      var removed = previous.next.element;
      previous.next = currentNode.next;
    }
    length--;
    return removed;
  };
}
```
