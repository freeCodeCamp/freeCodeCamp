---
id: 5a94fe6269fb03452672e462
title: Create Flexible Layouts Using auto-fit
challengeType: 0
videoUrl: ''
localeTitle: 使用自动调整创建灵活布局
---

## Description
<section id="description"> <code>auto-fit</code>几乎与<code>auto-fill</code>相同。唯一的区别是，当容器的大小超过所有项目组合的大小时， <code>auto-fill</code>会继续插入空行或列并将项目推向一侧，而<code>auto-fit</code>折叠这些空行或列并将项目拉伸到适合容器的大小。 <strong>注意</strong> <br>如果您的容器无法将所有项目放在一行上，则会将它们移动到新行。 </section>

## Instructions
<section id="instructions">在第二个网格中，使用<code>auto-fit</code> <code>repeat</code>以使用最小宽度为<code>60px</code>且最大为<code>1fr</code>列填充网格。然后调整预览大小以查看差异。 </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>container2</code>类应该具有<code>grid-template-columns</code>属性，该属性具有<code>repeat</code>和<code>auto-fit</code> ，它将使用最小宽度为<code>60px</code>且最大为<code>1fr</code>列填充网格。
    testString: 'assert(code.match(/.container\s*?{[\s\S]*grid-template-columns\s*?:\s*?repeat\s*?\(\s*?auto-fit\s*?,\s*?minmax\s*?\(\s*?60px\s*?,\s*?1fr\s*?\)\s*?\)\s*?;[\s\S]*}/gi), "<code>container2</code> class should have a <code>grid-template-columns</code> property with <code>repeat</code> and <code>auto-fit</code> that will fill the grid with columns that have a minimum width of <code>60px</code> and maximum of <code>1fr</code>.");'

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
    grid-template-columns: repeat( auto-fill, minmax(60px, 1fr));
    grid-template-rows: 1fr 1fr 1fr;
    grid-gap: 10px;
  }

  .container2 {
    font-size: 40px;
    min-height: 100px;
    width: 100%;
    background: Silver;
    display: grid;
    /* change the code below this line */

    grid-template-columns: repeat(3, minmax(60px, 1fr));

    /* change the code above this line */
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
