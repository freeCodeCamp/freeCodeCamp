---
id: a5229172f011153519423690
challengeType: 5
forumTopicId: 16084
title: 求斐波那契数组中的奇数之和
---

## Description
<section id='description'>
在这道题目中，我们需要写一个函数，参数为一个正整数<code>num</code>。它的作用是计算斐波那契数列中，小于或等于<code>num</code>的奇数之和。
斐波那契数列中，第一和第二个数字都是 1，后面的每个数字由之前两数相加得出。斐波那契数列的前六个数字分别为：1、1、2、3、5、8。
比如，<code>sumFibs(10)</code>应该返回<code>10</code>。因为斐波那契数列中，比<code>10</code>小的数字只有 1、1、3、5。
如果你遇到了问题，请点击<a href='https://forum.freecodecamp.one/t/topic/157' target='_blank'>帮助</a>。
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>sumFibs(1)</code>应该返回一个数字。
    testString: assert(typeof sumFibs(1) === "number");
  - text: <code>sumFibs(1000)</code>应该返回 1785。
    testString: assert(sumFibs(1000) === 1785);
  - text: <code>sumFibs(4000000)</code>应该返回 4613732。
    testString: assert(sumFibs(4000000) === 4613732);
  - text: <code>sumFibs(4)</code>应该返回 5。
    testString: assert(sumFibs(4) === 5);
  - text: <code>sumFibs(75024)</code>应该返回 60696。
    testString: assert(sumFibs(75024) === 60696);
  - text: <code>sumFibs(75025)</code>应该返回 135721。
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
function sumFibs(num) {
  var a = 1;
  var b = 1;
  var s = 0;
  while (a <= num) {
    if (a % 2 !== 0) {
      s += a;
    }
    a = [b, b=b+a][0];
  }
  return s;
}
```
</section>
