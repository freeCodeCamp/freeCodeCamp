---
id: bad87fee1348bd9aedf07756
title: Override All Other Styles by using Important
challengeType: 0
videoUrl: ''
localeTitle: 使用重要覆盖所有其他样式
---

## Description
<section id="description">好极了！我们刚刚证明了内联样式将覆盖<code>style</code>元素中的所有CSS声明。可是等等。有一种覆盖CSS的最后一种方法。这是所有人中最强大的方法。但在我们这样做之前，让我们谈谈为什么你想要覆盖CSS。在许多情况下，您将使用CSS库。这些可能会意外地覆盖您自己的CSS。所以当你绝对需要确定一个元素有特定的CSS时，你可以使用<code>!important</code>让我们一直回到我们的<code>pink-text</code>类声明。请记住，我们的<code>pink-text</code>类被后续的类声明，id声明和内联样式覆盖。 </section>

## Instructions
<section id="instructions">让我们在粉红色文本元素的颜色声明中添加关键字<code>!important</code> ，以100％确定你的<code>h1</code>元素是粉红色的。如何执行此操作的示例是： <code>color: red !important;</code> </section>

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
  - text: '您的<code>h1</code>元素应具有内联样式的<code>color: white</code> 。'
    testString: 'assert(code.match(/<h1.*style/gi) && code.match(/<h1.*style.*color\s*?:/gi), "Your <code>h1</code> element should have the inline style of <code>color&#58; white</code>.");'
  - text: 你的<code>pink-text</code>类声明应该有<code>!important</code>关键字来覆盖所有其他声明。
    testString: 'assert(code.match(/\.pink-text\s*?\{[\s\S]*?color:.*pink.*!important\s*;?[^\.]*\}/g), "Your <code>pink-text</code> class declaration should have the <code>!important</code> keyword to override all other declarations.");'
  - text: 你的<code>h1</code>元素应该是粉红色的。
    testString: 'assert($("h1").css("color") === "rgb(255, 192, 203)", "Your <code>h1</code> element should be pink.");'

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
<h1 id="orange-text" class="pink-text blue-text" style="color: white">Hello World!</h1>

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
