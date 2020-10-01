---
id: bad87fee1348bd9aedf07756
challengeType: 0
videoUrl: 'https://scrimba.com/c/cm24rcp'
forumTopicId: 18249
title: Important 的优先级最高
---

## Description
<section id='description'>
耶！我们刚刚又证明了行内样式会覆盖<code>style</code>标签里面所有的 CSS 声明。
不过，还有一种方式可以覆盖重新 CSS 样式。这是所有方法里面最强大的一个。在此之前，我们要考虑清楚，为什么我们需要覆盖 CSS 样式。
在很多时候，你使用 CSS 库，有时候它们声明的样式会意外的覆盖 CSS 样式。当你需要保证 CSS 样式不受影响，你可以使用<code>!important</code>。
让我们回到<code>pink-text</code>class 声明之中，它已经被随其后的 class 声明，id 声明，以及行内样式所覆盖。
</section>

## Instructions
<section id='instructions'>

在<code>pink-text</code>class 的<code>color</code>声明里面使用<code>!important</code>关键字，去确保<code>h1</code>元素的字体颜色一定为粉色。
操作的方法大概如下：
<code>color: red !important;</code>
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
  - text: '<code>h1</code>元素应该包含<code>color&#58; white</code>的行内样式声明。'
    testString: assert(code.match(/<h1.*style/gi) && code.match(/<h1.*style.*color\s*?:/gi));
  - text: '<code>pink-text</code> class 声明应该含有<code>!important</code>关键字。'
    testString: assert(code.match(/\.pink-text\s*?\{[\s\S]*?color:.*pink.*!important\s*;?[^\.]*\}/g));
  - text: '<code>h1</code>元素的字体颜色应该为粉色。'
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

```html
// solution required
```

</section>
              