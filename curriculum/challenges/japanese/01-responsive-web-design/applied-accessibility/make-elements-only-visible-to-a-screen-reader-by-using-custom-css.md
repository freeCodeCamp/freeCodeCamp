---
id: 587d778d367417b2b2512aaa
title: カスタム CSS でスクリーンリーダーにのみ認識される要素を作成する
challengeType: 0
videoUrl: 'https://scrimba.com/c/cJ8QGkhJ'
forumTopicId: 301020
dashedName: make-elements-only-visible-to-a-screen-reader-by-using-custom-css
---

# --description--

応用アクセシビリティでのこれまでチャレンジでは、CSS を一切使用していないことに気付きましたか？ これは視覚的な要素を導入するより前に、論理的なドキュメントの概要とコンテンツの周りを意味のあるタグで囲むことの方が重要であることを示しています。

一方で、スクリーンリーダー専用のコンテンツを視覚的に隠したい場合には、CSS のマジックによってページのアクセシビリティを向上させることが可能です。 この状況は、情報が視覚的なフォーマット (チャートなど) である場合に発生します。スクリーンリーダーユーザーがデータにアクセスするためには別の表現 (表など) が必要になります。 CSS は、スクリーンリーダー専用の要素をブラウザ画面の可視エリア以外の場所に配置するために使用されます。

以下はこれを達成するための CSS ルールの例です。

```css
.sr-only {
  position: absolute;
  left: -10000px;
  width: 1px;
  height: 1px;
  top: auto;
  overflow: hidden;
}
```

**注:** 以下の CSS によるアプローチでは同じことができません。

<ul>
<li><code>display: none;</code> または <code>visibility: hidden;</code> はスクリーンリーダーユーザーを含むすべての人からコンテンツを非表示にします。</li>
<li><code>width: 0px; height: 0px;</code> といったピクセルサイズが0の値は、ドキュメントの構成からその要素を取り除くため、スクリーンリーダーもこれを無視することを意味します。</li>
</ul>

# --instructions--

Camper Cat は、トレーニングページ用の非常にクールな積み上げ棒グラフを作成し、視覚障害のあるユーザー用の表データも用意しました。 テーブルには既に `sr-only` クラスがありますが、まだ CSS ルールは入力されていません。 `position` に `absolute` の値、`left` に `-10000px` の値、`width` と `height` 両方に `1px` の値を設定してください。

# --hints--

`sr-only` クラスの `position` プロパティに値 `absolute` を設定する必要があります。

```js
assert($('.sr-only').css('position') == 'absolute');
```

`sr-only` クラスの `left` プロパティに値 `-10000px` を設定する必要があります。

```js
assert($('.sr-only').css('left') == '-10000px');
```

`sr-only` クラスの `width` プロパティに値 `1` ピクセルを設定する必要があります。

```js
assert(code.match(/width:\s*?1px/gi));
```

`sr-only` クラスの `height` プロパティに値 `1` ピクセルを設定する必要があります。

```js
assert(code.match(/height:\s*?1px/gi));
```

# --seed--

## --seed-contents--

```html
<head>
  <style>
  .sr-only {
    position: ;
    left: ;
    width: ;
    height: ;
    top: auto;
    overflow: hidden;
  }
  </style>
</head>
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
  <section>
    <h2>Master Camper Cat's Beginner Three Week Training Program</h2>
    <figure>
      <!-- Stacked bar chart of weekly training -->
      <p>[Stacked bar chart]</p>
      <br />
      <figcaption>Breakdown per week of time to spend training in stealth, combat, and weapons.</figcaption>
    </figure>
    <table class="sr-only">
      <caption>Hours of Weekly Training in Stealth, Combat, and Weapons</caption>
      <thead>
        <tr>
          <th></th>
          <th scope="col">Stealth &amp; Agility</th>
          <th scope="col">Combat</th>
          <th scope="col">Weapons</th>
          <th scope="col">Total</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">Week One</th>
          <td>3</td>
          <td>5</td>
          <td>2</td>
          <td>10</td>
        </tr>
        <tr>
          <th scope="row">Week Two</th>
          <td>4</td>
          <td>5</td>
          <td>3</td>
          <td>12</td>
        </tr>
        <tr>
          <th scope="row">Week Three</th>
          <td>4</td>
          <td>6</td>
          <td>3</td>
          <td>13</td>
        </tr>
      </tbody>
    </table>
  </section>
  <section id="stealth">
    <h2>Stealth &amp; Agility Training</h2>
    <article><h3>Climb foliage quickly using a minimum spanning tree approach</h3></article>
    <article><h3>No training is NP-complete without parkour</h3></article>
  </section>
  <section id="combat">
    <h2>Combat Training</h2>
    <article><h3>Dispatch multiple enemies with multithreaded tactics</h3></article>
    <article><h3>Goodbye, world: 5 proven ways to knock out an opponent</h3></article>
  </section>
  <section id="weapons">
    <h2>Weapons Training</h2>
    <article><h3>Swords: the best tool to literally divide and conquer</h3></article>
    <article><h3>Breadth-first or depth-first in multi-weapon training?</h3></article>
  </section>
  <footer>&copy; 2018 Camper Cat</footer>
</body>
```

# --solutions--

```html
<head>
  <style>
  .sr-only {
    position: absolute;
    left: -10000px;
    width: 1px;
    height: 1px;
    top: auto;
    overflow: hidden;
  }
  </style>
</head>
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
  <section>
    <h2>Master Camper Cat's Beginner Three Week Training Program</h2>
    <figure>
      <!-- Stacked bar chart of weekly training -->
      <p>[Stacked bar chart]</p>
      <br />
      <figcaption>Breakdown per week of time to spend training in stealth, combat, and weapons.</figcaption>
    </figure>
    <table class="sr-only">
      <caption>Hours of Weekly Training in Stealth, Combat, and Weapons</caption>
      <thead>
        <tr>
          <th></th>
          <th scope="col">Stealth &amp; Agility</th>
          <th scope="col">Combat</th>
          <th scope="col">Weapons</th>
          <th scope="col">Total</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">Week One</th>
          <td>3</td>
          <td>5</td>
          <td>2</td>
          <td>10</td>
        </tr>
        <tr>
          <th scope="row">Week Two</th>
          <td>4</td>
          <td>5</td>
          <td>3</td>
          <td>12</td>
        </tr>
        <tr>
          <th scope="row">Week Three</th>
          <td>4</td>
          <td>6</td>
          <td>3</td>
          <td>13</td>
        </tr>
      </tbody>
    </table>
  </section>
  <section id="stealth">
    <h2>Stealth &amp; Agility Training</h2>
    <article><h3>Climb foliage quickly using a minimum spanning tree approach</h3></article>
    <article><h3>No training is NP-complete without parkour</h3></article>
  </section>
  <section id="combat">
    <h2>Combat Training</h2>
    <article><h3>Dispatch multiple enemies with multithreaded tactics</h3></article>
    <article><h3>Goodbye, world: 5 proven ways to knock out an opponent</h3></article>
  </section>
  <section id="weapons">
    <h2>Weapons Training</h2>
    <article><h3>Swords: the best tool to literally divide and conquer</h3></article>
    <article><h3>Breadth-first or depth-first in multi-weapon training?</h3></article>
  </section>
  <footer>&copy; 2018 Camper Cat</footer>
</body>
```
