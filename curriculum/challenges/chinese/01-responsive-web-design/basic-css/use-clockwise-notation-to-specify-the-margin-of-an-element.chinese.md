---
id: bad87fee1348bd9afdf08726
title: Use Clockwise Notation to Specify the Margin of an Element
challengeType: 0
videoUrl: 'https://scrimba.com/c/cnpybAd'
forumTopicId: 18345
localeTitle: 使用顺时针方向指定元素的外边距
---

## Description
<section id='description'>
让我们再试一次，不过这一次轮到<code>margin</code>了。
同样，每个方向的外边距值可以在<code>margin</code>属性里面汇总声明，来代替分别声明<code>margin-top</code>，<code>margin-right</code>，<code>margin-bottom</code>和<code>margin-left</code>属性的方式，代码如下：
<code>margin: 10px 20px 10px 20px;</code>
这四个值按顺时针排序：上，右，下，左，并且设置的效果等同于特定声明每一个方向的<code>margin</code>。
</section>

## Instructions
<section id='instructions'>
按照顺时针顺序，给".blue-box" class的上外边距以及左外边距设置为<code>40px</code>，右外边距和下外边距则设置为<code>20px</code>。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>blue-box</code> class 的上外边距应为<code>40px</code>。
    testString: assert($(".blue-box").css("margin-top") === "40px");
  - text: <code>blue-box</code> class 的右外边距应为<code>20px</code>。
    testString: assert($(".blue-box").css("margin-right") === "20px");
  - text: <code>blue-box</code> class 的下外边距应为<code>20px</code>。
    testString: assert($(".blue-box").css("margin-bottom") === "20px");
  - text: <code>blue-box</code> class 的左外边距应为<code>40px</code>。
    testString: assert($(".blue-box").css("margin-left") === "40px");
  - text: 你应该沿顺时针方向设置<code>blue-box</code>的外边距。
    testString: const removeCssComments = str => str.replace(/\/\*[\s\S]+?\*\//g, '');assert(/\.blue-box\s*{[\s\S]*margin[\s]*:\s*\d+px\s+\d+px\s+\d+px\s+\d+px(;\s*[^}]+\s*}|;?\s*})/.test(removeCssComments($('style').text())));

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
    margin: 20px 40px 20px 40px;
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
              