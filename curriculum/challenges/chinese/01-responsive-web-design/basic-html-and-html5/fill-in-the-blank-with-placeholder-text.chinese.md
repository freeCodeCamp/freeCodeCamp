---
id: bad87fee1348bd9aedf08833
title: Fill in the Blank with Placeholder Text
challengeType: 0
videoUrl: ''
localeTitle: 使用占位符文本填充空白
---

## Description
<section id="description"> Web开发人员传统上使用<code>lorem ipsum text</code>作为占位符文本。 “lorem ipsum”文字是从古罗马的西塞罗（Cicero of Ancient Rome）的着名文章中随机剪下来的。自16世纪以来，Lorem ipsum文本被排版人员用作占位符文本，这种传统在网上继续存在。好吧，5个世纪足够长了。由于我们正在构建CatPhotoApp，因此我们使用名为<code>kitty ipsum text</code> 。 </section>

## Instructions
<section id="instructions">用这个kitty ipsum文本的前几个单词替换你的<code>p</code>元素里面的文字： <code>Kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff.</code> </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 你的<code>p</code>元素应该包含所提供的<code>kitty ipsum text</code>的前几个单词。
    testString: 'assert.isTrue((/Kitty(\s)+ipsum/gi).test($("p").text()), "Your <code>p</code> element should contain the first few words of the provided <code>kitty ipsum text</code>.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<h1>Hello World</h1>

<h2>CatPhotoApp</h2>

<p>Hello Paragraph</p>

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
