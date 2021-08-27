---
id: 587d778a367417b2b2512aa5
title: 使用 figure 元素提高圖表的可訪問性
challengeType: 0
videoUrl: 'https://scrimba.com/c/cGJMqtE'
forumTopicId: 301015
dashedName: improve-chart-accessibility-with-the-figure-element
---

# --description--

HTML5 引入了 `figure` 標籤以及與之相關的 `figcaption` 標籤。 它們一起用於展示可視化信息（如：圖片、圖表）及其標題。 這樣通過語義化對內容進行分組並配以用於解釋 `figure` 的文字，可以極大地提升內容的可訪問性。

對於圖表之類的可視化數據，標題可以爲屏幕閱讀器用戶提供簡要的說明。 但是這裏有一個難點，如何爲屏幕閱讀器用戶展示那些超出屏幕可視範圍（使用 CSS）的表格所表現的圖表數據。

舉個例子，注意 `figcaption` 包含在 `figure` 標籤中，並且可以與其他標籤組合使用：

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

Camper Cat 正在努力創建一張條形圖，用來顯示每週用於隱形、戰鬥、武器訓練的時間。 請幫助完善他的頁面，將他用於呈現圖表的 `div` 標籤修改爲 `figure` 標籤；將用於呈現圖表標題的 `p` 標籤改爲 `figcaption` 標籤。

# --hints--

應存在一個 `figure` 標籤。

```js
assert($('figure').length == 1);
```

應存在一個 `figcaption` 標籤。

```js
assert($('figcaption').length == 1);
```

不應存在 `div` 標籤。

```js
assert($('div').length == 0);
```

不應存在 `p` 標籤。

```js
assert($('p').length == 0);
```

`figcaption` 應爲 `figure` 的子標籤。

```js
assert($('figure').children('figcaption').length == 1);
```

確保 `figure` 元素有結束標籤。

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
