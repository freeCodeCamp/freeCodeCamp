---
id: 5a94fe2669fb03452672e45e
title: Use grid-area Without Creating an Areas Template
challengeType: 0
videoUrl: ''
localeTitle: 在不创建网格区域模板的情况下使用网格区域
---

## Description
<section id="description">您在上一次挑战中学习的<code>grid-area</code>属性可以以其他方式使用。如果您的网格没有可引用的网格区域模板，您可以当场创建一个网格区域来放置项目，例如： <blockquote> item1 {grid-area：1/1/2/4; } </blockquote>这个区域用了您之前刚学过的网格行号来定义项目的地点。上例中的数字的意思是： <blockquote>grid-area (网格区域)：水平线开始于/垂直线开始于/水平线结束于/垂直线结束于; </blockquote>因此，示例中的项目将使用第一个网格横线和第2个网格横线之间的网格行以及第一个网格纵线和第四个网格纵线之间的网格列。 </section>

## Instructions
<section id="instructions">使用<code>grid-area</code>属性，将带<code>item5</code>class的元素放置到第三和第四条网格横线之间以及第一条和第四条网格纵线之间。 </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>item5</code>类应具有<code>grid-area</code>属性，使其位于第三和第四水平线之间以及第一和第四垂直线之间。
    testString: 'assert(code.match(/.item5\s*?{[\s\S]*grid-area\s*?:\s*?3\s*?\/\s*?1\s*?\/\s*?4\s*?\/\s*?4\s*?;[\s\S]*}/gi), "<code>item5</code>类应具有<code>grid-area</code>属性，使其位于第三和第四水平线之间以及第一和第四垂直线之间。");'

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

  .item5 {
    background: PaleGreen;
    /* add your code below this line */


    /* add your code above this line */
  }

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
