---
id: 5a9036d038fddaf9a66b5d32
challengeType: 0
videoUrl: 'https://scrimba.com/p/pByETK/c7NzDHv'
forumTopicId: 301117
title: 使用 grid-template-columns 添加多列
---

## Description
<section id='description'>
简单地添加一个网格元素并不会有任何明显的效果。你还需要明确网格的结构。在一个网格容器中使用<code>grid-template-columns</code>属性可以添加一些列，示例如下：

```css
.container {
  display: grid;
  grid-template-columns: 50px 50px;
}
```

上面的代码可以在网格容器中添加两列，宽度均为 50px。
<code>grid-template-columns</code>属性值的个数表示网格的列数，而每个值表示对应列的宽度。
</section>

## Instructions
<section id='instructions'>
给网格容器设置三个列，每列宽度均为<code>100px</code>。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: '<code>container</code>类应该有<code>grid-template-columns</code>属性，该属性有三个值，均为<code>100px</code>。'
    testString: assert(code.match(/.container\s*?{[\s\S]*grid-template-columns\s*?:\s*?100px\s*?100px\s*?100px\s*?;[\s\S]*}/gi));

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
    /* 请在本行以下添加你的代码 */
    
    
    /* 请在本行以上添加你的代码 */
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
              