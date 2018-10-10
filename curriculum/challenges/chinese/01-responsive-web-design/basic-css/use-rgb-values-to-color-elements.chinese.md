---
id: bad87fee1348bd9aede08718
title: Use RGB values to Color Elements
challengeType: 0
videoUrl: ''
localeTitle: 将RGB值用于颜色元素
---

## Description
<section id="description">另一种可以在CSS中表示颜色的方法是使用<code>RGB</code>值。黑色的RGB值如下所示： <code>rgb(0, 0, 0)</code>白色的RGB值如下所示： <code>rgb(255, 255, 255)</code>而不是像使用十六进制代码那样使用六个十六进制数字，使用<code>RGB</code>使用0到255之间的数字指定每种颜色的亮度。如果进行数学计算，一种颜色的两位数等于16乘以16，这总共得到256个值。因此，从零开始计数的<code>RGB</code>具有与十六进制代码完全相同的可能值。以下是使用RGB代码将身体背景更改为橙色的示例。 <blockquote>身体 { <br> background-color：rgb（255,165,0）; <br> } </blockquote></section>

## Instructions
<section id="instructions">让我们用黑色的RGB值替换<code>body</code>元素背景颜色中的十六进制代码： <code>rgb(0, 0, 0)</code> </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 你的<code>body</code>元素应该有黑色背景。
    testString: 'assert($("body").css("background-color") === "rgb(0, 0, 0)", "Your <code>body</code> element should have a black background.");'
  - text: 使用<code>rgb</code>为您的<code>body</code>元素提供黑色。
    testString: 'assert(code.match(/rgb\s*\(\s*0\s*,\s*0\s*,\s*0\s*\)/ig), "Use <code>rgb</code> to give your <code>body</code> element a color of black.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<style>
  body {
    background-color: #F00;
  }
</style>

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
