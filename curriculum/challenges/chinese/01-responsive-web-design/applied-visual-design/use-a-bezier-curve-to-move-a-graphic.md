---
id: 587d78a9367417b2b2512ae9
challengeType: 0
videoUrl: 'https://scrimba.com/c/c6bnRCK'
forumTopicId: 301071
title: 使用贝塞尔曲线移动图形
---

## Description
<section id='description'>
前面的关卡涉及的 <code>ease-out</code> 预定义值描述了动画以高速开始低速结束。右边的动画展示了 <code>ease-out</code> 预定义值（蓝色的元素）和 <code>linear</code> 预定义值（红色的元素）的区别。同样的，<code>ease-out</code> 预定义值也可以用贝塞尔曲线函数实现。
通俗的讲，将一条直线放在范围只有 1 的坐标轴中，并从中间拿 <code>p1</code> 和 <code>p2</code> 两个点来拉扯（X 轴的取值区间是 [0, 1]，Y 轴任意），最后形成的曲线就是动画的贝塞尔速度曲线。下面是贝塞尔曲线模仿 ease-out 预定义值的例子：
<code>animation-timing-function: cubic-bezier(0, 0, 0.58, 1);</code> 
记住所有的 <code>cubic-bezier</code> 函数都是从坐标为 (0, 0) 的 <code>p0</code> 开始，在坐标为 (1, 1) 的 <code>p3</code> 结束。在这个例子里，曲线在 y 轴（从 0 开始，运动到 <code>p1</code> 的 0，然后运动到 <code>p2</code> 的 1）上移动的比在 x 轴（从 0 开始，运动到 <code>p1</code> 的 0，到 <code>p2</code> 的 0.58）上移动的快。结果是，在这一段动画内元素运动的快。到曲线的结尾，x 和 y 之间的关系反过来了，y 值保持为1，没有变化，x 值从 0.58 变为 1，元素运动的慢。
</section>

## Instructions
<section id='instructions'>
为了看贝塞尔曲线的运动效果，把 id 为 <code>red</code> 的元素的 <code>animation-timing-function</code> 属性赋为 <code>cubic-bezier</code> 函数，其中 x1，y1，x2，y2 值分别为 0，0，0.58，1。这会使两个元素运动过程类似。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 'id 为 <code>red</code> 的元素的 <code>animation-timing-function</code> 属性应当赋为 <code>cubic-bezier</code> 函数，其中 x1，y1，x2，y2 值分别为 0，0，0.58，1。'
    testString: assert($('#red').css('animation-timing-function') == 'cubic-bezier(0, 0, 0.58, 1)');
  - text: 'id 为 <code>red</code> 的元素的 <code>animation-timing-function</code> 属性不应该取值 linear。'
    testString: assert($('#red').css('animation-timing-function') !== 'linear');
  - text: 'id 为 <code>blue</code> 的元素的 <code>animation-timing-function</code> 属性不应该被改变。'
    testString: const blueBallAnimation = $('#blue').css('animation-timing-function').replace(/\s/g, ''); assert(blueBallAnimation == 'ease-out' || blueBallAnimation == 'cubic-bezier(0,0,0.58,1)');

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

```html
// solution required
```

</section>
              