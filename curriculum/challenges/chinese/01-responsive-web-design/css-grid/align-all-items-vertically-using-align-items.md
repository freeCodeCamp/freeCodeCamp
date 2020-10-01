---
id: 5a94fdf869fb03452672e45b
challengeType: 0
videoUrl: 'https://scrimba.com/p/pByETK/ckzPeUv'
forumTopicId: 301121
title: 使用 align-items 垂直对齐所有项目
---

## Description
<section id='description'>
对网格容器使用<code>align-items</code>属性可以给网格中所有的网格项设置沿列轴对齐的方式。
</section>

## Instructions
<section id='instructions'>
请使用<code>align-items</code>属性将所有网格项移动到单元格的末尾。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: '<code>container</code>类应该有<code>align-items</code>属性且值为<code>end</code>。'
    testString: assert(code.match(/.container\s*?{[\s\S]*align-items\s*?:\s*?end\s*?;[\s\S]*}/gi));

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<style>
  .item1{background:LightSkyBlue;}
  .item2{background:LightSalmon;}
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
    /* 请在本行以下添加你的代码 */
    
    
    /* 请在本行以上添加你的代码 */
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
              