---
id: bad87fee1348bd9aedf08756
title: Prioritize One Style Over Another
challengeType: 0
videoUrl: ''
localeTitle: 将一种风格优先于另一种风格
---

## Description
<section id="description">有时，您的HTML元素将收到多个彼此冲突的样式。例如，您的<code>h1</code>元素不能同时为绿色和粉红色。让我们看看当我们创建一个使文本变为粉红色的类，然后将其应用于元素时会发生什么。我们的类<em>会覆盖</em> <code>body</code>元素的<code>color: green;</code> CSS属性？ </section>

## Instructions
<section id="instructions">创建一个名为<code>pink-text</code>的CSS类，它为元素提供粉红色。为你的<code>h1</code>元素提供<code>pink-text</code>类。 </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 測試文本
    testString: assert(true);

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
</style>
<h1>Hello World!</h1>

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
