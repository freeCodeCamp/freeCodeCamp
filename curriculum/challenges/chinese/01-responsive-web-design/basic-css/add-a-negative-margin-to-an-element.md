---
id: bad87fee1348bd9aedf08823
challengeType: 0
videoUrl: 'https://scrimba.com/c/cnpyGs3'
forumTopicId: 16166
title: 给元素添加负外边距
---

## Description
<section id='description'>
元素的<code>margin（外边距）</code>控制元素<code>border（边框）</code>与其他周围元素之间的距离大小。
如果你把元素的<code>margin</code>设置为负值，元素会变得更大。
</section>

## Instructions
<section id='instructions'>
尝试将蓝色框的<code>margin</code>设为负值，跟红色框一样大小。
蓝色框的<code>margin</code>设置为<code>-15px</code>，它会填满与黄色框之间的距离。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: '<code>blue-box</code> class的<code>margin</code>应该设置为<code>-15px</code>。'
    testString: assert($(".blue-box").css("margin-top") === "-15px");

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
    margin: -15px;
  }

  .blue-box {
    background-color: blue;
    color: #fff;
    padding: 20px;
    margin: 20px;
  }
</style>

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
              