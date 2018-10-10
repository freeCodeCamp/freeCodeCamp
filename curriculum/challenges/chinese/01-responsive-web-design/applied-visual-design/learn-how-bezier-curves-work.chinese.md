---
id: 587d78a9367417b2b2512ae8
title: Learn How Bezier Curves Work
challengeType: 0
videoUrl: ''
localeTitle: 了解Bezier曲线的工作原理
---

## Description
<section id="description">最后一项挑战引入了<code>animation-timing-function</code>属性和一些在其持续时间内改变动画速度的关键字。 CSS提供了除关键字之外的选项，通过使用贝塞尔曲线，可以更好地控制动画的播放方式。在CSS动画中，贝塞尔曲线与<code>cubic-bezier</code>函数一起使用。曲线的形状表示动画的播放方式。曲线位于1乘1坐标系上。此坐标系的X轴是动画的持续时间（将其视为时间刻度），Y轴是动画中的变化。 <code>cubic-bezier</code>函数由四个主要点组成，这些点位于1 x 1网格上： <code>p0</code> ， <code>p1</code> ， <code>p2</code>和<code>p3</code> 。为您设置<code>p0</code>和<code>p3</code> - 它们是始终分别位于原点（0,0）和（1,1）的起点和终点。您可以为其他两个点设置x和y值，并将它们放置在网格中的位置决定了要遵循的动画曲线的形状。这是在CSS中通过以下形式声明<code>p1</code>和<code>p2</code> “锚”点的x和y值来完成的： <code>(x1, y1, x2, y2)</code> 。将它们全部拉到一起，这里是CSS代码中Bezier曲线的一个例子： <code>animation-timing-function: cubic-bezier(0.25, 0.25, 0.75, 0.75);</code>在上面的示例中，x和y值对于每个点都是等效的（x1 = 0.25 = y1和x2 = 0.75 = y2），如果您记得几何类，则会产生从原点延伸到点的线（1 ，1）。此动画是动画长度期间元素的线性变化，与使用<code>linear</code>关键字相同。换句话说，它以恒定的速度变化。 </section>

## Instructions
<section id="instructions">对于id为<code>ball1</code>的元素，将<code>animation-timing-function</code>属性的值从<code>linear</code>更改为其等效的<code>cubic-bezier</code>函数值。使用上面示例中给出的点值。 </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 具有id <code>ball1</code>的元素的<code>animation-timing-function</code>属性的值应该是线性等效的cubic-bezier函数。
    testString: 'assert($("#ball1").css("animation-timing-function") == "cubic-bezier(0.25, 0.25, 0.75, 0.75)", "The value of the <code>animation-timing-function</code> property for the element with the id <code>ball1</code> should be the linear-equivalent cubic-bezier function.");'
  - text: 具有id <code>ball2</code>的元素的<code>animation-timing-function</code>属性的<code>ball2</code>不应更改。
    testString: 'assert($("#ball2").css("animation-timing-function") == "ease-out", "The value of the <code>animation-timing-function</code> property for the element with the id <code>ball2</code> should not change.");'

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

```js
// solution required
```
</section>
