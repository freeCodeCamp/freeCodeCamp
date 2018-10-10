---
id: 5a94fe5469fb03452672e461
title: Create Flexible Layouts Using auto-fill
challengeType: 0
videoUrl: ''
localeTitle: 使用自动填充创建灵活布局
---

## Description
<section id="description">重复功能带有一个名为<dfn>自动填充</dfn>的选项。这允许您根据容器的大小自动插入所需大小的行或列。将<code>auto-fill</code>与<code>minmax</code>组合时，可以创建灵活的布局。在预览中， <code>grid-template-columns</code>设置为<blockquote>重复（自动填充，minmax（60px，1fr））; </blockquote>当容器改变大小时，此设置将继续插入60px列并拉伸它们，直到它可以插入另一个。 <strong>注意</strong> <br>如果您的容器无法将所有项目放在一行上，则会将它们移动到新行。 </section>

## Instructions
<section id="instructions">在第一个网格中，使用带有<code>repeat</code> <code>auto-fill</code>以使用最小宽度为<code>60px</code>且最大为<code>1fr</code>列填充网格。然后调整预览大小以查看自动填充操作。 </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>container</code>类应该具有<code>grid-template-columns</code>属性，其中包含<code>repeat</code>和<code>auto-fill</code> ，它将使用最小宽度为<code>60px</code>且最大为<code>1fr</code>列填充网格。
    testString: 'assert(code.match(/.container\s*?{[\s\S]*grid-template-columns\s*?:\s*?repeat\s*?\(\s*?auto-fill\s*?,\s*?minmax\s*?\(\s*?60px\s*?,\s*?1fr\s*?\)\s*?\)\s*?;[\s\S]*}/gi), "<code>container</code> class should have a <code>grid-template-columns</code> property with <code>repeat</code> and <code>auto-fill</code> that will fill the grid with columns that have a minimum width of <code>60px</code> and maximum of <code>1fr</code>.");'

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
    /* change the code below this line */

    grid-template-columns: repeat(3, minmax(60px, 1fr));

    /* change the code above this line */
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

```js
// solution required
```
</section>
