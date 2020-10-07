---
id: bad87fee1248bd9aedf08824
challengeType: 0
videoUrl: 'https://scrimba.com/c/cg4RWh4'
forumTopicId: 16633
title: 给元素的每一侧添加不同的外边距
---

## Description
<section id='description'>
有时候，你会想给一个元素每个方向的<code>margin</code>都设置成一个特定的值。
CSS 允许你使用<code>margin-top</code>，<code>margin-right</code>，<code>margin-bottom</code>和<code>margin-left</code>属性来设置四个不同方向的<code>margin</code>值。
</section>

## Instructions
<section id='instructions'>
蓝色框的顶部和左侧的<code>margin</code>值设置为<code>40px</code>，底部和右侧设置为<code>20px</code>。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: '<code>blue-box</code> class 的右侧<code>margin</code>（上外边距）值应为<code>40px</code>。'
    testString: assert($(".blue-box").css("margin-top") === "40px");
  - text: '<code>blue-box</code> class 的右侧<code>margin</code>（右外边距）值应为<code>20px</code>。'
    testString: assert($(".blue-box").css("margin-right") === "20px");
  - text: '<code>blue-box</code> class 的底部<code>margin</code>（下外边距）值应为<code>20px</code>。'
    testString: assert($(".blue-box").css("margin-bottom") === "20px");
  - text: '<code>blue-box</code> class 的左侧<code>margin</code>（左外边距）值应为<code>40px</code>。'
    testString: assert($(".blue-box").css("margin-left") === "40px");

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
    margin-top: 40px;
    margin-right: 20px;
    margin-bottom: 20px;
    margin-left: 40px;
  }

  .blue-box {
    background-color: blue;
    color: #fff;
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

```js
// solution required
```

</section>
              