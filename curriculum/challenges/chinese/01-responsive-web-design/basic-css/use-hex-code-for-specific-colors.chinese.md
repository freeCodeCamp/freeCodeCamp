---
id: bad87fee1348bd9aedf08726
title: Use Hex Code for Specific Colors
challengeType: 0
videoUrl: ''
localeTitle: 使用Hex代码表示特定颜色
---

## Description
<section id="description">您知道还有其他方法可以在CSS中表示颜色吗？其中一种方法称为十六进制代码，或简称为<code>hex code</code> 。我们通常使用<code>decimals</code>或基数为10的数字，每个数字使用符号0到9。 <code>Hexadecimals</code> （或<code>hex</code> ）是16位数字。这意味着它使用十六个不同的符号。与小数一样，符号0-9表示0到9的值。然后A，B，C，D，E，F代表十到十五的值。总而言之，0到F可以用<code>hexadecimal</code>表示一个数字，总共给出16个可能值。您可以<a target="_blank" href="https://en.wikipedia.org/wiki/Hexadecimal">在此处</a>找到有关<a target="_blank" href="https://en.wikipedia.org/wiki/Hexadecimal">十六进制数的</a>更多信息。在CSS中，我们可以使用6个十六进制数字来表示颜色，红色（R），绿色（G）和蓝色（B）组件各有两个。例如， <code>#000000</code>是黑色，也是可能的最低值。您可以<a target="_blank" href="https://en.wikipedia.org/wiki/RGB_color_model">在此处</a>找到有关<a target="_blank" href="https://en.wikipedia.org/wiki/RGB_color_model">RGB颜色系统的</a>更多信息。 <blockquote>身体 { <br>颜色：＃000000; <br> } </blockquote></section>

## Instructions
<section id="instructions">更换字<code>black</code>在我们的<code>body</code>元素的背景色与它的<code>hex code</code>表示， <code>#000000</code> 。 </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 给你的<code>body</code>元素黑色的背景颜色。
    testString: 'assert($("body").css("background-color") === "rgb(0, 0, 0)", "Give your <code>body</code> element the background-color of black.");'
  - text: 使用<code>hex code</code>替换黑色而不是<code>black</code> 。
    testString: 'assert(code.match(/body\s*{(([\s\S]*;\s*?)|\s*?)background.*\s*:\s*?#000(000)?((\s*})|(;[\s\S]*?}))/gi), "Use the <code>hex code</code> for the color black instead of the word <code>black</code>.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<style>
  body {
    background-color: black;
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
