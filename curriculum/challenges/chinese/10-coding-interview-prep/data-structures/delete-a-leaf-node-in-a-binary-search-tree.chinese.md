---
id: 587d8258367417b2b2512c80
title: Delete a Leaf Node in a Binary Search Tree
challengeType: 1
videoUrl: ''
localeTitle: 删除二进制搜索树中的叶节点
---

## Description
<section id="description">这是我们将在二叉搜索树中实现更难操作的三个挑战中的第一个：删除。删除很困难，因为删除节点会破坏树中的链接。必须仔细重新建立这些链接以确保维护二叉树结构。对于某些删除，这意味着必须重新排列树。通常，在尝试删除节点时，您将遇到以下三种情况之一：叶节点：要删除的目标没有子节点。一个孩子：要删除的目标只有一个孩子。两个子节点：要删除的目标有两个子节点。删除叶节点很简单，我们只需删除它。删除具有一个子节点的节点也相对容易，我们只需删除它并将其父节点链接到我们删除的节点的子节点。但是，删除具有两个子节点的节点更加困难，因为这会创建两个需要重新连接到父树的子节点。我们将在第三个挑战中看到如何处理这个案例。此外，在处理删除时，您需要注意一些边缘情况。如果树是空的怎么办？如果要删除的节点是根节点怎么办？如果树中只有两个元素怎么办？现在，让我们处理第一种删除叶节点的情况。说明：在我们的二叉树上创建一个名为<code>remove</code> 。我们将在这里为我们的删除操作构建逻辑。首先，您需要在remove中创建一个函数，该函数在当前树中找到我们尝试删除的节点。如果树中不存在该节点，则<code>remove</code>应返回<code>null</code> 。现在，如果目标节点是没有子节点的叶节点，则应将其父节点引用设置为<code>null</code> 。这有效地从树中删除节点。为此，您必须跟踪我们尝试删除的节点的父节点。创建一种跟踪目标节点具有的子节点数的方法也很有用，因为这将确定我们的删除属于哪种情况。我们将在下一次挑战中处理第二和第三个案例。祝你好运！ </section>

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
    // case 1: target has no children, change code below this line
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
