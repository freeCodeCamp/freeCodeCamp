---
id: bad87fee1348bd9aedf08826
title: 시계 방향 표기법을 사용하여 요소에 패딩을 지정하기
challengeType: 0
videoUrl: 'https://scrimba.com/c/cB7mBS9'
forumTopicId: 18346
dashedName: use-clockwise-notation-to-specify-the-padding-of-an-element
---

# --description--

요소의 `padding-top`, `padding-right`, `padding-bottom`, `padding-left` 속성을 개별적으로 지정하는 대신 다음과 같이 한 줄에 모두 지정할 수 있습니다.

```css
padding: 10px 20px 10px 20px;
```

이 네 가지 값은 시계처럼 작동하여 위, 오른쪽, 아래, 왼쪽의 순서대로 동작하며, 각 면에 패딩 지시 사항을 사용하는 것과 정확히 동일한 결과를 생성합니다.

# --instructions--

시계 방향 표기법을 사용하여 `.blue-box` 클래스가 있는 요소에 상단과 왼쪽에는 `40px`, 하단과 오른쪽에는 `20px`의 `padding`을 지정해보세요.

# --hints--

`blue-box` 클래스는 요소의 상단에 `40px`의 `padding`을 주어야 합니다.

```js
assert($('.blue-box').css('padding-top') === '40px');
```

`blue-box` 클래스는 요소의 오른쪽에 `20px`의 `padding`을 주어야 합니다.

```js
assert($('.blue-box').css('padding-right') === '20px');
```

`blue-box` 클래스는 요소의 하단에 `20px`의 `padding`을 주어야 합니다.

```js
assert($('.blue-box').css('padding-bottom') === '20px');
```

`blue-box` 클래스는 요소의 왼쪽에 `40px`의 `padding`을 주어야 합니다.

```js
assert($('.blue-box').css('padding-left') === '40px');
```

시계 방향 표기법을 사용하여 `blue-box` 클래스의 패딩을 설정해야 합니다.

```js
assert(
  /\.blue-box\s*{[\s\S]*padding[\s]*:\s*\d+px\s+\d+px\s+\d+px\s+\d+px(;\s*[^}]+\s*}|;?\s*})/.test(
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
    padding: 20px 40px 20px 40px;
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
    padding: 20px 40px 20px 40px;
  }

  .blue-box {
    background-color: blue;
    color: #fff;
    padding: 40px 20px 20px 40px;
  }
</style>
<h5 class="injected-text">margin</h5>

<div class="box yellow-box">
  <h5 class="box red-box">padding</h5>
  <h5 class="box blue-box">padding</h5>
</div>
```
