---
id: 587d825a367417b2b2512c88
challengeType: 1
videoUrl: ''
title: 反转双重链接列表
---

## Description
<section id="description">让我们为我们的双向链表创建一个名为reverse的方法，它可以反转列表。一旦执行该方法，头部应指向前一个尾部，尾部应指向前一个头部。现在，如果我们从头到尾遍历列表，我们应该以与原始列表相反的顺序来满足节点。尝试反转空列表应返回null。 </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 存在DoublyLinkedList数据结构。
    testString: assert((function() { var test = false; if (typeof DoublyLinkedList !== 'undefined') { test = new DoublyLinkedList() }; return (typeof test == 'object')})());
  - text: DoublyLinkedList有一个名为add的方法。
    testString: assert((function() { var test = false; if (typeof DoublyLinkedList !== 'undefined') { test = new DoublyLinkedList() }; if (test.add == undefined) { return false; }; return (typeof test.add == 'function')})());
  - text: DoublyLinkedList有一个名为reverse的方法。
    testString: assert((function() { var test = false; if (typeof DoublyLinkedList !== 'undefined') { test = new DoublyLinkedList() }; if (test.reverse == undefined) { return false; }; return (typeof test.reverse == 'function')})());
  - text: 反转空列表将返回null。
    testString: assert((function() { var test = false; if (typeof DoublyLinkedList !== 'undefined') { test = new DoublyLinkedList() }; return (test.reverse() == null); })());
  - text: 反向方法反转列表。
    testString: assert((function() { var test = false; if (typeof DoublyLinkedList !== 'undefined') { test = new DoublyLinkedList() }; test.add(58); test.add(61); test.add(32); test.reverse(); return (test.print().join('') == '326158'); })());
  - text: 当列表反转时，正确维护下一个和上一个引用。
    testString: assert((function() { var test = false; if (typeof DoublyLinkedList !== 'undefined') { test = new DoublyLinkedList() }; test.add(11); test.add(22); test.add(33); test.reverse(); return (test.printReverse().join('') == '112233'); })());

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
