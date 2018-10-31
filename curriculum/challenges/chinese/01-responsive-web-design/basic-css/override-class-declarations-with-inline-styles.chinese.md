---
id: bad87fee1348bd9aedf06756
title: Override Class Declarations with Inline Styles
challengeType: 0
videoUrl: ''
localeTitle: 使用内联样式覆盖类声明
---

## Description
<section id="description">所以我们已经证明了id声明覆盖了类声明，无论它们在<code>style</code>元素CSS中的声明位置如何。还有其他方法可以覆盖CSS。你还记得内联样式吗？ </section>

## Instructions
<section id="instructions">使用<code>inline style</code>尝试使我们的<code>h1</code>元素变白。请记住，在线条样式中如下所示： <code>&lt;h1 style=&quot;color: green;&quot;&gt;</code>在<code>h1</code>元素上保留<code>blue-text</code>和<code>pink-text</code>类。 </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 您的<code>h1</code>元素应该具有<code>pink-text</code>类。
    testString: 'assert($("h1").hasClass("pink-text"), "Your <code>h1</code> element should have the class <code>pink-text</code>.");'
  - text: 你的<code>h1</code>元素应该有<code>blue-text</code> 。
    testString: 'assert($("h1").hasClass("blue-text"), "Your <code>h1</code> element should have the class <code>blue-text</code>.");'
  - text: 您的<code>h1</code>元素应具有<code>orange-text</code>的ID。
    testString: 'assert($("h1").attr("id") === "orange-text", "Your <code>h1</code> element should have the id of <code>orange-text</code>.");'
  - text: 为您的<code>h1</code>元素提供内联样式。
    testString: 'assert(document.querySelector("h1[style]"), "Give your <code>h1</code> element an inline style.");'
  - text: 你的<code>h1</code>元素应该是白色的。
    testString: 'assert($("h1").css("color") === "rgb(255, 255, 255)", "Your <code>h1</code> element should be white.");'

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
  #orange-text {
    color: orange;
  }
  .pink-text {
    color: pink;
  }
  .blue-text {
    color: blue;
  }
</style>
<h1 id="orange-text" class="pink-text blue-text">Hello World!</h1>

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
