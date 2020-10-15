---
id: 587d8258367417b2b2512c82
challengeType: 1
videoUrl: ''
title: 在二叉搜索树中删除具有两个子节点的节点
---

## Description
<section id="description">删除具有两个子节点的节点是最难实现的。删除这样的节点会生成两个不再连接到原始树结构的子树。我们如何重新连接它们？一种方法是在目标节点的右子树中找到最小值，并用该值替换目标节点。以这种方式选择替换确保它大于左子树中的每个节点，它成为新的父节点，但也小于右子树中的每个节点，它成为新的父节点。完成此替换后，必须从右子树中删除替换节点。即使这个操作也很棘手，因为替换可能是一个叶子，或者它本身可能是一个右子树的父亲。如果是叶子，我们必须删除其父对它的引用。否则，它必须是目标的正确子项。在这种情况下，我们必须用替换值替换目标值，并使目标引用替换的右子。说明：让我们通过处理第三种情况来完成我们的<code>remove</code>方法。我们为前两种情况再次提供了一些代码。现在添加一些代码来处理具有两个子节点的目标节点。任何边缘情况要注意？如果树只有三个节点怎么办？完成后，这将完成二进制搜索树的删除操作。干得好，这是一个非常难的问题！ </section>

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
    testString: "assert((function() { var test = false; if (typeof BinarySearchTree !== 'undefined') { test = new BinarySearchTree() } else { return false; }; return (typeof test.remove == 'function') ? (test.remove(100) == null) : false})());"
  - text: 如果根节点没有子节点，则删除它会将根节点设置为<code>null</code> 。
    testString: "assert((function() { var test = false; if (typeof BinarySearchTree !== 'undefined') { test = new BinarySearchTree() } else { return false; }; test.add(500); test.remove(500); return (typeof test.remove == 'function') ? (test.inorder() == null) : false})());"
  - text: <code>remove</code>方法从树中删除叶节点
    testString: "assert((function() { var test = false; if (typeof BinarySearchTree !== 'undefined') { test = new BinarySearchTree() } else { return false; }; test.add(5); test.add(3); test.add(7); test.add(6); test.add(10); test.add(12); test.remove(3); test.remove(12); test.remove(10); return (typeof test.remove == 'function') ? (test.inorder().join('') == '567') : false})());"
  - text: <code>remove</code>方法删除具有一个子节点的节点。
    testString: assert((function() { var test = false; if (typeof BinarySearchTree !== 'undefined') { test = new BinarySearchTree() } else { return false; }; if (typeof test.remove !== 'function') { return false; }; test.add(-1); test.add(3); test.add(7); test.add(16); test.remove(16); test.remove(7); test.remove(3); return (test.inorder().join('') == '-1'); })());
  - text: 删除具有两个节点的树中的根将第二个节点设置为根。
    testString: assert((function() { var test = false; if (typeof BinarySearchTree !== 'undefined') { test = new BinarySearchTree() } else { return false; }; if (typeof test.remove !== 'function') { return false; }; test.add(15); test.add(27); test.remove(15); return (test.inorder().join('') == '27'); })());
  - text: <code>remove</code>方法在保留二叉搜索树结构的同时删除具有两个子节点的节点。
    testString: assert((function() { var test = false; if (typeof BinarySearchTree !== 'undefined') { test = new BinarySearchTree() } else { return false; }; if (typeof test.remove !== 'function') { return false; }; test.add(1); test.add(4); test.add(3); test.add(7); test.add(9); test.add(11); test.add(14); test.add(15); test.add(19); test.add(50); test.remove(9); if (!test.isBinarySearchTree()) { return false; }; test.remove(11); if (!test.isBinarySearchTree()) { return false; }; test.remove(14); if (!test.isBinarySearchTree()) { return false; }; test.remove(19); if (!test.isBinarySearchTree()) { return false; }; test.remove(3); if (!test.isBinarySearchTree()) { return false; }; test.remove(50); if (!test.isBinarySearchTree()) { return false; }; test.remove(15); if (!test.isBinarySearchTree()) { return false; }; return (test.inorder().join('') == '147'); })());
  - text: 可以在三个节点的树上删除根。
    testString: assert((function() { var test = false; if (typeof BinarySearchTree !== 'undefined') { test = new BinarySearchTree() } else { return false; }; if (typeof test.remove !== 'function') { return false; }; test.add(100); test.add(50); test.add(300); test.remove(100); return (test.inorder().join('') == 50300); })());

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
    // case 2: target has one child
    else if (children == 1) {
      var newChild = (target.left !== null) ? target.left : target.right;
      if (parent === null) {
        target.value = newChild.value;
        target.left = null;
        target.right = null;
      } else if (newChild.value < parent.value) {
        parent.left = newChild;
      } else {
        parent.right = newChild;
      }
      target = null;
    }
    // case 3: target has two children, change code below this line
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
