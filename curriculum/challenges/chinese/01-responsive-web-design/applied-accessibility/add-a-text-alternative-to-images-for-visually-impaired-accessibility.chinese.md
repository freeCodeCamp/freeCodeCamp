---
id: 587d774c367417b2b2512a9c
title: Add a Text Alternative to Images for Visually Impaired Accessibility
challengeType: 0
videoUrl: ''
guideUrl: 'https://chinese.freecodecamp.org/guide/certificates/add-alt-text-to-an-image-for-accessibility'
localeTitle: 为视力受损的辅助功能添加图像替代文字
---

## Description
<section id="description">很可能你在其他挑战中看到了<code>img</code>标签的<code>alt</code>属性。 <code>Alt</code>文本描述图像的内容并提供文本替代。这有助于在图像无法加载或用户无法看到的情况下。它也被搜索引擎用来理解图像包含的内容，以便将其包含在搜索结果中。这是一个例子： <code>&lt;img src=&quot;importantLogo.jpeg&quot; alt=&quot;Company logo&quot;&gt;</code>有视觉障碍的人依靠屏幕阅读器将网络内容转换为音频界面。如果仅以视觉方式呈现，他们将无法获取信息。对于图像，屏幕阅读器可以访问<code>alt</code>属性并读取其内容以提供关键信息。好的<code>alt</code>文字虽然简短但具有描述性，并且旨在简要地传达图像的含义。您应该始终在图像上包含<code>alt</code>属性。根据HTML5规范，现在认为这是强制性的。 </section>

## Instructions
<section id="instructions"> Camper Cat恰好是编码忍者和实际忍者，正在建立一个网站来分享他的知识。他想要使用的个人资料图片显示了他的技能，所有网站访问者都应该欣赏。在<code>img</code>标签中添加<code>alt</code>属性，这解释了Camper Cat正在做空手道。 （图像<code>src</code>没有链接到实际文件，因此您应该在显示中看到<code>alt</code>文本。） </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 你的<code>img</code>标签应该有一个<code>alt</code>属性，它不应该是空的。
    testString: 'assert($("img").attr("alt"), "Your <code>img</code> tag should have an <code>alt</code> attribute, and it should not be empty.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<img src="doingKarateWow.jpeg">

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
