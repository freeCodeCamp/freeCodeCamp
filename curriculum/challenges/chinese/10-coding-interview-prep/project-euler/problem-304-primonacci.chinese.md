---
id: 5900f49d1000cf542c50ffaf
challengeType: 5
title: 'Problem 304: Primonacci'
videoUrl: ''
localeTitle: 问题304：Primonacci
---

## Description
<section id="description">
对于任何正整数n，函数next_prime（n）返回最小质数p，使得p> n。


序列a（n）定义为：
对于n> 1，a（1）= next_prime（1014）和a（n）= next_prime（a（n-1））。


斐波那契数列f（n）定义为：
对于n> 1，f（0）= 0，f（1）= 1和f（n）= f（n-1）+ f（n-2）。


序列b（n）定义为f（a（n））。


求出∑b（n）为1≤n≤100000。
给出答案mod 1234567891011。
</section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>euler304()</code>应该返回283988410192。
    testString: assert.strictEqual(euler304(), 283988410192);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function euler304() {
  // Good luck!
  return true;
}

euler304();

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```

/section>
