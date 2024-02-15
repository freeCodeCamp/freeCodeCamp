---
id: 587d7790367417b2b2512ab1
title: 여러 요소들의 키보드 포커스 순서를 tabindex를 활용하여 지정하기
challengeType: 0
videoUrl: 'https://scrimba.com/c/cmzRRcb'
forumTopicId: 301028
dashedName: use-tabindex-to-specify-the-order-of-keyboard-focus-for-several-elements
---

# --description--

`tabindex` 속성은 요소들의 정확한 탭 순서를 지정합니다. 이는 속성값이 1과 같거나 큰 양수로 설정되어있을 때 달성됩니다.

`tabindex="1"`을 설정하면 해당 요소부터 키보드 포커스가 됩니다. 특정 `tabindex` 값(2, 3, 등등) 들의 순서를 지나간 후 기본값과 `tabindex="0"` 항목들로 이동합니다.

탭의 순서가 이렇게 설정되었을 시 HTML 소스를 활용하는 기존 순서는 덮어씌워진다는 점을 기억하세요. 이는 페이지 상단부터 탐색을 시작할 것이라고 예상하는 사용자들을 혼란시킬 수 있습니다. 상황에 따라 이 기술이 필요할 수도 있지만 접근성 측면에서 봤을 때 적용하기 전 주의를 기울여야 합니다.

여기 예시가 있습니다.

```html
<div tabindex="1">I get keyboard focus, and I get it first!</div>
```

```html
<div tabindex="2">I get keyboard focus, and I get it second!</div>
```

# --instructions--

캠퍼 캣은 인상적인 명언 페이지에 검색 필드를 CSS로 우측 최상단에 배치하고 싶어합니다. 검색 `input`과 제출 `input` 폼 제어가 탭 순서에서 최우선이어야 합니다. `1`로 설정된 `tabindex` 속성을 `search` `input`에 추가하고 `2`로 설정된 `tabindex` 속성을 `submit` `input`에 추가합니다.

또 다른 주의할 사항은 일부 브라우저들은 요소를 클릭했을 때 탭 순서의 중간에 배치될 수 있다는 점입니다. 탭 순서의 처음에서 항상 시작하게 해주는 요소가 페이지에 추가되었습니다.

# --hints--

`tabindex` 속성을 `search` `input` 태그에 추가해야 합니다.

```js
assert($('#search').attr('tabindex'));
```

`tabindex` 속성을 `submit` `input` 태그에 추가해야 합니다.

```js
assert($('#submit').attr('tabindex'));
```

`search` `input` 태그에 있는 `tabindex` 속성을 1로 설정해야 합니다.

```js
assert($('#search').attr('tabindex') == '1');
```

`submit` `input` 태그에 있는 `tabindex` 속성을 2로 설정해야 합니다.

```js
assert($('#submit').attr('tabindex') == '2');
```

# --seed--

## --seed-contents--

```html
<body>
  <div tabindex="1" class="overlay"></div>
  <header>
    <h1>Even Deeper Thoughts with Master Camper Cat</h1>
    <nav>
      <ul>
        <li><a href="">Home</a></li>
        <li><a href="">Blog</a></li>
        <li><a href="">Training</a></li>
      </ul>
    </nav>
  </header>
  <form>
    <label for="search">Search:</label>


    <input type="search" name="search" id="search">
    <input type="submit" name="submit" value="Submit" id="submit">


  </form>
  <h2>Inspirational Quotes</h2>
  <blockquote>
    <p>&ldquo;There's no Theory of Evolution, just a list of creatures I've allowed to live.&rdquo;<br>
    - Chuck Norris</p>
  </blockquote>
  <blockquote>
    <p>&ldquo;Wise men say forgiveness is divine, but never pay full price for late pizza.&rdquo;<br>
    - TMNT</p>
  </blockquote>
  <footer>&copy; 2018 Camper Cat</footer>
</body>
<style>
  body {
    height: 100%;
    margin: 0 !important;
    padding: 8px;
  }
  .overlay {
    margin: -8px;
    position: absolute;
    width: 100%;
    height: 100%;
  }
</style>
```

# --solutions--

```html
<body>
  <div tabindex="1" class="overlay"></div>
  <header>
    <h1>Even Deeper Thoughts with Master Camper Cat</h1>
    <nav>
      <ul>
        <li><a href="">Home</a></li>
        <li><a href="">Blog</a></li>
        <li><a href="">Training</a></li>
      </ul>
    </nav>
  </header>
  <form>
    <label for="search">Search:</label>


    <input tabindex="1" type="search" name="search" id="search">
    <input tabindex="2" type="submit" name="submit" value="Submit" id="submit">


  </form>
  <h2>Inspirational Quotes</h2>
  <blockquote>
    <p>&ldquo;There's no Theory of Evolution, just a list of creatures I've allowed to live.&rdquo;<br>
    - Chuck Norris</p>
  </blockquote>
  <blockquote>
    <p>&ldquo;Wise men say forgiveness is divine, but never pay full price for late pizza.&rdquo;<br>
    - TMNT</p>
  </blockquote>
  <footer>&copy; 2018 Camper Cat</footer>
</body>
<style>
  body {
    height: 100%;
    margin: 0 !important;
    padding: 8px;
  }
  .overlay {
    margin: -8px;
    position: absolute;
    width: 100%;
    height: 100%;
  }
</style>
```
