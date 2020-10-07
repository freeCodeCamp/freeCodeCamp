---
id: 587d78ad367417b2b2512afb
challengeType: 0
videoUrl: 'https://scrimba.com/p/pVaDAv/cd3PBfr'
forumTopicId: 301113
title: 使用 flex-shrink 属性收缩项目
---

## Description
<section id='description'>
目前为止，挑战里的提到的属性都应用于 flex 容器（flex 子元素的父元素）。除此之外，flex 子元素也有很多实用属性。
首先介绍的是<code>flex-shrink</code>属性。使用之后，如果 flex 容器太小，该项目会自动缩小。当容器的宽度小于里面所有项目的宽度，项目就会自动压缩。
项目的<code>flex-shrink</code>属性接受 number 类型的值。数值越大，该项目与其他项目相比会被压缩得更厉害。例如，如果一个项目的<code>flex-shrink</code>属性值为 <code>1</code>，另一个项目的<code>flex-shrink</code>属性值为 <code>3</code>，那么后者相比前者会受到 <code>3</code> 倍压缩。
</section>

## Instructions
<section id='instructions'>
为<code>#box-1</code>和<code>#box-2</code>添加 CSS 属性<code>flex-shrink</code>，<code>#box-1</code>的值设为 <code>1</code>，<code>#box-2</code>的值设为 <code>2</code>。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>#box-1</code>元素应有<code>flex-shrink</code>属性，其值应为 <code>1</code>.
    testString: assert($('#box-1').css('flex-shrink') == '1');
  - text: <code>#box-2</code>元素应有<code>flex-shrink</code>属性，其值应为 <code>2</code>.
    testString: assert($('#box-2').css('flex-shrink') == '2');

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
    width: 100%;
    height: 200px;
    
  }

  #box-2 {
    background-color: orangered;
    width: 100%;
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
              