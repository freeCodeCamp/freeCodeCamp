---
id: bad87fee1348bd9aecf08801
title: Introduction to HTML5 Elements
challengeType: 0
videoUrl: ''
localeTitle: HTML5元素简介
---

## Description
<section id="description"> HTML5引入了更具描述性的HTML标记。这些包括<code>header</code> ， <code>footer</code> ， <code>nav</code> ， <code>video</code> ， <code>article</code> ， <code>section</code>和其他。这些标签使您的HTML更易于阅读，并且还有助于搜索引擎优化（SEO）和可访问性。 <code>main</code> HTML5标记可帮助搜索引擎和其他开发人员找到您网页的主要内容。 <strong>注意</strong> <br> “应用可访问性”部分介绍了许多新的HTML5标记及其优点。 </section>

## Instructions
<section id="instructions">创建第二个<code>p</code>现有的后件<code>p</code>具有以下的小猫存有文本元素： <code>Purr jump eat the grass rip the couch scratched sunbathe, shed everywhere rip the couch sleep in the sink fluffy fur catnip scratched.</code>用开头和关闭<code>main</code>标签包装段落。 </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 使用Kitty Ipsum文本需要2个<code>p</code>元素。
    testString: 'assert($("p").length > 1, "You need 2 <code>p</code> elements with Kitty Ipsum text.");'
  - text: 确保每个<code>p</code>元素都有一个结束标记。
    testString: 'assert(code.match(/<\/p>/g) && code.match(/<\/p>/g).length === code.match(/<p/g).length, "Make sure each of your <code>p</code> elements has a closing tag.");'
  - text: 你的<code>p</code>元素应该包含所提供的额外<code>kitty ipsum text</code>的前几个单词。
    testString: 'assert.isTrue((/Purr\s+jump\s+eat/gi).test($("p").text()), "Your <code>p</code> element should contain the first few words of the provided additional <code>kitty ipsum text</code>.");'
  - text: 您的代码应该有一个<code>main</code>元素。
    testString: 'assert($("main").length === 1, "Your code should have one <code>main</code> element.");'
  - text: <code>main</code>元素应该有两个段落元素作为子元素。
    testString: 'assert($("main").children("p").length === 2, "The <code>main</code> element should have two paragraph elements as children.");'
  - text: 开头<code>main</code>标记应位于第一个段落标记之前。
    testString: 'assert(code.match(/<main>\s*?<p>/g), "The opening <code>main</code> tag should come before the first paragraph tag.");'
  - text: 结束<code>main</code>标记应该在第二个结束段标记之后。
    testString: 'assert(code.match(/<\/p>\s*?<\/main>/g), "The closing <code>main</code> tag should come after the second closing paragraph tag.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<h2>CatPhotoApp</h2>

<p>Kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff.</p>

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
