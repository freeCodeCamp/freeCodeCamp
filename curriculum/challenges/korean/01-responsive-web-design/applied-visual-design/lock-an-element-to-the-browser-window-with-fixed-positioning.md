---
id: 587d781e367417b2b2512acc
title: 브라우저 창에 요소를 고정 위치로 설정하기
challengeType: 0
videoUrl: 'https://scrimba.com/c/c2MDNUR'
forumTopicId: 301061
dashedName: lock-an-element-to-the-browser-window-with-fixed-positioning
---

# --description--

CSS가 제공하는 다음 레이아웃은 `fixed` 위치입니다. 이는 브라우저 창에 대해 요소를 상대적으로 고정하는 절대 위치 지정 유형입니다. 절대 위치 지정과 유사하게 CSS 오프셋 속성과 함께 사용되며 문서의 정상 흐름에서 요소를 제거합니다. 다른 항목들은 이제 해당 요소가 어디에 위치한지 "인식"하지 못하게 되며, 이로 인해 다른 곳에서 일부 레이아웃 조정이 필요할 수 있습니다.

`fixed`와 `absolute` 위치의 주요 차이점 중 하나는 fixed 위치를 가진 요소는 사용자가 스크롤할 때 움직이지 않는다는 것입니다.

# --instructions--

코드에서 네비게이션 바는 `navbar`라는 id로 지정되어 있습니다. 이 네비게이션바의 `position`을 `fixed`로 변경하고, `top`에서 0 픽셀, `left`에서 0 픽셀로 오프셋하십시오. 코드를 작성한 후 미리보기 창을 스크롤하면서 내비게이션이 제 위치에 머물러 있는지 확인해보세요.

# --hints--

`#navbar` 요소의 `position` 속성을 `fixed`로 설정해야 합니다.

```js
assert($('#navbar').css('position') == 'fixed');
```

`#navbar` 요소의 `top` CSS 오프셋을 0 픽셀로 설정해야 합니다.

```js
assert($('#navbar').css('top') == '0px');
```

`#navbar` 요소의 `left` CSS 오프셋을 0 픽셀로 설정해야 합니다.

```js
assert($('#navbar').css('left') == '0px');
```

# --seed--

## --seed-contents--

```html
<style>
  body {
    min-height: 150vh;
  }
  #navbar {



    width: 100%;
    background-color: #767676;
  }
  nav ul {
    margin: 0px;
    padding: 5px 0px 5px 30px;
  }
  nav li {
    display: inline;
    margin-right: 20px;
  }
  a {
    text-decoration: none;
  }
</style>
<body>
  <header>
    <h1>Welcome!</h1>
    <nav id="navbar">
      <ul>
        <li><a href="">Home</a></li>
        <li><a href="">Contact</a></li>
      </ul>
    </nav>
  </header>
  <p>I shift up when the #navbar is fixed to the browser window.</p>
</body>
```

# --solutions--

```html
<style>
  body {
    min-height: 150vh;
  }
  #navbar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background-color: #767676;
  }
  nav ul {
    margin: 0px;
    padding: 5px 0px 5px 30px;
  }
  nav li {
    display: inline;
    margin-right: 20px;
  }
  a {
    text-decoration: none;
  }
</style>
<body>
  <header>
    <h1>Welcome!</h1>
    <nav id="navbar">
      <ul>
        <li><a href="">Home</a></li>
        <li><a href="">Contact</a></li>
      </ul>
    </nav>
  </header>
  <p>I shift up when the #navbar is fixed to the browser window.</p>
</body>
```
