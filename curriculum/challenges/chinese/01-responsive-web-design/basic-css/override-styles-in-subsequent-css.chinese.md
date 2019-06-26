---
id: bad87fee1348bd9aedf04756
title: Override Styles in Subsequent CSS
challengeType: 0
videoUrl: ''
localeTitle: 覆盖后续CSS中的样式
---

## Description
<section id="description">我们的“粉红色文本”类覆盖了我们的<code>body</code>元素的CSS声明！我们刚刚证明我们的类将覆盖<code>body</code>元素的CSS。所以下一个合乎逻辑的问题是，我们可以做些什么来覆盖我们的<code>pink-text</code>类？ </section>

## Instructions
<section id="instructions">创建一个名为<code>blue-text</code>的附加CSS类，它为元素提供蓝色。确保它低于<code>pink-text</code>类声明。除了<code>pink-text</code>类之外，将<code>blue-text</code>类应用于<code>h1</code>元素，让我们看看哪个获胜。将多个类属性应用于HTML元素是通过它们之间的空格完成的，如下所示： <code>class=&quot;class1 class2&quot;</code>注意：HTML元素中列出的类的顺序无关紧要。但是， <code>&lt;style&gt;</code>部分中的<code>class</code>声明的顺序是重要的。第二个声明将始终优先于第一个声明。因为<code>.blue-text</code>被声明为第二个，所以它会覆盖<code>.pink-text</code>的属性</section>

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
  .pink-text {
    color: pink;
  }
</style>
<h1 class="pink-text">Hello World!</h1>

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
