---
id: 5a94fe2669fb03452672e45e
challengeType: 0
videoUrl: 'https://scrimba.com/p/pByETK/c6N7VhK'
forumTopicId: 301135
title: 使用 grid-area 创建区域模板
---

## Description
<section id='description'>
你在上一次挑战中学到的<code>grid-area</code>属性有另一种使用方式。如果网格中没有定义区域模板，你也可以像这样为它添加一个模板：

```css
item1 { grid-area: 1/1/2/4; }
```

这里使用了你之前学习的网格线编号来定义网格项的区域。上例中数字代表这些值：

```css
grid-area: horizontal line to start at / vertical line to start at / horizontal line to end at / vertical line to end at;
```

因此，示例中的网格项将占用第 1 条水平网格线（起始）和第 2 条水平网格线（终止）之间的行，及第 1 条垂直网格线（起始）和第 4 条垂直网格线（终止）之间的列。
</section>

## Instructions
<section id='instructions'>
请用<code>grid-area</code>属性将类为<code>item5</code>的元素放置在第 3 条和第 4 条水平网格线及第 1 条和第 4 条水平网格线之间的区域内。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: '<code>item5</code>类应该有<code>grid-area</code>属性且值为<code>3/1/4/4</code>。'
    testString: assert(code.match(/.item5\s*?{[\s\S]*grid-area\s*?:\s*?3\s*?\/\s*?1\s*?\/\s*?4\s*?\/\s*?4\s*?;[\s\S]*}/gi));

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
    /* 请在本行以下添加你的代码 */
    
    
    /* 请在本行以上添加你的代码 */
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
              