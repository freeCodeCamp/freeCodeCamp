---
id: 587d825a367417b2b2512c87
challengeType: 1
videoUrl: ''
title: 创建双向链接列表
---

## Description
<section id="description">到目前为止，我们创建的所有链接列表都是单链表。在这里，我们将创建一个<dfn>双向链表</dfn> 。顾名思义，双向链表中的节点引用了列表中的下一个和上一个节点。这允许我们在两个方向上遍历列表，但它还需要使用更多内存，因为每个节点必须包含对列表中前一个节点的附加引用。 </section>

## Instructions
<section id="instructions">我们提供了一个<code>Node</code>对象并启动了我们的<code>DoublyLinkedList</code> 。让我们将两个方法添加到名为<code>add</code> and <code>remove</code>双向链表<code>remove</code> 。 <code>add</code>方法应该将给定元素添加到列表中，而<code>remove</code>方法应该删除列表中所有出现的给定元素。编写这些方法时要小心处理任何可能的边缘情况，例如删除第一个或最后一个元素。此外，删除空列表中的任何项应返回<code>null</code> 。 </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 存在DoublyLinkedList数据结构。
    testString: assert((function() { var test = false; if (typeof DoublyLinkedList !== 'undefined') { test = new DoublyLinkedList() }; return (typeof test == 'object')})());
  - text: DoublyLinkedList有一个名为add的方法。
    testString: assert((function() { var test = false; if (typeof DoublyLinkedList !== 'undefined') { test = new DoublyLinkedList() }; if (test.add == undefined) { return false; }; return (typeof test.add == 'function')})());
  - text: DoublyLinkedList有一个名为remove的方法。
    testString: assert((function() { var test = false; if (typeof DoublyLinkedList !== 'undefined') { test = new DoublyLinkedList() }; if (test.remove == undefined) { return false; }; return (typeof test.remove == 'function')})());
  - text: 从空列表中删除项目将返回null。
    testString: assert((function() { var test = false; if (typeof DoublyLinkedList !== 'undefined') { test = new DoublyLinkedList() }; return (test.remove(100) == null); })());
  - text: add方法将项添加到列表中。
    testString: assert((function() { var test = false; if (typeof DoublyLinkedList !== 'undefined') { test = new DoublyLinkedList() }; test.add(5); test.add(6); test.add(723); return (test.print().join('') == '56723'); })());
  - text: 每个节点都跟踪前一个节点。
    testString: assert((function() { var test = false; if (typeof DoublyLinkedList !== 'undefined') { test = new DoublyLinkedList() }; test.add(50); test.add(68); test.add(73); return (test.printReverse().join('') == '736850'); })());
  - text: 可以从列表中删除第一个项目。
    testString: assert((function() { var test = false; if (typeof DoublyLinkedList !== 'undefined') { test = new DoublyLinkedList() }; test.add(25); test.add(35); test.add(60); test.remove(25); return ( test.print().join('') == '3560' ) })());
  - text: 最后一项可以从列表中删除。
    testString: assert((function() { var test = false; if (typeof DoublyLinkedList !== 'undefined') { test = new DoublyLinkedList() }; test.add(25); test.add(35); test.add(60); test.remove(60); return ( test.print().join('') == '2535' ) })());

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
var Node = function(data, prev) {
  this.data = data;
  this.prev = prev;
  this.next = null;
};
var DoublyLinkedList = function() {
  this.head = null;
  this.tail = null;
  // change code below this line
  // change code above this line
};

```

</div>


### After Test
<div id='js-teardown'>

```js
console.info('after the test');
```

</div>

</section>

## Solution
<section id='solution'>

```js
// solution required
```

/section>
