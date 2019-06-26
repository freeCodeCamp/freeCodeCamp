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
