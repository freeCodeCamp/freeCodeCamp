---
id: 587d778a367417b2b2512aa5
title: figure 요소를 사용하여 차트의 접근성 높이기
challengeType: 0
videoUrl: 'https://scrimba.com/c/cGJMqtE'
forumTopicId: 301015
dashedName: improve-chart-accessibility-with-the-figure-element
---

# --description--

HTML5에서는 `figure` 요소 그리고 이와 관련된 `figcaption`을 도입했습니다. 이러한 항목들을 함께 사용하여 시각적 표현물(예: 이미지, 다이어그램 또는 차트)과 해당 캡션을 안에 함께 묶습니다. 이러한 요소들을 함께 묶으면 관련된 콘텐츠를 시맨틱적으로 그룹화하고 `figure`를 설명하는 대체 텍스트를 제공함으로써 접근성을 두 배로 향상시킬 수 있습니다.

차트와 같은 데이터 시각화에 쓰이는 캡션은 추세나 결론을 간단히 요약 정리해서 시각 장애를 가진 사용자들에게 도움을 줄 수 있습니다. 또 다른 도전 과제는 스크린 리더 사용자를 위해 표로 나타내어진 차트의 데이터를 CSS 사용하여 화면에는 보이지 않지만 스크린 리더기가 읽을 수 있도록 하는 법을 다룹니다.

여기 예시가 있습니다. `figcaption`이 `figure` 태그 내부에 들어가고 다른 요소들과 결합될 수 있다는 것에 유의하세요.

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

캠퍼 캣은 스텔스, 전투 및 무기 훈련에 매주 얼마나 많은 시간을 할애해야 하는지 보여주는 쌓인 막대 차트를 만들고 있습니다. 캠퍼 캣을 도와 페이지 구조를 더 잘 구성할 수 있도록 `div` 태그를 `figure` 태그로 변경하고, 캡션을 둘러싼 `p` 태그를 `figcaption` 태그로 변경해주세요.

# --hints--

`figure` 태그는 하나만 있어야 합니다.

```js
assert($('figure').length == 1);
```

`figcaption` 태그는 하나만 있어야 합니다.

```js
assert($('figcaption').length == 1);
```

`div` 태그는 하나만 있어야 합니다.

```js
assert($('div').length == 0);
```

`p` 태그는 하나도 없어야 합니다.

```js
assert($('p').length == 0);
```

`figcaption`태그는 `figure`의 자식(child) 태그여야 합니다.

```js
assert($('figure').children('figcaption').length == 1);
```

`figure` 요소는 닫는 태그가 있어야 합니다.

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
