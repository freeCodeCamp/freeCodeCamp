---
title: Greatest subsequential sum
id: 5a23c84252665b21eecc7e84
challengeType: 5
videoUrl: ''
localeTitle: 最重要的后续总和
---

## Description
<section id="description">给定一个整数序列，找到一个连续的子序列，它最大化其元素的总和，也就是说，没有其他单个子序列的元素加起来大于这一个的值。空子序列被认为具有\（0 \）的总和;因此，如果所有元素都是负数，则结果必须是空序列。 </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>maximumSubsequence</code>应该是一个函数。
    testString: assert(typeof maximumSubsequence=='function');
  - text: '<code>maximumSubsequence(&quot;+JSON.stringify(tests[0])+&quot;)</code>应该返回一个数组。'
    testString: assert(Array.isArray(maximumSubsequence([ 1, 2,-1, 3, 10, -10 ])));
  - text: '<code>maximumSubsequence(&quot;+JSON.stringify(tests[0])+&quot;)</code>应返回<code>&quot;+JSON.stringify(results[0])+&quot;</code> 。'
    testString: assert.deepEqual(maximumSubsequence([1,2,-1,3,10,-10]), [ 1, 2, -1, 3, 10 ]);
  - text: '<code>maximumSubsequence(&quot;+JSON.stringify(tests[1])+&quot;)</code>应返回<code>&quot;+JSON.stringify(results[1])+&quot;</code> 。'
    testString: assert.deepEqual(maximumSubsequence([0, 8, 10, -2, -4, -1, -5, -3]), [ 0, 8, 10 ]);
  - text: '<code>maximumSubsequence(&quot;+JSON.stringify(tests[2])+&quot;)</code>应返回<code>&quot;+JSON.stringify(results[2])+&quot;</code> 。'
    testString: assert.deepEqual(maximumSubsequence([ 9, 9, -10, 1 ]), [ 9, 9 ]);
  - text: '<code>maximumSubsequence(&quot;+JSON.stringify(tests[3])+&quot;)</code>应返回<code>&quot;+JSON.stringify(results[3])+&quot;</code> 。'
    testString: assert.deepEqual(maximumSubsequence([ 7, 1, -5, -3, -8, 1 ]), [ 7, 1 ]);
  - text: '<code>maximumSubsequence(&quot;+JSON.stringify(tests[4])+&quot;)</code>应返回<code>&quot;+JSON.stringify(results[4])+&quot;</code> 。'
    testString: assert.deepEqual(maximumSubsequence([ -3, 6, -1, 4, -4, -6 ]), [ 6, -1, 4 ]);
  - text: '<code>maximumSubsequence(&quot;+JSON.stringify(tests[5])+&quot;)</code>应返回<code>&quot;+JSON.stringify(results[5])+&quot;</code> 。'
    testString: assert.deepEqual(maximumSubsequence([ -1, -2, 3, 5, 6, -2, -1, 4, -4, 2, -1 ]), [ 3, 5, 6, -2, -1, 4 ]);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function maximumSubsequence (population) {
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
