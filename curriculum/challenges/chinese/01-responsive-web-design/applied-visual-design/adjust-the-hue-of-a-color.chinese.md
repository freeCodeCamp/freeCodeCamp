---
id: 587d78a4367417b2b2512ad4
title: Adjust the Hue of a Color
challengeType: 0
videoUrl: ''
localeTitle: 调整颜色的色调
---

## Description
<section id="description">颜色具有几个特征，包括色调，饱和度和亮度。 CSS3引入了<code>hsl()</code>属性作为通过直接声明这些特征来选择颜色的替代方法。 <b>顺化</b>是人们通常认为的“颜色”。如果您在左侧以红色开始，在中间移动绿色，在右侧移动蓝色，则色调是沿着此线条的颜色。在<code>hsl()</code> ，色调使用色轮概念而不是光谱，其中圆上颜色的角度以0到360之间的值给出。 <b>饱和度</b>是颜色中的灰色量。完全饱和的颜色没有灰色，最低饱和的颜色几乎完全是灰色。这是以100％完全饱和的百分比给出的。 <b>亮度</b>是一种颜色的白色或黑色。给出百分比范围从0％（黑色）到100％（白色），其中50％是正常颜色。以下是使用具有完全饱和，正常亮度颜色的<code>hsl()</code>的几个示例： <table class="table table-striped"><thead><tr><th>颜色</th><th> HSL </th></tr></thead><tbody><tr><td>红</td><td> hsl（0,100％，50％） </td></tr><tr><td>黄色</td><td> hsl（60,100％，50％） </td></tr><tr><td>绿色</td><td> hsl（120,100％，50％） </td></tr><tr><td>青色</td><td> hsl（180％，100％，50％） </td></tr><tr><td>蓝色</td><td> hsl（240,100％，50％） </td></tr><tr><td>品红</td><td> hsl（300,100％，50％） </td></tr></tbody></table></section>

## Instructions
<section id="instructions">使用<code>hsl()</code>根据类名（ <code>green</code> ， <code>cyan</code>或<code>blue</code> ）更改每个<code>div</code>元素的<code>background-color</code> 。这三个都应该具有完全饱和度和正常亮度。 </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 您的代码应使用<code>hsl()</code>属性将颜色声明为绿色。
    testString: 'assert(code.match(/\.green\s*?{\s*?background-color:\s*?hsl/gi), "Your code should use the <code>hsl()</code> property to declare the color green.");'
  - text: 您的代码应使用<code>hsl()</code>属性来声明青色。
    testString: 'assert(code.match(/\.cyan\s*?{\s*?background-color:\s*?hsl/gi), "Your code should use the <code>hsl()</code> property to declare the color cyan.");'
  - text: 您的代码应使用<code>hsl()</code>属性将颜色声明为蓝色。
    testString: 'assert(code.match(/\.blue\s*?{\s*?background-color:\s*?hsl/gi), "Your code should use the <code>hsl()</code> property to declare the color blue.");'
  - text: 具有<code>green</code>类的<code>div</code>元素应具有<code>green</code>的<code>background-color</code> 。
    testString: 'assert($(".green").css("background-color") == "rgb(0, 255, 0)", "The <code>div</code> element with class <code>green</code> should have a <code>background-color</code> of green.");'
  - text: 具有<code>cyan</code>类的<code>div</code>元素应具有<code>cyan</code>的<code>background-color</code> 。
    testString: 'assert($(".cyan").css("background-color") == "rgb(0, 255, 255)", "The <code>div</code> element with class <code>cyan</code> should have a <code>background-color</code> of cyan.");'
  - text: 具有<code>blue</code>类的<code>div</code>元素应具有<code>blue</code>的<code>background-color</code> 。
    testString: 'assert($(".blue").css("background-color") == "rgb(0, 0, 255)", "The <code>div</code> element with class <code>blue</code> should have a <code>background-color</code> of blue.");'

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

  .green {
    background-color: #000000;
  }

  .cyan {
    background-color: #000000;
  }

  .blue {
    background-color: #000000;
  }

  div {
    display: inline-block;
    height: 100px;
    width: 100px;
  }
</style>

<div class="green"></div>
<div class="cyan"></div>
<div class="blue"></div>

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
