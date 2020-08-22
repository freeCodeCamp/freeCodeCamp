---
title: Hofstadter Figure-Figure sequences
id: 59622f89e4e137560018a40e
challengeType: 5
videoUrl: ''
localeTitle: Hofstadter图 - 图序列
---

## Description
<section id="description"><p>这两个正整数序列定义为： </p><p> <big>$$ R（1）= 1 \; \ S（1）= 2 \\ R（n）= R（n-1）+ S（n-1），\ quad n&gt; 1. $$</big> </p><p>序列<big>$ S（n）$</big>进一步定义为<big>$ R（n）$中</big>不存在的正整数序列。 </p><p>序列<big>$ R $</big>开始： </p><p> 1,3,7,12,18 ...... </p><p>序列<big>$ S $</big>开始： </p><p> 2,4,5,6,8 ...... </p>任务：创建两个名为ffr和ffs的函数，当给定n分别返回R（n）或S（n）时（注意R（1）= 1且S（1）= 2以避免逐个错误） 。不应假设n的最大值。 Sloane的<a href="http://oeis.org/A005228" title="链接：http：//oeis.org/A005228">A005228</a>和<a href="http://oeis.org/A030124" title="链接：http：//oeis.org/A030124">A030124</a> 。 <a href="http://mathworld.wolfram.com/HofstadterFigure-FigureSequence.html" title="链接：http：//mathworld.wolfram.com/HofstadterFigure-FigureSequence.html">Wolfram MathWorld</a>维基百科： <a href="https://en.wikipedia.org/wiki/Hofstadter_sequence#Hofstadter_Figure-Figure_sequences" title="wp：Hofstadter_sequence＃Hofstadter_Figure-Figure_sequences">Hofstadter图 - 图序列</a> 。 </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>ffr</code>是一个功能。
    testString: assert(typeof ffr === 'function');
  - text: <code>ffs</code>是一个函数。
    testString: assert(typeof ffs === 'function');
  - text: <code>ffr</code>应该返回整数。
    testString: assert(Number.isInteger(ffr(1)));
  - text: <code>ffs</code>应该返回整数。
    testString: assert(Number.isInteger(ffs(1)));
  - text: <code>ffr()</code>应该返回<code>69</code>
    testString: assert.equal(ffr(ffrParamRes[0][0]), ffrParamRes[0][1]);
  - text: <code>ffr()</code>应返回<code>1509</code>
    testString: assert.equal(ffr(ffrParamRes[1][0]), ffrParamRes[1][1]);
  - text: <code>ffr()</code>应返回<code>5764</code>
    testString: assert.equal(ffr(ffrParamRes[2][0]), ffrParamRes[2][1]);
  - text: <code>ffr()</code>应返回<code>526334</code>
    testString: assert.equal(ffr(ffrParamRes[3][0]), ffrParamRes[3][1]);
  - text: <code>ffs()</code>应该返回<code>14</code>
    testString: assert.equal(ffs(ffsParamRes[0][0]), ffsParamRes[0][1]);
  - text: <code>ffs()</code>应该返回<code>59</code>
    testString: assert.equal(ffs(ffsParamRes[1][0]), ffsParamRes[1][1]);
  - text: <code>ffs()</code>应该返回<code>112</code>
    testString: assert.equal(ffs(ffsParamRes[2][0]), ffsParamRes[2][1]);
  - text: <code>ffs()</code>应该返回<code>1041</code>
    testString: assert.equal(ffs(ffsParamRes[3][0]), ffsParamRes[3][1]);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
// noprotect
function ffr(n) {
  return n;
}

function ffs(n) {
  return n;
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
