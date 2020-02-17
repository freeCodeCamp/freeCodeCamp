---
id: 5a94fe0569fb03452672e45c
title: Divide the Grid Into an Area Template
challengeType: 0
videoUrl: 'https://scrimba.com/p/pByETK/cLLpGAy'
forumTopicId: 301130
localeTitle: 将网格划分为区域模板
---

## Description
<section id='description'>
你可以将网格中的一些网格单元格组合成一个<dfn>区域（area）</dfn>，并为该区域指定一个自定义名称。你可以通过给容器加上<code>grid-template-areas</code>来实现：

```css
grid-template-areas:
  "header header header"
  "advert content content"
  "footer footer footer";
```

上面的代码将顶部三个单元格合并成一个名为<code>header</code>的区域，将底部三个单元格合并为一个名为<code>footer</code>的区域，并在中间行生成两个区域————<code>advert</code>和<code>content</code>。
<strong>注意：</strong><br>在代码中，每个单词代表一个网格单元格，每对引号代表一行。
除了自定义标签，你还能使用句点（<code>.</code>）来表示一个空单元格。
</section>

## Instructions
<section id='instructions'>
请放置区域模板，让名为<code>advert</code>的区域变成空单元格。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: '<code>container</code>类应该有类似于最右侧预览区的<code>grid-template-areas</code>属性且用<code>.</code>代替<code>advert</code>。'
    testString: assert(code.match(/.container\s*?{[\s\S]*grid-template-areas\s*?:\s*?"\s*?header\s*?header\s*?header\s*?"\s*?"\s*?.\s*?content\s*?content\s*?"\s*?"\s*?footer\s*?footer\s*?footer\s*?"\s*?;[\s\S]*}/gi));

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
    /* 请修改本行以下的代码 */
    
    grid-template-areas:
      "header header header"
      "advert content content"
      "footer footer footer";
    /* 请修改本行以上的代码 */
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

```html
// solution required
```

</section>
              