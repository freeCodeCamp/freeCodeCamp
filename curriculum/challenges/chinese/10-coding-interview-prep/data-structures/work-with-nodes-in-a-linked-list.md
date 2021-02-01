---
id: 587d8251367417b2b2512c61
title: 使用链接列表中的节点
challengeType: 1
videoUrl: ''
dashedName: work-with-nodes-in-a-linked-list
---

# --description--

您将在计算机科学中遇到的另一个常见数据结构是<dfn>链表</dfn> 。链表是数据元素的线性集合，称为“节点”，每个数据元素指向下一个。链表中的每个<dfn>节点都</dfn>包含两个关键信息： `element`本身和对下一个`node`的引用。想象一下你在康加舞线上。你的手掌握在线下的下一个人身上，你身后的人就会抓住你。你可以直接看到这个人，但是他们阻挡了前方其他人的视线。一个节点就像一个康加舞线上的人：他们知道自己是谁，他们只能看到下一个人，但他们并不知道前方或后方的其他人。

# --instructions--

在我们的代码编辑器中，我们创建了两个节点， `Kitten`和`Puppy` ，我们手动将`Kitten`节点连接到`Puppy`节点。创建`Cat`和`Dog`节点并手动将它们添加到该行。

# --hints--

您的`Puppy`节点应该具有对`Cat`节点的引用。

```js
assert(Puppy.next.element === 'Cat');
```

您的`Cat`节点应该具有对`Dog`节点的引用。

```js
assert(Cat.next.element === 'Dog');
```

# --seed--

## --seed-contents--

```js
var Node = function(element) {
  this.element = element;
  this.next = null;
};
var Kitten = new Node('Kitten');
var Puppy = new Node('Puppy');

Kitten.next = Puppy;
// Only change code below this line
```

# --solutions--

```js
// solution required
```
