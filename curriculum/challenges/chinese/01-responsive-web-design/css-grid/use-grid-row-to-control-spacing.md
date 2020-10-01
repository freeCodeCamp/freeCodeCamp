---
id: 5a90373638fddaf9a66b5d39
challengeType: 0
videoUrl: 'https://scrimba.com/p/pByETK/c9WBLU4'
forumTopicId: 301137
title: 使用 grid-row 来控制空间大小
---

## Description
<section id='description'>
当然，和设置一个网格项占用多列一样，你也可以设置它占用多行。你可以使用<code>grid-row</code>属性来定义一个网格项开始和结束的水平线。
</section>

## Instructions
<section id='instructions'>
使类为<code>item5</code>的元素占用最后两行。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: '<code>item5</code>类应该有<code>grid-row</code>属性且值为<code>2 / 4</code>。'
    testString: assert($('style').text().replace(/\s/g, '').match(/\.item5{.*grid-row:.*}/g));
  - text: '<code>item5</code> class 应该有 <code>grid-row</code> 属性使其占用网格最后两行。'
    testString: "
      const rowStart = getComputedStyle($('.item5')[0]).gridRowStart;
      const rowEnd = getComputedStyle($('.item5')[0]).gridRowEnd;
      const result = rowStart.toString() + rowEnd.toString();
      const correctResults = ['24', '2-1', '2span 2', '2span2', 'span 2-1', '-12', 'span 2span 2', 'span 2auto', 'autospan 2'];
      assert(correctResults.includes(result));
    "

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
    grid-column: 2 / 4;
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

```html
// solution required
```

</section>
              