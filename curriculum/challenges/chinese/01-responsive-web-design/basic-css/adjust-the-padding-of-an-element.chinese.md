---
id: bad88fee1348bd9aedf08825
title: Adjust the Padding of an Element
challengeType: 0
videoUrl: 'https://scrimba.com/c/cED8ZC2'
forumTopicId: 301083
localTitle: 调整元素的内边距
---

## Description
<section id='description'>
我们先暂时把猫咪图片放在一边，让我们去学习更多 HTML 相关样式。
你可能已经注意到了，所有的 HTML 元素基本都是以矩形为基础。
每个 HTML 元素周围的矩形空间由三个重要的属性来控制：<code>padding（内边距）</code>，<code>margin（外边距）</code>和<code>border（边框）</code>。
<code>padding</code>控制着元素内容与<code>border</code>之间的空隙大小。
在这里，我们可以看到蓝色盒子和红色盒子都在黄色盒子里面。可以发现，红色盒子比蓝色盒子有着更多的<code>padding</code>填充空间。
当你增加蓝色盒子的<code>padding</code>值，文本内容与边框的距离会逐渐拉大。
</section>

## Instructions
<section id='instructions'>
蓝色的盒子<code>padding</code>的值要跟红色盒子的一样大小。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: '你的<code>blue-box</code> class 的<code>padding</code>值应为<code>20px</code>。'
    testString: assert($(".blue-box").css("padding-top") === "20px", '你的<code>blue-box</code> class 的<code>padding</code>值应为<code>20px</code>。');

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
    padding: 10px;
  }
  
  .red-box {
    background-color: crimson;
    color: #fff;
    padding: 20px;
  }

  .blue-box {
    background-color: blue;
    color: #fff;
    padding: 10px;
  }
</style>
<h5 class="injected-text">margin</h5>

<div class="box yellow-box">
  <h5 class="box red-box">padding</h5>
  <h5 class="box blue-box">padding</h5>
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
              