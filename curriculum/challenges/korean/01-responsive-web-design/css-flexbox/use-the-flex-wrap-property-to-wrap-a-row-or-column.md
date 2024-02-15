---
id: 587d78ad367417b2b2512afa
title: 행 혹은 열을 감싸기 위해 flex-wrap 사용하기
challengeType: 0
videoUrl: 'https://scrimba.com/p/pVaDAv/cQv9ZtG'
forumTopicId: 301114
dashedName: use-the-flex-wrap-property-to-wrap-a-row-or-column
---

# --description--

CSS flexbox는 플렉스 컨테이너를 여러 행(혹은 열)로 나누는 기능을 갖고 있습니다. 기본값으로로 플렉스 컨테이너는 모든 플렉스 아이템에 맞추게 됩니다. 예를 들면 행은 한 라인 위에 있게 될 것입니다.

하지만 `flex-wrap` 속성을 사용하여 아이템을 래핑할 수 있습니다. 이는 여분의 아이템이 다음 행 혹은 열로 이동한다는 것을 의미합니다. 래핑이 일어나는 시작점은 아이템의 크기와 컨테이너의 크기에 따라 다릅니다.

CSS는 래핑의 방향을 위한 선택지도 있습니다.

<ul><li><code>nowrap</code>: 기본 설정이며 아이템을 래핑하지 않습니다.</li><li><code>wrap</code>: 아이템을 행에 있을 때는 위아래로 그리고 열에 있을 때는 좌우 방향의 여러 라인으로 래핑합니다.</li><li><code>wrap-reverse</code>: 아이템을 행에 있을 때는 아래에서 위로 그리고 열에 있을 때는 우측에서 좌측 방향의 여러 라인으로 아이템을 래핑 합니다.</li></ul>

# --instructions--

현재 레이아웃은 한 행에 너무 많은 박스가 있습니다. `#box-container` 요소에 `flex-wrap` 속성을 주고 `wrap` 값으로 설정하세요.

# --hints--

`#box-container` 요소는 `wrap`로 설정된 `flex-wrap` 속성을 가져야 합니다.

```js
assert($('#box-container').css('flex-wrap') == 'wrap');
```

# --seed--

## --seed-contents--

```html
<style>
  #box-container {
    background: gray;
    display: flex;
    height: 100%;

  }
  #box-1 {
    background-color: dodgerblue;
    width: 25%;
    height: 50%;
  }

  #box-2 {
    background-color: orangered;
    width: 25%;
    height: 50%;
  }
  #box-3 {
    background-color: violet;
    width: 25%;
    height: 50%;
  }
  #box-4 {
    background-color: yellow;
    width: 25%;
    height: 50%;
  }
  #box-5 {
    background-color: green;
    width: 25%;
    height: 50%;
  }
  #box-6 {
    background-color: black;
    width: 25%;
    height: 50%;
  }
</style>

<div id="box-container">
  <div id="box-1"></div>
  <div id="box-2"></div>
  <div id="box-3"></div>
  <div id="box-4"></div>
  <div id="box-5"></div>
  <div id="box-6"></div>
</div>
```

# --solutions--

```html
<style>
  #box-container {
    background: gray;
    display: flex;
    height: 100%;
    flex-wrap: wrap;
  }
  #box-1 {
    background-color: dodgerblue;
    width: 25%;
    height: 50%;
  }

  #box-2 {
    background-color: orangered;
    width: 25%;
    height: 50%;
  }
  #box-3 {
    background-color: violet;
    width: 25%;
    height: 50%;
  }
  #box-4 {
    background-color: yellow;
    width: 25%;
    height: 50%;
  }
  #box-5 {
    background-color: green;
    width: 25%;
    height: 50%;
  }
  #box-6 {
    background-color: black;
    width: 25%;
    height: 50%;
  }
</style>

<div id="box-container">
  <div id="box-1"></div>
  <div id="box-2"></div>
  <div id="box-3"></div>
  <div id="box-4"></div>
  <div id="box-5"></div>
  <div id="box-6"></div>
</div>
```
