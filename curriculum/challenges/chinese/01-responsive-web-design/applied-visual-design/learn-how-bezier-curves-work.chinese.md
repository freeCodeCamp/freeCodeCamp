---
id: 587d78a9367417b2b2512ae8
title: Learn How Bezier Curves Work
challengeType: 0
videoUrl: 'https://scrimba.com/c/c9bDrs8'
forumTopicId: 301058
localeTitle: 学习贝塞尔曲线的原理
---

## Description
<section id='description'>
上一关卡介绍了 <code>animation-timing-function</code> 以及它的一些预定义的值。这些值定义了不同时间内的动画速度。除了预定义值之外，CSS 还提供了贝塞尔曲线（Bezier curves）来更出色的控制动画的速度曲线。
在 CSS 动画里，用 <code>cubic-bezier</code> 来定义贝塞尔曲线。曲线的形状代表了动画的速度。曲线在 1*1 的坐标系统内，曲线的 X 轴代表动画的时间间隔（类似于时间比例尺），Y 轴代表动画的改变。
<code>cubic-bezier</code> 函数包含了 1 * 1 网格里的4个点：<code>p0</code>、<code>p1</code>、<code>p2</code> 和 <code>p3</code>。其中 <code>p0</code> 和 <code>p3</code> 是固定值，代表曲线的起始点和结束点，坐标值依次为 (0, 0) 和 (1, 1)。你只需设置另外两点的 x 值和 y 值，设置的这两点确定了曲线的形状从而确定了动画的速度曲线。在 CSS 里面通过<code>(x1, y1, x2, y2)</code>来确定 <code>p1</code> 和 <code>p2</code>。综上，下面就是 CSS 贝塞尔曲线的例子：
<code>animation-timing-function: cubic-bezier(0.25, 0.25, 0.75, 0.75);</code>
在上面的例子里，两个点的 x 和 y 值相等（x1 = 0.25 = y1 和 x2 = 0.75 = y2），如果你还记得初中几何，结果是从原点到点 (1, 1) 的一条直线。动画速度呈线性，效果和 <code>linear</code> 一致。换言之，元素匀速运动。
</section>

## Instructions
<section id='instructions'>
对于 id 为 <code>ball1</code> 的元素，把 <code>animation-timing-function</code> 属性值从 <code>linear</code> 变成等价的 <code>cubic-bezier</code> 函数值。也就是说使用上面例子给的值。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 'id 为 <code>ball1</code> 的元素的 <code>animation-timing-function</code> 属性值应该为和 linear 预定值等价的贝塞尔函数值。'
    testString: assert($('#ball1').css('animation-timing-function') == 'cubic-bezier(0.25, 0.25, 0.75, 0.75)');
  - text: 'id 为 <code>ball2</code> 元素的 <code>animation-timing-function</code> 属性值应该保持不变。'
    testString: const ball2Animation = $('#ball2').css('animation-timing-function').replace(/\s/g, ''); assert(ball2Animation == 'ease-out' || ball2Animation == 'cubic-bezier(0,0,0.58,1)');

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<style>

  .balls{
    border-radius: 50%;
    background: linear-gradient(
      35deg,
      #ccffff,
      #ffcccc
    );
    position: fixed;  
    width: 50px;
    height: 50px;
    margin-top: 50px;
    animation-name: bounce;
    animation-duration: 2s;
    animation-iteration-count: infinite;
  }
  #ball1 { 
    left: 27%;
    animation-timing-function: linear;
  }
  #ball2 { 
    left: 56%;
    animation-timing-function: ease-out;
  }

@keyframes bounce {
  0% {
    top: 0px;
  } 
  100% {
    top: 249px;
  }
} 

</style>

<div class="balls" id="ball1"></div>
<div class="balls" id="ball2"></div>
```

</div>



</section>

## Solution
<section id='solution'>

```html
// solution required
```

</section>
              