---
id: 587d78ae367417b2b2512afc
title: Use the flex-grow Property to Expand Items
challengeType: 0
videoUrl: 'https://scrimba.com/p/pVaDAv/c2p78cg'
forumTopicId: 1301111
localeTitle: 使用 flex-grow 属性扩展项目
---

## Description
<section id='description'>
与<code>flex-shrink</code>相对的是<code>flex-grow</code>。你应该还记得，<code>flex-shrink</code>会在容器太小时对元素作出调整。相应地，<code>flex-grow</code>会在容器太大时对元素作出调整。
例子与上一个挑战相似，如果一个项目的<code>flex-grow</code>属性值为 1，另一个项目的<code>flex-grow</code>属性值为 3，那么后者会较前者扩大三倍。
</section>

## Instructions
<section id='instructions'>
为<code>#box-1</code>和<code>#box-2</code>添加 CSS 属性<code>flex-grow</code>，<code>#box-1</code>的值设为 1，<code>#box-2</code>的值设为 2。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: '<code>#box-1</code>元素应有<code>flex-grow</code>属性，其值应为 1。'
    testString: assert($('#box-1').css('flex-grow') == '1', '<code>#box-1</code>元素应有<code>flex-grow</code>属性，其值应为 1。');
  - text: '<code>#box-2</code>元素应有<code>flex-grow</code>属性，其值应为 2。'
    testString: assert($('#box-2').css('flex-grow') == '2', '<code>#box-2</code>元素应有<code>flex-grow</code>属性，其值应为 2。');

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
    
  }
  
  #box-2 {
    background-color: orangered;
    height: 200px;
    
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
              