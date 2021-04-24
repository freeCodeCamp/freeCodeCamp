---
id: 587d774c367417b2b2512a9c
title: 为视觉障碍用户添加替代图像的文本
challengeType: 0
videoUrl: 'https://scrimba.com/c/cPp7VfD'
forumTopicId: 16628
dashedName: add-a-text-alternative-to-images-for-visually-impaired-accessibility
---

# --description--

在其他挑战里你应该已经见到过 `img` 标签的 `alt` 属性了。 `alt` 属性中的文本来描述图片内容，作为备用文字。 `alt` 属性可以帮助用户在图片加载失败或者不可见的情况下理解图片内容， 搜索引擎也通过它来理解图片内容，并将其加入到搜索结果中。 例如：

```html
<img src="importantLogo.jpeg" alt="Company logo">
```

视觉障碍用户无法通过视觉获取信息，而是通过屏幕阅读器将网页内容转换为音频以获取信息。 他们无法通过直观的呈现理解信息。 屏幕阅读器可以识别 `alt` 属性，朗读其中的内容，来告知用户图片包含的关键信息。

`alt` 文本可以为屏幕阅读器提供图片的描述信息， 所以你应始终为图片添加 `alt` 属性。 另外，根据最新的 HTML5 标准，为图片添加这个属性是必须的。

# --instructions--

碰巧，Camper Cat 是忍者中写代码最厉害的，他正在建立一个可以分享忍者知识的网站。 他打算使用的个人资料图片可以展示他的技能，且应得到所有网站访问者的赞赏。 请给 `img` 标签添加一个 `alt` 属性，说明 Camper Cat 正在学习空手道 （图片的 `src` 属性指向的是一个不存在的文件，因此你会看到 `alt` 属性中的文本出现在页面上）

# --hints--

`img` 标签应该包含一个非空的 `alt` 属性。

```js
assert($('img').attr('alt'));
```

# --seed--

## --seed-contents--

```html
<img src="doingKarateWow.jpeg">
```

# --solutions--

```html
<img src="doingKarateWow.jpeg" alt="Someone doing karate">
```
