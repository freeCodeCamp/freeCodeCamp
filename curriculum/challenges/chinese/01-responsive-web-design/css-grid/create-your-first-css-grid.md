---
id: 5a858944d96184f06fd60d61
challengeType: 0
videoUrl: 'https://scrimba.com/p/pByETK/cqwREC4'
forumTopicId: 301129
title: 创建你的第一个 CSS 网格
---

## Description
<section id='description'>
通过将属性<code>display</code>的值设为<code>grid</code>，使 HTML 元素变为网格容器。通过前面的操作，你可以对该容器使用与 CSS 网格（CSS Grid）相关的属性。
<strong>注意：</strong><br>在 CSS 网格中，父元素称为<dfn>容器（container）</dfn>，它的子元素称为<dfn>项（items）</dfn>。
</section>

## Instructions
<section id='instructions'>
将类为<code>container</code>的 div 的<code>display</code>属性改为<code>grid</code>。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: '<code>container</code>类应该有<code>display</code>属性且值为<code>grid</code>。'
    testString: assert(code.match(/.container\s*?{[\s\S]*display\s*?:\s*?grid\s*?;[\s\S]*}/gi));

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<style>
  .d1{background:LightSkyBlue;}
  .d2{background:LightSalmon;}
  .d3{background:PaleTurquoise;}
  .d4{background:LightPink;}
  .d5{background:PaleGreen;}
  
  .container {
    font-size: 40px;
    width: 100%;
    background: LightGray;
    /* 请在本行以下添加你的代码 */
    
    
    /* 请在本行以上添加你的代码 */
  }
</style>
  
<div class="container">
  <div class="d1">1</div>
  <div class="d2">2</div>
  <div class="d3">3</div>
  <div class="d4">4</div>
  <div class="d5">5</div>
</div>
```

</div>



</section>

## Solution
<section id='solution'>


```js
// solution required
```

</section>
              