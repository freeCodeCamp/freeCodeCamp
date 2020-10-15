---
id: 587d78a3367417b2b2512ad1
challengeType: 0
videoUrl: 'https://scrimba.com/c/c2MD3Tr'
forumTopicId: 301056
title: 了解互补色
---

## Description
<section id='description'>
色彩理论以及设计色彩学很复杂，这里将只涉及很基础的部分。在网站设计里，颜色能让内容更醒目，能调动情绪，从而创造舒适的视觉体验。不同的颜色组合对网站的视觉效果影响很大，精妙的设计都需要适宜的颜色来美化页面内容。
 一半是科学，一半是艺术，色环是我们认识颜色关系的好工具 - 它是一个近色相邻异色相离的圆环。当两个颜色恰好在色环的两端时，这两个颜色叫做补色。绘画中两只补色在混合后会变成灰色。补色搭配能形成强列的对比效果，传达出活力、能量、兴奋等意义。
下面是一些十六进制码（hex code）补色的例子：
<blockquote>红色（#FF0000）和蓝绿色 (#00FFFF)<br>绿色（#00FF00）和品红色（#FF00FF）<br>蓝色（#0000FF）和黄色（#FFFF00）</blockquote>
现在很多的在线选色工具都有寻找补色的功能。
<strong>注意</strong><br>对于所有的颜色关卡： 颜色能吸引用户的注意，但不是唯一的方式，切勿喧宾夺主，过度使用会适得其反。详细会在应用无障碍章节介绍。
</section>

## Instructions
<section id='instructions'>
把 <code>blue</code> 和 <code>yellow</code> class 的 <code>background-color</code> 属性改成相应的颜色。注意观察它们之间的编码区别以及和它们和白色的编码区别。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 'class 为 <code>blue</code> 的 <code>div</code> 元素应该有值为蓝色的 <code>background-color</code> CSS 属性。'
    testString: assert($('.blue').css('background-color') == 'rgb(0, 0, 255)');
  - text: 'class 为 <code>yellow</code> 的 <code>div</code> 元素应该有值为黄色的 <code>background-color</code> CSS 属性。'
    testString: assert($('.yellow').css('background-color') == 'rgb(255, 255, 0)');

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

```html
// solution required
```

</section>
              