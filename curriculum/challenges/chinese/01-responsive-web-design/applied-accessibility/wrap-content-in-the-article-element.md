---
id: 587d774e367417b2b2512aa0
title: 使用 article 元素包裹文章内容
challengeType: 0
videoUrl: 'https://scrimba.com/c/cPp79S3'
forumTopicId: 301029
dashedName: wrap-content-in-the-article-element
---

# --description--

`article` 是另一个具有语义化特性的 HTML5 新标签。 `article` 是一个分段标签，用于呈现独立及完整的内容。 这个标签适用于博客、论坛帖子或者新闻文章。

确定内容是否可以单独作为一部分，通常是个人的判断，但你可以使用几个简单的测试。 如果删除了所有周围的上下文，这个内容是否仍然有意义？ 类似地，对于文本内容，可否把这些内容放到一个 RSS 推送里？

请牢记，辅助设备依赖组织良好、语义化的标签来获取页面中的信息。

**注意：** `section` 元素也是 HTML5 引入的新元素，其语义与 `article` 略有不同。 `article` 用于独立且完整的内容，而 `section` 用于对与主题相关的内容进行分组。 它们可以根据需要来嵌套使用。 举个例子：如果一本书是一个 `article` 的话，那么每个章节就是 `section`。 当内容组之间没有联系时，我们可以使用 `div`。

`<div>` - 一组内容 `<section>` - 几组相关的内容 `<article>` - 几组独立的内容

# --instructions--

Camper Cat 打算使用 `article` 标签来呈现他的博客页面里的帖子，但是他忘记在顶部的帖子上使用这个标签。 将 `div` 标签改为 `article` 标签。

# --hints--

应有三个 `article` 标签。

```js
assert($('article').length == 3);
```

不应有 `div` 标签。

```js
assert($('div').length == 0);
```

# --seed--

## --seed-contents--

```html
<h1>Deep Thoughts with Master Camper Cat</h1>
<main>
  <div>
    <h2>The Garfield Files: Lasagna as Training Fuel?</h2>
    <p>The internet is littered with varying opinions on nutritional paradigms, from catnip paleo to hairball cleanses. But let's turn our attention to an often overlooked fitness fuel, and examine the protein-carb-NOM trifecta that is lasagna...</p>
  </div>

  <img src="samuraiSwords.jpeg" alt="">

  <article>
    <h2>Defeating your Foe: the Red Dot is Ours!</h2>
    <p>Felines the world over have been waging war on the most persistent of foes. This red nemesis combines both cunning stealth and lightning speed. But chin up, fellow fighters, our time for victory may soon be near...</p>
  </article>

  <img src="samuraiSwords.jpeg" alt="">

  <article>
    <h2>Is Chuck Norris a Cat Person?</h2>
    <p>Chuck Norris is widely regarded as the premier martial artist on the planet, and it's a complete coincidence that anyone who disagrees with this fact mysteriously disappears soon after. But the real question is, is he a cat person?...</p>
  </article>
</main>
```

# --solutions--

```html
<h1>Deep Thoughts with Master Camper Cat</h1>
<main>
  <article>
    <h2>The Garfield Files: Lasagna as Training Fuel?</h2>
    <p>The internet is littered with varying opinions on nutritional paradigms, from catnip paleo to hairball cleanses. But let's turn our attention to an often overlooked fitness fuel, and examine the protein-carb-NOM trifecta that is lasagna...</p>
  </article>

  <img src="samuraiSwords.jpeg" alt="">

  <article>
    <h2>Defeating your Foe: the Red Dot is Ours!</h2>
    <p>Felines the world over have been waging war on the most persistent of foes. This red nemesis combines both cunning stealth and lightning speed. But chin up, fellow fighters, our time for victory may soon be near...</p>
  </article>

  <img src="samuraiSwords.jpeg" alt="">

  <article>
    <h2>Is Chuck Norris a Cat Person?</h2>
    <p>Chuck Norris is widely regarded as the premier martial artist on the planet, and it's a complete coincidence that anyone who disagrees with this fact mysteriously disappears soon after. But the real question is, is he a cat person?...</p>
  </article>
</main>
```
