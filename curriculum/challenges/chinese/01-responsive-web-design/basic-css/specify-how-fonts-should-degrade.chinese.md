---
id: bad87fee1348bd9aedf08808
title: Specify How Fonts Should Degrade
challengeType: 0
videoUrl: ''
localeTitle: 指定字体应如何降级
---

## Description
<section id="description">所有浏览器都有几种默认字体。这些通用字体系列包括<code>monospace</code> ， <code>serif</code>和<code>sans-serif</code>当一个字体不可用时，您可以告诉浏览器“降级”为另一种字体。例如，如果您希望元素使用<code>Helvetica</code>字体，但在<code>Helvetica</code>不可用时降级为<code>sans-serif</code>字体，则将按如下方式指定： <blockquote> p { <br> font-family：Helvetica，sans-serif; <br> } </blockquote>通用字体系列名称不区分大小写。此外，它们不需要引号，因为它们是CSS关键字。 </section>

## Instructions
<section id="instructions">首先，将<code>monospace</code>字体应用于<code>h2</code>元素，以便它现在有两种字体 - <code>Lobster</code>和<code>monospace</code>字体。在上一个挑战中，您使用<code>link</code>标记导入了<code>Lobster</code>字体。现在注释掉谷歌字体导入的<code>Lobster</code>字体（使用之前学过的HTML评论），以便它不再可用。注意你的<code>h2</code>元素如何降级为<code>monospace</code>字体。 <strong>注意</strong> <br>如果您的计算机上安装了Lobster字体，您将看不到降级，因为您的浏览器能够找到该字体。 </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 你的h2元素应该使用字体<code>Lobster</code> 。
    testString: 'assert($("h2").css("font-family").match(/^"?lobster/i), "Your h2 element should use the font <code>Lobster</code>.");'
  - text: 当<code>Lobster</code>不可用时，你的h2元素会降级为<code>monospace</code>字体。
    testString: 'assert(/\s*h2\s*\{\s*font-family\:\s*(\"|")?Lobster(\"|")?,\s*monospace\s*;\s*\}/gi.test(code), "Your h2 element should degrade to the font <code>monospace</code> when <code>Lobster</code> is not available.");'
  - text: 通过在其前面放置<code>&lt;!--</code>来注释您对Google的<code>Lobster</code>字体的调用。
    testString: 'assert(new RegExp("<!--[^fc]", "gi").test(code), "Comment out your call to Google for the <code>Lobster</code> font by putting <code>&#60!--</code> in front of it.");'
  - text: 请务必通过添加<code>--&gt;</code>来关闭您的评论。
    testString: 'assert(new RegExp("[^fc]-->", "gi").test(code), "Be sure to close your comment by adding <code>--&#62;</code>.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<link href="https://fonts.googleapis.com/css?family=Lobster" rel="stylesheet" type="text/css">
<style>
  .red-text {
    color: red;
  }

  h2 {
    font-family: Lobster;
  }

  p {
    font-size: 16px;
    font-family: monospace;
  }
</style>

<h2 class="red-text">CatPhotoApp</h2>
<main>
  <p class="red-text">Click here to view more <a href="#">cat photos</a>.</p>

  <a href="#"><img src="https://bit.ly/fcc-relaxing-cat" alt="A cute orange cat lying on its back."></a>

  <div>
    <p>Things cats love:</p>
    <ul>
      <li>cat nip</li>
      <li>laser pointers</li>
      <li>lasagna</li>
    </ul>
    <p>Top 3 things cats hate:</p>
    <ol>
      <li>flea treatment</li>
      <li>thunder</li>
      <li>other cats</li>
    </ol>
  </div>

  <form action="/submit-cat-photo">
    <label><input type="radio" name="indoor-outdoor" checked> Indoor</label>
    <label><input type="radio" name="indoor-outdoor"> Outdoor</label><br>
    <label><input type="checkbox" name="personality" checked> Loving</label>
    <label><input type="checkbox" name="personality"> Lazy</label>
    <label><input type="checkbox" name="personality"> Energetic</label><br>
    <input type="text" placeholder="cat photo URL" required>
    <button type="submit">Submit</button>
  </form>
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
