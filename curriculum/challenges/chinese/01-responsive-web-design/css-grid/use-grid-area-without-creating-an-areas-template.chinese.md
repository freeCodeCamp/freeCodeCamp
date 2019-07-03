---
id: 5a94fe2669fb03452672e45e
title: Use grid-area Without Creating an Areas Template
challengeType: 0

videoUrl: ''
localeTitle: Use grid-area Without Creating an Areas Template
---

## Description
<section id='description'>
你在上一次挑战中学到的<code>grid-area</code>属性有另一种使用方式。如果网格中没有定义区域模板，你也可以像这样为它添加一个模板：
<blockquote>item1 { grid-area: 1/1/2/4; }</blockquote>
这里使用了你之前学习的线号来定义网格项的区域。上例中数字代表这些值：
<blockquote>grid-area: 起始水平线 / 起始垂直线 / 末尾水平线 / 终止垂直线 ;</blockquote>
因此，示例中的网格项将占用第 1 条和第 2 条水平线之间的行及第 1 条和第 4 条垂直线之间的列。
</section>

## Instructions
<section id='instructions'>
请用<code>grid-area</code>属性将类为<code>item5</code>的元素放置在第 3 条和第 4 条水平线及第 1 条和第 4 条垂直线之间的区域内。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>item5</code>类应该有<code>grid-area</code>属性且值为<code>3/1/4/4</code>。
    testString: 'assert(code.match(/.item5\s*?{[\s\S]*grid-area\s*?:\s*?3\s*?\/\s*?1\s*?\/\s*?4\s*?\/\s*?4\s*?;[\s\S]*}/gi), "<code>item5</code>类应该有<code>grid-area</code>属性且值为<code>3/1/4/4</code>。");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

    <div id='html-seed'>
```html
<style>,  .item1{background:LightSkyBlue;},  .item2{background:LightSalmon;},  .item3{background:PaleTurquoise;},  .item4{background:LightPink;},  ,  .item5 {,    background: PaleGreen;,    /* 请在本行以下添加你的代码 */,    ,    ,    /* 请在本行以上添加你的代码 */,  },  ,  .container {,    font-size: 40px;,    min-height: 300px;,    width: 100%;,    background: LightGray;,    display: grid;,    grid-template-columns: 1fr 1fr 1fr;,    grid-template-rows: 1fr 1fr 1fr;,    grid-gap: 10px;,  },</style>,  ,<div class="container">,  <div class="item1">1</div>,  <div class="item2">2</div>,  <div class="item3">3</div>,  <div class="item4">4</div>,  <div class="item5">5</div>,</div>
```





</div>





</section>

              