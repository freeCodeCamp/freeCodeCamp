---
id: 587d78ab367417b2b2512af0
challengeType: 0
videoUrl: 'https://scrimba.com/p/pVaDAv/cgz3QS7'
forumTopicId: 301105
title: '使用 display: flex 定位两个盒子'
---

## Description
<section id='description'>
这节会使用一种不同的挑战方式来学习一下如何使用 CSS 更灵活地布局元素。首先通过一个挑战来理解原理，然后通过操作一个简单的推文组件来应用“弹性盒子”（flexbox）。
只要在一个元素的 CSS 中添加<code>display: flex;</code>，就可以使用其它 flex 属性来构建响应式页面了。
</section>

## Instructions
<section id='instructions'>
为<code>#box-container</code>添加<code>display</code>属性，设置其值为 <code>flex</code>。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>#box-container</code>应有<code>display</code>属性，其值应为 <code>flex</code>。
    testString: assert($('#box-container').css('display') == 'flex');

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<style>
  #box-container {
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
              