---
id: 587d7788367417b2b2512aa2
title: 使用 nav 元素使屏幕閱讀器更容易導航
challengeType: 0
videoUrl: 'https://scrimba.com/c/czVwWSv'
forumTopicId: 301024
dashedName: make-screen-reader-navigation-easier-with-the-nav-landmark
---

# --description--

`nav` 也是一個具有語義化特性的 HTML5 標籤，它可以使屏幕閱讀器快速識別出頁面中的導航信息。 它用於呈現頁面中的主導航鏈接。

對於在多個頁面底部出現的站點鏈接，我們不需要使用 `nav` 標籤。 我們將會在下個挑戰中學習 `footer` 標籤的使用。

# --instructions--

Camper Cat 在他的忍者訓練頁面頂端放置了多個導航鏈接，但這些鏈接都寫在了 `div` 中。 請將 `div` 標籤更改爲 `nav` 標籤，以提升頁面的可訪問性。

# --hints--

應存在一個 `nav` 標籤。

```js
assert($('nav').length == 1);
```

`nav` 標籤應包含 `ul` 標籤及其列表項。

```js
assert($('nav').children('ul').length == 1);
```

不應存在 `div` 標籤。

```js
assert($('div').length == 0);
```

確保 `nav` 標籤是閉合的。

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
