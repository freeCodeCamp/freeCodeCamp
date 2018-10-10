---
id: bad87fee1348bd8aedf06756
title: Override Class Declarations by Styling ID Attributes
challengeType: 0
videoUrl: ''
localeTitle: 通过样式ID属性覆盖类声明
---

## Description
<section id="description">我们刚刚证明了浏览器从上到下读取CSS。这意味着，如果发生冲突，浏览器将使用最后的CSS声明。但我们还没有完成。还有其他方法可以覆盖CSS。你还记得id属性吗？让我们覆盖你的<code>pink-text</code>和<code>blue-text</code>类，并通过给<code>h1</code>元素一个id然后设置那个id样式，使你的<code>h1</code>元素变成橙色。 </section>

## Instructions
<section id="instructions">为你的<code>h1</code>元素提供<code>orange-text</code>的<code>id</code>属性。请记住，id样式如下所示： <code>&lt;h1 id=&quot;orange-text&quot;&gt;</code>在<code>h1</code>元素上保留<code>blue-text</code>和<code>pink-text</code>类。在<code>style</code>元素中为您的<code>orange-text</code> id创建一个CSS声明。这是一个示例： <blockquote> ＃brown-text { <br>颜色：棕色; <br> } </blockquote>注意：无论您是在粉红色文本类之上还是之下声明此CSS都无关紧要，因为id属性始终优先。 </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 您的<code>h1</code>元素应该具有<code>pink-text</code>类。
    testString: 'assert($("h1").hasClass("pink-text"), "Your <code>h1</code> element should have the class <code>pink-text</code>.");'
  - text: 你的<code>h1</code>元素应该有<code>blue-text</code> 。
    testString: 'assert($("h1").hasClass("blue-text"), "Your <code>h1</code> element should have the class <code>blue-text</code>.");'
  - text: 为你的<code>h1</code>元素提供<code>orange-text</code>的id。
    testString: 'assert($("h1").attr("id") === "orange-text", "Give your <code>h1</code> element the id of <code>orange-text</code>.");'
  - text: 应该只有一个<code>h1</code>元素。
    testString: 'assert(($("h1").length === 1), "There should be only one <code>h1</code> element.");'
  - text: 为您的<code>orange-text</code> ID创建一个CSS声明
    testString: 'assert(code.match(/#orange-text\s*{/gi), "Create a CSS declaration for your <code>orange-text</code> id");'
  - text: 不要给你的<code>h1</code>任何<code>style</code>属性。
    testString: 'assert(!code.match(/<h1.*style.*>/gi), "Do not give your <code>h1</code> any <code>style</code> attributes.");'
  - text: 你的<code>h1</code>元素应该是橙色的。
    testString: 'assert($("h1").css("color") === "rgb(255, 165, 0)", "Your <code>h1</code> element should be orange.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<style>
  body {
    background-color: black;
    font-family: monospace;
    color: green;
  }
  .pink-text {
    color: pink;
  }
  .blue-text {
    color: blue;
  }
</style>
<h1 class="pink-text blue-text">Hello World!</h1>

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
