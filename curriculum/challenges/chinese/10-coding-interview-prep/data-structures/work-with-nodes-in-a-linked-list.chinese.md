---
id: 587d8251367417b2b2512c61
title: Work with Nodes in a Linked List
challengeType: 1
videoUrl: ''
localeTitle: 使用链接列表中的节点
---

## Description
<section id="description">您将在计算机科学中遇到的另一个常见数据结构是<dfn>链表</dfn> 。链表是数据元素的线性集合，称为“节点”，每个数据元素指向下一个。链表中的每个<dfn>节点都</dfn>包含两个关键信息： <code>element</code>本身和对下一个<code>node</code>的引用。想象一下你在康加舞线上。你的手掌握在线下的下一个人身上，你身后的人就会抓住你。你可以直接看到这个人，但是他们阻挡了前方其他人的视线。一个节点就像一个康加舞线上的人：他们知道自己是谁，他们只能看到下一个人，但他们并不知道前方或后方的其他人。 </section>

## Instructions
<section id="instructions">在我们的代码编辑器中，我们创建了两个节点， <code>Kitten</code>和<code>Puppy</code> ，我们手动将<code>Kitten</code>节点连接到<code>Puppy</code>节点。创建<code>Cat</code>和<code>Dog</code>节点并手动将它们添加到该行。 </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 您的<code>Puppy</code>节点应该具有对<code>Cat</code>节点的引用。
    testString: assert(Puppy.next.element === "Cat");
  - text: 您的<code>Cat</code>节点应该具有对<code>Dog</code>节点的引用。
    testString: assert(Cat.next.element === "Dog");

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
var Node = function(element){
    this.element = element;
    this.next = null;
};
var Kitten = new Node("Kitten");
var Puppy = new Node("Puppy");

Kitten.next = Puppy;
// only add code below this line

// test your code
console.log(Kitten.next);

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```

/section>
