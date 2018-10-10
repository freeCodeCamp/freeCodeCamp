---
id: 5a94fe3669fb03452672e45f
title: Reduce Repetition Using the repeat Function
challengeType: 0
videoUrl: ''
localeTitle: 使用重复功能减少重复
---

## Description
<section id="description">使用<code>grid-template-columns</code>和<code>grid-template-rows</code>定义网格结构时，为所创建的每个行或列输入了一个值。让我们说你想要一个100行相同高度的网格。单独插入100个值是不太实际的。幸运的是，有一种更好的方法 - 使用<code>repeat</code>函数指定要重复列或行的次数，后跟逗号和要重复的值。这是一个创建100行网格的示例，每行高度为50px。 <blockquote> grid-template-rows：repeat（100,50px）; </blockquote>您还可以使用repeat函数重复多个值，并在定义网格结构时将该函数插入其他值中。这就是我的意思： <blockquote> grid-template-columns：repeat（2,1fr 50px）20px; </blockquote>这意味着： <blockquote> grid-template-columns：1fr 50px 1fr 50px 20px; </blockquote> <strong>注意</strong> <br> <code>1fr 50px</code>重复两次，然后是20px。 </section>

## Instructions
<section id="instructions">使用<code>repeat</code>从<code>grid-template-columns</code>属性中删除重复。 </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>container</code>类应具有<code>grid-template-columns</code>属性，该属性设置为重复3列，宽度为<code>1fr</code> 。
    testString: 'assert(code.match(/.container\s*?{[\s\S]*grid-template-columns\s*?:\s*?repeat\s*?\(\s*?3\s*?,\s*?1fr\s*?\)\s*?;[\s\S]*}/gi), "<code>container</code> class should have a <code>grid-template-columns</code> property that is set to repeat 3 columns with the width of <code>1fr</code>.");'

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

    grid-template-columns: 1fr 1fr 1fr;

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
