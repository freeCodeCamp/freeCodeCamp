---
id: bad87fee1348bd9aedf08746
challengeType: 0
videoUrl: 'https://scrimba.com/c/c9bmdtR'
forumTopicId: 18204
title: 从 Body 元素继承样式
---

## Description
<section id='description'>
我们已经证明每一个 HTML 页面都含有<code>body</code>元素，<code>body</code>元素也可以使用 CSS 样式。
设置<code>body</code>元素的样式的方式跟设置其他 HTML 元素的样式一样，并且其他元素也会继承到<code>body</code>设置的样式。
</section>

## Instructions
<section id='instructions'>
首先，创建一个文本内容为<code>Hello World</code>的<code>h1</code>标签元素。
接着，在<code>body</code>CSS 规则里面添加一句<code>color: green;</code>，改变页面其他元素的字体颜色为<code>green（绿色）</code>。
最后，同样在<code>body</code>CSS 规则里面添加<code>font-family: monospace;</code>，设置其他元素字体为<code>font-family: monospace;</code>。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: '创建一个<code>h1</code>元素。'
    testString: assert(($("h1").length > 0));
  - text: '<code>h1</code>元素的文本内容应该为<code>Hello World</code>。'
    testString: assert(($("h1").length > 0 && $("h1").text().match(/hello world/i)));
  - text: '确保<code>h1</code>元素具有结束标记。'
    testString: assert(code.match(/<\/h1>/g) && code.match(/<h1/g) && code.match(/<\/h1>/g).length === code.match(/<h1/g).length);
  - text: '<code>body</code>元素的<code>color</code>属性值应为<code>green</code>。'
    testString: assert(($("body").css("color") === "rgb(0, 128, 0)"));
  - text: '<code>body</code>元素的<code>font-family</code>属性值应为<code>monospace</code>。'
    testString: assert(($("body").css("font-family").match(/monospace/i)));
  - text: '<code>h1</code>元素应该继承<code>body</code>的<code>monospace</code>字体属性。'
    testString: assert(($("h1").length > 0 && $("h1").css("font-family").match(/monospace/i)));
  - text: '<code>h1</code>元素的字体颜色也应该继承<code>body</code>元素的绿色。'
    testString: assert(($("h1").length > 0 && $("h1").css("color") === "rgb(0, 128, 0)"));

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

```html
// solution required
```

</section>
              