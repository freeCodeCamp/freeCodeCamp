---
id: 587d778a367417b2b2512aa5
title: figure 要素を使ってチャートのアクセシビリティを向上させる
challengeType: 0
videoUrl: 'https://scrimba.com/c/cGJMqtE'
forumTopicId: 301015
dashedName: improve-chart-accessibility-with-the-figure-element
---

# --description--

HTML5 では `figure` 要素と、これに関連した `figcaption` が導入されました。 これらを使うことで、視覚的な表現 (画像、図形、チャートなど) をキャプション (説明文) と一緒に囲むことができます。 これにより、意味的に関連するコンテンツをグループ化し、`figure` を説明する代替テキストを提供することもできるため、アクセシビリティを二重に向上させることができます。

チャートなどのデータビジュアライゼーションでは、視覚障害のあるユーザーのために、傾向や結論を簡潔に記したキャプションを使うことができます。 別のチャレンジで、スクリーンリーダーユーザーのために (CSSを利用して) 表形式のチャートデータを画面外に移動させる方法を学びます。

こちらの例を見てください。`figure` タグの中に `figcaption` があり、他の要素と組み合わせることができます。

```html
<figure>
  <img src="roundhouseDestruction.jpeg" alt="Photo of Camper Cat executing a roundhouse kick">
  <br>
  <figcaption>
    Master Camper Cat demonstrates proper form of a roundhouse kick.
  </figcaption>
</figure>
```

# --instructions--

Camper Cat は、一週間あたりに隠密行動、戦闘、武器のトレーニングへどれだけの時間を費やしたかを示す積み上げ棒グラフの作成に励んでいます。 彼が使用していた `div` タグを `figure` タグに変更し、キャプションを囲んでいる `p` タグを `figcaption` タグに変更することで、彼のページがより良い構造になるよう手伝ってください。

# --hints--

コードには `figure` タグが 1 つ必要です。

```js
assert($('figure').length == 1);
```

コードには `figcaption` タグが 1 つ必要です。

```js
assert($('figcaption').length == 1);
```

コードに `div` タグを含めないでください。

```js
assert($('div').length == 0);
```

コードに `p` タグを含めないでください。

```js
assert($('p').length == 0);
```

`figcaption` は `figure` タグの子要素である必要があります。

```js
assert($('figure').children('figcaption').length == 1);
```

`figure` 要素には終了タグが必要です。

```js
assert(
  code.match(/<\/figure>/g) &&
    code.match(/<\/figure>/g).length === code.match(/<figure>/g).length
);
```

# --seed--

## --seed-contents--

```html
<body>
  <header>
    <h1>Training</h1>
    <nav>
      <ul>
        <li><a href="#stealth">Stealth &amp; Agility</a></li>
        <li><a href="#combat">Combat</a></li>
        <li><a href="#weapons">Weapons</a></li>
      </ul>
    </nav>
  </header>
  <main>
    <section>

      <!-- Only change code below this line -->
      <div>
        <!-- Stacked bar chart will go here -->
        <br>
        <p>Breakdown per week of time to spend training in stealth, combat, and weapons.</p>
      </div>
      <!-- Only change code above this line -->

    </section>
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
  <footer>&copy; 2018 Camper Cat</footer>
</body>
```

# --solutions--

```html
<body>
  <header>
    <h1>Training</h1>
    <nav>
      <ul>
        <li><a href="#stealth">Stealth &amp; Agility</a></li>
        <li><a href="#combat">Combat</a></li>
        <li><a href="#weapons">Weapons</a></li>
      </ul>
    </nav>
  </header>
  <main>
    <section>
      <figure>
        <!-- Stacked bar chart will go here -->
        <br>
        <figcaption>Breakdown per week of time to spend training in stealth, combat, and weapons.</figcaption>
      </figure>
    </section>
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
  <footer>&copy; 2018 Camper Cat</footer>
</body>
```
