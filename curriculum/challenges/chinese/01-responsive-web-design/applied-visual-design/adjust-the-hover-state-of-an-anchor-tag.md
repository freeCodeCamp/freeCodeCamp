---
id: 587d781d367417b2b2512ac8
title: Adjust the Hover State of an Anchor Tag
challengeType: 0
videoUrl: 'https://scrimba.com/c/cakRGcm'
forumTopicId: 301035
localeTitle: 调整锚点的悬停状态
---

## Description
<section id='description'>
本挑战将要涉及到伪类。伪类是可以添加到选择器上的关键字，用来选择元素的指定状态。
比如，超链接可以使用 <code>:hover</code> 伪类选择器定义它的悬停状态样式。下面是悬停超链接时改变超链接颜色的 CSS：

```css
a:hover {
  color: red;
}
```

</section>

## Instructions
<section id='instructions'>
代码编辑器里面已经有了一个 CSS 规则把所有的 <code>a</code> 标签定义成了黑色。添加一个规则，满足如下，当用户悬停 <code>a</code> 标签时，把 <code>color</code> 变成蓝色。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: '超链接的 <code>color</code> 应该保持黑色，只添加 <code>:hover</code> CSS 规则。'
    testString: assert($('a').css('color') == 'rgb(0, 0, 0)');
  - text: '悬停超链接时超链接 <code>color</code> 应该变成蓝色。'
    testString: assert(code.match(/a:hover\s*?{\s*?color:\s*?(blue|rgba\(\s*?0\s*?,\s*?0\s*?,\s*?255\s*?,\s*?1\s*?\)|#00F|rgb\(\s*?0\s*?,\s*?0\s*?,\s*?255\s*?\))\s*?;\s*?}/gi));

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<style>
  a {
    color: #000;
  }
  
  
  
</style>
<a href="https://freecatphotoapp.com/" target="_blank">猫咪相册 App</a>
```

</div>



</section>

## Solution
<section id='solution'>

```html
// solution required
```

</section>
              