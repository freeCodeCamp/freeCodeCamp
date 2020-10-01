---
id: 587d8257367417b2b2512c7c
challengeType: 1
videoUrl: ''
title: 检查二进制搜索树中是否存在元素
---

## Description
<section id="description">现在我们对二进制搜索树有了一般意义，让我们更详细地讨论它。二进制搜索树为平均情况下的查找，插入和删除的常见操作提供对数时间，并且在最坏情况下提供线性时间。为什么是这样？这些基本操作中的每一个都要求我们在树中找到一个项目（或者在插入的情况下找到它应该去的地方），并且由于每个父节点处的树结构，我们向左或向右分支并且有效地排除了一半的大小剩下的树。这使得搜索与树中节点数的对数成比例，这在平均情况下为这些操作创建对数时间。好的，但最坏的情况呢？那么，可考虑从以下值建构一棵树，将它们从左至右： <code>10</code> ， <code>12</code> ， <code>17</code> ， <code>25</code> 。根据我们的规则二叉搜索树，我们将增加<code>12</code>到右侧<code>10</code> ， <code>17</code> ，以这样的权利，以及<code>25</code>到这一权利。现在我们的树类似于一个链表，并且遍历它以找到<code>25</code>将要求我们以线性方式遍历所有项目。因此，在最坏的情况下，线性时间。这里的问题是树是不平衡的。我们将更多地了解这在以下挑战中意味着什么。说明：在此挑战中，我们将为树创建一个实用程序。编写一个方法<code>isPresent</code> ，它接受一个整数值作为输入，并在二叉搜索树中返回该值是否存在的布尔值。 </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 存在<code>BinarySearchTree</code>数据结构。
    testString: assert((function() { var test = false; if (typeof BinarySearchTree !== 'undefined') { test = new BinarySearchTree() }; return (typeof test == 'object')})());
  - text: 二叉搜索树有一个名为<code>isPresent</code>的方法。
    testString: assert((function() { var test = false; if (typeof BinarySearchTree !== 'undefined') { test = new BinarySearchTree() } else { return false; }; return (typeof test.isPresent == 'function')})());
  - text: <code>isPresent</code>方法正确检查添加到树中的元素是否存在。
    testString: assert((function() { var test = false; if (typeof BinarySearchTree !== 'undefined') { test = new BinarySearchTree() } else { return false; }; if (typeof test.isPresent !== 'function') { return false; }; test.add(4); test.add(7); test.add(411); test.add(452); return ( test.isPresent(452) && test.isPresent(411) && test.isPresent(7) && !test.isPresent(100) ); })());
  - text: <code>isPresent</code>处理树为空的情况。
    testString: assert((function() { var test = false; if (typeof BinarySearchTree !== 'undefined') { test = new BinarySearchTree() } else { return false; }; if (typeof test.isPresent !== 'function') { return false; }; return test.isPresent(5) == false; })());

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
