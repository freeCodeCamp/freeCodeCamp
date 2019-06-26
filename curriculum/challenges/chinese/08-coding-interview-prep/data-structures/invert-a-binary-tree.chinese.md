---
id: 587d8259367417b2b2512c83
title: Invert a Binary Tree
challengeType: 1
videoUrl: ''
localeTitle: 反转二叉树
---

## Description
<section id="description">这里我们将创建一个反转二叉树的函数。给定二叉树，我们希望生成一个新树，它等效于该树的镜像。与原始树的inorder遍历相比，在倒置树上运行inorder遍历将以相反的顺序探索节点。在我们的二叉树上编写一个名为<code>invert</code>的方法。调用此方法应该反转当前树结构。理想情况下，我们希望在线性时间内就地执行此操作。也就是说，我们只访问每个节点一次，我们在不使用任何额外内存的情况下修改现有的树结构。祝你好运！ </section>

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
