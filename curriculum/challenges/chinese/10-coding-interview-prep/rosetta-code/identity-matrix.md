---
id: 5a23c84252665b21eecc7eb1
challengeType: 5
videoUrl: ''
title: 身份矩阵
---

## Description
<section id="description"> <i>单位矩阵</i>是大小为\（n \次n \）的方阵，其中对角元素都是<b>1</b> s（1），所有其他元素都是<b>0</b> s（零）。 \ begin {bmatrix} 1＆0＆0 \ cr 0＆1＆0 \ cr 0＆0＆1 \ cr \ end {bmatrix}编写一个以数字&#39;n&#39;作为参数并返回单位矩阵的函数订单nx n。 </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>idMatrix</code>应该是一个功能。
    testString: assert(typeof idMatrix=='function');
  - text: <code>idMatrix(1)</code>应该返回一个数组。
    testString: assert(Array.isArray(idMatrix(1)));
  - text: '<code>idMatrix(1)</code>应返回<code>&quot;+JSON.stringify(results[0])+&quot;</code> 。'
    testString: assert.deepEqual(idMatrix(1),results[0]);
  - text: '<code>idMatrix(2)</code>应返回<code>&quot;+JSON.stringify(results[1])+&quot;</code> 。'
    testString: assert.deepEqual(idMatrix(2),results[1]);
  - text: '<code>idMatrix(3)</code>应返回<code>&quot;+JSON.stringify(results[2])+&quot;</code> 。'
    testString: assert.deepEqual(idMatrix(3),results[2]);
  - text: '<code>idMatrix(4)</code>应返回<code>&quot;+JSON.stringify(results[3])+&quot;</code> 。'
    testString: assert.deepEqual(idMatrix(4),results[3]);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function idMatrix (n) {
  // Good luck!
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
