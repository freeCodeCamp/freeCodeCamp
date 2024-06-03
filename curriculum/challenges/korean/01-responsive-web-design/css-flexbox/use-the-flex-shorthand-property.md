---
id: 587d78ae367417b2b2512afe
title: flex 단축 속성 사용하기
challengeType: 0
videoUrl: 'https://scrimba.com/p/pVaDAv/cbpW2tE'
forumTopicId: 301112
dashedName: use-the-flex-shorthand-property
---

# --description--

여러 플렉스 속성을 한번에 사용할 수 있는 방법이 있습니다. `flex-grow`, `flex-shrink` 그리고 `flex-basis` 속성은 모두 `flex` 속성을 이용하여 함께 설정할 수 있습니다.

예를 들어 `flex: 1 0 10px;`는 아이템을 `flex-grow: 1;`, `flex-shrink: 0;` 그리고 `flex-basis: 10px;`로 설정하게 됩니다.

디폴트 설정은 `flex: 0 1 auto;`입니다.

# --instructions--

`#box-1`과 `#box-2`에 `flex` 속성을 추가하세요. `#box-1`에 `flex-grow`는 `2`, `flex-shrink`는 `2` 그리고 `flex-basis`는 `150px`가 되도록 값을 주세요. `#box-2`에 `flex-grow`는 `1`, `flex-shrink`는 `1` 그리고 `flex-basis`는 `150px`가 되도록 값을 주세요.

이 값들은 컨테이너가 300px보다 클 때 `#box-1`가 `#box-2`보다 여분의 공간을 두배로 차지하도록 만들고 컨테이너가 300px보다 작을 때 `#box-2`보다 여분 공간의 반절을 차지하게 만듭니다. 300px는 두 상자의 `flex-basis` 값의 합친 크기입니다.

# --hints--

`#box-1` 요소는 `2 2 150px`로 설정된 `flex` 속성을 가져야 합니다.

```js
assert(
  $('#box-1').css('flex-grow') == '2' &&
    $('#box-1').css('flex-shrink') == '2' &&
    $('#box-1').css('flex-basis') == '150px'
);
```

`#box-2` 요소는 `1 1 150px`로 설정된 `flex` 속성을 가져야 합니다.

```js
assert(
  $('#box-2').css('flex-grow') == '1' &&
    $('#box-2').css('flex-shrink') == '1' &&
    $('#box-2').css('flex-basis') == '150px'
);
```

`#box-1`과 `#box-2`에 `flex` 속성을 사용해야 합니다.

```js
assert(code.match(/flex:\s*?\d\s+?\d\s+?150px;/g).length == 2);
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
    flex: 2 2 150px;
    height: 200px;
  }

  #box-2 {
    background-color: orangered;
    flex: 1 1 150px;
    height: 200px;
  }
</style>

<div id="box-container">
  <div id="box-1"></div>
  <div id="box-2"></div>
</div>
```
