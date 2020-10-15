---
id: 56533eb9ac21ba0edf2244ae
challengeType: 1
videoUrl: 'https://scrimba.com/c/cWP24Ub'
forumTopicId: 18184
title: 求余运算
---

## Description
<section id='description'>
<dfn>remainder</dfn>求余运算符<code>%</code>返回两个数相除得到的余数
<strong>示例</strong>
<blockquote>5 % 2 = 1 因为<br>Math.floor(5 / 2) = 2 （商）<br>2 * 2 = 4<br>5 - 4 = 1 （余数）</blockquote>
<strong>用法</strong><br>在数学中，判断一个数是奇数还是偶数，只需要判断这个数除以 2 得到的余数是 0 还是 1。  
<blockquote>17 % 2 = 1（17 是奇数）<br>48 % 2 = 0（48 是偶数）</blockquote>
<strong>提示<strong><br>余数运算符(<dfn>remainder</dfn>)有时被错误地称为“模数”运算符。它与模数非常相似，但不能用于负数的运算。
</section>

## Instructions
<section id='instructions'>
使用<code>%</code>运算符，计算 11 除以 3 的余数，并把余数赋给变量 remainder。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 变量<code>remainder</code>应该被初始化。
    testString: assert(/var\s+?remainder/.test(code));
  - text: <code>remainder</code>的值应该等于<code>2</code>。
    testString: assert(remainder === 2);
  - text: 你应该使用<code>%</code>运算符。
    testString: assert(/\s+?remainder\s*?=\s*?.*%.*;/.test(code));

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
// Only change code below this line

var remainder;

```

</div>


### After Test
<div id='js-teardown'>

```js
(function(y){return 'remainder = '+y;})(remainder);
```

</div>

</section>

## Solution
<section id='solution'>


```js
var remainder =  11 % 3;
```

</section>
