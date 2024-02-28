---
id: 587d78ac367417b2b2512af4
title: 열 생성을 위한 flex-direction 속성 사용하기
challengeType: 0
videoUrl: 'https://scrimba.com/p/pVaDAv/cZmWeA4'
forumTopicId: 301109
dashedName: use-the-flex-direction-property-to-make-a-column
---

# --description--

이전 두 과제는 `row`로 설정된 `flex-direction` 속성을 사용했습니다. 이 속성은 플렉스 컨테이너의 자식 요소를 수직으로 쌓으며 열을 생성할 수도 있습니다.

# --instructions--

`#box-container` 요소에 `flex-direction` 속성을 추가하고 `column` 값을 주세요.

# --hints--

`#box-container` 요소는 `column`로 설정된 `flex-direction` 속성을 가져야 합니다.

```js
assert($('#box-container').css('flex-direction') == 'column');
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
    flex-direction: column;
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
