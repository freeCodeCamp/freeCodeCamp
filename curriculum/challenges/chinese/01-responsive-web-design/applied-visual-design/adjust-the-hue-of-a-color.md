---
id: 587d78a4367417b2b2512ad4
title: Adjust the Hue of a Color
challengeType: 0
videoUrl: 'https://scrimba.com/c/cPp38TZ'
forumTopicId: 301036
localeTitle: 调整颜色的色相
---

## Description
<section id='description'>
HSL 色彩空间模型是一种将 RGB 色彩模型中的点放在圆柱坐标系中的表示法，描述了色相（hue）、饱和度（saturation）、亮度（lightness）。CSS3 引入了对应的 <code>hsl()</code> 属性做为对应的颜色描述方式。
<b>色相</b>是色彩的基本属性，就是平常所说的颜色名称，如红色、黄色等。以颜色光谱为例，光谱左边从红色开始，移动到中间的绿色，一直到右边的蓝色，色相值就是沿着这条线的取值。在 <code>hsl()</code> 里面，色相用色环来代替光谱，色相值就是色环里面的颜色对应的从 0 到 360 度的角度值。
<b>饱和度</b>是指色彩的纯度，也就是颜色里灰色的占比，越高色彩越纯，低则逐渐变灰，取0-100%的数值。
<b>亮度</b>决定颜色的明暗程度，也就是颜色里白色或者黑色的占比，100% 亮度是白色， 0% 亮度是黑色，而 50% 亮度是“一般的”。 
下面是一些使用 <code>hsl()</code> 描述颜色的例子，颜色都为满饱和度，中等亮度:
<table class="table table-striped"><thead><tr><th>颜色</th><th>HSL</th></tr></thead><tbody><tr><td>红</td><td>hsl(0, 100%, 50%)</td></tr><tr><td>黄</td><td>hsl(60, 100%, 50%)</td></tr><tr><td>绿</td><td>hsl(120, 100%, 50%)</td></tr><tr><td>蓝绿</td><td>hsl(180, 100%, 50%)</td></tr><tr><td>蓝</td><td>hsl(240, 100%, 50%)</td></tr><tr><td>品红</td><td>hsl(300, 100%, 50%)</td></tr></tbody></table>
</section>

## Instructions
<section id='instructions'>
把 class 为 <code>green</code>、<code>cyan</code> 和<code> blue </code> <code>div</code> 的 <code>background-color</code> 使用 <code>hsl()</code> 表示法描述相应的颜色。颜色都为满饱和度，亮度中等。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: '你应该使用 <code>hsl()</code> 属性来表示绿色。'
    testString: assert(code.match(/\.green\s*?{\s*?background-color:\s*?hsl/gi));
  - text: '你应该使用 <code>hsl()</code> 属性来表示蓝绿色。'
    testString: assert(code.match(/\.cyan\s*?{\s*?background-color:\s*?hsl/gi));
  - text: '你应该使用 <code>hsl()</code> 属性来表示蓝色。'
    testString: assert(code.match(/\.blue\s*?{\s*?background-color:\s*?hsl/gi));
  - text: 'class 为 <code>green</code> 的 <code>div</code> 应该有绿色的 <code>background-color</code> CSS 属性。'
    testString: assert($('.green').css('background-color') == 'rgb(0, 255, 0)');
  - text: 'class 为 <code>cyan</code> 的 <code>div</code> 应该有蓝绿色的 <code>background-color</code> CSS 属性。'
    testString: assert($('.cyan').css('background-color') == 'rgb(0, 255, 255)');
  - text: 'class 为 <code>blue</code> 的 <code>div</code> 应该有蓝色的 <code>background-color</code> CSS 属性。'
    testString: assert($('.blue').css('background-color') == 'rgb(0, 0, 255)');

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

```html
// solution required
```

</section>
              