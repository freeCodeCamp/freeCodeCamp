---
id: 5a94fe1369fb03452672e45d
title: Place Items in Grid Areas Using the grid-area Property
challengeType: 0
videoUrl: 'https://scrimba.com/p/pByETK/cRrqmtV'
forumTopicId: 301132
localeTitle: 使用 grid-area 属性将项目放置在网格区域中
---

## Description
<section id='description'>
像上一个挑战那样，在为网格添加区域模板后，你可以通过引用你所定义的区域的名称，将元素放入相应的区域。为此，你需要对网格项使用<code>grid-area</code>：

```css
.item1 {
  grid-area: header;
}
```

这样，类名为<code>item1</code>的网格项就被放到了<code>header</code>区域里。在这个示例中，网格项将占用整个顶行，因为这一整行都被命名为 header 区域。
</section>

## Instructions
<section id='instructions'>
请使用<code>grid-area</code>属性，把类为<code>item5</code>元素放到<code>footer</code>区域。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: '<code>item5</code>类应该有<code>grid-area</code>属性且值为<code>footer</code>。'
    testString: assert(code.match(/.item5\s*?{[\s\S]*grid-area\s*?:\s*?footer\s*?;[\s\S]*}/gi));

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
    grid-template-areas: 
      "header header header"
      "advert content content"
      "footer footer footer";
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
              