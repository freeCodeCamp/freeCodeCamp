---
id: 587d778d367417b2b2512aaa
title: CSS를 사용하여 화면 낭독기에서만 요소가 보이도록 만들어보세요.
challengeType: 0
videoUrl: 'https://scrimba.com/c/cJ8QGkhJ'
forumTopicId: 301020
dashedName: make-elements-only-visible-to-a-screen-reader-by-using-custom-css
---

# --description--

지금까지 적용된 모든 접근성 도전 과제에서 CSS를 사용하지 않았다는 것을 알아채셨나요? 이것은 시각적 디자인 측면을 생각해보기 전에 먼저 콘텐츠에서 논리적인 문서 개요와 시맨틱적으로 의미있는 태그를 사용하는 것에 대한 중요성을 보여줍니다.

그러나 CSS는 화면 낭독기 전용으로 의도된 콘텐츠를 화면에서는 보이지 않도록 숨기면서 페이지의 접근성을 향상시킬 수도 있습니다. 차트처럼 시각적으로 제공되는 정보에 대해서 화면 낭독기 사용자는 이를 대체할 수 있는 표와 같은 형식의 정보가 필요한데 이런 경우에 유용하게 쓰일 수 있습니다. CSS는 화면 낭독기 전용 요소를 브라우저의 시각적 영역 밖에 배치하는 데(브라우저 창 안에서는 보이지 않도록) 사용됩니다.

다음은 이를 구현하는 CSS 규칙의 예입니다:

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

**참고:** 다음 CSS 방법들은 동일한 작업을 수행하지 않습니다.

<ul>
<li><code>display: none;</code> 또는 <code>visibility: hidden;</code>은 화면 낭독기 사용자를 포함한 모든 사용자에게 콘텐츠를 숨깁니다.</li>
<li>픽셀 크기를 0으로 만드는 경우, 예를 들어 <code>width: 0px; height: 0px;</code>은 해당 요소를 문서의 흐름에서 제거하므로 화면 낭독기에서 무시됩니다.</li>
</ul>

# --instructions--

캠퍼 캣은 그의 훈련 페이지에 쌓여있는 멋진 막대 차트를 만들었고 시각적으로 장애가 있는 사용자를 위해 데이터를 표로 정리했습니다. 표에는 이미 `sr-only` 클래스가 지정되어 있지만 아직 CSS 규칙이 작성되지 않았습니다. `position` 속성에 `absolute` 값을, `left`에 `-10000px` 값을, 그리고 `width`와 `height`에 각각 `1px` 값을 지정하세요.

# --hints--

코드에서 `sr-only` 클래스의 `position` 속성 값을 `absolute` 로 설정해야 합니다.

```js
assert($('.sr-only').css('position') == 'absolute');
```

코드에서 `sr-only` 클래스의 `left` 속성 값을 `-10000px` 로 설정해야 합니다.

```js
assert($('.sr-only').css('left') == '-10000px');
```

코드에서 `sr-only` 클래스의 `width` 속성 값을 `1`픽셀로 설정해야 합니다.

```js
assert(code.match(/width:\s*?1px/gi));
```

코드에서 `sr-only` 클래스의 `height` 속성 값을 `1`픽셀로 설정해야 합니다.

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
