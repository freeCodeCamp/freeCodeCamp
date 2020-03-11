---
id: 587d78a8367417b2b2512ae7
title: Change Animation Timing with Keywords
challengeType: 0
videoUrl: 'https://scrimba.com/c/cJKvwCM'
forumTopicId: 301045
localeTitle: 使用关键字更改动画定时器
---

## Description
<section id='description'>
在 CSS 动画里，<code>animation-timing-function</code> 规定动画的速度曲线。速度曲线定义动画从一套 CSS 样式变为另一套所用的时间。如果要描述的动画是一辆车在指定时间内（<code>animation-duration</code>）从 A 运动到 B，那么 <code>animation-timing-function</code> 表述的就是车在运动中的加速和减速等过程。
已经有了很多预定义的值可以直接使用于大部分场景。比如，默认的值是 <code>ease</code>，动画以低速开始，然后加快，在结束前变慢。其它常用的值包括 <code>ease-out</code>，动画以高速开始，以低速结束；<code>ease-in</code>，动画以低速开始，以高速结束；<code>linear</code>，动画从头到尾的速度是相同的。
</section>

## Instructions
<section id='instructions'>
给 id 为 <code>ball1</code> 和 <code>ball2</code> 的元素添加 <code>animation-timing-function</code>，<code>ball1</code> 赋值为 <code>linear</code>，<code>ball2</code> 赋值为 <code>ease-out</code>。它们的 <code>animation-duration</code> 都为 2 秒，注意观察它们在开始和结束时的不同。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 'id 为 <code>ball1</code> 的元素的 <code>animation-timing-function</code> 属性值应该为 linear。'
    testString: const ball1Animation = $('#ball1').css('animation-timing-function').replace(/\s/g, '');assert(ball1Animation == 'linear' || ball1Animation == 'cubic-bezier(0,0,1,1)');
  - text: 'id 为 <code>ball2</code> 的元素的 <code>animation-timing-function</code> 属性值应该为 ease-out。'
    testString: const ball2Animation = $('#ball2').css('animation-timing-function').replace(/\s/g, ''); assert(ball2Animation == 'ease-out' || ball2Animation == 'cubic-bezier(0,0,0.58,1)');

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<style>

  .balls {
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
    left:27%;
    
  }
  #ball2 { 
    left:56%;
    
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
              