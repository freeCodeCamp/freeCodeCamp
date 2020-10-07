---
id: 587d78a8367417b2b2512ae4
challengeType: 0
videoUrl: 'https://scrimba.com/c/cDZpDUr'
forumTopicId: 301062
title: 使用无限的动画计数制作 CSS 心跳
---

## Description
<section id='description'>
这也是一个用 <code>animation-iteration-count</code> 属性创造持续动画的例子，它基于前面关卡创建的心形。
心跳动画的每一秒包含两个部分。<code>heart</code> 元素（包括 <code>:before</code> 和 <code>:after</code>）使用 <code>transform</code> 属性改变其大小，背景 <code>div</code> 使用 <code>background</code> 属性改变其颜色。
</section>

## Instructions
<section id='instructions'>
给 <code>back</code> class和 <code>heart</code> class添加值为 infinite 的 <code>animation-iteration-count</code> 属性，使心脏持续跳动。<code>heart:before</code> 和 <code>heart:after</code> 选择器不需要添加动画属性。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: '<code>heart</code> class 的 <code>animation-iteration-count</code> 属性应该赋值 infinte。'
    testString: assert($('.heart').css('animation-iteration-count') == 'infinite');
  - text: '<code>back</code> class 的 <code>animation-iteration-count</code> 属性应该赋值 infinite。'
    testString: assert($('.back').css('animation-iteration-count') == 'infinite');

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<style>
  .back {
    position: fixed;
    padding: 0;
    margin: 0;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: white;
    animation-name: backdiv;
    animation-duration: 1s; 
    
  }

  .heart {
    position: absolute;
    margin: auto;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: pink;
    height: 50px;
    width: 50px;
    transform: rotate(-45deg);
    animation-name: beat;
    animation-duration: 1s;
    
  }
  .heart:after {
    background-color: pink;
    content: "";
    border-radius: 50%;
    position: absolute;
    width: 50px;
    height: 50px;
    top: 0px;
    left: 25px;
  }
  .heart:before {
    background-color: pink;
    content: "";
    border-radius: 50%;
    position: absolute;
    width: 50px;
    height: 50px;
    top: -25px;
    left: 0px;
  }

  @keyframes backdiv {
    50% {
      background: #ffe6f2;
    }
  }

  @keyframes beat {
    0% {
      transform: scale(1) rotate(-45deg);
    }
    50% {
      transform: scale(0.6) rotate(-45deg);
    }
  }

</style>
<div class="back"></div>
<div class="heart"></div>
```

</div>



</section>

## Solution
<section id='solution'>

```html
// solution required
```

</section>
              