---
id: 5a94fe0569fb03452672e45c
title: Divide the Grid Into an Area Template
challengeType: 0
videoUrl: ''
localeTitle: 将网格划分为区域模板
---

## Description
<section id="description">您可以将网格的单元格组合到一个<dfn>区域中，</dfn>并为该区域指定自定义名称。通过在容器上使用<code>grid-template-areas</code>来执行此操作，如下所示： <blockquote>网格模板方面： <br> “标题标题” <br> “广告内容内容” <br> “页脚页脚”; </blockquote>上面的代码将前三个单元格合并为一个名为<code>header</code>的区域，将底部的三个单元格合并为一个<code>footer</code>区域，并在中间行中生成两个区域; <code>advert</code>和<code>content</code> 。 <strong>注意</strong> <br>代码中的每个单词代表一个单元格，每对引号代表一行。除自定义标签外，您还可以使用句点（ <code>.</code> ）指定网格中的空单元格。 </section>

## Instructions
<section id="instructions">放置区域模板，以便标记为<code>advert</code>的单元格变为空单元格。 </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>container</code>类应该具有类似于预览但具有的<code>grid-template-areas</code>属性<code>.</code>而不是<code>advert</code>区域。
    testString: 'assert(code.match(/.container\s*?{[\s\S]*grid-template-areas\s*?:\s*?"\s*?header\s*?header\s*?header\s*?"\s*?"\s*?.\s*?content\s*?content\s*?"\s*?"\s*?footer\s*?footer\s*?footer\s*?"\s*?;[\s\S]*}/gi), "<code>container</code> class should have a <code>grid-template-areas</code> propertiy similar to the preview but has <code>.</code> instead of the <code>advert</code> area.");'

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
    /* change code below this line */

    grid-template-areas:
      "header header header"
      "advert content content"
      "footer footer footer";
    /* change code above this line */
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
