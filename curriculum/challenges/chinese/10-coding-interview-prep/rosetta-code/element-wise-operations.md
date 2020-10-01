---
id: 599c333915e0ea32d04d4bec
challengeType: 5
videoUrl: ''
title: 元素操作
---

## Description
<section id="description"><p>实现基本的元素矩阵 - 矩阵和标量矩阵运算。 </p><p>实行： </p><p> :: *另外</p><p> :: *减法</p><p> :: *乘法</p><p> :: *分裂</p><p> :: *取幂</p><p>第一个参数是要执行的操作，例如：用于矩阵加法的“m_add”和用于标量加法的“s_add”。第二和第三参数将是要在其上执行操作的矩阵。 </p></section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>operation</code>是一种功能。
    testString: assert(typeof operation === 'function');
  - text: <code>operation("m_add",[[1,2],[3,4]],[[1,2],[3,4]])</code>应返回<code>[[2,4],[6,8]]</code> 。
    testString: assert.deepEqual(operation('m_add', [[1, 2], [3, 4]], [[1, 2], [3, 4]]), [[2, 4], [6, 8]]);
  - text: <code>operation("s_add",[[1,2],[3,4]],[[1,2],[3,4]])</code>应返回<code>[[3,4],[5,6]]</code> 。
    testString: assert.deepEqual(operation('s_add', [[1, 2], [3, 4]], 2), [[3, 4], [5, 6]]);
  - text: <code>operation("m_sub",[[1,2],[3,4]],[[1,2],[3,4]])</code>应返回<code>[[0,0],[0,0]]</code> 。
    testString: assert.deepEqual(operation('m_sub', [[1, 2], [3, 4]], [[1, 2], [3, 4]]), [[0, 0], [0, 0]]);
  - text: <code>operation("m_mult",[[1,2],[3,4]],[[1,2],[3,4]])</code>应该返回<code>[[1,4],[9,16]]</code> 。
    testString: assert.deepEqual(operation('m_mult', [[1, 2], [3, 4]], [[1, 2], [3, 4]]), [[1, 4], [9, 16]]);
  - text: <code>operation("m_div",[[1,2],[3,4]],[[1,2],[3,4]])</code>应返回<code>[[1,1],[1,1]]</code> 。
    testString: assert.deepEqual(operation('m_div', [[1, 2], [3, 4]], [[1, 2], [3, 4]]), [[1, 1], [1, 1]]);
  - text: <code>operation("m_exp",[[1,2],[3,4]],[[1,2],[3,4]])</code>应返回<code>[[1,4],[27,256]]</code> 。
    testString: assert.deepEqual(operation('m_exp', [[1, 2], [3, 4]], [[1, 2], [3, 4]]), [[1, 4], [27, 256]]);
  - text: <code>operation("m_add",[[1,2,3,4],[5,6,7,8]],[[9,10,11,12],[13,14,15,16]])</code>应该返回<code>[[10,12,14,16],[18,20,22,24]]</code> 。
    testString: assert.deepEqual(operation('m_add', [[1, 2, 3, 4], [5, 6, 7, 8]], [[9, 10, 11, 12], [13, 14, 15, 16]]), [[10, 12, 14, 16], [18, 20, 22, 24]]);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function operation (op, arr1, arr2) {
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
