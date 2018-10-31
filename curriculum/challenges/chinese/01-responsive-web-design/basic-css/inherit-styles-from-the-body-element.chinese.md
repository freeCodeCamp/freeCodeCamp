---
id: bad87fee1348bd9aedf08746
title: Inherit Styles from the Body Element
challengeType: 0
videoUrl: ''
localeTitle: 从Body元素继承样式
---

## Description
<section id="description">现在我们已经证明每个HTML页面都有一个<code>body</code>元素，并且它的<code>body</code>元素也可以用CSS设置样式。记住，你可以风格你<code>body</code>元素，就像任何其他HTML元素，和所有其他元素将继承你的<code>body</code>元素的样式。 </section>

## Instructions
<section id="instructions">首先，创建一个<code>h1</code>与文本元素<code>Hello World</code>然后，让我们给您的网页上的所有元素的颜色<code>green</code>中加入<code>color: green;</code>你的<code>body</code>元素的风格声明。最后，通过添加<code>font-family: monospace;</code> ，为你的<code>body</code>元素提供<code>monospace</code>的<code>font-family: monospace;</code>你的<code>body</code>元素的风格声明。 </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 创建一个<code>h1</code>元素。
    testString: 'assert(($("h1").length > 0), "Create an <code>h1</code> element.");'
  - text: 你的<code>h1</code>元素应该有文本<code>Hello World</code> 。
    testString: 'assert(($("h1").length > 0 && $("h1").text().match(/hello world/i)), "Your <code>h1</code> element should have the text <code>Hello World</code>.");'
  - text: 确保您的<code>h1</code>元素具有结束标记。
    testString: 'assert(code.match(/<\/h1>/g) && code.match(/<h1/g) && code.match(/<\/h1>/g).length === code.match(/<h1/g).length, "Make sure your <code>h1</code> element has a closing tag.");'
  - text: 为你的<code>body</code>元素赋予<code>green</code>的<code>color</code>属性。
    testString: 'assert(($("body").css("color") === "rgb(0, 128, 0)"), "Give your <code>body</code> element the <code>color</code> property of <code>green</code>.");'
  - text: 为<code>body</code>元素提供<code>monospace</code>的<code>font-family</code>属性。
    testString: 'assert(($("body").css("font-family").match(/monospace/i)), "Give your <code>body</code> element the <code>font-family</code> property of <code>monospace</code>.");'
  - text: 你的<code>h1</code>元素应该从你的<code>body</code>元素继承font <code>monospace</code> 。
    testString: 'assert(($("h1").length > 0 && $("h1").css("font-family").match(/monospace/i)), "Your <code>h1</code> element should inherit the font <code>monospace</code> from your <code>body</code> element.");'
  - text: 您的<code>h1</code>元素应该从您的<code>body</code>元素继承绿色。
    testString: 'assert(($("h1").length > 0 && $("h1").css("color") === "rgb(0, 128, 0)"), "Your <code>h1</code> element should inherit the color green from your <code>body</code> element.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<style>
  body {
    background-color: black;
  }

</style>

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
