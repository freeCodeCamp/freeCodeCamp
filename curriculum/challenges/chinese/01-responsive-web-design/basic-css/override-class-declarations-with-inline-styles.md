---
id: bad87fee1348bd9aedf06756
title: Override Class Declarations with Inline Styles
challengeType: 0
videoUrl: 'https://scrimba.com/c/cGJDRha'
forumTopicId: 18252
localeTitle: 内联样式的优先级高于 ID 选择器
---

## Description
<section id='description'>
我们刚刚证明了，id 选择器无论在<code>style</code>标签哪里声明，都会覆盖 class 声明的样式，
其实还有其他方法可以覆盖重写 CSS 样式。你还记得行内样式吗？
</section>

## Instructions
<section id='instructions'>
使用行内样式尝试让<code>h1</code>的字体颜色变白。像下面这样使用：
<code>&#60;h1 style="color: green"&#62;</code>
<code>h1</code>元素需继续保留<code>blue-text</code>和<code>pink-text</code>class。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: '<code>h1</code>元素应该包含<code>pink-text</code> class。'
    testString: assert($("h1").hasClass("pink-text"));
  - text: '<code>h1</code>元素应该包含<code>blue-text</code> class。'
    testString: assert($("h1").hasClass("blue-text"));
  - text: '<code>h1</code>元素应该包含一个名为<code>orange-text</code>的id。'
    testString: assert($("h1").attr("id") === "orange-text");
  - text: '<code>h1</code>元素应该含有行内样式。'
    testString: assert(document.querySelector('h1[style]'));
  - text: '<code>h1</code>元素的字体颜色应该为白色。'
    testString: assert($("h1").css("color") === "rgb(255, 255, 255)");

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

```html
// solution required
```

</section>
              