---
id: bad82fee1322bd9aedf08721
challengeType: 0
videoUrl: 'https://scrimba.com/c/cN66JSL'
forumTopicId: 301089
title: 理解绝对单位与相对单位
---

## Description
<section id='description'>
最近的几个挑战都是设置元素的内边距和外边距的<code>px</code>值。像素<code>px</code>是一种长度单位，来告诉浏览器应该如何调整元素大小和空间大小。其实除了像素，CSS 也有其他不同的长度单位供我们使用。
单位长度的类型可以分成 2 种，一种是相对的，一种是绝对的。例如，<code>in</code>和<code>mm</code>分别代表着英寸和毫米。绝对长度单位会接近屏幕上的实际测量值，不过不同屏幕的分辨率会存在差异，可能会导致一些误差。
相对单位长度，就像<code>em</code>和<code>rem</code>，它们会依赖其他长度的值。就好像<code>em</code>的大小基于元素的字体的<code>font-size</code>值，如果你使用<code>em</code>单位来设置<code>font-size</code>值，它的值会跟随父元素的<code>font-size</code>值来改变。
<strong>注意：</strong><br>有些单位长度选项是相对视窗大小来改变值的，符合了响应式 web 的设计原则。
</section>

## Instructions
<section id='instructions'>
给<code>red-box</code> class 添加<code>padding</code>属性，并设置为<code>1.5em</code>。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: '<code>red-box</code> class 应该含有<code>padding</code>属性。'
    testString: assert($('.red-box').css('padding-top') != '0px' && $('.red-box').css('padding-right') != '0px' && $('.red-box').css('padding-bottom') != '0px' && $('.red-box').css('padding-left') != '0px');
  - text: '<code>red-box</code> class 的<code>padding</code>值应为 1.5em。'
    testString: assert(code.match(/\.red-box\s*?{[\s\S]*padding:\s*?1\.5em/gi));

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<style>
  .injected-text {
    margin-bottom: -25px;
    text-align: center;
  }

  .box {
    border-style: solid;
    border-color: black;
    border-width: 5px;
    text-align: center;
  }

  .yellow-box {
    background-color: yellow;
    padding: 20px 40px 20px 40px;
  }

  .red-box {
    background-color: red;
    margin: 20px 40px 20px 40px;
    
  }

  .green-box {
    background-color: green;
    margin: 40px 20px 20px 40px;
  }
</style>
<h5 class="injected-text">margin</h5>

<div class="box yellow-box">
  <h5 class="box red-box">padding</h5>
  <h5 class="box green-box">padding</h5>
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
              