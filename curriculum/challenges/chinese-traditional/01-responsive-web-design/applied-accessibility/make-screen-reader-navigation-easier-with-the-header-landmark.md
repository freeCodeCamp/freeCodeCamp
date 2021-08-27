---
id: 587d7787367417b2b2512aa1
title: 使用 header 元素來讓屏幕閱讀器更容易進行導航
challengeType: 0
videoUrl: 'https://scrimba.com/c/cB76vtv'
forumTopicId: 301023
dashedName: make-screen-reader-navigation-easier-with-the-header-landmark
---

# --description--

`header` 也是一個具有語義化的、可以提升頁面可訪問性的 HTML5 標籤。 它可以爲父級標籤呈現簡介信息或者導航鏈接，適用於那些在多個頁面頂部重複出現的內容。

與 `main` 類似，`header` 的語義化特性也可以讓輔助工具快速定位到它的內容。

**注意：** `header` 應當在 HTML 文檔的 `body` 標籤內使用。 它與包含頁面標題、元信息的 `head` 標籤不同。

# --instructions--

Camper Cat 正在創作一些訓練忍者的精彩文章，並打算爲這些文章創建一個新的頁面。 請把包含 `h1` 的 `div` 標籤替換爲 `header` 標籤。

# --hints--

應該存在一個 `header` 標籤。

```js
assert($('header').length == 1);
```

`header` 標籤中應包含 `h1`。

```js
assert($('header').children('h1').length == 1);
```

不應存在 `div` 標籤。

```js
assert($('div').length == 0);
```

確保 `header` 標籤是閉合的。

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
