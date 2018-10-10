---
id: bad87fee1348bd9aedf08801
title: Inform with the Paragraph Element
challengeType: 0
videoUrl: ''
localeTitle: 通知段落元素
---

## Description
<section id="description"> <code>p</code>元素是网站上段落文本的首选元素。 <code>p</code>是“段落”的缩写。你可以创建一个这样的段落元素： <code>&lt;p&gt;I&#39;m ap tag!&lt;/p&gt;</code> </section>

## Instructions
<section id="instructions">在<code>h2</code>元素下面创建一个<code>p</code>元素，并为其指定文本“Hello Paragraph”。 </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 创建一个<code>p</code>元素。
    testString: 'assert(($("p").length > 0), "Create a <code>p</code> element.");'
  - text: 你的<code>p</code>元素应该有文本“Hello Paragraph”。
    testString: 'assert.isTrue((/hello(\s)+paragraph/gi).test($("p").text()), "Your <code>p</code> element should have the text "Hello Paragraph".");'
  - text: 确保您的<code>p</code>元素具有结束标记。
    testString: 'assert(code.match(/<\/p>/g) && code.match(/<\/p>/g).length === code.match(/<p/g).length, "Make sure your <code>p</code> element has a closing tag.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<h1>Hello World</h1>
<h2>CatPhotoApp</h2>

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
