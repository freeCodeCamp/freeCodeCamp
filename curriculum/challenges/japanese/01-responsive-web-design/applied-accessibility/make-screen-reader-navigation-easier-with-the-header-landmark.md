---
id: 587d7787367417b2b2512aa1
title: header の目印でスクリーンリーダーのナビゲーションを容易にする
challengeType: 0
videoUrl: 'https://scrimba.com/c/cB76vtv'
forumTopicId: 301023
dashedName: make-screen-reader-navigation-easier-with-the-header-landmark
---

# --description--

次の HTML5 要素は、セマンティックな意味を加えてアクセシビリティを向上させる `header` タグです。 これは導入的な情報や、親タグ内のコンテンツのナビゲーションリンクを囲むために使われることが多く、複数ページのトップに繰り返し表示するようなコンテンツを囲むのに役立ちます。

`header` は `main`でも取り上げた目印を埋め込む機能を共有しており、支援技術がそのコンテンツに素早く移動できるようにします。

**注:** `header` は HTML ドキュメントの `body` タグ内で使用するためのものです。 これはページのタイトルやメタ情報などを含む `head` 要素とは異なるものです。

# --instructions--

Camper Cat は忍者の訓練についてのすばらしい記事を書いていて、そのためのページをサイトに加えたいと思っています。 現在 `h1` を囲んでいる先頭の `div` を `header` タグへ変更してください。

# --hints--

コードには `header` タグが 1 つ必要です。

```js
assert($('header').length == 1);
```

`header` タグは `h1` 要素を囲む必要があります。

```js
assert($('header').children('h1').length == 1);
```

コードに `div` タグを含めないでください。

```js
assert($('div').length == 0);
```

`header` 要素には終了タグが必要です。

```js
assert(
  code.match(/<\/header>/g) &&
    code.match(/<\/header>/g).length === code.match(/<header>/g).length
);
```

# --seed--

## --seed-contents--

```html
<body>

  <div>
    <h1>Training with Camper Cat</h1>
  </div>


  <main>
    <section id="stealth">
      <h2>Stealth &amp; Agility Training</h2>
      <article><h3>Climb foliage quickly using a minimum spanning tree approach</h3></article>
      <article><h3>No training is NP-complete without parkour</h3></article>
    </section>
    <section id="combat">
      <h2>Combat Training</h2>
      <article><h3>Dispatch multiple enemies with multithreaded tactics</h3></article>
      <article><h3>Goodbye world: 5 proven ways to knock out an opponent</h3></article>
    </section>
    <section id="weapons">
      <h2>Weapons Training</h2>
      <article><h3>Swords: the best tool to literally divide and conquer</h3></article>
      <article><h3>Breadth-first or depth-first in multi-weapon training?</h3></article>
    </section>
  </main>
</body>
```

# --solutions--

```html
<body>

  <header>
    <h1>Training with Camper Cat</h1>
  </header>


  <main>
    <section id="stealth">
      <h2>Stealth &amp; Agility Training</h2>
      <article><h3>Climb foliage quickly using a minimum spanning tree approach</h3></article>
      <article><h3>No training is NP-complete without parkour</h3></article>
    </section>
    <section id="combat">
      <h2>Combat Training</h2>
      <article><h3>Dispatch multiple enemies with multithreaded tactics</h3></article>
      <article><h3>Goodbye world: 5 proven ways to knock out an opponent</h3></article>
    </section>
    <section id="weapons">
      <h2>Weapons Training</h2>
      <article><h3>Swords: the best tool to literally divide and conquer</h3></article>
      <article><h3>Breadth-first or depth-first in multi-weapon training?</h3></article>
    </section>
  </main>
</body>
```
