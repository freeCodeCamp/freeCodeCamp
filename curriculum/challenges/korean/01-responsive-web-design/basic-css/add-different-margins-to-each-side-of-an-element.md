---
id: bad87fee1248bd9aedf08824
title: 요소의 각 측면에 서로 다른 마진을 추가하기
challengeType: 0
videoUrl: 'https://scrimba.com/c/cg4RWh4'
forumTopicId: 16633
dashedName: add-different-margins-to-each-side-of-an-element
---

# --description--

가끔은 각 측면마다 다른 `margin`을 갖도록 요소를 커스터마이징하고 싶을 수도 있습니다.

CSS는 `margin-top`, `margin-right`, `margin-bottom`, 그리고 `margin-left` 속성을 사용하여 요소의 네 가지 개별 측면에 대한 `margin`을 제어할 수 있습니다.

# --instructions--

파란 상자의 위쪽과 왼쪽 측면에는 `40px`의 `margin`을 부여하고, 아래쪽과 오른쪽 측면에는 `20px`만 부여합니다.

# --hints--

`blue-box` 클래스가 요소 위쪽에 `40px`의 `margin`을 부여합니다.

```js
assert($('.blue-box').css('margin-top') === '40px');
```

`blue-box` 클래스가 요소 오른쪽에 `20px`의 `margin`을 부여합니다.

```js
assert($('.blue-box').css('margin-right') === '20px');
```

`blue-box` 클래스가 요소 아래쪽에 `20px`의 `margin`을 부여합니다.

```js
assert($('.blue-box').css('margin-bottom') === '20px');
```

`blue-box` 클래스가 요소 왼쪽에 `40px`의 `margin`을 부여합니다.

```js
assert($('.blue-box').css('margin-left') === '40px');
```

# --seed--

## --seed-contents--

```html
<style>
  .injected-text {
    margin-bottom: -25px;
    text-align: center;
  }

  .box {
    border-style: solid;
    border-color: black;
    border-width: 5px;
    text-align: center;
  }

  .yellow-box {
    background-color: yellow;
    padding: 10px;
  }

  .red-box {
    background-color: crimson;
    color: #fff;
    margin-top: 40px;
    margin-right: 20px;
    margin-bottom: 20px;
    margin-left: 40px;
  }

  .blue-box {
    background-color: blue;
    color: #fff;
  }
</style>
<h5 class="injected-text">margin</h5>

<div class="box yellow-box">
  <h5 class="box red-box">padding</h5>
  <h5 class="box blue-box">padding</h5>
</div>
```

# --solutions--

```html
<style>
  .injected-text {
    margin-bottom: -25px;
    text-align: center;
  }

  .box {
    border-style: solid;
    border-color: black;
    border-width: 5px;
    text-align: center;
  }

  .yellow-box {
    background-color: yellow;
    padding: 10px;
  }

  .red-box {
    background-color: crimson;
    color: #fff;
    margin-top: 40px;
    margin-right: 20px;
    margin-bottom: 20px;
    margin-left: 40px;
  }

  .blue-box {
    background-color: blue;
    color: #fff;
    margin-top: 40px;
    margin-right: 20px;
    margin-bottom: 20px;
    margin-left: 40px;
  }
</style>
<h5 class="injected-text">margin</h5>

<div class="box yellow-box">
  <h5 class="box red-box">padding</h5>
  <h5 class="box blue-box">padding</h5>
</div>
```
