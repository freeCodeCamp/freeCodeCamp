---
id: 587d78a9367417b2b2512aea
title: Make Motion More Natural Using a Bezier Curve
challengeType: 0
videoUrl: ''
localeTitle: 使用贝塞尔曲线使运动更自然
---

## Description
<section id="description">这一挑战激发了一个元素来复制被玩杂耍的球的运动。先前的挑战涵盖了<code>linear</code>和<code>ease-out</code>三次贝塞尔曲线，但两者都没有准确描述杂耍运动。您需要为此自定义Bezier曲线。当<code>animation-iteration-count</code>设置为无限时， <code>animation-timing-function</code>在每个关键帧处自动循环。由于在动画持续时间的中间设置了关键帧规则（ <code>50%</code> ），因此在球的向上和向下移动时会产生两个相同的动画进度。下面的三次贝塞尔曲线模拟了一个杂耍运动： <code>cubic-bezier(0.3, 0.4, 0.5, 1.6);</code>请注意，y2的值大于1.虽然三次贝塞尔曲线映射在1乘1坐标系上，并且它只能接受0到1的x值，但y值可以设置为大于1的数字。这导致弹跳运动，非常适合模拟杂耍球。 </section>

## Instructions
<section id="instructions">将id为<code>green</code>的元素的<code>animation-timing-function</code>的值更改为<code>cubic-bezier</code>函数，x1，y1，x2，y2值分别设置为0.311,0.441,0.444,1.648。 </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 具有id <code>green</code>的元素的<code>animation-timing-function</code>属性的值应该是具有指定的x1，y1，x2，y2值的<code>cubic-bezier</code>函数。
    testString: 'assert($("#green").css("animation-timing-function") == "cubic-bezier(0.311, 0.441, 0.444, 1.649)", "The value of the <code>animation-timing-function</code> property for the element with the id <code>green</code> should be a <code>cubic-bezier</code> function with x1, y1, x2, y2 values as specified.'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<style>
  .balls {
    border-radius: 50%;
    position: fixed;
    width: 50px;
    height: 50px;
    top: 60%;
    animation-name: jump;
    animation-duration: 2s;
    animation-iteration-count: infinite;
  }
  #red {
    background: red;
    left: 25%;
    animation-timing-function: linear;
  }
  #blue {
    background: blue;
    left: 50%;
    animation-timing-function: ease-out;
  }
  #green {
    background: green;
    left: 75%;
    animation-timing-function: cubic-bezier(0.69, 0.1, 1, 0.1);
  }

  @keyframes jump {
    50% {
      top: 10%;
    }
  }
</style>
<div class="balls" id="red"></div>
<div class="balls" id="blue"></div>
<div class="balls" id="green"></div>

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
