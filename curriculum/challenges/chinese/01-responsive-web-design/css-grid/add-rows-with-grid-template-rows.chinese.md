---
id: 5a9036e138fddaf9a66b5d33
title: Add Rows with grid-template-rows
challengeType: 0

videoUrl: ''
localeTitle: Add Rows with grid-template-rows
---

## Description
<section id='description'>
在上次挑战中，你创建的网格会自动设置行数。你可以像用<code>grid-template-columns</code>设置网格的列一样，用<code>grid-template-rows</code>为网格设置行数。
</section>

## Instructions
<section id='instructions'>
给网格添加两行，使每行高度均为<code>50px</code>。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>container</code>类应该有<code>grid-template-rows</code>属性，且值为两个<code>50px</code>。
    testString: 'assert(code.match(/.container\s*?{[\s\S]*grid-template-rows\s*?:\s*?50px\s*?50px\s*?;[\s\S]*}/gi), "<code>container</code>类应该有<code>grid-template-rows</code>属性，且值为两个<code>50px</code>。");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

    <div id='html-seed'>
```html
<style>,  .d1{background:LightSkyBlue;},  .d2{background:LightSalmon;},  .d3{background:PaleTurquoise;},  .d4{background:LightPink;},  .d5{background:PaleGreen;},  ,  .container {,    font-size: 40px;,    width: 100%;,    background: LightGray;,    display: grid;,    grid-template-columns: 100px 100px 100px;,    /* 请在本行以下添加你的代码 */,    ,    ,    /* 请在本行以上添加你的代码 */,  },</style>,  ,<div class="container">,  <div class="d1">1</div>,  <div class="d2">2</div>,  <div class="d3">3</div>,  <div class="d4">4</div>,  <div class="d5">5</div>,</div>
```





</div>





</section>

              