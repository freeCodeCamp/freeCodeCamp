---
id: 587d78ab367417b2b2512af2
title: 행 생성을 위한 flex-direction 속성 사용하기
challengeType: 0
videoUrl: 'https://scrimba.com/p/pVaDAv/cBEkbfJ'
forumTopicId: 301110
dashedName: use-the-flex-direction-property-to-make-a-row
---

# --description--

요소에 `display: flex`를 추가하면 해당 요소는 플렉스 컨테이너가 됩니다. 이로써 해당 요소의 자식 요소를 행이나 열로 정렬할 수 있게 됩니다. `flex-direction` 속성을 부모 아이템에 추가하고 이 속성을 row 혹은 column으로 설정하면 됩니다. 행을 생성하면 자식 요소들을 수평으로 정렬하고 열을 생성하면 자식 요소들을 수직으로 정렬할 것입니다.

`flex-direction`을 위한 다른 선택지는 `row-reverse`와 `column-reverse`가 있습니다.

**주의:** `flex-direction`속성의 기본값은 `row`입니다.

# --instructions--

`#box-container` 요소에 `flex-direction` 속성을 추가하고 `row-reverse` 값을 주세요.

# --hints--

`#box-container` 요소는 `row-reverse`로 설정된 `flex-direction` 속성을 가져야 합니다.

```js
assert($('#box-container').css('flex-direction') == 'row-reverse');
```

# --seed--

## --seed-contents--

```html
<style>
  #box-container {
    display: flex;
    height: 500px;

  }
  #box-1 {
    background-color: dodgerblue;
    width: 50%;
    height: 50%;
  }

  #box-2 {
    background-color: orangered;
    width: 50%;
    height: 50%;
  }
</style>

<div id="box-container">
  <div id="box-1"></div>
  <div id="box-2"></div>
</div>
```

# --solutions--

```html
<style>
  #box-container {
    display: flex;
    height: 500px;
    flex-direction: row-reverse;
  }
  #box-1 {
    background-color: dodgerblue;
    width: 50%;
    height: 50%;
  }

  #box-2 {
    background-color: orangered;
    width: 50%;
    height: 50%;
  }
</style>

<div id="box-container">
  <div id="box-1"></div>
  <div id="box-2"></div>
</div>
```
