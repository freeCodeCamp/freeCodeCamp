---
id: 587d78a8367417b2b2512ae3
challengeType: 0
videoUrl: 'https://scrimba.com/c/cVJDVfq'
forumTopicId: 301041
title: 使用无限的动画计数制作永不停止的动画
---

## Description
<section id='description'>
之前的关卡里介绍了一些动画属性以及 <code>@keyframes</code> 规则的用法。还有一个常用的动画属性是 <code>animation-iteration-count</code>，这个属性允许你控制动画循环的次数。下面是一个例子：
<code>animation-iteration-count: 3;</code>
在这里动画会在运行 3 次后停止，如果想让动画一直运行，可以把值设置成 infinite。
</section>

## Instructions
<section id='instructions'>
把 <code>animation-iteration-count</code> 属性改成 infinite，以使右边的球持续跳跃。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: '<code>animation-iteration-count</code> 属性值应该为 infinite。'
    testString: assert($('#ball').css('animation-iteration-count') == 'infinite');

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<style>

  #ball {
    width: 100px;
    height: 100px;
    margin: 50px auto;
    position: relative;
    border-radius: 50%;
    background: linear-gradient(
      35deg,
      #ccffff,
      #ffcccc
    );
    animation-name: bounce;
    animation-duration: 1s;
    animation-iteration-count: 3;
  }

  @keyframes bounce{
    0% {
      top: 0px;
    }
    50% {
      top: 249px;
      width: 130px;
      height: 70px;
    }
    100% {
      top: 0px;
    }
  }
</style>
<div id="ball"></div>
```

</div>



</section>

## Solution
<section id='solution'>

```html
// solution required
```

</section>
              