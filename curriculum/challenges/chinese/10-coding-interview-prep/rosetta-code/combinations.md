---
id: 5958469238c0d8d2632f46db
challengeType: 5
videoUrl: ''
title: 组合
---

## Description
<section id="description">任务： <p>给定非负整数<big>m</big>和<big>n</big> ，以排序顺序生成从<big>0</big> （零）到<big>n-1</big>的整数的所有大小<big>m个</big> <a href="http://mathworld.wolfram.com/Combination.html" title="链接：http：//mathworld.wolfram.com/Combination.html">组合</a> （每个组合被排序并且整个表被排序）。 </p>例： <p> <big>3</big>梳子<big>5</big>是： </p><pre> 0 1 2
0 1 3
0 1 4
0 2 3
0 2 4
0 3 4
1 2 3
1 2 4
1 3 4
2 3 4
</pre></section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>combinations</code>是一种功能。
    testString: assert(typeof combinations === 'function');
  - text: '<code>combinations(3, 5)</code>应返回<code>[[0, 1, 2], [0, 1, 3], [0, 1, 4], [0, 2, 3], [0, 2, 4], [0, 3, 4], [1, 2, 3], [1, 2, 4], [1, 3, 4], [2, 3, 4]]</code> 。'
    testString: assert.deepEqual(combinations(testInput1[0], testInput1[1]), testOutput1);
  - text: '<code>combinations(4, 6)</code>应返回<code>[[0,1,2,3], [0,1,2,4], [0,1,2,5], [0,1,3,4], [0,1,3,5], [0,1,4,5], [0,2,3,4], [0,2,3,5], [0,2,4,5], [0,3,4,5], [1,2,3,4], [1,2,3,5], [1,2,4,5], [1,3,4,5], [2,3,4,5]]</code>'
    testString: assert.deepEqual(combinations(testInput2[0], testInput2[1]), testOutput2);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function combinations (m, n) {
  // Good luck!
  return true;
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
