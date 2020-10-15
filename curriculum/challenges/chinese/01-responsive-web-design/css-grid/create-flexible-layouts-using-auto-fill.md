---
id: 5a94fe5469fb03452672e461
challengeType: 0
videoUrl: 'https://scrimba.com/p/pByETK/cmzdycW'
forumTopicId: 301126
title: 使用 auto-fill 创建弹性布局
---

## Description
<section id='description'>
重复方法带有一个名为<dfn>自动填充（auto-fill）</dfn>的功能。它的功能是根据容器的大小，尽可能多地放入指定大小的行或列。你可以通过结合<code>auto-fill</code>和<code>minmax</code>来更灵活地布局。
在最右侧的预览区中，<code>grid-template-columns</code>被设置为：

```css
repeat(auto-fill, minmax(60px, 1fr));
```

上面的代码效果：列的宽度会随容器大小改变，在可以插入一个 60px 宽的列之前，当前行的所有列会一直拉伸（译者注：动手试一下你就明白了）。
<strong>注意：</strong>如果容器无法使所有网格项放在同一行，余下的网格项将移至新的一行。
</section>

## Instructions
<section id='instructions'>
在第一个网格中，用<code>auto-fill</code>和<code>repeat</code>来填充网格，其中列宽的最小值为<code>60px</code>，最大值为<code>1fr</code>。你可以调整最右侧的预览区大小，查看自动填充效果。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: '<code>container</code>类应该有<code>grid-template-columns</code>属性且使用<code>repeat</code>和<code>auto-fill</code>，以便将最小宽度为<code>60px</code>，最大宽度为<code>1fr</code>的列填充至网格。'
    testString: assert(code.match(/.container\s*?{[\s\S]*grid-template-columns\s*?:\s*?repeat\s*?\(\s*?auto-fill\s*?,\s*?minmax\s*?\(\s*?60px\s*?,\s*?1fr\s*?\)\s*?\)\s*?;[\s\S]*}/gi));

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
    /* 请修改本行以下的代码 */
    
    grid-template-columns: repeat(3, minmax(60px, 1fr));
    
    /* 请修改本行以上的代码*/
    grid-template-rows: 1fr 1fr 1fr;
    grid-gap: 10px;
  }
  
  .container2 {
    font-size: 40px;
    min-height: 100px;
    width: 100%;
    background: Silver;
    display: grid;
    grid-template-columns: repeat(3, minmax(60px, 1fr));
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


```html
// solution required
```

</section>
              