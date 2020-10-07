---
id: 587d8257367417b2b2512c7d
challengeType: 1
videoUrl: ''
title: 找到二叉搜索树的最小和最大高度
---

## Description
<section id="description">在最后一个挑战中，我们描述了树可能变得不平衡的情景。为了理解平衡的概念，让我们看看另一个树属性：高度。树中的高度表示从根节点到任何给定叶节点的距离。高度分支的树结构中的不同路径可以具有不同的高度，但是对于给定的树，将具有最小和最大高度。如果树是平衡的，则这些值最多相差一个。这意味着在平衡树中，所有叶节点都存在于同一级别中，或者如果它们不在同一级别内，则它们最多相隔一个级别。平衡的属性对于树很重要，因为它决定了树操作的效率。正如我们在上一次挑战中所解释的那样，我们面临严重不平衡树木的最坏情况时间复杂性。自平衡树通常用于在具有动态数据集的树中解决此问题。这些的常见例子包括AVL树，红黑树和B树。这些树都包含额外的内部逻辑，当插入或删除创建不平衡状态时，它会重新平衡树。注意：与height相似的属性是depth，它指的是给定节点距根节点的距离。说明：为我们的二叉树编写两种方法： <code>findMinHeight</code>和<code>findMaxHeight</code> 。这些方法应分别返回给定二叉树内最小和最大高度的整数值。如果节点为空，请为其指定高度<code>-1</code> （这是基本情况）。最后，添加第三个方法<code>isBalanced</code> ，它返回<code>true</code>或<code>false</code>具体取决于树是否平衡。您可以使用刚才编写的前两种方法来确定这一点。 </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 存在<code>BinarySearchTree</code>数据结构。
    testString: assert((function() { var test = false; if (typeof BinarySearchTree !== 'undefined') { test = new BinarySearchTree() }; return (typeof test == 'object')})());
  - text: 二叉搜索树有一个名为<code>findMinHeight</code>的方法。
    testString: assert((function() { var test = false; if (typeof BinarySearchTree !== 'undefined') { test = new BinarySearchTree() } else { return false; }; return (typeof test.findMinHeight == 'function')})());
  - text: 二叉搜索树有一个名为<code>findMaxHeight</code>的方法。
    testString: assert((function() { var test = false; if (typeof BinarySearchTree !== 'undefined') { test = new BinarySearchTree() } else { return false; }; return (typeof test.findMaxHeight == 'function')})());
  - text: 二叉搜索树有一个名为<code>isBalanced</code>的方法。
    testString: assert((function() { var test = false; if (typeof BinarySearchTree !== 'undefined') { test = new BinarySearchTree() } else { return false; }; return (typeof test.isBalanced == 'function')})());
  - text: <code>findMinHeight</code>方法返回树的最小高度。
    testString: assert((function() { var test = false; if (typeof BinarySearchTree !== 'undefined') { test = new BinarySearchTree() } else { return false; }; if (typeof test.findMinHeight !== 'function') { return false; }; test.add(4); test.add(1); test.add(7); test.add(87); test.add(34); test.add(45); test.add(73); test.add(8); return (test.findMinHeight() == 1); })());
  - text: <code>findMaxHeight</code>方法返回树的最大高度。
    testString: assert((function() { var test = false; if (typeof BinarySearchTree !== 'undefined') { test = new BinarySearchTree() } else { return false; }; if (typeof test.findMaxHeight !== 'function') { return false; }; test.add(4); test.add(1); test.add(7); test.add(87); test.add(34); test.add(45); test.add(73); test.add(8); return (test.findMaxHeight() == 5); })());
  - text: 空树返回高度<code>-1</code> 。
    testString: assert((function() { var test = false; if (typeof BinarySearchTree !== 'undefined') { test = new BinarySearchTree() } else { return false; }; if (typeof test.findMaxHeight !== 'function') { return false; }; return (test.findMaxHeight() == -1); })());
  - text: 如果树是平衡二叉搜索树，则<code>isBalanced</code>方法返回true。
    testString: assert((function() { var test = false; if (typeof BinarySearchTree !== 'undefined') { test = new BinarySearchTree() } else { return false; }; if (typeof test.isBalanced !== 'function') { return false; }; test.add(4); test.add(1); test.add(7); test.add(87); test.add(34); test.add(45); test.add(73); test.add(8); return !test.isBalanced(); })());

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
