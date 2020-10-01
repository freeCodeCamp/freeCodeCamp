---
id: 594810f028c0303b75339ad8
challengeType: 5
videoUrl: ''
title: 之字形矩阵
---

## Description
<section id="description"> “zig-zag”数组是第一个$ N ^ 2 $整数的正方形排列，当数组沿着数组的<a href="https://en.wiktionary.org/wiki/antidiagonal">反对角线</a>曲折时，数字会逐渐增加。例如，给定“&#39;5”&#39;，产生这个数组： <pre> 0 1 5 6 14
 2 4 7 13 15
 3 8 12 16 21
 9 11 17 20 22
10 18 19 23 24
</pre>编写一个采用Z字形矩阵大小的函数，并将相应的矩阵作为二维数组返回。 </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: ZigZagMatrix必须是一个功能
    testString: assert.equal(typeof ZigZagMatrix, 'function');
  - text: ZigZagMatrix应该返回数组
    testString: assert.equal(typeof ZigZagMatrix(1), 'object');
  - text: ZigZagMatrix应该返回一个nestes数组的数组
    testString: assert.equal(typeof ZigZagMatrix(1)[0], 'object');
  - text: 'ZigZagMatrix（1）应返回[[0]]'
    testString: assert.deepEqual(ZigZagMatrix(1), zm1);
  - text: 'ZigZagMatrix（2）应返回[[0,1]，[2,3]]'
    testString: assert.deepEqual(ZigZagMatrix(2), zm2);
  - text: ZigZagMatrix（5）必须返回指定的矩阵
    testString: assert.deepEqual(ZigZagMatrix(5), zm5);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function ZigZagMatrix(n) {
  // Good luck!
  return [[], []];
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
