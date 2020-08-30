---
id: 587d8258367417b2b2512c81
title: Delete a Node with One Child in a Binary Search Tree
challengeType: 1
videoUrl: ''
localeTitle: 在二叉搜索树中删除具有一个子节点的节点
---

## Description
<section id="description">现在我们可以删除叶子节点，让我们继续第二种情况：删除一个子节点。对于这种情况，假设我们有一棵树，其中包含以下节点1  -  2  -  3，其中1是根。要删除2，我们只需要在1到3中做出正确的引用。更一般地说，为了删除只有一个子节点的节点，我们将该节点的父引用作为树中的下一个节点。说明：我们在<code>remove</code>方法中提供了一些代码，用于完成上一次挑战中的任务。我们找到要删除的目标及其父节点，并定义目标节点具有的子节点数。让我们在这里为仅有一个子节点的目标节点添加下一个案例。在这里，我们必须确定单个子节点是树中的左或右分支，然后在父节点中设置正确的引用以指向此节点。另外，让我们考虑目标是根节点的情况（这意味着父节点将为<code>null</code> ）。只要通过测试，请随意用自己的代码替换所有入门代码。 </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 存在<code>BinarySearchTree</code>数据结构。
    testString: assert((function() { var test = false; if (typeof BinarySearchTree !== 'undefined') { test = new BinarySearchTree() }; return (typeof test == 'object')})());
  - text: 二叉搜索树有一个名为<code>remove</code>的方法。
    testString: assert((function() { var test = false; if (typeof BinarySearchTree !== 'undefined') { test = new BinarySearchTree() } else { return false; }; return (typeof test.remove == 'function')})());
  - text: 尝试删除不存在的元素将返回<code>null</code> 。
    testString: assert((function() { var test = false; if (typeof BinarySearchTree !== 'undefined') { test = new BinarySearchTree() } else { return false; }; if (typeof test.remove !== 'function') { return false; }; return (test.remove(100) == null); })());
  - text: 如果根节点没有子节点，则删除它会将根节点设置为<code>null</code> 。
    testString: assert((function() { var test = false; if (typeof BinarySearchTree !== 'undefined') { test = new BinarySearchTree() } else { return false; }; if (typeof test.remove !== 'function') { return false; }; test.add(500); test.remove(500); return (test.inorder() == null); })());
  - text: <code>remove</code>方法从树中删除叶节点
    testString: assert((function() { var test = false; if (typeof BinarySearchTree !== 'undefined') { test = new BinarySearchTree() } else { return false; }; if (typeof test.remove !== 'function') { return false; }; test.add(5); test.add(3); test.add(7); test.add(6); test.add(10); test.add(12); test.remove(3); test.remove(12); test.remove(10); return (test.inorder().join('') == '567'); })());
  - text: <code>remove</code>方法删除具有一个子节点的节点。
    testString: assert((function() { var test = false; if (typeof BinarySearchTree !== 'undefined') { test = new BinarySearchTree() } else { return false; }; if (typeof test.remove !== 'function') { return false; }; test.add(-1); test.add(3); test.add(7); test.add(16); test.remove(16); test.remove(7); test.remove(3); return (test.inorder().join('') == '-1'); })());
  - text: 删除具有两个节点的树中的根将第二个节点设置为根。
    testString: assert((function() { var test = false; if (typeof BinarySearchTree !== 'undefined') { test = new BinarySearchTree() } else { return false; }; if (typeof test.remove !== 'function') { return false; }; test.add(15); test.add(27); test.remove(15); return (test.inorder().join('') == '27'); })());

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
  this.remove = function(value) {
    if (this.root === null) {
      return null;
    }
    var target;
    var parent = null;
    // find the target value and its parent
    (function findValue(node = this.root) {
      if (value == node.value) {
        target = node;
      } else if (value < node.value && node.left !== null) {
        parent = node;
        return findValue(node.left);
      } else if (value < node.value && node.left === null) {
        return null;
      } else if (value > node.value && node.right !== null) {
        parent = node;
        return findValue(node.right);
      } else {
        return null;
      }
    }).bind(this)();
    if (target === null) {
      return null;
    }
    // count the children of the target to delete
    var children = (target.left !== null ? 1 : 0) + (target.right !== null ? 1 : 0);
    // case 1: target has no children
    if (children === 0) {
      if (target == this.root) {
        this.root = null;
      }
      else {
        if (parent.left == target) {
          parent.left = null;
        } else {
          parent.right = null;
        }
      }
    }
    // case 2: target has one child, change code below this line
  };
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
