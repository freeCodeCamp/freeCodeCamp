---
id: 587d78aa367417b2b2512aed
title: Declare the Doctype of an HTML Document
challengeType: 0
videoUrl: ''
localeTitle: 声明HTML文档的Doctype
---

## Description
<section id="description">到目前为止，挑战涵盖了特定的HTML元素及其用途。但是，有一些元素可以为页面提供整体结构，并且应该包含在每个HTML文档中。在文档的顶部，您需要告诉浏览器您的页面使用的HTML版本。 HTML是一种不断发展的语言，并定期更新。大多数主流浏览器都支持最新的规范，即HTML5。但是，较旧的网页可能使用该语言的先前版本。您可以通过在第一行添加<code>&lt;!DOCTYPE ...&gt;</code>标记告诉浏览器此信息，其中“ <code>...</code> ”部分是HTML的版本。对于HTML5，您使用<code>&lt;!DOCTYPE html&gt;</code> 。的<code>!</code>和大写<code>DOCTYPE</code>很重要，特别是对于旧版浏览器。 <code>html</code>不区分大小写。接下来，HTML代码的其余部分需要包装在<code>html</code>标记中。开头<code>&lt;html&gt;</code>直接位于<code>&lt;!DOCTYPE html&gt;</code>行下方，结束<code>&lt;/html&gt;</code>位于页面末尾。这是页面结构的一个例子： <blockquote> &lt;！DOCTYPE html&gt; <br> &lt;HTML&gt; <br> &lt;！ - 你的HTML代码在这里 - &gt; <br> &lt;/ HTML&gt; </blockquote></section>

## Instructions
<section id="instructions">在代码编辑器中将HTML5的<code>DOCTYPE</code>标记添加到空白HTML文档的顶部。在它下面，添加包含<code>h1</code>元素的开始和结束<code>html</code>标记。标题可以包含任何文本。 </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 您的代码应包含<code>&lt;!DOCTYPE html&gt;</code>标记。
    testString: 'assert(code.match(/<!DOCTYPE\s+?html\s*?>/gi), "Your code should include a <code>&lt;!DOCTYPE html&gt;</code> tag.");'
  - text: 应该有一个<code>html</code>元素。
    testString: 'assert($("html").length == 1, "There should be one <code>html</code> element.");'
  - text: <code>html</code>标签应该包含一个<code>h1</code>元素。
    testString: 'assert(code.match(/<html>\s*?<h1>\s*?.*?\s*?<\/h1>\s*?<\/html>/gi), "The <code>html</code> tags should wrap around one <code>h1</code> element.");'

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

```js
// solution required
```
</section>
