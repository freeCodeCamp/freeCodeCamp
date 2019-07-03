---
id: 587d78ab367417b2b2512af2
title: Use the flex-direction Property to Make a Row
challengeType: 0

videoUrl: ''
localeTitle: Use the flex-direction Property to Make a Row
---

## Description
<section id='description'>
添加了<code>display: flex</code>的元素会成为 flex 容器。只要把<code>flex-direction</code>属性添加到父元素，并设置其为 row 或 column 即可轻易横或竖排列它的子元素。设为 row 可以让子元素水平排列，column 可以让子元素垂直排列。
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
  - text: <code>#box-container</code>应有<code>flex-direction</code>属性，其值应为 row-reverse。
    testString: assert($('#box-container').css('flex-direction') == 'row-reverse', '<code>#box-container</code>应有<code>flex-direction</code>属性，其值应为 row-reverse。');

```

</section>

## Challenge Seed
<section id='challengeSeed'>

    <div id='html-seed'>
```html
<style>,  #box-container {,    display: flex;,    height: 500px;,    ,  },  #box-1 {,    background-color: dodgerblue;,    width: 50%;,    height: 50%;,  },,  #box-2 {,    background-color: orangered;,    width: 50%;,    height: 50%;,  },</style>,,<div id="box-container">,  <div id="box-1"></div>,  <div id="box-2"></div>,</div>
```





</div>





</section>

              