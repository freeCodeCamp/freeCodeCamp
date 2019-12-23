---
id: 587d78a9367417b2b2512ae9
title: Use a Bezier Curve to Move a Graphic
challengeType: 0
videoUrl: ''
localeTitle: 使用贝塞尔曲线移动图形
---

## Description
<section id="description">之前的挑战讨论了一个<code>ease-out</code>关键字，该关键字描述了动画更改，该动画更改先加速，然后在动画结束时减慢。在右侧，演示了<code>ease-out</code>关键字（对于蓝色元素）和<code>linear</code>关键字（对于红色元素）之间的差异。通过使用自定义三次贝塞尔曲线函数，可以实现对<code>ease-out</code>关键字的类似动画进展。通常，更改<code>p1</code>和<code>p2</code>锚点会驱动创建不同的贝塞尔曲线，这些曲线控制动画随时间推移的进展。下面是使用值来模拟缓出样式的贝塞尔曲线的示例： <code>animation-timing-function: cubic-bezier(0, 0, 0.58, 1);</code>请记住，所有<code>cubic-bezier</code>函数都以（0,0）处的<code>p0</code>开始，并以（1,1）处的<code>p3</code>结束。在这个例子中，曲线移动通过Y轴（从0开始，到<code>p1</code> y值为0，然后到<code>p2</code> y值为1）比在X轴上移动更快（0开始，然后是0对于<code>p1</code> ，对于<code>p2</code> ，高达0.58）。结果，动画元素的变化比该段的动画时间更快。接近曲线的末端，x和y值的变化之间的关系反转 -  y值从1移动到1（无变化），x值从0.58移动到1，使得动画变化进展比较慢动画持续时间。 </section>

## Instructions
<section id="instructions">要查看此贝塞尔曲线的效果，请将id为<code>red</code>的元素的<code>animation-timing-function</code>更改为<code>cubic-bezier</code>函数，其中x1，y1，x2，y2值分别设置为0,0,0.58,1这将使两个元素同样在动画中前进。 </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 'id为<code>red</code>的元素的<code>animation-timing-function</code>属性值应为<code>cubic-bezier</code>函数，x1，y1，x2，y2值分别设置为0,0,0.58,1。'
    testString: 'assert($("#red").css("animation-timing-function") == "cubic-bezier(0, 0, 0.58, 1)", "The value of the <code>animation-timing-function</code> property of the element with the id <code>red</code> should be a <code>cubic-bezier</code> function with x1, y1, x2, y2 values set respectively to 0, 0, 0.58, 1 .");'
  - text: id为<code>red</code>的元素不应该具有linear的<code>animation-timing-function</code>属性。
    testString: 'assert($("#red").css("animation-timing-function") !== "linear", "The element with the id <code>red</code> should no longer have the <code>animation-timing-function</code> property of linear.");'
  - text: 具有id <code>blue</code>的元素的<code>animation-timing-function</code>属性的值不应更改。
    testString: 'assert($("#blue").css("animation-timing-function") == "ease-out", "The value of the <code>animation-timing-function</code> property for the element with the id <code>blue</code> should not change.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<style>
  .balls{
    border-radius: 50%;
    position: fixed;
    width: 50px;
    height: 50px;
    margin-top: 50px;
    animation-name: bounce;
    animation-duration: 2s;
    animation-iteration-count: infinite;
  }
  #red {
    background: red;
    left: 27%;
    animation-timing-function: linear;
  }
  #blue {
    background: blue;
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
<div class="balls" id= "red"></div>
<div class="balls" id= "blue"></div>

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
