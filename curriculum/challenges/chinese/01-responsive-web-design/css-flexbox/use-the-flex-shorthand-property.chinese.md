---
id: 587d78ae367417b2b2512afe
title: Use the flex Shorthand Property
challengeType: 0

videoUrl: ''
localeTitle: Use the flex Shorthand Property
---

## Description
<section id='description'>
上面几个 flex 属性有一个简写方式。<code>flex-grow</code>、<code>flex-shrink</code>和<code>flex-basis</code>属性可以在<code>flex</code>中一同设置。
例如，<code>flex: 1 0 10px;</code>会把项目属性设为<code>flex-grow: 1;</code>、<code>flex-shrink: 0;</code>以及<code>flex-basis: 10px;</code>。
属性的默认设置是<code>flex: 0 1 auto;</code>。
</section>

## Instructions
<section id='instructions'>
在<code>#box-1</code>和<code>#box-2</code>添加<code>flex</code>属性。把<code>#box-1</code>设置成<code>flex-grow</code>为 2，<code>flex-shrink</code>为 2，<code>flex-basis</code>为 150px。把<code>#box-2</code>设置成<code>flex-grow</code>为 1，<code>flex-shrink</code>为 1，<code>flex-basis</code>为 150px。
上面设置的属性，在容器大于 300px 时，会让<code>#box-1</code>填充倍率为<code>#box-2</code>的两倍；在容器小于 300px 时，缩小倍率为<code>#box-2</code>的两倍。300px 是两个盒子的<code>flex-basis</code>的值之和。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>#box-1</code>元素应有<code>flex</code>属性，其值应为 2 2 150px。
    testString: assert($('#box-1').css('flex-grow') == '2' && $('#box-1').css('flex-shrink') == '2' && $('#box-1').css('flex-basis') == '150px', '<code>#box-1</code>元素应有<code>flex</code>属性，其值应为 2 2 150px。');
  - text: <code>#box-2</code>元素应有<code>flex</code>属性，其值应为 1 1 150px。
    testString: assert($('#box-2').css('flex-grow') == '1' && $('#box-2').css('flex-shrink') == '1' && $('#box-2').css('flex-basis') == '150px', '<code>#box-2</code>元素应有<code>flex</code>属性，其值应为 1 1 150px。');
  - text: 应对<code>#box-1</code>和<code>#box-2</code>使用<code>flex</code>属性。
    testString: 'assert(code.match(/flex:\s*?\d\s+?\d\s+?150px;/g).length == 2, "应对<code>#box-1</code>和<code>#box-2</code>使用<code>flex</code>属性。");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

    <div id='html-seed'>
```html
<style>,  #box-container {,    display: flex;,    height: 500px;,  },  #box-1 {,    background-color: dodgerblue;,    ,    height: 200px;,  },,  #box-2 {,    background-color: orangered;,    ,    height: 200px;,  },</style>,,<div id="box-container">,  <div id="box-1"></div>,  <div id="box-2"></div>,</div>
```





</div>





</section>

              