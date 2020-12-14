---
id: 587d78a5367417b2b2512ad6
challengeType: 0
videoUrl: 'https://scrimba.com/c/cg4dpt9'
forumTopicId: 301047
title: 创建一个 CSS 线性渐变
---

## Description
<section id='description'>
HTML 元素的背景色并不局限于单色。CSS 还提供了颜色过渡，也就是渐变。可以通过 <code>background</code> 里面的 <code>linear-gradient()</code> 来实现线性渐变，下面是它的语法：
<code>background: linear-gradient(gradient_direction, 颜色 1, 颜色 2, 颜色 3, ...);</code> 
第一个参数指定了颜色过渡的方向 - 它的值是角度，90deg 代表垂直渐变，45deg 的渐变角度和反斜杠方向差不多。剩下的参数指定了渐变颜色的顺序：
例子：
<code>background: linear-gradient(90deg, red, yellow, rgb(204, 204, 255));</code>
</section>

## Instructions
<section id='instructions'>
使用 <code>linear-gradient()</code> 给 <code>div</code> 添加 <code>background</code> 渐变色，渐变角度 35deg，从 <code>#CCFFFF</code> 过渡到 <code>#FFCCCC</code>。
<strong>注意</strong><br>有很多种方式指定颜色值，如 <code>rgb()</code> 或者 <code>hsl()</code>。在本关里请使用 hex 颜色码。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: '<code>div</code> 元素应该有一个指定方向和颜色的 <code>linear-gradient</code> <code>background</code>渐变色。'
    testString: assert($('div').css('background-image').match(/linear-gradient\(35deg, rgb\(204, 255, 255\), rgb\(255, 204, 204\)\)/gi));

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<style>
  div{ 
    border-radius: 20px;
    width: 70%;
    height: 400px;
    margin: 50px auto;
    
  }

</style>

<div></div>
```

</div>



</section>

## Solution
<section id='solution'>

```html
// solution required
```

</section>
              