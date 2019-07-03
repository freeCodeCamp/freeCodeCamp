---
id: 5a9036ee38fddaf9a66b5d37
title: Add Gaps Faster with grid-gap
challengeType: 0

videoUrl: ''
localeTitle: Add Gaps Faster with grid-gap
---

## Description
<section id='description'>
<code>grid-gap</code>是<code>grid-row-gap</code>和<code>grid-column-gap</code>的简写，它更方便使用。如果<code>grid-gap</code>有一个值，行与行之间和列与列之间将添加等于该值的间隙。但是，如果有两个值，第一个值将作为行间隙的高度值，第二个值是列间隙的宽度值。
</section>

## Instructions
<section id='instructions'>
使用<code>grid-gap</code>在行之间添加<code>10px</code>的间隙，在列之间添加<code>20px</code>的间隙。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>container</code>类应该有<code>grid-gap</code>属性，在行之间引入<code>10px</code>的间隙，在列之间引入<code>20px</code>的间隙。
    testString: 'assert(code.match(/.container\s*?{[\s\S]*grid-gap\s*?:\s*?10px\s*?20px\s*?;[\s\S]*}/gi), "<code>container</code>类应该有<code>grid-gap</code>属性，在行之间引入<code>10px</code>的间隙，在列之间引入<code>20px</code>的间隙。");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

    <div id='html-seed'>
```html
<style>,  .d1{background:LightSkyBlue;},  .d2{background:LightSalmon;},  .d3{background:PaleTurquoise;},  .d4{background:LightPink;},  .d5{background:PaleGreen;},  ,  .container {,    font-size: 40px;,    min-height: 300px;,    width: 100%;,    background: LightGray;,    display: grid;,    grid-template-columns: 1fr 1fr 1fr;,    grid-template-rows: 1fr 1fr 1fr;,    /* 请在本行以下添加你的代码 */,    ,    ,    /* 请在本行以上添加你的代码 */,  },</style>,<div class="container">,  <div class="d1">1</div>,  <div class="d2">2</div>,  <div class="d3">3</div>,  <div class="d4">4</div>,  <div class="d5">5</div>,</div>
```





</div>





</section>

              