---
id: 5a94fe6269fb03452672e462
challengeType: 0
videoUrl: 'https://scrimba.com/p/pByETK/c3dPph8'
forumTopicId: 301127
title: 使用 auto-fit 创建弹性布局
---

## Description
<section id='description'>
<code>auto-fit</code>效果几乎和<code>auto-fill</code>一样。不同点仅在于，当容器的大小大于各网格项之和时，<code>auto-fill</code>将会持续地在一端放入空行或空列，这样就会使所有网格项挤到另一边；而<code>auto-fit</code>则不会在一端放入空行或空列，而是会将所有网格项拉伸至合适的大小。
<strong>注意：</strong><br>如果容器无法使所有网格项放在同一行，余下的网格项将移至新的一行。
</section>

## Instructions
<section id='instructions'>
在第二个网格中，用<code>auto-fit</code>和<code>repeat</code>来填充网格，其中列宽的最小值为<code>60px</code>，最大值为<code>1fr</code>。你可以调整最右侧的预览区以查看差异。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: '<code>container2</code>类应该有<code>grid-template-columns</code>属性，且使用<code>repeat</code>和<code>auto-fit</code>以便将最小宽度为<code>60px</code>，最大宽度为<code>1fr</code>的列放入网格。'
    testString: assert(code.match(/.container2\s*?{[\s\S]*grid-template-columns\s*?:\s*?repeat\s*?\(\s*?auto-fit\s*?,\s*?minmax\s*?\(\s*?60px\s*?,\s*?1fr\s*?\)\s*?\)\s*?;[\s\S]*}/gi));

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
    min-height: 100px;
    width: 100%;
    background: LightGray;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(60px, 1fr));
    grid-template-rows: 1fr 1fr 1fr;
    grid-gap: 10px;
  }
  
  .container2 {
    font-size: 40px;
    min-height: 100px;
    width: 100%;
    background: Silver;
    display: grid;
    /* 请修改本行以下的代码 */
    
    grid-template-columns: repeat(3, minmax(60px, 1fr));
    
    /* 请修改本行以上的代码*/
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
<div class="container2">
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
              