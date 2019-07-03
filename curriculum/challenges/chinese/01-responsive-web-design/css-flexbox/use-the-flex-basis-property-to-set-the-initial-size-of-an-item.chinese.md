---
id: 587d78ae367417b2b2512afd
title: Use the flex-basis Property to Set the Initial Size of an Item
challengeType: 0

videoUrl: ''
localeTitle: Use the flex-basis Property to Set the Initial Size of an Item
---

## Description
<section id='description'>
<code>flex-basis</code>属性指定了项目在 CSS 进行<code>flex-shrink</code>或<code>flex-grow</code>调整前的初始大小。
<code>flex-basis</code>属性的单位与其他 size 属性一致（<code>px</code>、<code>em</code>、<code>%</code>等）。如果值为<code>auto</code>，项目的大小依赖于自身内容。
</section>

## Instructions
<section id='instructions'>
使用<code>flex-basis</code>为盒子设置原始值。在<code>#box-1</code>和<code>#box-2</code>添加 CSS  属性<code>flex-basis</code>。设置<code>#box-1</code>为<code>10em</code>，<code>#box-2</code>为<code>20em</code>。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>#box-1</code>元素应有<code>flex-basis</code>属性。
    testString: assert($('#box-1').css('flex-basis') != 'auto', '<code>#box-1</code>元素应有<code>flex-basis</code>属性。');
  - text: <code>#box-1</code>的<code>flex-basis</code>应为<code>10em</code>。
    testString: 'assert(code.match(/#box-1\s*?{\s*?.*?\s*?.*?\s*?flex-basis:\s*?10em;/g), "<code>#box-1</code>的<code>flex-basis</code>应为<code>10em</code>。");'
  - text: <code>#box-2</code>元素应有<code>flex-basis</code>属性。
    testString: assert($('#box-2').css('flex-basis') != 'auto', '<code>#box-2</code>元素应有<code>flex-basis</code>属性。');
  - text: <code>#box-2</code>的<code>flex-basis</code>应为<code>20em</code>。
    testString: 'assert(code.match(/#box-2\s*?{\s*?.*?\s*?.*?\s*?flex-basis:\s*?20em;/g), "<code>#box-2</code>的<code>flex-basis</code>应为<code>20em</code>。");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

    <div id='html-seed'>
```html
<style>,  #box-container {,    display: flex;,    height: 500px;,  },  ,  #box-1 {,    background-color: dodgerblue;,    height: 200px;,    ,  },  ,  #box-2 {,    background-color: orangered;,    height: 200px;,    ,  },</style>,  ,<div id="box-container">,  <div id="box-1"></div>,  <div id="box-2"></div>,</div>
```





</div>





</section>

              