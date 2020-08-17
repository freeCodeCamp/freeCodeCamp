---
title: Farey sequence
id: 59c3ec9f15068017c96eb8a3
challengeType: 5
videoUrl: ''
localeTitle: Farey序列
---

## Description
<section id="description"><p>编写一个返回n阶Farey序列的函数。该函数应该有一个参数n。它应该将序列作为数组返回。阅读以下内容了解更多详情： </p><p>阶数n的<a href="https://en.wikipedia.org/wiki/Farey sequence" title="wp：Farey序列">Farey序列</a> F <sub>n</sub>是在0和1之间的完全减少的分数的序列，当在最低阶段时，具有小于或等于n的分母，按照增大的大小排列。 </p><p> Farey序列有时被错误地称为Farey系列。 </p><p>每个Farey序列： </p><p> :: *以值0开头，由分数$ \ frac {0} {1} $表示</p><p> :: *以值1结尾，由$ \ frac {1} {1} $分数表示。 </p><p>订单1到5的Farey序列是： </p><p> $ {\ bf \ it {F}} _ 1 = \ frac {0} {1}，\ frac {1} {1} $ </p><p></p><p> $ {\ bf \ it {F}} _ 2 = \ frac {0} {1}，\ frac {1} {2}，\ frac {1} {1} $ </p><p></p><p> $ {\ bf \ it {F}} _ 3 = \ frac {0} {1}，\ frac {1} {3}，\ frac {1} {2}，\ frac {2} {3}，\ frac {1} {1} $ </p><p></p><p> $ {\ bf \ it {F}} _ 4 = \ frac {0} {1}，\ frac {1} {4}，\ frac {1} {3}，\ frac {1} {2}，\ frac {2} {3}，\ frac {3} {4}，\ frac {1} {1} $ </p><p></p><p> $ {\ bf \ it {F}} _ 5 = \ frac {0} {1}，\ frac {1} {5}，\ frac {1} {4}，\ frac {1} {3}，\ frac {2} {5}，\ frac {1} {2}，\ frac {3} {5}，\ frac {2} {3}，\ frac {3} {4}，\ frac {4} {5 }，\ frac {1} {1} $ </p></section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>farey</code>是一种功能。
    testString: assert(typeof farey === 'function');
  - text: <code>farey(3)</code>应该返回一个数组
    testString: assert(Array.isArray(farey(3)));
  - text: <code>farey(3)</code>应该返回<code>["1/3","1/2","2/3"]</code>
    testString: assert.deepEqual(farey(3), ["1/3","1/2","2/3"]);
  - text: <code>farey(4)</code>应该返回<code>["1/4","1/3","1/2","2/4","2/3","3/4"]</code>
    testString: assert.deepEqual(farey(4), ["1/4","1/3","1/2","2/4","2/3","3/4"]);
  - text: <code>farey(5)</code>应返回<code>["1/5","1/4","1/3","2/5","1/2","2/4","3/5","2/3","3/4","4/5"]</code>
    testString: assert.deepEqual(farey(5), ["1/5","1/4","1/3","2/5","1/2","2/4","3/5","2/3","3/4","4/5"]);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function farey (n) {
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
