---
id: bad87fee1348bd9aedf08822
challengeType: 0
videoUrl: 'https://scrimba.com/c/cVJarHW'
forumTopicId: 16654
title: 调整元素的外边距
---

## Description
<section id='description'>
<code>margin（外边距）</code>控制元素的边框与其他元素之间的距离。
在这里，我们可以看到蓝色框和红色框都在黄色框里。请注意，红色框的<code>margin</code>值要比蓝色框的大，让它看起来比蓝色框要小。
当你增加蓝色的<code>margin</code>值，它会增加元素边框到其他周围元素的距离。
</section>

## Instructions
<section id='instructions'>
蓝色的框<code>margin</code>的值要跟红色框的一样大小。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: '<code>blue-box</code> class 的<code>margin</code>值应为<code>20px</code>。'
    testString: assert($(".blue-box").css("margin-top") === "20px");

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
    margin: 20px;
  }

  .blue-box {
    background-color: blue;
    color: #fff;
    padding: 20px;
    margin: 10px;
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

/section>
              