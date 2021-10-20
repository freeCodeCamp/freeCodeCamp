---
id: 587d778a367417b2b2512aa5
title: 使用 figure 元素提高图表的可访问性
challengeType: 0
videoUrl: 'https://scrimba.com/c/cGJMqtE'
forumTopicId: 301015
dashedName: improve-chart-accessibility-with-the-figure-element
---

# --description--

HTML5 引入了 `figure` 标签以及与之相关的 `figcaption` 标签。 它们一起用于展示可视化信息（如：图片、图表）及其标题。 这样通过语义化对内容进行分组并配以用于解释 `figure` 的文字，可以极大地提升内容的可访问性。

对于图表之类的可视化数据，标题可以为屏幕阅读器用户提供简要的说明。 但是这里有一个难点，如何为屏幕阅读器用户展示那些超出屏幕可视范围（使用 CSS）的表格所表现的图表数据。

举个例子，注意 `figcaption` 包含在 `figure` 标签中，并且可以与其他标签组合使用：

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

Camper Cat 正在努力创建一张条形图，用来显示每周用于隐形、战斗、武器训练的时间。 请帮助完善他的页面，将他用于呈现图表的 `div` 标签修改为 `figure` 标签；将用于呈现图表标题的 `p` 标签改为 `figcaption` 标签。

# --hints--

应存在一个 `figure` 标签。

```js
assert($('figure').length == 1);
```

应存在一个 `figcaption` 标签。

```js
assert($('figcaption').length == 1);
```

不应存在 `div` 标签。

```js
assert($('div').length == 0);
```

不应存在 `p` 标签。

```js
assert($('p').length == 0);
```

`figcaption` 应为 `figure` 的子标签。

```js
assert($('figure').children('figcaption').length == 1);
```

确保 `figure` 元素有结束标签。

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
