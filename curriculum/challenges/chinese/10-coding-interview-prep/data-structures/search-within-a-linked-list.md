---
id: 587d8251367417b2b2512c64
title: Search within a Linked List
challengeType: 1
videoUrl: ''
localeTitle: 在链接列表中搜索
---

## Description
<section id="description">让我们为链表类添加一些更有用的方法。如果我们可以判断我们的列表是否为空，那么它是否有用，就像我们的<code>Stack</code>和<code>Queue</code>类一样？我们还应该能够在链表中找到特定元素。遍历数据结构是你想要进行大量练习的东西！让我们创建一个<code>indexOf</code>方法，该方法将<code>element</code>作为参数，并在链表中返回该元素的<code>index</code> 。如果在链接列表中找不到该元素，则返回<code>-1</code> 。让我们实现一个相反的方法：一个<code>elementAt</code>方法，它将<code>index</code>作为参数并返回给定<code>index</code>处的<code>element</code> 。如果未找到任何<code>element</code> ，则返回<code>undefined</code> 。 </section>

## Instructions
<section id="instructions">编写一个检查链表是否为空的<code>isEmpty</code>方法，返回给定元素<code>index</code>的<code>indexOf</code>方法，以及返回给定<code>index.</code>处<code>element</code>的<code>elementAt</code> <code>index.</code> </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 您的<code>LinkedList</code>类应该有一个<code>indexOf</code>方法。
    testString: assert((function(){var test = new LinkedList(); return (typeof test.indexOf === 'function')}()));
  - text: 您的<code>LinkedList</code>类应该有一个<code>elementAt</code>方法。
    testString: assert((function(){var test = new LinkedList(); return (typeof test.elementAt === 'function')}()));
  - text: 您的<code>size</code>方法应返回链表的长度
    testString: assert((function(){var test = new LinkedList(); test.add('cat'); test.add('dog'); test.add('kitten'); return test.size() === 3}()));
  - text: <code>indexOf</code>方法应该返回给定元素的索引。
    testString: assert((function(){var test = new LinkedList(); test.add('cat'); test.add('dog'); test.add('kitten'); return test.indexOf('kitten') === 2}()));
  - text: 您的<code>elementAt</code>方法应该返回给定索引处的元素。
    testString: assert((function(){var test = new LinkedList(); test.add('cat'); test.add('dog'); test.add('kitten'); return test.elementAt(1) === 'dog'}()));

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

  this.size = function() {
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
