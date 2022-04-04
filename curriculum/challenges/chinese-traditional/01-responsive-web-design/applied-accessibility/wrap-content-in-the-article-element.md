---
id: 587d774e367417b2b2512aa0
title: 使用 article 元素包裹文章內容
challengeType: 0
videoUrl: 'https://scrimba.com/c/cPp79S3'
forumTopicId: 301029
dashedName: wrap-content-in-the-article-element
---

# --description--

`article` 是另一個具有語義化特性的 HTML5 新標籤。 `article` 是一個分段標籤，用於呈現獨立及完整的內容。 這個標籤適用於博客、論壇帖子或者新聞文章。

確定內容是否可以單獨作爲一部分，通常是個人的判斷，但你可以使用幾個簡單的測試。 如果刪除了所有周圍的上下文，這個內容是否仍然有意義？ 類似地，對於文本內容，可否把這些內容放到一個 RSS 推送裏？

請牢記，輔助設備依賴組織良好、語義化的標籤來獲取頁面中的信息。

**注意：** `section` 元素也是 HTML5 引入的新元素，其語義與 `article` 略有不同。 `article` 用於獨立且完整的內容，而 `section` 用於對與主題相關的內容進行分組。 它們可以根據需要來嵌套使用。 舉個例子：如果一本書是一個 `article` 的話，那麼每個章節就是 `section`。 當內容組之間沒有聯繫時，我們可以使用 `div`。

`<div>` - 一組內容 `<section>` - 幾組相關的內容 `<article>` - 幾組獨立的內容

# --instructions--

Camper Cat 打算使用 `article` 標籤來呈現他的博客頁面裏的帖子，但是他忘記在頂部的帖子上使用這個標籤。 將 `div` 標籤改爲 `article` 標籤。

# --hints--

應有三個 `article` 標籤。

```js
assert($('article').length == 3);
```

不應有 `div` 標籤。

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
