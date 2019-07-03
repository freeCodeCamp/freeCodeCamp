---
id: 5a9036d038fddaf9a66b5d32
title: Add Columns with grid-template-columns
challengeType: 0

videoUrl: ''
localeTitle: Add Columns with grid-template-columns
---

## Description
<section id='description'>
简单地添加一个网格元素并不能取得很大的进展。你还需要明确网格的结构。在一个网格容器中使用<code>grid-template-columns</code>属性可以添加一些列，示例如下：
<blockquote>.container {<br>&nbsp;&nbsp;display: grid;<br>&nbsp;&nbsp;grid-template-columns: 50px 50px;<br>}</blockquote>
上面的代码可以在网格容器中添加两列，宽度均为 50px。
<code>grid-template-columns</code>属性值的个数表示网格的列数，而每个值表示对应列的宽度。
</section>

## Instructions
<section id='instructions'>
给网格容器放置三个列，每列宽度均为<code>100px</code>。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>container</code>类应该有<code>grid-template-columns</code>属性且有三个<code>100px</code>作为值。
    testString: 'assert(code.match(/.container\s*?{[\s\S]*grid-template-columns\s*?:\s*?100px\s*?100px\s*?100px\s*?;[\s\S]*}/gi), "<code>container</code>类应该有<code>grid-template-columns</code>属性且有三个<code>100px</code>作为值。");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

    <div id='html-seed'>
```html
<style>,  .d1{background:LightSkyBlue;},  .d2{background:LightSalmon;},  .d3{background:PaleTurquoise;},  .d4{background:LightPink;},  .d5{background:PaleGreen;},  ,  .container {,    font-size: 40px;,    width: 100%;,    background: LightGray;,    display: grid;,    /* 请在本行以下添加你的代码 */,    ,    ,    /* 请在本行以上添加你的代码 */,  },</style>,  ,<div class="container">,  <div class="d1">1</div>,  <div class="d2">2</div>,  <div class="d3">3</div>,  <div class="d4">4</div>,  <div class="d5">5</div>,</div>
```





</div>





</section>

              