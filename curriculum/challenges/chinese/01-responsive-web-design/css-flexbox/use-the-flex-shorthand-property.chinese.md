---
id: 587d78ae367417b2b2512afe
title: Use the flex Shorthand Property
challengeType: 0
videoUrl: 'https://scrimba.com/p/pVaDAv/cbpW2tE'
forumTopicId: 301112
localeTitle: 使用 flex 短方法属性
---

## Description
<section id='description'>
上面几个 flex 属性有一个简写方式。<code>flex-grow</code>、<code>flex-shrink</code>和<code>flex-basis</code>属性可以在<code>flex</code>中一同设置。
例如，<code>flex: 1 0 10px;</code>会把项目属性设为<code>flex-grow: 1;</code>、<code>flex-shrink: 0;</code>以及<code>flex-basis: 10px;</code>。
属性的默认设置是<code>flex: 0 1 auto;</code>。
</section>

## Instructions
<section id='instructions'>
在<code>#box-1</code>和<code>#box-2</code>添加<code>flex</code>属性。为<code>#box-1</code>设置<code>flex-grow</code>属性值为 <code>2</code>，<code>flex-shrink</code>属性值为 <code>2</code>，<code>flex-basis</code>属性值为 <code>150px</code>。为<code>#box-2</code>设置<code>flex-grow</code>属性值为 <code>1</code>，<code>flex-shrink</code>属性值为 <code>1</code>，<code>flex-basis</code>属性值为 <code>150px</code>。
通过上面的设置，在容器大于 300px 时，<code>#box-1</code>扩大的空间是<code>#box-2</code>扩大空间的两倍；在容器小于 300px 时，<code>#box-1</code>缩小的空间<code>#box-2</code>缩小空间的两倍。300px 是两个盒子的<code>flex-basis</code>的值之和。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>#box-1</code>元素应有<code>flex</code>属性，其值应为 <code>2 2 150px</code>。
    testString: assert($('#box-1').css('flex-grow') == '2' && $('#box-1').css('flex-shrink') == '2' && $('#box-1').css('flex-basis') == '150px');
  - text: <code>#box-2</code>元素应有<code>flex</code>属性，其值应为 <code>1 1 150px</code>。
    testString: assert($('#box-2').css('flex-grow') == '1' && $('#box-2').css('flex-shrink') == '1' && $('#box-2').css('flex-basis') == '150px');
  - text: <code>#box-1</code>和<code>#box-2</code>应具有<code>flex</code>属性。
    testString: assert(code.match(/flex:\s*?\d\s+?\d\s+?150px;/g).length == 2);

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
              