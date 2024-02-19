---
id: 587d78af367417b2b2512b00
title: align-self 속성 사용하기
challengeType: 0
videoUrl: 'https://scrimba.com/p/pVaDAv/cMbvzfv'
forumTopicId: 301107
dashedName: use-the-align-self-property
---

# --description--

플렉스 아이템을 위한 마지막으로 알아볼 속성은 `align-self`입니다. 이 속성은 아이템을 한번에 설정하는 대신 각각의 아이템의 정렬을 조정할 수 있게 해줍니다. `float`, `clear`, 그리고 `vertical-align`같이 다른 일반적인 설정들은 플렉스 아이템에서 동작하지 않기 때문에 이 속성이 유용합니다.

`align-self`은 `align-items`과 같은 값을 받아들이며 `align-items` 속성으로 설정된 값을 덮어쓰기 합니다.

# --instructions--

`#box-1`와 `#box-2`에 `align-self` 속성을 추가하세요. `#box-1`에 `center` 그리고 `#box-2`에 `flex-end` 값을 주세요.

# --hints--

`#box-1` 요소는 `center`으로 설정된 `align-self` 속성을 가져야 합니다.

```js
assert($('#box-1').css('align-self') == 'center');
```

`#box-2` 요소는 `flex-end`로 설정된 `align-self` 속성을 가져야 합니다.

```js
assert($('#box-2').css('align-self') == 'flex-end');
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
    width: 200px;
  }

  #box-2 {
    background-color: orangered;

    height: 200px;
    width: 200px;
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
    align-self: center;
    height: 200px;
    width: 200px;
  }

  #box-2 {
    background-color: orangered;
    align-self: flex-end;
    height: 200px;
    width: 200px;
  }
</style>

<div id="box-container">
  <div id="box-1"></div>
  <div id="box-2"></div>
</div>
```
