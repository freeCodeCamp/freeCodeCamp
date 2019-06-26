---
id: 587d8258367417b2b2512c7f
title: Use Breadth First Search in a Binary Search Tree
challengeType: 1
videoUrl: ''
localeTitle: 在二叉搜索树中使用广度优先搜索
---

## Description
<section id="description">这里我们将介绍另一种树遍历方法：广度优先搜索。与上一次挑战中的深度优先搜索方法相比，广度优先搜索在继续进入下一级别之前探索树中给定级别中的所有节点。通常，队列在广度优先搜索算法的设计中用作辅助数据结构。在此方法中，我们首先将根节点添加到队列中。然后我们开始一个循环，我们将队列中的第一个项目出列，将其添加到一个新数组，然后检查它们的子子树。如果它的孩子不是空的，他们每个都被排队。此过程将继续，直到队列为空。说明：让我们在树中创建一个名为<code>levelOrder</code>的广度优先搜索方法。此方法应返回一个包含所有树节点值的数组，并以广度优先的方式进行探索。确保返回数组中的值，而不是节点本身。应从左到右遍历一个级别。接下来，让我们编写一个名为<code>reverseLevelOrder</code>的类似方法，它在每个级别执行相同的搜索，但是反向（从右到左）。 </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 測試文本
    testString: assert(true);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
var displayTree = (tree) => console.log(JSON.stringify(tree, null, 2));
function Node(value) {
    this.value = value;
    this.left = null;
    this.right = null;
}
function BinarySearchTree() {
    this.root = null;
    // change code below this line
    // change code above this line
}

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
</section>
