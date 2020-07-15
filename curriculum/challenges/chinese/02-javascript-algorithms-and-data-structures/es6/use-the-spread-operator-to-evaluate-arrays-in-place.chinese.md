---
id: 587d7b89367417b2b2512b48
title: Use the Spread Operator to Evaluate Arrays In-Place
challengeType: 1
videoUrl: ''
localeTitle: 使用Spread运算符来就地评估数组
---

## Description
<section id="description"> ES6引入了<dfn>扩展运算符</dfn> ，它允许我们在需要多个参数或元素的位置扩展数组和其他表达式。下面的ES5代码使用<code>apply()</code>来计算数组中的最大值： <blockquote> var arr = [6,89,3,45]; <br> var maximus = Math.max.apply（null，arr）; //返回89 </blockquote>我们必须使用<code>Math.max.apply(null, arr)</code>因为<code>Math.max(arr)</code>返回<code>NaN</code> 。 <code>Math.max()</code>期望以逗号分隔的参数，但不是数组。扩展运算符使这种语法更易于阅读和维护。 <blockquote> const arr = [6,89,3,45]; <br> const maximus = Math.max（... arr）; //返回89 </blockquote> <code>...arr</code>返回一个解压缩的数组。换句话说，它<em>传播</em>阵列。但是，扩展运算符只能在就地工作，就像在函数的参数或数组文字中一样。以下代码不起作用： <blockquote> const spreaded = ... arr; //将抛出语法错误</blockquote></section>

## Instructions
<section id="instructions">使用spread运算符将<code>arr1</code>所有内容复制到另一个数组<code>arr2</code> 。 </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>arr2</code>是<code>arr1</code>正确副本。
    testString: assert(arr2.every((v, i) => v === arr1[i]));
  - text: <code>...</code>传播运算符用于复制<code>arr1</code> 。
    testString: assert(code.match(/Array\(\s*\.\.\.arr1\s*\)|\[\s*\.\.\.arr1\s*\]/));
  - text: 更改<code>arr1</code>时， <code>arr2</code>保持不变。
    testString: assert((arr1, arr2) => {arr1.push('JUN'); return arr2.length < arr1.length});

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2;
(function() {
  "use strict";
  arr2 = []; // change this line
})();
console.log(arr2);

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
