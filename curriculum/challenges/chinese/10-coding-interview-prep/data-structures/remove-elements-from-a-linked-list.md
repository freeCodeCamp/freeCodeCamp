---
id: 587d8251367417b2b2512c63
challengeType: 1
videoUrl: ''
title: 从链接列表中删除元素
---

## Description
<section id="description">链接列表的任何实现所需的下一个重要方法是<code>remove</code>方法。此方法应将要删除的元素作为参数，然后搜索列表以查找并删除包含该元素的节点。每当我们从链表中删除一个节点时，重要的是我们不要意外地孤立列表的其余部分。回想一下，每个节点的<code>next</code>属性都指向列表中跟随它的节点。如果我们删除中间元素，比如说，我们要确保我们从该元素的前一个节点的<code>next</code>属性到中间元素的<code>next</code>属性（这是列表中的下一个节点）的连接！这可能听起来真的很混乱，所以让我们回到康加线的例子，这样我们就有了一个很好的概念模型。想象自己在康加舞线上，直接在你面前的人离开了这条线。刚离开生产线的人不再将手放在任何人身上 - 而且你不再把手放在离开的人身上。你向前走，把你的手放在你看到的下一个人身上。如果我们要删除的元素是<code>head</code>元素，我们将<code>head</code>重新分配给链表的第二个节点。 </section>

## Instructions
<section id="instructions">编写一个<code>remove</code>方法，该方法接受一个元素并将其从链表中删除。注意每次从链接列表中删除元素时，列表的<code>length</code>应减少一。 </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 您的<code>LinkedList</code>类应该有一个<code>remove</code>方法。
    testString: 'assert((function(){var test = new LinkedList(); return (typeof test.remove === "function")}()), "Your <code>LinkedList</code> class should have a <code>remove</code> method.");'
  - text: <code>remove</code>第一个节点时， <code>remove</code>方法应重新分配<code>head</code>到第二个节点。
    testString: 'assert((function(){var test = new LinkedList(); test.add("cat"); test.add("dog"); test.remove("cat"); return test.head().element === "dog"}()), "Your <code>remove</code> method should reassign <code>head</code> to the second node when the first node is removed.");'
  - text: 对于每个删除的节点，您的<code>remove</code>方法应该将链表的<code>length</code>减少一个。
    testString: 'assert((function(){var test = new LinkedList(); test.add("cat"); test.add("dog"); test.remove("cat"); return test.size() === 1})(), "Your <code>remove</code> method should decrease the <code>length</code> of the linked list by one for every node removed.");'
  - text: 您的<code>remove</code>方法应该将已删除节点的上<code>next</code>节点的引用重新分配给已删除节点的<code>next</code>引用。
    testString: 'assert((function(){var test = new LinkedList(); test.add("cat"); test.add("dog");test.add("kitten"); test.remove("dog"); return test.head().next.element === "kitten"})(), "Your <code>remove</code> method should reassign the reference of the previous node of the removed node to the removed node&apos;s <code>next</code> reference.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

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

  this.remove = function(element){
    // Only change code below this line

    // Only change code above this line
  };
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
