---
id: 587d78a3367417b2b2512ad1
title: Learn about Complementary Colors
challengeType: 0
videoUrl: ''
localeTitle: 了解互补色
---

## Description
<section id="description">色彩理论及其对设计的影响是一个深层次的主题，只有基础知识才能应对以下挑战。在网站上，颜色可以引起对内容的注意，唤起情感或创造视觉和谐。使用不同的颜色组合可以真正改变网站的外观，并且可以考虑选择适合您内容的调色板。色轮是一种有用的工具，用于可视化颜色彼此之间的关系 - 它是一个圆圈，其中相似的色调是邻居，不同的色调相距较远。当两种颜色在车轮上彼此相对时，它们被称为互补色。它们具有如下特征：如果它们组合，它们彼此“抵消”并产生灰色。然而，当并排放置时，这些颜色看起来更加生动，并产生强烈的视觉对比。补充颜色及其十六进制代码的一些示例是： <blockquote>红色（＃FF0000）和青色（＃00FFFF） <br>绿色（＃00FF00）和洋红色（＃FF00FF） <br>蓝色（＃0000FF）和黄色（＃FFFF00） </blockquote>这与我们许多人在学校教授的过时的RYB颜色模型不同，后者具有不同的主色和互补色。现代色彩理论使用加性RGB模型（如在计算机屏幕上）和减色CMY（K）模型（如在打印中）。请阅读<a href="https://en.wikipedia.org/wiki/Color_model" target="_blank">此处</a>了解有关此复杂主题的更多信息。网上有许多颜色挑选工具可以选择找到颜色的补充。 <strong>注意</strong> <br>对于所有颜色挑战：使用颜色可以是增加页面视觉兴趣的有效方式。但是，不应仅使用颜色作为传达重要信息的唯一方式，因为有视力障碍的用户可能不理解该内容。应用辅助功能挑战中将更详细地介绍此问题。 </section>

## Instructions
<section id="instructions">将<code>blue</code>和<code>yellow</code>类的<code>background-color</code>属性更改为各自的颜色。注意颜色与白色背景相比看起来彼此不同。 </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 具有<code>blue</code>类的<code>div</code>元素应具有<code>blue</code>的<code>background-color</code> 。
    testString: 'assert($(".blue").css("background-color") == "rgb(0, 0, 255)", "The <code>div</code> element with class <code>blue</code> should have a <code>background-color</code> of blue.");'
  - text: 类<code>yellow</code>的<code>div</code>元素应该具有<code>yellow</code>的<code>background-color</code> 。
    testString: 'assert($(".yellow").css("background-color") == "rgb(255, 255, 0)", "The <code>div</code> element with class <code>yellow</code> should have a <code>background-color</code> of yellow.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<style>
  body {
    background-color: #FFFFFF;
  }
  .blue {
    background-color: #000000;
  }
  .yellow {
    background-color: #000000;
  }
  div {
    display: inline-block;
    height: 100px;
    width: 100px;
  }
</style>
<div class="blue"></div>
<div class="yellow"></div>

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
