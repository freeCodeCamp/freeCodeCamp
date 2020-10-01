---
id: 587d825a367417b2b2512c8a
title: Insert an Element into a Max Heap
challengeType: 1
videoUrl: ''
localeTitle: 将元素插入最大堆
---

## Description
<section id="description">现在我们将继续讨论另一个树数据结构，即二进制堆。二进制堆是部分有序的二叉树，它满足堆属性。 heap属性指定父节点和子节点之间的关系。您可能有一个最大堆，其中所有父节点都大于或等于其子节点，或者最小堆，其中反向为真。二进制堆也是完整的二叉树。这意味着树的所有级别都被完全填充，如果最后一级被部分填充，则从左到右填充。虽然二进制堆可以实现为具有包含左和右引用的节点的树结构，但是根据堆属性的部分排序允许我们用数组表示堆。父子关系是我们感兴趣的，通过简单的算术，我们可以计算任何父节点的子节点和任何子节点的父节点。例如，考虑二进制最小堆的数组表示： <code>[ 6, 22, 30, 37, 63, 48, 42, 76 ]</code>根节点是第一个元素，6。它的子节点是22和30.如果我们看在这些值的数组索引之间的关系中，对于索引i，子项为2 * i + 1和2 * i + 2.同样，索引0处的元素是索引1和2处的这两个子项的父项。通常，我们可以在任何索引处找到节点的父节点，其中包含以下内容：（i  -  1）/ 2.当二叉树增长到任意大小时，这些模式将成立。最后，我们可以稍微调整一下，通过跳过数组中的第一个元素，使这个算法更容易。这样做会为给定索引i处的任何元素创建以下关系：示例数组表示形式： <code>[ null, 6, 22, 30, 37, 63, 48, 42, 76 ]</code>元素的左子项：i * 2元素的右子项：i * 2 + 1一个元素的父元素：i / 2一旦你绕过数学运算，使用数组表示非常有用，因为使用这个算法可以快速确定节点位置，因为你不需要内存使用量减少维护对子节点的引用。说明：这里我们将创建一个最大堆。首先创建一个insert方法，将元素添加到堆中。在插入期间，始终保持堆属性非常重要。对于最大堆，这意味着根元素应始终在树中具有最大值，并且所有父节点应该大于其子节点。对于堆的数组实现，这通常分三步完成：将新元素添加到数组的末尾。如果元素大于其父元素，请切换它们。继续切换，直到新元素小于其父元素或到达树的根。最后，添加一个print方法，该方法返回已添加到堆中的所有项的数组。 </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 存在MaxHeap数据结构。
    testString: assert((function() { var test = false; if (typeof MaxHeap !== 'undefined') { test = new MaxHeap() }; return (typeof test == 'object')})());
  - text: MaxHeap有一个名为insert的方法。
    testString: assert((function() { var test = false; if (typeof MaxHeap !== 'undefined') { test = new MaxHeap() } else { return false; }; return (typeof test.insert == 'function')})());
  - text: MaxHeap有一个名为print的方法。
    testString: assert((function() { var test = false; if (typeof MaxHeap !== 'undefined') { test = new MaxHeap() } else { return false; }; return (typeof test.print == 'function')})());
  - text: insert方法根据max heap属性添加元素。
    testString: 'assert((function() { var test = false; if (typeof MaxHeap !== ''undefined'') { test = new MaxHeap() } else { return false; }; test.insert(50); test.insert(100); test.insert(700); test.insert(32); test.insert(51); let result = test.print(); return ((result.length == 5) ? result[0] == 700 : result[1] == 700) })());'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
var MaxHeap = function() {
  // change code below this line
  // change code above this line
};

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```

/section>
