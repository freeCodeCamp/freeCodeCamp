---
id: 587d78ae367417b2b2512afd
challengeType: 0
videoUrl: 'https://scrimba.com/p/pVaDAv/c3d9nCa'
forumTopicId: 301108
title: 使用 flex-basis 属性设置项目的初始大小
---

## Description
<section id='description'>
<code>flex-basis</code>属性定义了在使用 CSS 的<code>flex-shrink</code>或<code>flex-grow</code>属性对项目进行调整前，项目的初始大小。
<code>flex-basis</code>属性的单位与其他表示尺寸的属性的单位一致（<code>px</code>、<code>em</code>、<code>%</code>等）。如果值为<code>auto</code>，则项目的尺寸随内容调整。
</section>

## Instructions
<section id='instructions'>
使用<code>flex-basis</code>为盒子设置初始值。给<code>#box-1</code>和<code>#box-2</code>添加 CSS 属性<code>flex-basis</code>。设置<code>#box-1</code>的尺寸初始值为<code>10em</code>，<code>#box-2</code>的尺寸初始值为<code>20em</code>。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: '<code>#box-1</code>元素应有<code>flex-basis</code>属性。'
    testString: assert($('#box-1').css('flex-basis') != 'auto');
  - text: '<code>#box-1</code>的<code>flex-basis</code>应为<code>10em</code>。'
    testString: assert(code.match(/#box-1\s*?{\s*?.*?\s*?.*?\s*?flex-basis:\s*?10em;/g));
  - text: '<code>#box-2</code>元素应有<code>flex-basis</code>属性。'
    testString: assert($('#box-2').css('flex-basis') != 'auto');
  - text: '<code>#box-2</code>的<code>flex-basis</code>应为<code>20em</code>。'
    testString: assert(code.match(/#box-2\s*?{\s*?.*?\s*?.*?\s*?flex-basis:\s*?20em;/g));

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
              