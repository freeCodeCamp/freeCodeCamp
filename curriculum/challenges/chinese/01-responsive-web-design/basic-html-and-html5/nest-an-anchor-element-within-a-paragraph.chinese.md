---
id: bad87fee1348bd9aede08817
title: Nest an Anchor Element within a Paragraph
challengeType: 0
videoUrl: ''
localeTitle: 在段落中嵌入锚元素
---

## Description
<section id="description">您可以在其他文本元素中嵌套链接。 <blockquote> &lt;P&gt; <br>这是一个&lt;a target=&quot;_blank&quot; href=&quot;http://freecodecamp.org&quot;&gt; freecodecamp.org &lt;/a&gt;的链接供您关注。 <br> &lt;/ p&gt; </blockquote>让我们分解示例：普通文本包含在<code>p</code>元素中： <br> <code>&lt;p&gt; Here&#39;s a ... for you to follow. &lt;/p&gt;</code>接下来是<code>anchor</code>元素<code>&lt;a&gt;</code> （需要结束标记<code>&lt;/a&gt;</code> ）： <br> <code>&lt;a&gt; ... &lt;/a&gt;</code> <code>target</code>是一个锚标记属性，指定打开链接的位置，值<code>&quot;_blank&quot;</code>指定在新标签中打开链接<code>href</code>是一个锚标记属性，其中包含URL地址链接： <br> <code>&lt;a href=&quot;http://freecodecamp.org&quot;&gt; ... &lt;/a&gt;</code>在名为<code>anchor text</code>的锚元素中，文本<strong>“链接到freecodecamp.org”</strong>将显示一个单击的链接： <br> <code>&lt;a href=&quot; ... &quot;&gt;link to freecodecamp.org&lt;/a&gt;</code>示例的最终输出如下所示： <br><p>这是<a target="_blank" href="http://freecodecamp.org">freecodecamp.org</a>的<a target="_blank" href="http://freecodecamp.org">链接</a>供您关注。 </p></section>

## Instructions
<section id="instructions">现在，鸟巢现有的<code>a</code>新元素内<code>p</code>元（刚过现有的<code>main</code>元素）。新段落的文本应显示“查看更多猫照片”，其中“猫照片”是一个链接，其余文本是纯文本。 </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: '您需要一个链接到“http://freecatphotoapp.com” <code>a</code>元素。'
    testString: 'assert(($("a[href=\"http://freecatphotoapp.com\"]").length > 0 || $("a[href=\"http://www.freecatphotoapp.com\"]").length > 0), "You need an <code>a</code> element that links to "http://freecatphotoapp.com".");'
  - text: 你<code>a</code>元素应该有“猫照片”的锚文本
    testString: 'assert($("a").text().match(/cat\sphotos/gi), "Your <code>a</code> element should have the anchor text of "cat photos"");'
  - text: 创建一个新的<code>p</code>周围的元素<code>a</code>元素。 HTML代码中应至少包含3个<code>p</code>标签。
    testString: 'assert($("p") && $("p").length > 2, "Create a new <code>p</code> element around your <code>a</code> element. There should be at least 3 total <code>p</code> tags in your HTML code.");'
  - text: 您<code>a</code>元素应嵌套在新的<code>p</code>元素中。
    testString: 'assert(($("a[href=\"http://freecatphotoapp.com\"]").parent().is("p") || $("a[href=\"http://www.freecatphotoapp.com\"]").parent().is("p")), "Your <code>a</code> element should be nested within your new <code>p</code> element.");'
  - text: 你的<code>p</code>元素应该有“查看更多”文本（后面有一个空格）。
    testString: 'assert(($("a[href=\"http://freecatphotoapp.com\"]").parent().text().match(/View\smore\s/gi) || $("a[href=\"http://www.freecatphotoapp.com\"]").parent().text().match(/View\smore\s/gi)), "Your <code>p</code> element should have the text "View more " (with a space after it).");'
  - text: 您的<code>a</code>元素<em>不</em>应该有文字“查看更多”。
    testString: 'assert(!$("a").text().match(/View\smore/gi), "Your <code>a</code> element should <em>not</em> have the text "View more".");'
  - text: 确保每个<code>p</code>元素都有一个结束标记。
    testString: 'assert(code.match(/<\/p>/g) && code.match(/<p/g) && code.match(/<\/p>/g).length === code.match(/<p/g).length, "Make sure each of your <code>p</code> elements has a closing tag.");'
  - text: 确保每个的<code>a</code>元素具有一个结束标记。
    testString: 'assert(code.match(/<\/a>/g) && code.match(/<a/g) && code.match(/<\/a>/g).length === code.match(/<a/g).length, "Make sure each of your <code>a</code> elements has a closing tag.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<h2>CatPhotoApp</h2>
<main>

  <a href="http://freecatphotoapp.com" target="_blank">cat photos</a>

  <img src="https://bit.ly/fcc-relaxing-cat" alt="A cute orange cat lying on its back.">

  <p>Kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff.</p>
  <p>Purr jump eat the grass rip the couch scratched sunbathe, shed everywhere rip the couch sleep in the sink fluffy fur catnip scratched.</p>
</main>

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
