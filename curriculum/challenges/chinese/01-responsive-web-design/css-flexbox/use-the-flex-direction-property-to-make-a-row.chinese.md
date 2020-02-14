---
id: 587d78ab367417b2b2512af2
title: Use the flex-direction Property to Make a Row
challengeType: 0
videoUrl: 'https://scrimba.com/p/pVaDAv/cBEkbfJ'
forumTopicId: 301110
localeTitle: 使用 flex-direction 属性创建一行
---

## Description
<section id='description'>
给元素添加<code>display: flex</code>属性使其变成 flex 容器。只要给父元素添加<code>flex-direction</code>属性，并把属性值设置为 row 或 column，即可横排或竖排它的子元素。设为 row 可以让子元素水平排列，设为 column 可以让子元素垂直排列。
<code>flex-direction</code>的其他可选值还有 row-reverse 和 column-reverse。
<strong>注意</strong><br><code>flex-direction</code>的默认值为 row。
</section>

## Instructions
<section id='instructions'>
为<code>#box-container</code>添加 CSS 属性<code>flex-direction</code>，其值设为 row-reverse。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: '<code>#box-container</code>应有<code>flex-direction</code>属性，其值应为 row-reverse。'
    testString: assert($('#box-container').css('flex-direction') == 'row-reverse');

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
    width: 50%;
    height: 50%;
  }

  #box-2 {
    background-color: orangered;
    width: 50%;
    height: 50%;
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
              