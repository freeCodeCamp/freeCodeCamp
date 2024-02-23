---
id: 5a94fe3669fb03452672e45f
title: repeat 함수로 반복 줄이기
challengeType: 0
videoUrl: 'https://scrimba.com/p/pByETK/cQvqyHR'
forumTopicId: 301133
dashedName: reduce-repetition-using-the-repeat-function
---

# --description--

그리드의 구조를 정의하기 위해 `grid-template-columns`와 `grid-template-rows`를 사용했을 때, 생성한 각 행 혹은 열에 값을 입력했습니다.

똑같은 높이를 가진 100개의 행을 가진 그리드를 생각해 보겠습니다. 100개의 값을 일일이 넣는 것은 실용적이지 못합니다. 다행히 더 나은 방법이 있습니다 - 행 혹은 열이 반복 횟수와 쉼표와 반복되는 값을 `repeat`에 넣어 사용하면 됩니다.

여기 50px 높이를 준 100개의 행을 가진 그리드 예시가 있습니다.

```css
grid-template-rows: repeat(100, 50px);
```

또한 grid 구조를 정의할 때 repeat 함수로 여러 개의 값을 반복하고 다른 값들 사이에 해당 함수를 넣을 수도 있습니다. 다음과 같이 적용될 수 있습니다:

```css
grid-template-columns: repeat(2, 1fr 50px) 20px;
```

이는 다음과 동일한 효과를 갖습니다:

```css
grid-template-columns: 1fr 50px 1fr 50px 20px;
```

**주의:** 20px 전에 `1fr 50px`가 두 번 반복됩니다.

# --instructions--

`grid-template-columns` 속성에서 반복을 없애기 위해 `repeat`을 사용하세요.

# --hints--

`container` 클래스는 `1fr` 너비를 가진 3개의 열을 반복하도록 설정된 `grid-template-columns` 속성을 가져야 합니다.

```js
assert(
  code.match(
    /.container\s*?{[\s\S]*grid-template-columns\s*?:\s*?repeat\s*?\(\s*?3\s*?,\s*?1fr\s*?\)\s*?;[\s\S]*}/gi
  )
);
```

# --seed--

## --seed-contents--

```html
<style>
  .item1{background:LightSkyBlue;}
  .item2{background:LightSalmon;}
  .item3{background:PaleTurquoise;}
  .item4{background:LightPink;}
  .item5{background:PaleGreen;}

  .container {
    font-size: 40px;
    min-height: 300px;
    width: 100%;
    background: LightGray;
    display: grid;
    /* Only change code below this line */

    grid-template-columns: 1fr 1fr 1fr;

    /* Only change code above this line */
    grid-template-rows: 1fr 1fr 1fr;
    grid-gap: 10px;
  }
</style>

<div class="container">
  <div class="item1">1</div>
  <div class="item2">2</div>
  <div class="item3">3</div>
  <div class="item4">4</div>
  <div class="item5">5</div>
</div>
```

# --solutions--

```html
<style>.container {grid-template-columns: repeat(3, 1fr);}</style>
```
