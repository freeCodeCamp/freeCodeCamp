---
id: 587d78ab367417b2b2512af0
title: 'Use display: flex to Position Two Boxes'
challengeType: 0

videoUrl: ''
localeTitle: 'Use display: flex to Position Two Boxes'
---

## Description
<section id='description'>
这节会使用一种不同的挑战方式来学习一下如何更灵活地使用 CSS 布局元素。首先，我们会先用一个挑战解释原理，然后使用“弹性盒子”（flexbox）调整一个推文组件的样式来完成挑战。
只要在一个元素的 CSS 中添加<code>display: flex;</code>，就可以使用其他 flex 属性来构建响应式页面了。
</section>

## Instructions
<section id='instructions'>
为<code>#box-container</code>添加<code>display</code>属性，设置其值为 flex。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>#box-container</code>应有<code>display</code>属性，其值应为 flex。
    testString: assert($('#box-container').css('display') == 'flex', '<code>#box-container</code>应有<code>display</code>属性，其值应为 flex。');

```

</section>

## Challenge Seed
<section id='challengeSeed'>

    <div id='html-seed'>
```html
<style>,  #box-container {,    height: 500px;,    ,  },  ,  #box-1 {,    background-color: dodgerblue;,    width: 50%;,    height: 50%;,    ,  },,  #box-2 {,    background-color: orangered;,    width: 50%;,    height: 50%;,    ,  },</style>,<div id="box-container">,  <div id="box-1"></div>,  <div id="box-2"></div>,</div>
```





</div>





</section>

              