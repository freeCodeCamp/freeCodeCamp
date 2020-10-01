---
id: 587d825b367417b2b2512c8b
challengeType: 1
videoUrl: ''
title: 从最大堆中删除元素
---

## Description
<section id="description">现在我们可以向堆中添加元素，让我们看看如何删除元素。删除和插入元素都需要类似的逻辑。在最大堆中，您通常需要删除最大值，因此这只需要从树的根中提取它。这将破坏我们树的堆属性，因此我们必须以某种方式重新建立它。通常，对于最大堆，这可以通过以下方式完成：将堆中的最后一个元素移动到根位置。如果root的子节点大于它，则将root与较大值的子节点交换。继续交换，直到父级大于两个子级，或者到达树中的最后一级。说明：向我们的最大堆添加一个名为remove的方法。此方法应返回已添加到最大堆的最大值，并将其从堆中删除。它还应该重新排序堆，以便保持堆属性。删除元素后，堆中剩余的下一个最大元素应该成为根。此处再次添加插入方法。 </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 存在MaxHeap数据结构。
    testString: assert((function() { var test = false; if (typeof MaxHeap !== 'undefined') { test = new MaxHeap() }; return (typeof test == 'object')})());
  - text: MaxHeap有一个名为print的方法。
    testString: assert((function() { var test = false; if (typeof MaxHeap !== 'undefined') { test = new MaxHeap() } else { return false; }; return (typeof test.print == 'function')})());
  - text: MaxHeap有一个名为insert的方法。
    testString: assert((function() { var test = false; if (typeof MaxHeap !== 'undefined') { test = new MaxHeap() } else { return false; }; return (typeof test.insert == 'function')})());
  - text: MaxHeap有一个名为remove的方法。
    testString: assert((function() { var test = false; if (typeof MaxHeap !== 'undefined') { test = new MaxHeap() } else { return false; }; return (typeof test.remove == 'function')})());
  - text: remove方法从最大堆中删除最大元素，同时保持最大堆属性。
    testString: assert((function() { var test = false; if (typeof MaxHeap !== 'undefined') { test = new MaxHeap() } else { return false; }; test.insert(30); test.insert(300); test.insert(500); test.insert(10); let result = []; result.push(test.remove()); result.push(test.remove()); result.push(test.remove()); result.push(test.remove());  return (result.join('') == '5003003010') })());

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
