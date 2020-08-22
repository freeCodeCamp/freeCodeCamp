---
id: 5a9036ee38fddaf9a66b5d35
title: Create a Column Gap Using grid-column-gap
challengeType: 0
videoUrl: 'https://scrimba.com/p/pByETK/cVZ8vfD'
forumTopicId: 301124
localeTitle: 使用 grid-column-gap 创建多列之间的间距
---

## Description
<section id='description'>
到目前为止，在你所建立的网格中列都相互紧挨着。如果需要在列与列之间添加一些间距，我们可以使用<code>grid-column-gap</code>：


```css
grid-column-gap: 10px;
```

这会在我们创建的所有列之间添加 10px 的空白间距。
</section>

## Instructions
<section id='instructions'>
为网格中的列添加宽度为<code>20px</code>的间距。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: '<code>container</code>类应该有<code>grid-column-gap</code>属性且值为<code>20px</code>。'
    testString: assert(code.match(/.container\s*?{[\s\S]*grid-column-gap\s*?:\s*?20px\s*?;[\s\S]*}/gi));

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
              