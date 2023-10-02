---
id: 587d774c367417b2b2512a9d
title: 了解 Alt 文本留空的情景
challengeType: 0
videoUrl: 'https://scrimba.com/c/cM9P4t2'
forumTopicId: 301019
dashedName: know-when-alt-text-should-be-left-blank
---

# --description--

在上一个挑战中，我们了解到 `img` 标签必须有一个 `alt` 属性。 但是，有时图像通过它们的描述文本被归类，或者只用于装饰。 在这些情况下， `alt` 文本可能是多余的或没有必要的。

在图片已经有了文字说明，或者仅仅为了美化页面的情况下，`img` 仍然需要一个 `alt` 属性，但可以设置为空字符串。 例如：

```html
<img src="visualDecoration.jpeg" alt="">
```

比如，背景图片通常起装饰作用。 但这些图片通常都是通过 CSS 规则而非 HTML 引入的，因此屏幕阅读器毋需读取。

**注意：** 对于有标题的图片，依然需要添加 `alt` 文本，因为这样有助于搜索引擎记录图片内容。

# --instructions--

Camper Cat 已经大体写好了博客页面。 他打算在他的两篇文章之间添加一个武士剑装饰图片，作为两篇文章之间的分割线。 为 `img` 标签添加 `alt` 属性，把它的属性值设为空 （注意：这里图片的 `src` 属性提供的链接是无效的，因此页面上不会显示任何武士刀的图片，不用担心）。

# --hints--

`img` 标签应具有 `alt` 属性。

```js
assert(!($('img').attr('alt') == undefined));
```

`alt` 的属性值应为空。

```js
assert($('img').attr('alt') == '');
```

# --seed--

## --seed-contents--

```html
<h1>Deep Thoughts with Master Camper Cat</h1>
<article>
  <h2>Defeating your Foe: the Red Dot is Ours!</h2>
  <p>To Come...</p>
</article>

<img src="samuraiSwords.jpeg">

<article>
  <h2>Is Chuck Norris a Cat Person?</h2>
  <p>To Come...</p>
</article>
```

# --solutions--

```html
<h1>Deep Thoughts with Master Camper Cat</h1>
<article>
  <h2>Defeating your Foe: the Red Dot is Ours!</h2>
  <p>To Come...</p>
</article>

<img src="samuraiSwords.jpeg" alt="">

<article>
  <h2>Is Chuck Norris a Cat Person?</h2>
  <p>To Come...</p>
</article>
```
