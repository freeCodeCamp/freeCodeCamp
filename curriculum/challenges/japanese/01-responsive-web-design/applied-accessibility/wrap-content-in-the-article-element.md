---
id: 587d774e367417b2b2512aa0
title: コンテンツを article 要素でラップする
challengeType: 0
videoUrl: 'https://scrimba.com/c/cPp79S3'
forumTopicId: 301029
dashedName: wrap-content-in-the-article-element
---

# --description--

`article` は、マークアップにセマンティックな意味を追加する新しい HTML5 要素の 1 つです。 `article` はセクショニング (区分け) 要素であり、独立した自己完結型コンテンツをラップするために使用されます。 このタグはブログのエントリ、フォーラムの投稿、ニュース記事でうまく機能します。

コンテンツが単独で成り立つかどうかは、通常は主観的に判断するしかありませんが、いくつかの簡単なテストを行うこともできます。 全ての周辺コンテキストを削除しても、そのコンテンツはまだ意味を成すでしょうか？ 同様に、テキストの場合、それが RSS フィードに流れてきた場合でも意味を成す内容でしょうか。

支援技術を使っている人々は、あなたのサイトをより深く理解するために、系統だって整理された意味的に重要なマークアップに頼っていることを忘れないでください。

**注:** `section` 要素は HTML5 で新たに登場したもので、`article` と少し意味が異なります。 `article` は独立したコンテンツ用で、`section` はテーマに関連するコンテンツをグループ化するためのものです。 必要に応じて、これらはお互いの要素の中で使用することもできます。 例えば、もし本が `article` だとすると、各章は `section` になります。 コンテンツグループ間に関連性がない場合は `div` を使用します。

`<div>` - コンテンツをグループ化する `<section>` - 関連があるコンテンツをグループ化する `<article>` - 独立した、自己完結型コンテンツをグループ化する

# --instructions--

Camper Cat は `article` タグを使ってブログページの投稿を囲いましたが、一番上の投稿にはそれを使うのを忘れてしまいました。 `div` タグを変更し、代わりに `article` タグを使用してください。

# --hints--

コードには `article` タグが3つ必要です。

```js
assert($('article').length == 3);
```

コードに `div` タグを含めないでください。

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
