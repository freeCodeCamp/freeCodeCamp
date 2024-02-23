---
id: bad87fee1348bd9aedf08824
title: 요소의 측면에 각각 다른 패딩값을 추가하기
challengeType: 0
videoUrl: 'https://scrimba.com/c/cB7mwUw'
forumTopicId: 16634
dashedName: add-different-padding-to-each-side-of-an-element
---

# --description--

가끔은 각 측면마다 다른 `padding`을 갖도록 요소를 커스터마이징하고 싶을 수도 있습니다.

CSS는`padding-top`, `padding-right`, `padding-bottom`, 그리고`padding-left` 속성을 사용하여 요소의 네 가지 개별 측면에 대한 `padding`을 제어할 수 있습니다.

# --instructions--

파란 상자의 위쪽과 왼쪽 측면에는 `40px`의 `padding`을 부여하고, 아래쪽과 오른쪽 측면에는 `20px`만 부여합니다.

# --hints--

`blue-box` 클래스는 요소 위쪽에 `40px`의 `padding`을 부여해야 합니다.

```js
assert($('.blue-box').css('padding-top') === '40px');
```

`blue-box` 클래스는 요소 오른쪽에 `20px`의 `padding`을 부여해야 합니다.

```js
assert($('.blue-box').css('padding-right') === '20px');
```

`blue-box` 클래스는 요소 아래쪽에 `20px`의 `padding`을 부여해야 합니다.

```js
assert($('.blue-box').css('padding-bottom') === '20px');
```

`blue-box` 클래스는 요소 왼쪽에 `40px`의 `padding`을 부여해야 합니다.

```js
assert($('.blue-box').css('padding-left') === '40px');
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
    padding-top: 40px;
    padding-right: 20px;
    padding-bottom: 20px;
    padding-left: 40px;
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
    padding-top: 40px;
    padding-right: 20px;
    padding-bottom: 20px;
    padding-left: 40px;
  }

  .blue-box {
    background-color: blue;
    color: #fff;
    padding-top: 40px;
    padding-right: 20px;
    padding-bottom: 20px;
    padding-left: 40px;
  }
</style>
<h5 class="injected-text">margin</h5>

<div class="box yellow-box">
  <h5 class="box red-box">padding</h5>
  <h5 class="box blue-box">padding</h5>
</div>
```
