---
id: 587d774e367417b2b2512aa0
title: 使用 article 元素包裹文章内容
challengeType: 0
videoUrl: 'https://scrimba.com/c/cPp79S3'
forumTopicId: 301029
dashedName: wrap-content-in-the-article-element
---

# --description--

`article` 是另一个具有语义化特性的 HTML5 新标签。`article` 是一个用于表示独立且可复用结构的标签，用于呈现独立及完整的内容。这个标签适用于播客文章、论坛帖子或者新闻文章。

有些技巧可以用来判断内容是否独立，像是如果内容脱离了上下文，这些内容是否仍然有意义？类似地，对于文本内容，可否把这些内容放到 RSS 推送里？如果回答是肯定的，那我们就可以认为这些内容是独立的。

请牢记，辅助设备依赖组织良好、语义化的标签来获取页面中的信息。

**请注意 `section` 和 `div` 的区别：**  
`section` 也是一个 HTML5 新标签，它与 `article` 标签的语义含义略有不同。`article` 用于独立且完整的内容，而 `section` 用于对与主题相关的内容进行分组。它们可以根据需要来嵌套使用。举个例子：如果一本书是一个 `article` 的话，那么每个章节就是 `section`。当内容组之间没有联系时，我们可以使用 `div`。

```html
<div> - groups content
<section> - groups related content
<article> - groups independent, self-contained content
```

# --instructions--

Camper Cat 打算使用 `article` 标签来呈现他的博客页面里的帖子，但是他还没有加到最上面的帖子上。请使用 `article` 标签来代替 `div` 标签。

# --hints--

应存在 3 个 `article` 标签。

```js
assert($('article').length == 3);
```

不应存在 `div` 标签。

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
    <p>Chuck Norris is widely regarded as the premier martial artist on the planet, and it's a complete coincidence anyone who disagrees with this fact mysteriously disappears soon after. But the real question is, is he a cat person?...</p>
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
    <p>Chuck Norris is widely regarded as the premier martial artist on the planet, and it's a complete coincidence anyone who disagrees with this fact mysteriously disappears soon after. But the real question is, is he a cat person?...</p>
  </article>
</main>
```
