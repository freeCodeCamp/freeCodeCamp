---
id: bad87fee1348bd9aedf04756
title: Override Styles in Subsequent CSS
challengeType: 0
videoUrl: 'https://scrimba.com/c/cGJDQug'
forumTopicId: 18253
localeTitle: Class 选择器的优先级高于继承样式
---

## Description
<section id='description'>
"pink-text" class 覆盖了<code>body</code>元素的 CSS 声明。
我们刚刚证明了我们的 class 会覆盖<code>body</code>的 CSS 样式。那么，下一个问题是，我们要怎么样才能覆盖我们的<code>pink-text</code>class？
</section>

## Instructions
<section id='instructions'>
创建一个字体颜色为<code>blue</code>的<code>blue-text</code>CSS class，并确保它在<code>pink-text</code>下方声明。
在含有<code>pink-text</code>class 的<code>h1</code>元素里面，再添加一个<code>blue-text</code>class，这时候，我们将能看到到底是谁获胜。
HTML 同时应用多个 class 属性需以空格来间隔，例子如下:
<code>class="class1 class2"</code>
<strong>注意：</strong> HTML 元素里应用的 class 的先后顺序无关紧要。
但是，在<code>&#60;style&#62;</code>标签里面声明的<code>class</code>顺序十分重要。第二个声明始终优于第一个声明。因为<code>.blue-text</code>在<code>.pink-text</code>的后面声明，所以<code>.blue-text</code>会覆盖<code>.pink-text</code>的样式。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: '<code>h1</code>元素应该包含<code>pink-text</code> class。'
    testString: assert($("h1").hasClass("pink-text"));
  - text: '<code>h1</code>元素应该包含<code>blue-text</code> class。'
    testString: assert($("h1").hasClass("blue-text"));
  - text: '<code>blue-text</code>和<code>pink-text</code>需同时应用于<code>h1</code>元素上。'
    testString: assert($(".pink-text").hasClass("blue-text"));
  - text: '<code>h1</code>元素的颜色应为蓝色。'
    testString: assert($("h1").css("color") === "rgb(0, 0, 255)");

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

```html
// solution required
```

</section>
              