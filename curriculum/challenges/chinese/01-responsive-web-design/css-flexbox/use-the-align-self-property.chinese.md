---
id: 587d78af367417b2b2512b00
title: Use the align-self Property
challengeType: 0

videoUrl: ''
localeTitle: Use the align-self Property
---

## Description
<section id='description'>
flex 子元素的最后一个属性是<code>align-self</code>。这个属性允许你调整每个项目自己的对齐方式，而不是一次性设置全部项目。因为<code>float</code>、<code>clear</code>和<code>vertical-align</code>等调整使用的属性都不能应用在 flex 子元素，所以这个属性显得十分有用。
<code>align-self</code>的允许值与<code>align-items</code>一样，并且它会覆盖<code>align-items</code>的值。
</section>

## Instructions
<section id='instructions'>
在<code>#box-1</code>和<code>#box-2</code>添加 CSS 属性<code>align-self</code>。<code>#box-1</code>设为 center，<code>#box-2</code>设为 flex-end。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>#box-1</code>元素应有<code>align-self</code>属性，其值应为 center。
    testString: assert($('#box-1').css('align-self') == 'center', '<code>#box-1</code>元素应有<code>align-self</code>属性，其值应为 center。');
  - text: <code>#box-2</code>元素应有<code>align-self</code>属性，其值应为 flex-end。
    testString: assert($('#box-2').css('align-self') == 'flex-end', '<code>#box-2</code>元素应有<code>align-self</code>属性，其值应为 flex-end。');

```

</section>

## Challenge Seed
<section id='challengeSeed'>

    <div id='html-seed'>
```html
<style>,  #box-container {,    display: flex;,    height: 500px;,  },  #box-1 {,    background-color: dodgerblue;,    ,    height: 200px;,    width: 200px;,  },,  #box-2 {,    background-color: orangered;,    ,    height: 200px;,    width: 200px;,  },</style>,,<div id="box-container">,  <div id="box-1"></div>,  <div id="box-2"></div>,</div>
```





</div>





</section>

              