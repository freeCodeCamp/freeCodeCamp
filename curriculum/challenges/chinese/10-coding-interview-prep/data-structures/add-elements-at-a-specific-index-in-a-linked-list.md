---
id: 587d8252367417b2b2512c67
title: Add Elements at a Specific Index in a Linked List
challengeType: 1
videoUrl: ''
localeTitle: 在链接列表中的特定索引处添加元素
---

## Description
<section id="description">让我们创建一个addAt（index，element）方法，在给定的索引处添加一个元素。就像我们如何删除给定索引处的元素一样，我们需要在遍历链表时跟踪currentIndex。当currentIndex与给定索引匹配时，我们需要重新分配上一个节点的下一个属性以引用新添加的节点。并且新节点应该引用currentIndex中的下一个节点。回到康加线的例子，一个新人想加入这条线，但他想加入中间。你处于中间位置，所以你要把手从你前面的人身上移开。新人走过去，把手放在你曾经牵过手的那个人身上，现在你已经掌握了新人。说明创建addAt（index，element）方法，该方法在给定索引处添加元素。如果无法添加元素，则返回false。注意请记住检查给定索引是否为负数或者是否长于链接列表的长度。 </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 当给定索引为0时， <code>addAt</code>方法应重新分配<code>head</code>到新节点。
    testString: assert((function(){var test = new LinkedList(); test.add('cat'); test.add('dog'); test.addAt(0,'cat'); return test.head().element === 'cat'}()));
  - text: 对于添加到链接列表的每个新节点， <code>addAt</code>方法应该将链表的长度增加一。
    testString: assert((function(){var test = new LinkedList(); test.add('cat'); test.add('dog'); test.addAt(0,'cat'); return test.size() === 3}()));
  - text: 如果无法添加节点，则<code>addAt</code>方法应返回<code>false</code> 。
    testString: assert((function(){var test = new LinkedList(); test.add('cat'); test.add('dog'); return (test.addAt(4,'cat') === false); }()));

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
