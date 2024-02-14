---
id: 587d78ae367417b2b2512afc
title: 아이템 확장을 위한 flex-grow 속성 사용하기
challengeType: 0
videoUrl: 'https://scrimba.com/p/pVaDAv/c2p78cg'
forumTopicId: 301111
dashedName: use-the-flex-grow-property-to-expand-items
---

# --description--

`flex-shrink` 반대되는 속성은 `flex-grow` 속성입니다. `flex-shrink`가 컨테이너가 줄어들 때 아이템의 크기를 제어한다는 것을 상기하세요. `flex-grow` 속성은 부모 컨테이너가 확장될 때 아이템의 크기를 제어합니다.

지난 과제의 비슷한 예시를 통해 하나의 아이템이 `1` 값을 준 `flex-grow` 그리고 다른 아이템이 `3`의 값을 준 `flex-grow` 속성을 가진다면 `3` 값을 가진 속성이 다른 아이템보다 세 배 더 커질 것입니다.

# --instructions--

`#box-1`과 `#box-2`에 `flex-grow` 속성을 추가하세요. `#box-1`에 `1` 그리고 `#box-2`에 `2` 값을 주세요.

# --hints--

`#box-1` 요소는 `1`로 설정된 `flex-grow` 속성을 가져야 합니다.

```js
assert($('#box-1').css('flex-grow') == '1');
```

`#box-2` 요소는 `2`로 설정된 `flex-grow` 속성을 가져야 합니다.

```js
assert($('#box-2').css('flex-grow') == '2');
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
    height: 200px;

  }

  #box-2 {
    background-color: orangered;
    height: 200px;

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
  }

  #box-1 {
    background-color: dodgerblue;
    height: 200px;
    flex-grow: 1;
  }

  #box-2 {
    background-color: orangered;
    height: 200px;
    flex-grow: 2;
  }
</style>

<div id="box-container">
  <div id="box-1"></div>
  <div id="box-2"></div>
</div>
```
