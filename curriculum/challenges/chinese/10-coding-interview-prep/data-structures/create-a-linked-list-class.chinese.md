---
id: 587d8251367417b2b2512c62
title: Create a Linked List Class
challengeType: 1
videoUrl: ''
localeTitle: 创建链接列表类
---

## Description
<section id="description">让我们创建一个<code>linked list</code>类。每个链接列表都应该从一些基本属性开始： <code>head</code> （列表中的第一项）和<code>length</code> （列表中的项目数）。有时您会看到链接列表的实现，其中包含列表的最后一个元素的<code>tail</code> ，但是现在我们将坚持使用这两个元素。每当我们向链表添加元素时，我们的<code>length</code>属性应该加1。我们想要一种方法将项添加到链表中，因此我们要创建的第一种方法是<code>add</code>方法。如果我们的列表为空，那么向链表添加一个元素就足够了：我们只是将该元素包装在<code>Node</code>类中，然后将该节点分配给链表的<code>head</code> 。但是如果我们的名单已经有一个或多个成员呢？我们如何在列表中添加元素？回想一下，链表中的每个节点都有一个<code>next</code>属性。要将节点添加到列表，请在列表中找到最后一个节点，并将该节点的最后<code>next</code>属性指向新节点。 （提示：当节点的<code>next</code>属性为<code>null</code>时，您知道已到达链表的末尾。） </section>

## Instructions
<section id="instructions">编写一个add方法，将您推送到链接列表的第一个节点分配给<code>head</code> ;之后，每当添加一个节点时，每个节点都应该由前一个节点的<code>next</code>属性引用。注意每次将元素添加到链接列表时，列表的<code>length</code>应增加1。 </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 您的<code>LinkedList</code>类应该有一个<code>add</code>方法。
    testString: assert((function(){var test = new LinkedList(); return (typeof test.add === 'function')}()));
  - text: 您的<code>LinkedList</code>类应该为添加的第一个节点分配<code>head</code> 。
    testString: assert((function(){var test = new LinkedList(); test.add('cat'); return test.head().element === 'cat'}()));
  - text: <code>LinkedList</code>类中的上一个<code>node</code>应该引用创建的最新节点。
    testString: assert((function(){var test = new LinkedList(); test.add('cat'); test.add('dog'); return test.head().next.element === 'dog'}()));
  - text: <code>LinkedList</code>类的<code>size</code>应该等于<code>LinkedList</code>的节点数量。
    testString: assert((function(){var test = new LinkedList(); test.add('cat'); test.add('dog'); return test.size() === 2}()));

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

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```

/section>
