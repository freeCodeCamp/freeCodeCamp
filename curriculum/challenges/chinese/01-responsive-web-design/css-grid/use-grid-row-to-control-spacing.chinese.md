---
id: 5a90373638fddaf9a66b5d39
title: Use grid-row to Control Spacing
challengeType: 0

videoUrl: ''
localeTitle: Use grid-row to Control Spacing
---

## Description
<section id='description'>
当然，你可以像列一样使网格项跨越多行。对于一个网格项，你可以用<code>grid-row</code>属性来确定开始和结束的水平线。
</section>

## Instructions
<section id='instructions'>
使类为<code>item5</code>的元素占用最后两行。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>item5</code>类应该有<code>grid-row</code>属性且值为<code>2 / 4</code>。
    testString: 'assert(code.match(/.item5\s*?{[\s\S]*grid-row\s*?:\s*?2\s*?\/\s*?4\s*?;[\s\S]*}/gi), "<code>item5</code>类应该有<code>grid-row</code>属性且值为<code>2 / 4</code>。");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

    <div id='html-seed'>
```html
<style>,  .item1{background:LightSkyBlue;},  .item2{background:LightSalmon;},  .item3{background:PaleTurquoise;},  .item4{background:LightPink;},  ,  .item5 {,    background: PaleGreen;,    grid-column: 2 / 4;,    /* 请在本行以下添加你的代码 */,    ,    ,    /* 请在本行以上添加你的代码 */,  },  ,  .container {,    font-size: 40px;,    min-height: 300px;,    width: 100%;,    background: LightGray;,    display: grid;,    grid-template-columns: 1fr 1fr 1fr;,    grid-template-rows: 1fr 1fr 1fr;,    grid-gap: 10px;,  },</style>,  ,<div class="container">,  <div class="item1">1</div>,  <div class="item2">2</div>,  <div class="item3">3</div>,  <div class="item4">4</div>,  <div class="item5">5</div>,</div>
```





</div>





</section>

              