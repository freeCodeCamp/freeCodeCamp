---
id: 587d8251367417b2b2512c65
challengeType: 1
videoUrl: ''
title: 按索引从链接列表中删除元素
---

## Description
<section id="description">在我们继续讨论另一个数据结构之前，让我们先了解链接列表的最后几点练习。让我们编写一个<code>removeAt</code>方法，删除给定<code>index</code>处的<code>element</code> 。该方法应该称为<code>removeAt(index)</code> 。要删除某个<code>index</code>处的<code>element</code> ，我们需要在沿着链表移动时保持每个节点的运行计数。用于遍历链表的元素的常用技术涉及<dfn>“转轮”</dfn>或“哨兵”，它们“指向”代码所比较的节点。在我们的情况下，开始于<code>head</code>我们的名单中，我们先从一个<code>currentIndex</code>始于变量<code>0</code> 。对于我们传递的每个节点， <code>currentIndex</code>应该增加1。就像我们的<code>remove(element)</code>方法一样，当我们在removeAt（index）方法中删除节点时，我们需要注意不要孤立列表的其余部分。我们通过确保引用已删除节点的节点具有对下一节点的引用来保持节点连续。 </section>

## Instructions
<section id="instructions">编写<code>removeAt(index)</code>方法，删除并返回给定<code>index</code>处的节点。如果给定<code>index</code>为负数，或者大于或等于链表<code>length</code> ，则该方法应返回<code>null</code> 。注意请记住保持<code>currentIndex</code>计数。 </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 您的<code>LinkedList</code>类应该有一个<code>removeAt</code>方法。
    testString: 'assert((function(){var test = new LinkedList(); return (typeof test.removeAt === "function")}()), "Your <code>LinkedList</code> class should have a <code>removeAt</code> method.");'
  - text: 您的<code>removeAt</code>方法应该减少链表的<code>length</code>
    testString: 'assert((function(){var test = new LinkedList(); test.add("cat"); test.add("dog"); test.add("kitten"); test.removeAt(1); return test.size() === 2}()), "Your <code>removeAt</code> method should reduce the <code>length</code> of the linked list");'
  - text: 您的<code>removeAt</code>方法还应该返回已删除节点的元素。
    testString: 'assert((function(){var test = new LinkedList(); test.add("cat"); test.add("dog"); test.add("kitten");  return test.removeAt(1) === "dog"}()), "Your <code>removeAt</code> method should also return the element of the removed node.");'
  - text: 如果给定索引小于<code>0</code>则<code>removeAt</code>方法也应返回<code>null</code>
    testString: 'assert((function(){var test = new LinkedList(); test.add("cat"); test.add("dog"); test.add("kitten");  return (test.removeAt(-1) === null)}()), "Your <code>removeAt</code> method should also return <code>null</code> if the given index is less than <code>0</code>");'
  - text: 如果给定索引等于或大于链表的<code>length</code> ，则<code>removeAt</code>方法也应返回<code>null</code> 。
    testString: 'assert((function(){var test = new LinkedList(); test.add("cat"); test.add("dog"); test.add("kitten");  return (test.removeAt(3) === null)}()), "Your <code>removeAt</code> method should also return <code>null</code> if the given index is equal or more than the <code>length</code> of the linked list.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function LinkedList() {
  var length = 0;
  var head = null;

  var Node = function(element){ // {1}
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

  this.remove = function(element){
    var currentNode = head;
    var previousNode;
    if(currentNode.element === element){
        head = currentNode.next;
    } else {
        while(currentNode.element !== element) {
            previousNode = currentNode;
            currentNode = currentNode.next;
        }

        previousNode.next = currentNode.next;
    }

    length --;
  };

  // Only change code below this line

  // Only change code above this line
}

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```

/section>
