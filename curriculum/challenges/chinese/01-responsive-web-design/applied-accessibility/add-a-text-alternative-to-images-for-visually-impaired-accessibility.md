---
id: 587d774c367417b2b2512a9c
challengeType: 0
videoUrl: 'https://scrimba.com/c/cPp7VfD'
forumTopicId: 16628
title: 为视觉障碍用户添加替代图像的文本
---

## Description
<section id='description'>
在其他挑战里你应该已经见到过<code>img</code>标签的<code>alt</code>属性了。<code>alt</code>属性中的文本作为备用文字描述了图片的内容，这可以帮助用户在图片加载失败或者不可见的情况下理解图片内容，也有助于搜索引擎理解图片内容，并将其加入到搜索结果中。例如：
<code>&lt;img src=&quot;importantLogo.jpeg&quot; alt=&quot;Company logo&quot;&gt;</code>
视觉障碍用户无法通过视觉获取信息，而是通过屏幕阅读器将网页内容转换为音频以获取信息。屏幕阅读器可以识别<code>alt</code>属性，朗读其中的内容，来告知用户图片包含的关键信息。
良好的<code>alt</code>文本可以简明扼要地描述图片信息，所以你应该为图片添加<code>alt</code>属性。另外，HTML5 标准也在考虑强制要求对图片添加<code>alt</code>属性。
</section>

## Instructions
<section id='instructions'>

碰巧，Camper Cat 是忍者中写代码最厉害的，他正在建立一个可以分享忍者知识的网站。在这个网站中，他使用一张简介图片来展示技能。给<code>img</code>标签添加一个<code>alt</code>属性，说明 Camper Cat 在学习空手道（图片的<code>src</code>属性没有指向任何链接，因此你可以看到<code>alt</code>属性中的文本）。

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: '你的<code>img</code>标签应该包含一个非空的<code>alt</code>属性。'
    testString: assert($('img').attr('alt'));

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

```html
// solution required
```

</section>
              