---
id: 5a9036ee38fddaf9a66b5d36
title: Create a Row Gap using grid-row-gap
challengeType: 0
videoUrl: 'https://scrimba.com/p/pByETK/cPbJ2Cv'
forumTopicId: 301125
localeTitle: 使用 grid-row-gap 创建多行之间的间距
---

## Description
<section id='description'>
和上个挑战在两列之间添加间距一样，你可以用<code>grid-row-gap</code>在两行之间设置间距。
</section>

## Instructions
<section id='instructions'>
为网格中的行添加高度为<code>5px</code>的间距。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: '<code>container</code>类应该有<code>grid-row-gap</code>属性且值为<code>5px</code>。'
    testString: assert(code.match(/.container\s*?{[\s\S]*grid-row-gap\s*?:\s*?5px\s*?;[\s\S]*}/gi));

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
              