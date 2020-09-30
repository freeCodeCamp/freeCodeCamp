---
id: 587d78a4367417b2b2512ad2
title: Learn about Tertiary Colors
challengeType: 0
videoUrl: 'https://scrimba.com/c/c3bRDAb'
forumTopicId: 301057
localeTitle: 了解三原色
---

## Description
<section id='description'>
电脑显示器和手机屏幕是一种加色模型，将红（R）、绿（G）、蓝（B）三原色的色光以不同的比例相加，以产生多种多样的色光。两种原色相加产生二次色：蓝绿（G+B）、品红（R+B）和黄色（R+G）。你在上一个挑战里已经见过这些颜色了。这些二次色恰好是在合成它们时未使用的原色的补色，即在色环中位于两端。例如，品红色是红色和蓝色相加产生，它是绿色的补色。
三次色是由原色和二次色相加产生的颜色，例如红色（原色）和黄色（二次色）相加产生橙色。将这六种颜色中相邻的颜色相加，便产生了十二色色环。
设计里面有很多种颜色搭配方法。涉及到三次色的一种配色方法是分裂补色搭配法。选定主色之后，在色环上选择与它的补色相邻的两种颜色与之搭配。此种搭配既有对比，又不失和谐。
下面是使用分裂补色搭配法创建的三个颜色：
<table class="table table-striped"><thead><tr><th>颜色</th><th>HEX 颜色码</th></tr><thead><tbody><tr><td>橙色</td><td>#FF7D00</td></tr><tr><td>蓝绿色</td><td>#00FFFF</td></tr><tr><td>树莓红</td><td>#FF007D</td></tr></tbody></table>
</section>

## Instructions
<section id='instructions'>
把 class 为 <code>orange</code>、<code>cyan</code> 和 <code>rasberry</code> 的 <code>background-color</code> 改成其对应的颜色。由于 rasberry 不在浏览器 17 种标准色之内，不能直接用作颜色名，所以要使用 HEX 颜色码。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 'class 为 <code>orange</code> 的 <code>div</code> 应该有值为橙色的 <code>background-color</code> CSS 属性。'
    testString: assert($('.orange').css('background-color') == 'rgb(255, 127, 0)');
  - text: 'class 为 <code>cyan</code> 的 <code>div</code> 应该有值为蓝绿色的 <code>background-color</code> CSS 属性。'
    testString: assert($('.cyan').css('background-color') == 'rgb(0, 255, 255)');
  - text: 'class 为 <code>raspberry</code> 的 <code>div</code> 应该有值为树莓红色的 <code>background-color</code> CSS 属性。'
    testString: assert($('.raspberry').css('background-color') == 'rgb(255, 0, 127)');
  - text: 'corlor classes 里的所有的 <code>background-color</code> 应该是 HEX 颜色码而不是颜色名称。'
    testString: assert(!/background-color:\s(orange|cyan|raspberry)/.test(code));

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
  
  .orange {
    background-color: #000000;
  }
  
  .cyan {
    background-color: #000000;
  }
  
  .raspberry {
    background-color: #000000;
  }
  
  div {
    height: 100px;
    width: 100px;
    margin-bottom: 5px;
  }
</style>
  
<div class="orange"></div>
<div class="cyan"></div>
<div class="raspberry"></div>
```

</div>



</section>

## Solution
<section id='solution'>

```html
// solution required
```

</section>
              