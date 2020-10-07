---
id: bad87fee1348bd9aec908846
challengeType: 0
forumTopicId: 16812
title: 创建一个 Bootstrap 标题
---

## Description
<section id='description'>
现在，让我们运用 HTML，CSS 和 Bootstrap 从零开始做点东西。
我们将会搭建一个 jQuery playground，以便在后续的 jQuery 课程中使用它。
首先，创建一个包含 <code>jQuery Playground</code> 文本内容的 <code>h3</code> 元素。
通过给你的 <code>h3</code> 元素设置 Bootstrap 的 class 属性 <code>text-primary</code> 来为其上色，然后添加 Bootstrap 的 class 属性 <code>text-center</code> 使其文本居中显示。
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 为你的页面添加一个 <code>h3</code> 元素。
    testString: assert($("h3") && $("h3").length > 0);
  - text: 确保你的 <code>h3</code> 元素有一个闭合标签。
    testString: assert(code.match(/<\/h3>/g) && code.match(/<h3/g) && code.match(/<\/h3>/g).length === code.match(/<h3/g).length);
  - text: 为了确保成功上色，<code>h3</code> 元素应该具有 <code>text-primary</code> class。
    testString: assert($("h3").hasClass("text-primary"));
  - text: 为了确保文本居中显示，你的 <code>h3</code> 元素应该具有 <code>text-center</code> class。
    testString: assert($("h3").hasClass("text-center"));
  - text: <code>h3</code> 元素文本为 <code>jQuery Playground</code>。
    testString: assert.isTrue((/jquery(\s)+playground/gi).test($("h3").text()));

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html

```

</div>

</section>

## Solution
<section id='solution'>

```html
<h3 class="text-primary text-center">jQuery Playground</h3>
```

</section>
