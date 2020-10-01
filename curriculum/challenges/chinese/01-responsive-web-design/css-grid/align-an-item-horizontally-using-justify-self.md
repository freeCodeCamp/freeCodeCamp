---
id: 5a90374338fddaf9a66b5d3a
challengeType: 0
videoUrl: 'https://scrimba.com/p/pByETK/cJbpKHq'
forumTopicId: 301122
title: 使用 justify-self 水平对齐项目
---

## Description
<section id='description'>
在 CSS 网格中，每个网格项的内容分别位于被称为<dfn>单元格（cell）</dfn>的框内。你可以使用网格项的<code>justify-self</code>属性，设置其内容的位置在单元格内沿行轴对齐的方式。默认情况下，这个属性的值是<code>stretch</code>，这将使内容占满整个单元格的宽度。该 CSS 网格属性也可以使用其他的值：
<code>start</code>：使内容在单元格左侧对齐，
<code>center</code>：使内容在单元格居中对齐，
<code>end</code>：使内容在单元格右侧对齐，
</section>

## Instructions
<section id='instructions'>
使用<code>justify-self</code>属性让类为<code>item2</code>的网格项居中。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: '<code>item2</code>类应该有<code>justify-self</code>属性且值为<code>center</code>。'
    testString: assert(code.match(/.item2\s*?{[\s\S]*justify-self\s*?:\s*?center\s*?;[\s\S]*}/gi));

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<style>
  .item1{background: LightSkyBlue;}
  
  .item2 {
    background: LightSalmon;
    /* 请在本行以下添加你的代码 */
    
    
    /* 请在本行以上添加你的代码 */
  }
  
  .item3{background:PaleTurquoise;}
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
              