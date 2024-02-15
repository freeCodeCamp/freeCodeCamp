---
id: 587d7788367417b2b2512aa2
title: 화면 낭독기 탐색을 더욱 쉽게 만들어주는 내비게이션 랜드마크
challengeType: 0
videoUrl: 'https://scrimba.com/c/czVwWSv'
forumTopicId: 301024
dashedName: make-screen-reader-navigation-easier-with-the-nav-landmark
---

# --description--

`nav` 요소는 화면 낭독기 내비게이션을 위한 내장된 랜드마크 기능을 가진 또 다른 HTML5 항목입니다. 이 태그는 페이지의 주요 내비게이션 링크를 감싸기 위해 사용됩니다.

페이지 하단에 반복되는 사이트 링크가 있다면, 해당 부분은 `nav` 태그로 표시할 필요가 없습니다. `footer` 태그만 사용하더라도 충분합니다 (다음 도전 과제에서 다룰 예정입니다).

# --instructions--

캠퍼캣은 훈련 페이지 상단에 네비게이션 링크를 포함시켰지만, 이를 `div`로 감쌌습니다. 이 페이지의 접근성을 향상시키기 위해 `div`를 `nav` 태그로 변경하세요.

# --hints--

`nav` 태그는 하나만 있어야 합니다.

```js
assert($('nav').length == 1);
```

`nav` 태그는 `ul`과 그에 따른 리스트 아이템들을 둘러싸야 합니다.

```js
assert($('nav').children('ul').length == 1);
```

`div` 태그는 하나도 없어야 합니다.

```js
assert($('div').length == 0);
```

`nav` 요소에는 닫는 태그가 있어야 합니다.

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
