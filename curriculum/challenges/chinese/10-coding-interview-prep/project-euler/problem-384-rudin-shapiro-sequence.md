---
id: 5900f4ed1000cf542c50fffe
challengeType: 5
videoUrl: ''
title: 问题384：Rudin-Shapiro序列
---

## Description
<section id="description">将序列a（n）定义为n的二进制展开（可能重叠）中相邻的1对的数量。例如：a（5）= a（1012）= 0，a（6）= a（1102）= 1，a（7）= a（1112）= 2 <p>定义序列b（n）=（ -  1）a（n）。该序列称为Rudin-Shapiro序列。还要考虑b（n）的总和序列：。 </p><p>这些序列的前几个值是：n 0 1 2 3 4 5 6 7 a（n）0 0 0 1 0 0 1 2 b（n）1 1 1 -1 1 1 -1 1 s（n）1 2 3 2 3 4 3 4 </p><p>序列s（n）具有显着特性，即所有元素都是正的，并且每个正整数k恰好出现k次。 </p><p>定义g（t，c），其中1≤c≤t，作为s（n）中的索引，其中t在s（n）中出现第c次。例如：g（3,3）= 6，g（4,2）= 7，g（54321,12345）= 1220847710。 </p><p>设F（n）为由下式定义的斐波那契数：F（0）= F（1）= 1且F（n）= F（n-1）+ F（n-2），n&gt; 1。 </p><p>定义GF（t）= g（F（t），F（t-1））。 </p><p>找到ΣGF（t）为2≤t≤45。 </p></section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>euler384()</code>应返回3354706415856333000。
    testString: assert.strictEqual(euler384(), 3354706415856333000);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function euler384() {
  // Good luck!
  return true;
}

euler384();

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```

/section>
