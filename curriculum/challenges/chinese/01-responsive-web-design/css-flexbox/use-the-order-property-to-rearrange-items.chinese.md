---
id: 587d78ae367417b2b2512aff
title: Use the order Property to Rearrange Items
challengeType: 0
videoUrl: 'https://scrimba.com/p/pVaDAv/cMbvNAG'
forumTopicId: 301116
localeTitle: 使用 order 属性重新排列项目
---

## Description
<section id='description'>
<code>order</code>属性告诉 CSS flex 容器里项目的顺序。默认情况下，项目排列顺序与源 HTML 文件中顺序相同。这个属性接受数字作为参数，可以使用负数。
</section>

## Instructions
<section id='instructions'>
给<code>#box-1</code>和<code>#box-2</code>添加 CSS 属性<code>order</code>，<code>#box-1</code>的<code>order</code>属性值设为 <code>2</code>，<code>#box-2</code>的<code>order</code>属性值设为 <code>1</code>。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>#box-1</code>元素应有<code>order</code>属性，其值应为 <code>2</code>。
    testString: assert($('#box-1').css('order') == '2');
  - text: <code>#box-2</code>元素应有<code>order</code>属性，其值应为 <code>1</code>。
    testString: assert($('#box-2').css('order') == '1');

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<style>
  #box-container {
    display: flex;
    height: 500px;
  }
  #box-1 {
    background-color: dodgerblue;
    
    height: 200px;
    width: 200px;
  }

  #box-2 {
    background-color: orangered;
    
    height: 200px;
    width: 200px;
  }
</style>

<div id="box-container">
  <div id="box-1"></div>
  <div id="box-2"></div>
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
              