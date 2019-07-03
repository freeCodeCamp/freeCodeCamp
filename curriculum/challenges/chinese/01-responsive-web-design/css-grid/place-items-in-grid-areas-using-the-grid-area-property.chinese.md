---
id: 5a94fe1369fb03452672e45d
title: Place Items in Grid Areas Using the grid-area Property
challengeType: 0

videoUrl: ''
localeTitle: Place Items in Grid Areas Using the grid-area Property
---

## Description
<section id='description'>
像上一个挑战那样，在为网格容添加区域模板后，你可以通过添加你定义的名称将网格项放入自定义区域。为此，你需要对网格项使用<code>grid-area</code>：
<blockquote>.item1 { grid-area: header; }</blockquote>
这样，类名为<code>item1</code>的网格项就被放到了<code>header</code>区域里。这种情况下，网格项将使用整个顶行，因为这一行被名为 header 区域。
</section>

## Instructions
<section id='instructions'>
请使用<code>grid-area</code>属性，把类为<code>item5</code>元素放到<code>footer</code>区域。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>item5</code>类应该有<code>grid-area</code>属性且值为<code>footer</code>。
    testString: 'assert(code.match(/.item5\s*?{[\s\S]*grid-area\s*?:\s*?footer\s*?;[\s\S]*}/gi), "<code>item5</code>类应该有<code>grid-area</code>属性且值为<code>footer</code>。");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

    <div id='html-seed'>
```html
<style>,  .item1{background:LightSkyBlue;},  .item2{background:LightSalmon;},  .item3{background:PaleTurquoise;},  .item4{background:LightPink;},  ,  .item5 {,    background: PaleGreen;,    /* 请在本行以下添加你的代码 */,    ,    ,    /* 请在本行以上添加你的代码 */,  },  ,  .container {,    font-size: 40px;,    min-height: 300px;,    width: 100%;,    background: LightGray;,    display: grid;,    grid-template-columns: 1fr 1fr 1fr;,    grid-template-rows: 1fr 1fr 1fr;,    grid-gap: 10px;,    grid-template-areas: ,      "header header header",      "advert content content",      "footer footer footer";,  },</style>,  ,<div class="container">,  <div class="item1">1</div>,  <div class="item2">2</div>,  <div class="item3">3</div>,  <div class="item4">4</div>,  <div class="item5">5</div>,</div>
```





</div>





</section>

              