---
id: 587d78ac367417b2b2512af4
title: Use the flex-direction Property to Make a Column
challengeType: 0

videoUrl: ''
localeTitle: Use the flex-direction Property to Make a Column
---

## Description
<section id='description'>
之前两项挑战把<code>flex-direction</code>设为 row。这个属性还能创建一个列，让子元素垂直排列在 flex 容器中。
</section>

## Instructions
<section id='instructions'>
给<code>#box-container</code>元素添加 CSS 属性<code>flex-direction</code>，赋值为 column。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>#box-container</code>应有<code>flex-direction</code>属性，其值应为 column。
    testString: assert($('#box-container').css('flex-direction') == 'column', '<code>#box-container</code>应有<code>flex-direction</code>属性，其值应为 column。');

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

              