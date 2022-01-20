---
id: 587d7788367417b2b2512aa2
title: nav の目印でスクリーンリーダーのナビゲーションを容易にする
challengeType: 0
videoUrl: 'https://scrimba.com/c/czVwWSv'
forumTopicId: 301024
dashedName: make-screen-reader-navigation-easier-with-the-nav-landmark
---

# --description--

`nav` 要素もまた、スクリーンリーダーのナビゲーションを容易にするために目印を埋め込む機能を持つ HTML5 アイテムです。 このタグはページ内のメインナビゲーションリンクを囲うためのものです。

ページ下部に繰り返し表示されるサイトリンクがある場合は、さらにこれらを `nav` タグでマークアップする必要はありません。 (次のチャレンジで取り上げる) `footer` を使用するだけで十分です。

# --instructions--

Camper Cat はトレーニングページの上部にナビゲーションリンクを設置しましたが、それを `div` で囲っています。 ページのアクセシビリティが向上させるために、`div` タグを `nav` タグに変更してください。

# --hints--

コードには `nav` タグが 1 つ必要です。

```js
assert($('nav').length == 1);
```

`nav` タグは `ul` とそのリストの項目を囲む必要があります。

```js
assert($('nav').children('ul').length == 1);
```

コードに `div` タグを含めないでください。

```js
assert($('div').length == 0);
```

`nav` 要素には終了タグが必要です。

```js
assert(
  code.match(/<\/nav>/g) &&
    code.match(/<\/nav>/g).length === code.match(/<nav>/g).length
);
```

# --seed--

## --seed-contents--

```html
<body>
  <header>
    <h1>Training with Camper Cat</h1>

    <div>
      <ul>
        <li><a href="#stealth">Stealth &amp; Agility</a></li>
        <li><a href="#combat">Combat</a></li>
        <li><a href="#weapons">Weapons</a></li>
      </ul>
    </div>

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

# --solutions--

```html
<body>
  <header>
    <h1>Training with Camper Cat</h1>

    <nav>
      <ul>
        <li><a href="#stealth">Stealth &amp; Agility</a></li>
        <li><a href="#combat">Combat</a></li>
        <li><a href="#weapons">Weapons</a></li>
      </ul>
    </nav>

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
