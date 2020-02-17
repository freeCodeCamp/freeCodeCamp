---
id: 5a9036ee38fddaf9a66b5d37
title: Add Gaps Faster with grid-gap
challengeType: 0
videoUrl: 'https://scrimba.com/p/pByETK/ca2qVtv'
forumTopicId: 1301118
localeTitle: 使用 grid-gap 为网格添加间距
---

## Description
<section id='description'>
<code>grid-gap</code>属性是前两个挑战中的<code>grid-row-gap</code>属性和<code>grid-column-gap</code>属性的简写，它更方便使用。如果<code>grid-gap</code>只有一个值，那么这个值表示行与行之间、列与列之间的间距。如果<code>grid-gap</code>有两个值，那么第一个值表示行间距，第二个值表示列间距。
</section>

## Instructions
<section id='instructions'>
使用<code>grid-gap</code>属性设置行间距为<code>10px</code>，设置列间距为<code>20px</code>。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: '<code>container</code>类应该有<code>grid-gap</code>属性，在行之间设置<code>10px</code>的间距，在列之间设置<code>20px</code>的间距。'
    testString: assert(code.match(/.container\s*?{[\s\S]*grid-gap\s*?:\s*?10px\s+?20px\s*?;[\s\S]*}/gi));

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<style>
  .d1{background:LightSkyBlue;}
  .d2{background:LightSalmon;}
  .d3{background:PaleTurquoise;}
  .d4{background:LightPink;}
  .d5{background:PaleGreen;}
  
  .container {
    font-size: 40px;
    min-height: 300px;
    width: 100%;
    background: LightGray;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    /* 请在本行以下添加你的代码 */
    
    
    /* 请在本行以上添加你的代码 */
  }
</style>
<div class="container">
  <div class="d1">1</div>
  <div class="d2">2</div>
  <div class="d3">3</div>
  <div class="d4">4</div>
  <div class="d5">5</div>
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
              