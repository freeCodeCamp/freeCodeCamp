---
id: 5a90376038fddaf9a66b5d3c
title: Align All Items Horizontally using justify-items
challengeType: 0

videoUrl: ''
localeTitle: Align All Items Horizontally using justify-items
---

## Description
<section id='description'>
有时你想让在 CSS 网格中的网格项共享对齐方式。你可以像之前学习的那样单独使他们对齐，也可以对网格容器使用<code>justify-items</code>使它们一次性沿行轴对齐。对于这个属性你能使用在之前的两个挑战中学到的所有值，与之前不同的是，它将使网格中<b>所有</b>的网格项按所设置的方式对齐。
</section>

## Instructions
<section id='instructions'>
使用本次挑战所学的属性设置所有网格项水平居中。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>container</code>类应该有<code>justify-items</code>属性且值为<code>center</code>。
    testString: 'assert(code.match(/.container\s*?{[\s\S]*justify-items\s*?:\s*?center\s*?;[\s\S]*}/gi), "<code>container</code>类应该有<code>justify-items</code>属性且值为<code>center</code>。");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

    <div id='html-seed'>
```html
<style>,  .item1{background:LightSkyBlue;},  .item2{background:LightSalmon;},  .item3{background:PaleTurquoise;},  .item4{background:LightPink;},  .item5{background:PaleGreen;},  ,  .container {,    font-size: 40px;,    min-height: 300px;,    width: 100%;,    background: LightGray;,    display: grid;,    grid-template-columns: 1fr 1fr 1fr;,    grid-template-rows: 1fr 1fr 1fr;,    grid-gap: 10px;,    /* 请在本行以下添加你的代码 */,    ,    ,    /* 请在本行以上添加你的代码 */,  },</style>,  ,<div class="container">,  <div class="item1">1</div>,  <div class="item2">2</div>,  <div class="item3">3</div>,  <div class="item4">4</div>,  <div class="item5">5</div>,</div>
```





</div>





</section>

              