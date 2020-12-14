---
id: 587d78a7367417b2b2512ae2
challengeType: 0
videoUrl: 'https://scrimba.com/c/cGJqqAE'
forumTopicId: 301054
title: 通过从左到右淡化元素来创建视觉方向
---

## Description
<section id='description'>
在本关里，你将要改变动画元素的 <code>opacity</code>，使其在到达屏幕右侧时渐隐。
在展示的动画里，具有渐变背景的圆形元素在 50% 标记的 <code>@keyframes</code> 规则处向右移动。
</section>

## Instructions
<section id='instructions'>
使用 id 选择器选择 id 为 <code>ball</code> 的元素，在 <code>50%</code> 里添加 <code>opacity</code> 属性并赋值 0.1，使其在向右移动时渐隐。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: '50% 处 <code>keyframes</code> 规则应该设置 <code>opacity</code> 属性值为 0.1 以使其渐隐。'
    testString: assert(code.match(/@keyframes fade\s*?{\s*?50%\s*?{\s*?(?:left:\s*?60%;\s*?opacity:\s*?0?\.1;|opacity:\s*?0?\.1;\s*?left:\s*?60%;)/gi));

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<style>

  #ball {
    width: 70px;
    height: 70px;
    margin: 50px auto;
    position: fixed;
    left: 20%;
    border-radius: 50%;
    background: linear-gradient(
      35deg,
      #ccffff,
      #ffcccc
    );
    animation-name: fade;
    animation-duration: 3s;
  }

  @keyframes fade {
    50% {
      left: 60%;
      
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
              