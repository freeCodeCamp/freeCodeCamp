---
id: 5a94fe4469fb03452672e460
title: Limit Item Size Using the minmax Function
challengeType: 0
videoUrl: ''
localeTitle: 限制项目大小使用minmax功能
---

## Description
<section id="description">还有另一个内置函数可用于<code>grid-template-columns</code>和<code>grid-template-rows</code>称为<code>minmax</code> 。当网格容器改变大小时，它用于限制项目的大小。为此，您需要指定项目的可接受尺寸范围。这是一个例子： <blockquote> grid-template-columns：100px minmax（50px，200px）; </blockquote>在上面的代码中， <code>grid-template-columns</code>设置为创建两列;第一个是100px宽，第二个是最小宽度50px，最大宽度是200px。 </section>

## Instructions
<section id="instructions">使用<code>minmax</code>函数，将<code>repeat</code>函数中的<code>1fr</code>替换为最小宽度为<code>90px</code>且最大宽度为<code>1fr</code>的列大小，并调整预览面板的大小以查看效果。 </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>container</code>类应具有<code>grid-template-columns</code>属性，该属性设置为重复3列，最小宽度为<code>90px</code> ，最大宽度为<code>1fr</code> 。
    testString: 'assert(code.match(/.container\s*?{[\s\S]*grid-template-columns\s*?:\s*?repeat\s*?\(\s*?3\s*?,\s*?minmax\s*?\(\s*?90px\s*?,\s*?1fr\s*?\)\s*?\)\s*?;[\s\S]*}/gi), "<code>container</code> class should have a <code>grid-template-columns</code> property that is set to repeat 3 columns with the minimum width of <code>90px</code> and maximum width of <code>1fr</code>.");'

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
    /* change the code below this line */

    grid-template-columns: repeat(3, 1fr);

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

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
