---
id: bad87fee1348bd8aedf06756
title: Override Class Declarations by Styling ID Attributes
challengeType: 0
videoUrl: 'https://scrimba.com/c/cRkpDhB'
forumTopicId: 18251
localeTitle: ID 选择器优先级高于 Class 选择器
---

## Description
<section id='description'>
我们刚刚证明了浏览器读取 CSS 是由上到下的。这就意味着，如果发生冲突，浏览器将会应用最后声明的样式。
不过我们还没结束，还有其他方法来覆盖 CSS 样式。你还记得 id 属性吗？
通过给<code>h1</code>元素添加 id 属性，来覆盖 class 属性定义的同名样式。
</section>

## Instructions
<section id='instructions'>
给<code>h1</code>元素添加 id 属性，属性值为<code>orange-text</code>。设置方式如下：
<code>&#60;h1 id="orange-text"&#62;</code>
<code>h1</code>元素继续保留<code>blue-text</code>和<code>pink-text</code>class。
在<code>style</code>元素中创建名为<code>orange-text</code>的 id 选择器。例子如下：

```css
#brown-text {
  color: brown;
}
```

注意：无论在<code>pink-text</code>class 的上面或者下面声明，id 选择器的优先级总是会高于 class 选择器。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: '<code>h1</code>元素应该包含<code>pink-text</code> class。'
    testString: assert($("h1").hasClass("pink-text"));
  - text: '<code>h1</code>元素应该包含<code>blue-text</code> class。'
    testString: assert($("h1").hasClass("blue-text"));
  - text: '<code>h1</code>的 id 属性值为<code>orange-text</code>。'
    testString: assert($("h1").attr("id") === "orange-text");
  - text: '应该只有一个<code>h1</code>元素。'
    testString: assert(($("h1").length === 1));
  - text: '创建名为<code>orange-text</code>的 id 选择器。'
    testString: assert(code.match(/#orange-text\s*{/gi));
  - text: '不要在<code>h1</code>元素里面使用<code>style（行内样式）</code>。'
    testString: assert(!code.match(/<h1.*style.*>/gi));
  - text: '<code>h1</code>元素的字体颜色应为橘色。'
    testString: assert($("h1").css("color") === "rgb(255, 165, 0)");

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
  .blue-text {
    color: blue;
  }
</style>
<h1 class="pink-text blue-text">Hello World!</h1>
```

</div>



</section>

## Solution
<section id='solution'>

```html
// solution required
```

</section>
              