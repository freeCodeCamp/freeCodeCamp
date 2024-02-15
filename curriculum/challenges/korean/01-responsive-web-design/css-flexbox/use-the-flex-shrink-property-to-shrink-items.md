---
id: 587d78ad367417b2b2512afb
title: 아이템을 줄이기 위한 flex-shrink 속성 사용하기
challengeType: 0
videoUrl: 'https://scrimba.com/p/pVaDAv/cd3PBfr'
forumTopicId: 301113
dashedName: use-the-flex-shrink-property-to-shrink-items
---

# --description--

지금까지 과제에 있었던 모든 속성은 플렉스 컨테이너(플렉스 아이템의 부모 요소) 에 적용됩니다. 그러나 플렉스 아이템에 사용할 수 있는 여러 유용한 속성이 있습니다.

첫번째는 `flex-shrink` 속성입니다. 이 속성을 사용하면 플렉스 컨테이너가 너무 작을 때 아이템을 줄일 수 있습니다. 부모 컨테이너의 너비가 그 컨테이너 안의 모든 플렉스 아이템의 너비를 합친 값보다 작을 때 아이템이 줄어듭니다.

`flex-shrink` 속성은 값으로 숫자를 취합니다. 숫자가 클수록 컨테이너 내의 다른 아이템과 비교하여 더 많이 줄어들 것입니다. 예를 들면 한 아이템의 `flex-shrink` 값이 `1`이고 다른 아이템의 `flex-shrink` 값이 `3`이라면 `3`을 가진 아이템이 다른 아이템보다 3배 더 줄어들 것입니다.

# --instructions--

`#box-1`와 `#box-2`에 `flex-shrink` 속성을 추가하세요. `#box-1`에 `1`의 값을 주고 `#box-2`에 `2`의 값을 주세요.

# --hints--

`#box-1` 요소는 `1`로 설정된 `flex-shrink` 속성을 가져야 합니다.

```js
assert($('#box-1').css('flex-shrink') == '1');
```

`#box-2` 요소는 `2`로 설정된 `flex-shrink` 속성을 가져야 합니다.

```js
assert($('#box-2').css('flex-shrink') == '2');
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
    width: 100%;
    height: 200px;

  }

  #box-2 {
    background-color: orangered;
    width: 100%;
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
    width: 100%;
    height: 200px;
    flex-shrink: 1;
  }

  #box-2 {
    background-color: orangered;
    width: 100%;
    height: 200px;
    flex-shrink: 2;
  }
</style>

<div id="box-container">
  <div id="box-1"></div>
  <div id="box-2"></div>
</div>
```
