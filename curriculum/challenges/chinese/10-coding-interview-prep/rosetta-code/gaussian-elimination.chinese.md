---
title: Gaussian elimination
id: 5a23c84252665b21eecc7e77
challengeType: 5
videoUrl: ''
localeTitle: 高斯消除
---

## Description
<section id="description">编写一个函数来解决\（Ax = b \）使用高斯消除然后向后替换。 \（A \）是\（n \次n \）矩阵。此外，\（x \）和\（b \）是\（n \）乘以1个向量。要提高准确性，请使用部分旋转和缩放。 </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>gaussianElimination</code>应该是一个函数。
    testString: assert(typeof gaussianElimination=='function');
  - text: '<code>gaussianElimination(&quot;+JSON.stringify(tests[0][0])+&quot;,&quot;+JSON.stringify(tests[0][1])+&quot;)</code>应该返回一个数组。'
    testString: assert(Array.isArray(gaussianElimination([[1,1],[1,-1]], [5,1])));
  - text: '<code>gaussianElimination(&quot;+JSON.stringify(tests[0][0])+&quot;,&quot;+JSON.stringify(tests[0][1])+&quot;)</code>应返回<code>&quot;+JSON.stringify(results[0])+&quot;</code> 。'
    testString: assert.deepEqual(gaussianElimination([[1,1],[1,-1]], [5,1]), [ 3, 2 ]);
  - text: '<code>gaussianElimination(&quot;+JSON.stringify(tests[1][0])+&quot;,&quot;+JSON.stringify(tests[1][1])+&quot;)</code>应返回<code>&quot;+JSON.stringify(results[1])+&quot;</code> 。'
    testString: assert.deepEqual(gaussianElimination([[2,3],[2,1]] , [8,4]), [ 1, 2 ]);
  - text: '<code>gaussianElimination(&quot;+JSON.stringify(tests[2][0])+&quot;,&quot;+JSON.stringify(tests[2][1])+&quot;)</code>应返回<code>&quot;+JSON.stringify(results[2])+&quot;</code> 。'
    testString: assert.deepEqual(gaussianElimination([[1,3],[5,-2]], [14,19]), [ 5, 3 ]);
  - text: '<code>gaussianElimination(&quot;+JSON.stringify(tests[3][0])+&quot;,&quot;+JSON.stringify(tests[3][1])+&quot;)</code>应返回<code>&quot;+JSON.stringify(results[3])+&quot;</code> 。'
    testString: assert.deepEqual(gaussianElimination([[1,1],[5,-1]] , [10,14]), [ 4, 6 ]);
  - text: '<code>gaussianElimination(&quot;+JSON.stringify(tests[4][0])+&quot;,&quot;+JSON.stringify(tests[4][1])+&quot;)</code>应返回<code>&quot;+JSON.stringify(results[4])+&quot;</code> 。'
    testString: assert.deepEqual(gaussianElimination([[1,2,3],[4,5,6],[7,8,8]] , [6,15,23]), [ 1, 1, 1 ]);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function gaussianElimination (A,b) {
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
