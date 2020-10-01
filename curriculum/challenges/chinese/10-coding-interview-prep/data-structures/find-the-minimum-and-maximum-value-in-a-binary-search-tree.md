---
id: 587d8256367417b2b2512c7a
challengeType: 1
videoUrl: ''
title: 在二叉搜索树中查找最小值和最大值
---

## Description
<section id="description">这一系列挑战将介绍树数据结构。树木是计算机科学中重要且通用的数据结构。当然，他们的名字来源于这样一个事实：当他们看到它们时，它们看起来很像我们在自然界中熟悉的树木。树数据结构以一个节点（通常称为根）开始，并从此处分支到其他节点，每个节点可以具有更多子节点，依此类推。数据结构通常以顶部的根节点可视化;你可以把它想象成一棵倒置的天然树。首先，让我们描述一下我们将在树上遇到的一些常用术语。根节点是树的顶部。树中的数据点称为节点。具有通向其他节点的分支的节点被称为分支通向的节点的父节点（子节点）。其他更复杂的家庭术语适用于您所期望的。子树是指特定节点的所有后代，分支可以称为边，而叶节点是树末端没有子节点的节点。最后，请注意树本质上是递归数据结构。也就是说，节点的任何子节点都是其子树的父节点，依此类推。在为常见树操作设计算法时，树的递归性质非常重要。首先，我们将讨论一种特定类型的树，即二叉树。实际上，我们实际上将讨论一个特定的二叉树，一个二叉搜索树。让我们来描述这意味着什么。虽然树数据结构可以在单个节点上具有任意数量的分支，但是二叉树对于每个节点只能具有两个分支。此外，针对子子树排序二叉搜索树，使得左子树中的每个节点的值小于或等于父节点的值，并且右子树中的每个节点的值是大于或等于父节点的值。可视化这种关系以便更好地理解它是非常有帮助的： <div style="width: 100%; display: flex; justify-content: center; align-items: center;"><img style="width: 100%; max-width: 350px;" src="https://user-images.githubusercontent.com/18563015/32136009-1e665d98-bbd6-11e7-9133-63184f9f9182.png"></div>现在这个有序的关系很容易看到。请注意，根节点8左侧的每个值都小于8，右侧的每个值都大于8.还要注意，此关系也适用于每个子树。例如，第一个左子项是子树。 3是父节点，它有两个子节点 - 通过控制二进制搜索树的规则，我们知道甚至没有看到这个节点的左子节点（及其任何子节点）将小于3，右边child（及其任何子级）将大于3（但也小于结构的根值），依此类推。二进制搜索树是非常常见且有用的数据结构，因为它们在几种常见操作（例如查找，插入和删除）的平均情况下提供对数时间。说明：我们将从简单开始。除了为树创建节点的函数之外，我们还在这里定义了二叉搜索树结构的骨架。观察每个节点可能具有左右值。如果它们存在，将为它们分配子子树。在我们的二叉搜索树中，定义两个方法， <code>findMin</code>和<code>findMax</code> 。这些方法应返回二叉搜索树中保存的最小值和最大值（不用担心现在向树中添加值，我们在后台添加了一些值）。如果遇到困难，请反思二进制搜索树必须为true的不变量：每个左子树小于或等于其父树，每个右子树大于或等于其父树。我们还要说我们的树只能存储整数值。如果树为空，则任一方法都应返回<code>null</code> 。 </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 存在<code>BinarySearchTree</code>数据结构。
    testString: assert((function() { var test = false; if (typeof BinarySearchTree !== 'undefined') { test = new BinarySearchTree() }; return (typeof test == 'object')})());
  - text: 二叉搜索树有一个名为<code>findMin</code>的方法。
    testString: assert((function() { var test = false; if (typeof BinarySearchTree !== 'undefined') { test = new BinarySearchTree() } else { return false; }; return (typeof test.findMin == 'function')})());
  - text: 二叉搜索树有一个名为<code>findMax</code>的方法。
    testString: assert((function() { var test = false; if (typeof BinarySearchTree !== 'undefined') { test = new BinarySearchTree() } else { return false; }; return (typeof test.findMax == 'function')})());
  - text: <code>findMin</code>方法返回二叉搜索树中的最小值。
    testString: assert((function() { var test = false; if (typeof BinarySearchTree !== 'undefined') { test = new BinarySearchTree() } else { return false; }; if (typeof test.findMin !== 'function') { return false; }; test.add(4); test.add(1); test.add(7); test.add(87); test.add(34); test.add(45); test.add(73); test.add(8); return test.findMin() == 1; })());
  - text: <code>findMax</code>方法返回二叉搜索树中的最大值。
    testString: assert((function() { var test = false; if (typeof BinarySearchTree !== 'undefined') { test = new BinarySearchTree() } else { return false; }; if (typeof test.findMax !== 'function') { return false; }; test.add(4); test.add(1); test.add(7); test.add(87); test.add(34); test.add(45); test.add(73); test.add(8); return test.findMax() == 87; })());
  - text: <code>findMin</code>和<code>findMax</code>方法为空树返回<code>null</code> 。
    testString: assert((function() { var test = false; if (typeof BinarySearchTree !== 'undefined') { test = new BinarySearchTree() } else { return false; }; if (typeof test.findMin !== 'function') { return false; }; if (typeof test.findMax !== 'function') { return false; }; return (test.findMin() == null && test.findMax() == null) })());

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
