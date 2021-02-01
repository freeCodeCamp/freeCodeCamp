---
id: 587d8251367417b2b2512c62
title: 创建链接列表类
challengeType: 1
videoUrl: ''
dashedName: create-a-linked-list-class
---

# --description--

让我们创建一个`linked list`类。每个链接列表都应该从一些基本属性开始： `head` （列表中的第一项）和`length` （列表中的项目数）。有时您会看到链接列表的实现，其中包含列表的最后一个元素的`tail` ，但是现在我们将坚持使用这两个元素。每当我们向链表添加元素时，我们的`length`属性应该加1。我们想要一种方法将项添加到链表中，因此我们要创建的第一种方法是`add`方法。如果我们的列表为空，那么向链表添加一个元素就足够了：我们只是将该元素包装在`Node`类中，然后将该节点分配给链表的`head` 。但是如果我们的名单已经有一个或多个成员呢？我们如何在列表中添加元素？回想一下，链表中的每个节点都有一个`next`属性。要将节点添加到列表，请在列表中找到最后一个节点，并将该节点的最后`next`属性指向新节点。 （提示：当节点的`next`属性为`null`时，您知道已到达链表的末尾。）

# --instructions--

编写一个add方法，将您推送到链接列表的第一个节点分配给`head` ;之后，每当添加一个节点时，每个节点都应该由前一个节点的`next`属性引用。注意每次将元素添加到链接列表时，列表的`length`应增加1。

# --hints--

您的`LinkedList`类应该有一个`add`方法。

```js
assert(
  (function () {
    var test = new LinkedList();
    return typeof test.add === 'function';
  })()
);
```

您的`LinkedList`类应该为添加的第一个节点分配`head` 。

```js
assert(
  (function () {
    var test = new LinkedList();
    test.add('cat');
    return test.head().element === 'cat';
  })()
);
```

`LinkedList`类中的上一个`node`应该引用创建的最新节点。

```js
assert(
  (function () {
    var test = new LinkedList();
    test.add('cat');
    test.add('dog');
    return test.head().next.element === 'dog';
  })()
);
```

`LinkedList`类的`size`应该等于`LinkedList`的节点数量。

```js
assert(
  (function () {
    var test = new LinkedList();
    test.add('cat');
    test.add('dog');
    return test.size() === 2;
  })()
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

  this.head = function(){
    return head;
  };

  this.size = function(){
    return length;
  };

  this.add = function(element){
    // Only change code below this line

    // Only change code above this line
  };
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

  this.head = function(){
    return head;
  };

  this.size = function(){
    return length;
  };

  this.add = function(element){
    // Only change code below this line
    if (head == null) {
      head = new Node(element);
    } 
    else {
      let currentNode = head;
      while (currentNode.next != null) {
        // currentNode.next will be last node of linked list after loop
        currentNode = currentNode.next;
      }
      currentNode.next = new Node(element);
    }
    length++;
    // Only change code above this line
  };
}
```
