---
id: bad87fee1348bd9afdf08726
title: 시계 방향 표기법(clockwise notation)을 사용하여 요소의 마진을 지정하기
challengeType: 0
videoUrl: 'https://scrimba.com/c/cnpybAd'
forumTopicId: 18345
dashedName: use-clockwise-notation-to-specify-the-margin-of-an-element
---

# --description--

이번에는 `margin`을 사용해 봅시다.

요소의 `margin-top`, `margin-right`, `margin-bottom`, `margin-left` 속성을 개별적으로 지정하는 대신 다음과 같이 한 줄에 모두 지정할 수 있습니다.

```css
margin: 10px 20px 10px 20px;
```

이 네 가지 값은 시계처럼 작동하여 위, 오른쪽, 아래, 왼쪽 순서로 동작하며, 각 면에 마진 지시 사항을 사용하는 것과 정확히 같은 결과를 만듭니다.

# --instructions--

시계 방향 표기법을 사용하여 `blue-box` 클래스가 있는 요소에 상단과 왼쪽에는 `40px`, 하단과 오른쪽에는 `20px`의 여백을 지정해보세요.

# --hints--

`blue-box` 클래스는 요소의 상단에 `40px`의 `margin`을 주어야 합니다.

```js
assert($('.blue-box').css('margin-top') === '40px');
```

`blue-box` 클래스는 요소의 오른쪽에 `20px`의 `margin`을 주어야 합니다.

```js
assert($('.blue-box').css('margin-right') === '20px');
```

`blue-box` 클래스는 요소의 하단에 `20px`의 `margin`을 주어야 합니다.

```js
assert($('.blue-box').css('margin-bottom') === '20px');
```

`blue-box` 클래스는 요소의 왼쪽에 `40px`의 `margin`을 주어야 합니다.

```js
assert($('.blue-box').css('margin-left') === '40px');
```

시계 방향 표기법을 사용하여 `blue-box` 클래스의 마진을 설정해야 합니다.

```js
assert(
  /\.blue-box\s*{[\s\S]*margin[\s]*:\s*\d+px\s+\d+px\s+\d+px\s+\d+px(;\s*[^}]+\s*}|;?\s*})/.test(
    __helpers.removeCssComments($('style').text())
  )
);
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
    padding: 20px 40px 20px 40px;
  }

  .red-box {
    background-color: crimson;
    color: #fff;
    margin: 20px 40px 20px 40px;
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
    padding: 20px 40px 20px 40px;
  }

  .red-box {
    background-color: crimson;
    color: #fff;
    margin: 20px 40px 20px 40px;
  }

  .blue-box {
    background-color: blue;
    color: #fff;
    margin: 40px 20px 20px 40px;
  }
</style>
<h5 class="injected-text">margin</h5>

<div class="box yellow-box">
  <h5 class="box red-box">padding</h5>
  <h5 class="box blue-box">padding</h5>
</div>
```
