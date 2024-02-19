---
id: 587d781b367417b2b2512abe
title: 카드와 비슷한 엘리먼트에 box-shadow 추가하기
challengeType: 0
videoUrl: 'https://scrimba.com/c/cvVZdUd'
forumTopicId: 301031
dashedName: add-a-box-shadow-to-a-card-like-element
---

# --description--

`box-shadow` 속성은 엘리먼트에 하나 이상의 그림자 효과를 적용합니다.

`box-shadow` 속성은 순서대로 아래의 값을 취합니다:

<ul>
  <li><code>offset-x</code> (엘리먼트의 가로 방향으로 얼마나 그림자를 적용할지)</li>
  <li><code>offset-y</code> (엘리먼트의 세로 방향으로 얼마나 그림자를 적용할지)</li>
  <li><code>blur-radius</code></li>
  <li><code>spread-radius</code></li>
  <li><code>color</code></li>
</ul>

`blur-radius`와 `spread-radius` 값은 선택 항목입니다.

콤마를 이용하면 각각의 `box-shadow` 엘리먼트 속성들을 구분할 수 있어 여러 box-shadow를 생성할 수 있습니다.

아래는 거의 투명에 가까운 검정색을 써서 약간의 흐림 효과를 더해 여러 그림자를 만들어보는 CSS 예제입니다.

```css
box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
```

# --instructions--

엘리먼트는 `thumbnail`이라는 id 값을 갖습니다. 이 선택자를 이용해, 위 예시의 CSS 값을 이용해 카드 엘리먼트 위에 `box-shadow`를 적용해보세요.

# --hints--

여러분의 코드는 `thumbnail`이라는 id에 `box-shadow` 속성을 추가해야 합니다.

```js
assert(code.match(/#thumbnail\s*?{\s*?box-shadow/g));
```

주어진 CSS를 이용해 `box-shadow` 값을 사용해야 합니다.

```js
assert(
  code.match(
    /box-shadow:\s*?0\s+?10px\s+?20px\s+?rgba\(\s*?0\s*?,\s*?0\s*?,\s*?0\s*?,\s*?0?\.19\)\s*?,\s*?0\s+?6px\s+?6px\s+?rgba\(\s*?0\s*?,\s*?0\s*?,\s*?0\s*?,\s*?0?\.23\)/gi
  )
);
```

# --seed--

## --seed-contents--

```html
<style>
  h4 {
    text-align: center;
    background-color: rgba(45, 45, 45, 0.1);
    padding: 10px;
    font-size: 27px;
  }
  p {
    text-align: justify;
  }
  .links {
    text-align: left;
    color: black;
  }



  .fullCard {
    width: 245px;
    border: 1px solid #ccc;
    border-radius: 5px;
    margin: 10px 5px;
    padding: 4px;
  }
  .cardContent {
    padding: 10px;
  }
  .cardText {
    margin-bottom: 30px;
  }
</style>
<div class="fullCard" id="thumbnail">
  <div class="cardContent">
    <div class="cardText">
      <h4>Alphabet</h4>
      <hr>
      <p><em>Google was founded by Larry Page and Sergey Brin while they were <u>Ph.D. students</u> at <strong>Stanford University</strong>.</em></p>
    </div>
    <div class="cardLinks">
      <a href="https://en.wikipedia.org/wiki/Larry_Page" target="_blank" class="links">Larry Page</a><br><br>
      <a href="https://en.wikipedia.org/wiki/Sergey_Brin" target="_blank" class="links">Sergey Brin</a>
    </div>
  </div>
</div>
```

# --solutions--

```html
<style>
  h4 {
    text-align: center;
    background-color: rgba(45, 45, 45, 0.1);
    padding: 10px;
    font-size: 27px;
  }
  p {
    text-align: justify;
  }
  .links {
    text-align: left;
    color: black;
  }
  #thumbnail {
    box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
  }
  .fullCard {
    width: 245px;
    border: 1px solid #ccc;
    border-radius: 5px;
    margin: 10px 5px;
    padding: 4px;
  }
  .cardContent {
    padding: 10px;
  }
  .cardText {
    margin-bottom: 30px;
  }
</style>
<div class="fullCard" id="thumbnail">
  <div class="cardContent">
    <div class="cardText">
      <h4>Alphabet</h4>
      <hr>
      <p><em>Google was founded by Larry Page and Sergey Brin while they were <u>Ph.D. students</u> at <strong>Stanford University</strong>.</em></p>
    </div>
    <div class="cardLinks">
      <a href="https://en.wikipedia.org/wiki/Larry_Page" target="_blank" class="links">Larry Page</a><br><br>
      <a href="https://en.wikipedia.org/wiki/Sergey_Brin" target="_blank" class="links">Sergey Brin</a>
    </div>
  </div>
</div>
```
