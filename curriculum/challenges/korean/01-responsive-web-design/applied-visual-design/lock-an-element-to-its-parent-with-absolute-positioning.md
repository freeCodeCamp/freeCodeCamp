---
id: 587d781e367417b2b2512acb
title: 절대 위치 지정을 사용하여 요소를 부모에 고정하기
challengeType: 0
videoUrl: 'https://scrimba.com/c/cyLJ7c3'
forumTopicId: 301060
dashedName: lock-an-element-to-its-parent-with-absolute-positioning
---

# --description--

CSS의 `position` 속성의 다음 옵션은 `absolute`로, 이는 요소를 부모 컨테이너를 기준으로 위치를 정합니다. `relative` 위치와는 다르게 요소를 문서의 일반적인 흐름에서 제거하여 주변 항목을 무시하게 됩니다. CSS 오프셋 속성 (위쪽, 아래쪽, 왼쪽, 또는 오른쪽) 을 사용하여 위치를 조절합니다.

절대 위치 지정이란 가장 가까운 *positioned(위치가 지정되있는)* 조상을 기준으로 고정된다는 것입니다. 부모 항목에 위치 규칙을 추가하는 것을 잊으면 (일반적으로 `position: relative;`를 사용하여 이루어집니다), 브라우저는 계속해서 체인을 검색하여 최종적으로 `body` 태그를 기본값으로 설정합니다.

# --instructions--

`position`을 `absolute`으로 선언하여 `#searchbar` 요소를 `section` 부모의 오른쪽 상단에 고정해 주세요. `top`과 `right`에 각각 50 픽셀의 오프셋을 부여합니다.

# --hints--

`#searchbar` 요소의 `position`을 `absolute`으로 설정합니다.

```js
assert($('#searchbar').css('position') == 'absolute');
```

`#searchbar` 요소에 50 픽셀의 `top` CSS 오프셋을 사용합니다.

```js
assert($('#searchbar').css('top') == '50px');
```

`#searchbar` 요소에 50 픽셀의 `right` CSS 오프셋을 사용합니다.

```js
assert($('#searchbar').css('right') == '50px');
```

# --seed--

## --seed-contents--

```html
<style>
  #searchbar {



  }
  section {
    position: relative;
  }
</style>
<body>
  <h1>Welcome!</h1>
  <section>
    <form id="searchbar">
      <label for="search">Search:</label>
      <input type="search" id="search" name="search">
      <input type="submit" name="submit" value="Go!">
    </form>
  </section>
</body>
```

# --solutions--

```html
<style>
  #searchbar {
    position: absolute;
    top: 50px;
    right: 50px;
  }
  section {
    position: relative;
  }
</style>
<body>
  <h1>Welcome!</h1>
  <section>
    <form id="searchbar">
      <label for="search">Search:</label>
      <input type="search" id="search" name="search">
      <input type="submit" name="submit" value="Go!">
    </form>
  </section>
</body>
```
