---
id: 587d774c367417b2b2512a9c
title: Add a Text Alternative to Images for Visually Impaired Accessibility
challengeType: 0
videoUrl: ''
guideUrl: 'https://chinese.freecodecamp.org/guide/certificates/add-alt-text-to-an-image-for-accessibility'
localeTitle: 为图像添加图像无法显示时的替代文本
---

## Description
<section id="description">很可能你已经在其他挑战中看到了<code>img</code>标签的<code>alt</code>属性。 <code>Alt</code>文本描述图像的内容并提供替代文本。这样即使在图像无法加载或用户无法看到图像的情况下，用户还是可以看到关于图像的一些信息。它也被搜索引擎用来理解图像所包含的内容，以便将图像内容包含在搜索结果中。这是一个例子： <code>&lt;img src=&quot;importantLogo.jpeg&quot; alt=&quot;Company logo&quot;&gt;</code>有视觉障碍的人需要依靠屏幕阅读器将网络内容转换为音频。如果仅以视觉方式呈现，他们将无法获取图像的信息。对于图像，屏幕阅读器可以访问<code>alt</code>属性并读取其内容以提供关键信息。好的<code>alt</code>文字虽然简短但具有描述性，可以简要地传达图像的含义。您应该始终在图像上包含<code>alt</code>属性。根据HTML5规范，这是一个必需包含在图像内的属性。 </section>

## Instructions
<section id="instructions"> Camper Cat不仅是一位编码忍者，还是一位真实的忍者。他正在建立一个网站来分享他的知识。他想要使用的个人资料图片展示了他的技能。所有访问该网站的访客都应当能够获取这些信息。在<code>img</code>标签中添加<code>alt</code>属性，来说明Camper Cat掌握了空手道。 （图像<code>src</code>没有链接到真实文件，因此您应该看到<code>alt</code>包含的替代文本。） </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 你的<code>img</code>标签应该有一个非空的<code>alt</code>属性。
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
