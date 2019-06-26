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
</section>
