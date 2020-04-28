---
id: 5a90375238fddaf9a66b5d3b
title: Align an Item Vertically using align-self
challengeType: 0
videoUrl: 'https://scrimba.com/p/pByETK/cmzd4fz'
forumTopicId: 301123
localeTitle: 使用 align-self 垂直对齐项目
---

## Description
<section id='description'>
正如能设置网格项沿行轴对齐方式一样，也可以设置网格项沿列轴对齐：你可以对网格项使用<code>align-self</code>属性。在上一个挑战中适用于<code>justify-self</code>属性的每个值也都适用于<code>align-self</code>属性。
</section>

## Instructions
<section id='instructions'>
用值<code>end</code>使类为<code>item3</code>的网格项底端对齐。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: '<code>item3</code>类应该有<code>align-self</code>属性且值为<code>end</code>。'
    testString: assert(code.match(/.item3\s*?{[\s\S]*align-self\s*?:\s*?end\s*?;[\s\S]*}/gi));

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<style>
  .item1{background:LightSkyBlue;}
  .item2{background:LightSalmon;}
  
  .item3 {
    background: PaleTurquoise;
    /* 请在本行以下添加你的代码 */
    
    
    /* 请在本行以上添加你的代码 */
  }
  
  .item4{background:LightPink;}
  .item5{background:PaleGreen;}
  
  .container {
    font-size: 40px;
    min-height: 300px;
    width: 100%;
    background: LightGray;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    grid-gap: 10px;
  }
</style>
  
<div class="container">
  <div class="item1">1</div>
  <div class="item2">2</div>
  <div class="item3">3</div>
  <div class="item4">4</div>
  <div class="item5">5</div>
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
              