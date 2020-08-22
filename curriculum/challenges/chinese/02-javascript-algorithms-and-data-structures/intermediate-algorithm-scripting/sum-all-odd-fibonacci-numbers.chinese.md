---
id: a5229172f011153519423690
title: Sum All Odd Fibonacci Numbers
isRequired: true
challengeType: 5
videoUrl: ''
localeTitle: 求所有奇数斐波纳契数
---

## Description
<section id="description">给定正整数<code>num</code> ，返回小于或等于<code>num</code>的所有奇数Fibonacci数的总和。 Fibonacci序列中的前两个数字是1和1.序列中的每个附加数字是前两个数字的总和。 Fibonacci序列的前六个数字是<code>sumFibs(10)</code>和8.例如， <code>sumFibs(10)</code>应该返回<code>10</code>因为小于或等于<code>10</code>所有奇数Fibonacci数都是<code>sumFibs(10)</code>和5.如果卡住，请记得使用<a href="https://forum.freecodecamp.org/t/how-to-get-help-when-you-are-stuck-coding/19514" target="_blank">Read-Search-Ask</a> 。尝试配对程序。编写自己的代码。 </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>sumFibs(1)</code>应该返回一个数字。
    testString: assert(typeof sumFibs(1) === "number");
  - text: <code>sumFibs(1000)</code>应该返回1785。
    testString: assert(sumFibs(1000) === 1785);
  - text: <code>sumFibs(4000000)</code>应返回4613732。
    testString: assert(sumFibs(4000000) === 4613732);
  - text: <code>sumFibs(4)</code>应该返回5。
    testString: assert(sumFibs(4) === 5);
  - text: <code>sumFibs(75024)</code>应该返回60696。
    testString: assert(sumFibs(75024) === 60696);
  - text: <code>sumFibs(75025)</code>应该返回135721。
    testString: assert(sumFibs(75025) === 135721);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function sumFibs(num) {
  return num;
}

sumFibs(4);

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```

/section>
