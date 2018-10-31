---
id: 5a94fe2669fb03452672e45e
title: Use grid-area Without Creating an Areas Template
challengeType: 0
videoUrl: ''
localeTitle: 使用网格区域而不创建区域模板
---

## Description
<section id="description">您在上一次挑战中学习的<code>grid-area</code>属性可以以其他方式使用。如果您的网格没有要引用的区域模板，您可以动态创建一个区域，以便放置项目，如下所示： <blockquote> item1 {grid-area：1/1/2/4; } </blockquote>这是使用您之前了解的行号来定义此项目的区域。上例中的数字代表以下值： <blockquote>网格区域：水平线开始于/垂直线开始于/水平线结束于/垂直线结束于; </blockquote>因此，示例中的项目将使用第1行和第2行之间的行以及第1行和第4行之间的行。 </section>

## Instructions
<section id="instructions">使用<code>grid-area</code>属性，将<code>item5</code>类的元素<code>item5</code>第三和第四条水平线之间以及第一条和第四条垂直线之间。 </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>item5</code>类应该具有值为<code>3/1/4/4</code>的<code>grid-area</code>属性。
    testString: 'assert(code.match(/.item5\s*?{[\s\S]*grid-area\s*?:\s*?3\s*?\/\s*?1\s*?\/\s*?4\s*?\/\s*?4\s*?;[\s\S]*}/gi), "<code>item5</code> class should have a <code>grid-area</code> property that has the value of <code>3/1/4/4</code>.");'

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
