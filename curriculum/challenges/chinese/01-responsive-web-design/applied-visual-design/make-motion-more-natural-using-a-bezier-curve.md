---
id: 587d78a9367417b2b2512aea
challengeType: 0
videoUrl: 'https://scrimba.com/c/c7akWUv'
forumTopicId: 301063
title: 使用贝塞尔曲线让运动更加自然
---

## Description
<section id='description'>
本关的元素模拟的是杂技抛接球。之前的关卡涉及了 <code>linear</code> 和 <code>ease-out</code> 的贝塞尔曲线描述，如你所见，这两个都无法完美的描述杂耍球的运动。在本关里你需要定制贝塞尔曲线。
当 <code>animation-iteration-count</code> 值为 infinite 时 <code>animation-timing-function</code> 会自动循环 keyframe。由于是在动画周期中间（50%处）设置的 keyframe 规则，最终的结果是球向上和球向下是两个同样的动画过程。
下面的例子模拟了杂耍球运动：
<code>cubic-bezier(0.3, 0.4, 0.5, 1.6); </code> 
注意 y2 的值是大于 1 的。虽然贝塞尔曲线是在 1*1 的坐标系统内 x 值只能在 0 到 1，但是 y 值是可以大于 1 的。这样才能模拟杂耍球运动。
</section>

## Instructions
<section id='instructions'>
把 id 为 <code>green</code> 的元素的 <code>animation-timing-function</code> 值改成 <code>cubic-bezier</code> 函数，函数的参数 x1，y1，x2，y2 值依次为 0.311、0.441、0.444、1.649。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 'id 为<code>green</code>的元素的<code>animation-timing-function</code>值应该为<code>cubic-bezier</code>函数，函数的参数 x1，y1，x2，y2 值依次为 0.311、0.441、0.444、1.649。'
    testString: assert($('#green').css('animation-timing-function') == 'cubic-bezier(0.311, 0.441, 0.444, 1.649)');

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

```html
// solution required
```

</section>
              