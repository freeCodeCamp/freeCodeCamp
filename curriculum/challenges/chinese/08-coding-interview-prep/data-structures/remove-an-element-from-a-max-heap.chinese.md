---
id: 587d825b367417b2b2512c8b
title: Remove an Element from a Max Heap
challengeType: 1
videoUrl: ''
localeTitle: 从最大堆中删除元素
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
  - text: 測試文本
    testString: assert(true);

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
</section>
