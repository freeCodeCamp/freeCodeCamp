---
id: 587d7788367417b2b2512aa3
title: 화면 낭독기 탐색을 더욱 쉽게 만들어주는 푸터 랜드마크
challengeType: 0
videoUrl: 'https://scrimba.com/c/crVrDh8'
forumTopicId: 301022
dashedName: make-screen-reader-navigation-easier-with-the-footer-landmark
---

# --description--

`header`와 `nav` 요소와 마찬가지로, `footer` 요소 또한 보조 장치가 빠르게 탐색할 수 있도록 내장된 랜드마크 기능을 가지고 있습니다. `footer` 요소는 주로 페이지 하단에 위치하며 대개 저작권 정보나 관련 문서 링크를 포함하는 데 사용됩니다.

# --instructions--

캠퍼 캣은 훈련을 위한 웹 페이지를 만들고 있습니다. 페이지 하단의 저작권 정보를 감싸고 있는 `div` 를`footer` 요소로 바꿔주세요.

# --hints--

코드에는 `footer` 태그가 하나만 있어야 합니다.

```js
assert($('footer').length == 1);
```

코드에는 `div` 태그가 하나도 없어야 합니다.

```js
assert($('div').length == 0);
```

코드에는 여는 `footer` 태그와 닫는 `footer` 태그가 하나씩 있어야 합니다.

```js
assert(code.match(/<footer>\s*&copy; 2018 Camper Cat\s*<\/footer>/g));
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


  <div>&copy; 2018 Camper Cat</div>


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
