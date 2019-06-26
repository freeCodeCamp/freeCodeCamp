---
id: 587d7db8367417b2b2512ba1
title: Match All Non-Numbers
challengeType: 1
videoUrl: ''
localeTitle: 匹配所有非数字
---

## Description
<section id="description">最后一项挑战显示了如何使用带有小写<code>d</code>的快捷键<code>\d</code>来搜索数字。您也可以使用类似的使用大写<code>D</code>快捷方式搜索非数字。查找非数字字符的快捷方式是<code>\D</code>这等于字符类<code>[^0-9]</code> ，它查找不是0到9之间的数字的单个字符。 </section>

## Instructions
<section id="instructions">使用非数字<code>\D</code>的速记字符类来计算电影标题中有多少个非数字。 </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 測試文本
    testString: assert(true);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
let numString = "Your sandwich will be $5.00";
let noNumRegex = /change/; // Change this line
let result = numString.match(noNumRegex).length;

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
