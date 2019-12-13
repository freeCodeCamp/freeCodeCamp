---
id: bad87fee1348bd9aedf08826
title: Use Clockwise Notation to Specify the Padding of an Element
challengeType: 0
videoUrl: 'https://scrimba.com/c/cB7mBS9'
forumTopicId: 18346
localTitle: 使用顺时针方向指定元素的内边距
---

## Description
<section id='description'>
如果不想每次都要分别声明<code>padding-top</code>，<code>padding-right</code>，<code>padding-bottom</code>和<code>padding-left</code>属性，可以把它们汇总在<code>padding</code>属性里面声明，如下：
<code>padding: 10px 20px 10px 20px;</code>
这四个值按顺时针排序：上，右，下，左，并且设置的效果等同于特定声明每一个方向的<code>padding</code>。
</section>

## Instructions
<section id='instructions'>
按照顺时针顺序，给".blue-box" class的上内边距以及左内边距设置为<code>40px</code>，右内边距和下内边距则设置为<code>20px</code>。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: '<code>blue-box</code> class 的上内边距应为<code>40px</code>。'
    testString: assert($(".blue-box").css("padding-top") === "40px", '<code>blue-box</code> class 的上内边距应为<code>40px</code>。');
  - text: '<code>blue-box</code> class 的右内边距应为<code>20px</code>。'
    testString: assert($(".blue-box").css("padding-right") === "20px", '<code>blue-box</code> class 的右内边距应为<code>40px</code>。');
  - text: '<code>blue-box</code> class 的下内边距应为<code>20px</code>。'
    testString: assert($(".blue-box").css("padding-bottom") === "20px", '<code>blue-box</code> class 的下内边距应为<code>20px</code>。');
  - text: '<code>blue-box</code> class 的左内边距应为<code>40px</code>。'
    testString: assert($(".blue-box").css("padding-left") === "40px", '<code>blue-box</code> class 的左内边距应为<code>40px</code>。');
  - text: '你应该按照顺时针排序，汇总声明的方式来设置<code>blue-box</code>的<code>padding</code>值。'
    testString: assert(!/padding-top|padding-right|padding-bottom|padding-left/.test(code), '你应该按照顺时针排序，汇总声明的方式来设置<code>blue-box</code>的<code>padding</code>值。');

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
    background-color: crimson;
    color: #fff;
    padding: 20px 40px 20px 40px;
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

```html
// solution required
```

</section>
              