---
id: bad87fee1348bd9aedf08756
title: Prioritize One Style Over Another
challengeType: 0
videoUrl: 'https://scrimba.com/c/cZ8wnHv'
forumTopicId: 18258
localeTitle: 样式中的优先级
---

## Description
<section id='description'>
有时候， HTML 元素的样式会跟其他样式发生冲突。
就像，<code>h1</code>元素也不能同时设置<code>green</code>和<code>pink</code>两种样式。
让我们尝试创建一个字体颜色为<code>pink</code>的 class，并应于用其中一个元素中。猜一猜，它会覆盖<code>body</code>元素设置的<code>color: green;</code>CSS 属性吗？
</section>

## Instructions
<section id='instructions'>
创建一个能将元素的字体颜色改为<code>pink</code>的CSS class，并起名为<code>pink-text</code>。
给<code>h1</code>元素添加<code>pink-text</code>class。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: '<code>h1</code>元素应该含有<code>pink-text</code> class。'
    testString: assert($("h1").hasClass("pink-text"));
  - text: '<code>&#60;style&#62;</code>标签应该含有一个可以改变字体颜色的<code>pink-text</code> class。'
    testString: assert(code.match(/\.pink-text\s*\{\s*color\s*:\s*.+\s*;\s*\}/g));
  - text: '<code>h1</code>元素的字体颜色应该为<code>pink（粉色）</code>。'
    testString: assert($("h1").css("color") === "rgb(255, 192, 203)");

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
              