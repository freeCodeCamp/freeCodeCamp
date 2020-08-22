---
id: 587d8257367417b2b2512c7b
title: Add a New Element to a Binary Search Tree
challengeType: 1
videoUrl: ''
localeTitle: 将新元素添加到二叉搜索树
---

## Description
<section id="description">现在我们已经了解了基础知识，让我们编写一个更复杂的方法。在此挑战中，我们将创建一个向二叉搜索树添加新值的方法。该方法应该被称为<code>add</code> ，它应该接受一个整数值来添加到树中。注意保持二叉搜索树的不变量：每个左子项中的值应小于或等于父值，并且每个右子项中的值应大于或等于父值。在这里，让我们这样做，以便我们的树不能容纳重复的值。如果我们尝试添加已存在的值，则该方法应返回<code>null</code> 。否则，如果添加成功，则应返回<code>undefined</code> 。提示：树是自然递归的数据结构！ </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 存在<code>BinarySearchTree</code>数据结构。
    testString: assert((function() { var test = false; if (typeof BinarySearchTree !== 'undefined') { test = new BinarySearchTree() }; return (typeof test == 'object')})());
  - text: 二叉搜索树有一个名为<code>add</code>的方法。
    testString: assert((function() { var test = false; if (typeof BinarySearchTree !== 'undefined') { test = new BinarySearchTree() } else { return false; }; return (typeof test.add == 'function')})());
  - text: add方法根据二叉搜索树规则添加元素。
    testString: assert((function() { var test = false; if (typeof BinarySearchTree !== 'undefined') { test = new BinarySearchTree() } else { return false; }; if (typeof test.add !== 'function') { return false; }; test.add(4); test.add(1); test.add(7); test.add(87); test.add(34); test.add(45); test.add(73); test.add(8); const expectedResult = [ 1, 4, 7, 8, 34, 45, 73, 87 ]; const result = test.inOrder(); return (expectedResult.toString() === result.toString()); })());
  - text: 添加已存在的元素将返回<code>null</code>
    testString: assert((function() { var test = false; if (typeof BinarySearchTree !== 'undefined') { test = new BinarySearchTree() } else { return false; }; if (typeof test.add !== 'function') { return false; }; test.add(4); return test.add(4) == null; })());

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
