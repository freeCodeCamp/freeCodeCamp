---
id: 5a9036ee38fddaf9a66b5d34
title: Use CSS Grid units to Change the Size of Columns and Rows
challengeType: 0
videoUrl: ''
localeTitle: 使用CSS网格单位更改列和行的大小
---

## Description
<section id="description">您可以在CSS Grid中使用绝对和相对单位（如<code>px</code>和<code>em</code>来定义行和列的大小。您也可以使用这些： <code>fr</code> ：将列或行设置为可用空间的一小部分， <code>auto</code> ： <code>auto</code>将列或行设置为其内容的宽度或高度， <code>%</code> ：将列或行调整为百分比宽度它的容器。这是在预览中生成输出的代码： <blockquote> grid-template-columns：auto 50px 10％2fr 1fr; </blockquote>此代码段创建了五列。第一列与其内容一样宽，第二列是50px，第三列是其容器的10％，最后两列;剩下的空间分为三个部分，两个分配给第四列，一个分配给第五个。 </section>

## Instructions
<section id="instructions">创建一个包含三列的网格，其宽度如下：1fr，100px和2fr。 </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: '<code>container</code>类应该有一个<code>grid-template-columns</code>属性，该属性有三列，宽度如下： <code>1fr, 100px, and 2fr</code> 。'
    testString: 'assert(code.match(/.container\s*?{[\s\S]*grid-template-columns\s*?:\s*?1fr\s*?100px\s*?2fr\s*?;[\s\S]*}/gi), "<code>container</code> class should have a <code>grid-template-columns</code> property that has three columns with the following widths: <code>1fr, 100px, and 2fr</code>.");'

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
    width: 100%;
    background: LightGray;
    display: grid;
    /* modify the code below this line */

    grid-template-columns: auto 50px 10% 2fr 1fr;

    /* modify the code above this line */
    grid-template-rows: 50px 50px;
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
