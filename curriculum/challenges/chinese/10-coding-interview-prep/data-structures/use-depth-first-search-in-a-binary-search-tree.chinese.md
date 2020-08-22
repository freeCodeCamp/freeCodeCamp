---
id: 587d8257367417b2b2512c7e
title: Use Depth First Search in a Binary Search Tree
challengeType: 1
videoUrl: ''
localeTitle: 在二叉搜索树中使用深度优先搜索
---

## Description
<section id="description">我们知道如何在二叉搜索树中搜索特定值。但是，如果我们只想探索整棵树呢？或者，如果我们没有有序树，我们只需要搜索一个值？这里我们将介绍一些可用于探索树数据结构的树遍历方法。首先是深度优先搜索。在深度优先搜索中，在搜索继续到另一个子树之前，尽可能深地探索给定子树。有三种方法可以完成：按顺序：从最左边的节点开始搜索，到最右边的节点结束。预购：在树叶前探索所有的根。下订单：在根之前探索所有的叶子。您可能会猜到，您可以选择不同的搜索方法，具体取决于树存储的数据类型以及您要查找的内容。对于二叉搜索树，inorder遍历以排序顺序返回节点。说明：这里我们将在二叉搜索树上创建这三种搜索方法。深度优先搜索是一种固有的递归操作，只要子节点存在，它就会继续探索更多的子树。一旦理解了这个基本概念，您就可以简单地重新排列探索节点和子树的顺序，以生成上述三个搜索中的任何一个。例如，在后序搜索中，我们希望在开始返回任何节点本身之前一直递归到叶节点，而在预订搜索中，我们希望首先返回节点，然后继续递归在树下。在我们的树上定义<code>inorder</code> ， <code>preorder</code>和<code>postorder</code>方法。这些方法中的每一个都应该返回表示树遍历的项数组。确保返回数组中每个节点的整数值，而不是节点本身。最后，如果树为空，则返回<code>null</code> 。 </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 存在<code>BinarySearchTree</code>数据结构。
    testString: assert((function() { var test = false; if (typeof BinarySearchTree !== 'undefined') { test = new BinarySearchTree() }; return (typeof test == 'object')})());
  - text: 二叉搜索树有一个名为<code>inorder</code>的方法。
    testString: assert((function() { var test = false; if (typeof BinarySearchTree !== 'undefined') { test = new BinarySearchTree() } else { return false; }; return (typeof test.inorder == 'function')})());
  - text: 二叉搜索树有一个名为<code>preorder</code>的方法。
    testString: assert((function() { var test = false; if (typeof BinarySearchTree !== 'undefined') { test = new BinarySearchTree() } else { return false; }; return (typeof test.preorder == 'function')})());
  - text: 二叉搜索树有一个名为<code>postorder</code>的方法。
    testString: assert((function() { var test = false; if (typeof BinarySearchTree !== 'undefined') { test = new BinarySearchTree() } else { return false; }; return (typeof test.postorder == 'function')})());
  - text: <code>inorder</code>方法返回由inorder遍历产生的节点值数组。
    testString: assert((function() { var test = false; if (typeof BinarySearchTree !== 'undefined') { test = new BinarySearchTree() } else { return false; }; if (typeof test.inorder !== 'function') { return false; }; test.add(7); test.add(1); test.add(9); test.add(0); test.add(3); test.add(8); test.add(10); test.add(2); test.add(5); test.add(4); test.add(6); return (test.inorder().join('') == '012345678910'); })());
  - text: <code>preorder</code>方法返回由前序遍历产生的节点值数组。
    testString: assert((function() { var test = false; if (typeof BinarySearchTree !== 'undefined') { test = new BinarySearchTree() } else { return false; }; if (typeof test.preorder !== 'function') { return false; }; test.add(7); test.add(1); test.add(9); test.add(0); test.add(3); test.add(8); test.add(10); test.add(2); test.add(5); test.add(4); test.add(6); return (test.preorder().join('') == '710325469810'); })());
  - text: <code>postorder</code>方法返回由后序遍历产生的节点值数组。
    testString: assert((function() { var test = false; if (typeof BinarySearchTree !== 'undefined') { test = new BinarySearchTree() } else { return false; }; if (typeof test.postorder !== 'function') { return false; }; test.add(7); test.add(1); test.add(9); test.add(0); test.add(3); test.add(8); test.add(10); test.add(2); test.add(5); test.add(4); test.add(6); return (test.postorder().join('') == '024653181097'); })());
  - text: <code>inorder</code>方法为空树返回<code>null</code> 。
    testString: assert((function() { var test = false; if (typeof BinarySearchTree !== 'undefined') { test = new BinarySearchTree() } else { return false; }; if (typeof test.inorder !== 'function') { return false; }; return (test.inorder() == null); })());
  - text: <code>preorder</code>方法为空树返回<code>null</code> 。
    testString: assert((function() { var test = false; if (typeof BinarySearchTree !== 'undefined') { test = new BinarySearchTree() } else { return false; }; if (typeof test.preorder !== 'function') { return false; }; return (test.preorder() == null); })());
  - text: <code>postorder</code>方法为空树返回<code>null</code> 。
    testString: assert((function() { var test = false; if (typeof BinarySearchTree !== 'undefined') { test = new BinarySearchTree() } else { return false; }; if (typeof test.postorder !== 'function') { return false; }; return (test.postorder() == null); })());

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

/section>
