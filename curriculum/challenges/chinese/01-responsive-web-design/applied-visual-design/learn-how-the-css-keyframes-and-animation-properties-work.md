---
id: 587d78a7367417b2b2512adf
challengeType: 0
videoUrl: 'https://scrimba.com/c/cakprhv'
forumTopicId: 301059
title: 了解 CSS 的关键帧和动画是如何工作的
---

## Description
<section id='description'>
如果要给元素添加动画，你需要了解 <code>animation</code> 属性以及 <code>@keyframes</code> 规则。 <code>animation</code> 属性控制动画的外观，<code>@keyframes</code> 规则控制动画中各阶段的变化。总共有 8 个 <code>animation</code> 属性。为了便于理解，本关暂时只涉及到两个最常用的属性。
<code>animation-name</code> 设置动画的名称， 也就是要绑定的选择器的 <code>@keyframes</code> 的名称。
<code>animation-duration</code> 设置动画所花费的时间。
<code>@keyframes</code> 能够创建动画。 创建动画的原理是将一套 CSS 样式逐渐变化为另一套样式。具体是通过设置动画期间对应的“frames”的 CSS 的属性，以百分比来规定改变的时间，或者通过关键词“from”和“to”，等价于 0% 和 100%。打个比方，CSS 里面的 0% 属性就像是电影里面的开场镜头。CSS 里面的 100% 属性就是元素最后的样子，相当于电影里的演职员表或者鸣谢镜头。CSS 在对应的时间内给元素过渡添加效果。下面举例说明 <code>@keyframes</code> 和动画属性的用法：

```css
#anim {
  animation-name: colorful;
  animation-duration: 3s;
}

@keyframes colorful {
  0% {
    background-color: blue;
  }
  100% {
    background-color: yellow;
  }
}
```

id 为 <code>anim</code> 的元素，代码设置 <code>animation-name</code> 为 <code>colorful</code>，设置 <code>animation-duration</code> 为 3 秒。然后把 <code>@keyframes</code> 引用到名为 <code>colorful</code> 的动画属性上。<code>colorful</code> 在动画开始时（0%）设置颜色为蓝色，在动画结束时（100%）设置颜色为黄色。注意不是只有开始和结束的过渡可以设置，0% 到 100% 间的任意百分比你都可以设置。

</section>

## Instructions
<section id='instructions'>
给 id 为 <code>rect</code> 的元素添加动画，设置其 <code>animation-name</code> 为 rainbow，设置其 <code>animation-duration</code> 为 4 秒。然后声明 <code>@keyframes</code> 规则，设置动画开始时（0%）的 <code>background-color</code> 为蓝色，动画中间时（50%）为绿色，动画结束时（100%）为为黄色。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 'id 为 <code>rect</code> 的元素应该有一个值为 rainbow 的 <code>animation-name</code> 属性。'
    testString: assert($('#rect').css('animation-name') == 'rainbow');
  - text: 'id 为 <code>rect</code> 的元素应该有一个值为 4s 的 <code>animation-duration</code> 属性。'
    testString: assert($('#rect').css('animation-duration') == '4s');
  - text: '<code>@keyframes</code> 规则的 <code>animation-name</code> 应该为 rainbow。'
    testString: assert(code.match(/@keyframes\s+?rainbow\s*?{/g));
  - text: '<code>@keyframes</code> 规则的 rainbow 在 0% 时的 <code>background-color</code> 应该为蓝色。'
    testString: assert(code.match(/0%\s*?{\s*?background-color:\s*?blue;\s*?}/gi));
  - text: '<code>@keyframes</code> 规则的 rainbow 在 50% 时的 <code>background-color</code> 应该为绿色。'
    testString: assert(code.match(/50%\s*?{\s*?background-color:\s*?green;\s*?}/gi));
  - text: '<code>@keyframes</code> 规则的 rainbow 在 100% 时的 <code>background-color</code> 应该为黄色。'
    testString: assert(code.match(/100%\s*?{\s*?background-color:\s*?yellow;\s*?}/gi));

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<style>
  div {
    height: 40px;
    width: 70%;
    background: black;
    margin: 50px auto;
    border-radius: 5px;
  }

  #rect {
    
    
  }
  
  
  
  
</style>
<div id="rect"></div>
```

</div>



</section>

## Solution
<section id='solution'>

```html
// solution required
```

</section>
              