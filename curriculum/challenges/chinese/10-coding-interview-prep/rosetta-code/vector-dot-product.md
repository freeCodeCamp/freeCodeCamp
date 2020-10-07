---
id: 594810f028c0303b75339ad3
challengeType: 5
videoUrl: ''
title: 矢量点积
---

## Description
<section id="description"><p>矢量被定义为具有三个维度，由三个数字的有序集合表示：（X，Y，Z）。 </p><p>任务： </p><pre> <code>Write a function that takes any numbers of vectors (arrays) as input and computes their dot product.</code> </pre><p>您的函数应在无效输入（即不同长度的向量）上返回<code>null</code> 。 </p><p></p></section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: dotProduct必须是一个函数
    testString: assert.equal(typeof dotProduct, 'function');
  - text: dotProduct（）必须返回null
    testString: assert.equal(dotProduct(), null);
  - text: 'dotProduct（[[1]，[1]]）必须返回1。'
    testString: assert.equal(dotProduct([1], [1]), 1);
  - text: 'dotProduct（[[1]，[1,2]]）必须返回null。'
    testString: assert.equal(dotProduct([1], [1, 2]), null);
  - text: 'dotProduct（[1,3，-5]，[4，-2，-1]）必须返回3。'
    testString: assert.equal(dotProduct([1, 3, -5], [4, -2, -1]), 3);
  - text: <code>dotProduct(...nVectors)</code>应该返回<code>dotProduct(...nVectors)</code>
    testString: assert.equal(dotProduct([ 0, 1, 2, 3, 4 ], [ 0, 2, 4, 6, 8 ], [ 0, 3, 6, 9, 12 ], [ 0, 4, 8, 12, 16 ], [ 0, 5, 10, 15, 20 ]), 156000);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function dotProduct() {
    // Good luck!
}

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```

/section>
