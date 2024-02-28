---
id: 587d78ae367417b2b2512afd
title: 아이템의 초기 크기 설정을 위한 flex-basis 속성 사용하기
challengeType: 0
videoUrl: 'https://scrimba.com/p/pVaDAv/c3d9nCa'
forumTopicId: 301108
dashedName: use-the-flex-basis-property-to-set-the-initial-size-of-an-item
---

# --description--

`flex-basis` 속성은 CSS가 `flex-shrink` 혹은 `flex-grow`로 조정을 하기 전에 아이템의 초기 크기를 특정합니다.

`flex-basis` 속성은 다른 크기 속성과 같은 단위를 사용합니다(`px`, `em`, `%` 등등). `auto` 값은 내용을 기준으로 아이템의 크기를 정합니다.

# --instructions--

`flex-basis` 사용하여 상자의 초기 크기를 설정하세요. `#box-1`과 `#box-2`에 `flex-basis`를 추가하세요. `#box-1`에 `10em` 그리고 `#box-2`에 `20em` 값을 주세요.

# --hints--

`#box-1` 요소는 `flex-basis` 속성을 가져야 합니다.

```js
assert($('#box-1').css('flex-basis') != 'auto');
```

`#box-1` 요소는 `10em` 값을 준 `flex-basis` 속성을 가져야 합니다.

```js
assert(code.match(/#box-1\s*?{\s*?.*?\s*?.*?\s*?flex-basis:\s*?10em;/g));
```

`#box-2` 요소는 `flex-basis` 속성을 가져야 합니다.

```js
assert($('#box-2').css('flex-basis') != 'auto');
```

`#box-2` 요소는 `20em` 값을 준 `flex-basis` 속성을 가져야 합니다.

```js
assert(code.match(/#box-2\s*?{\s*?.*?\s*?.*?\s*?flex-basis:\s*?20em;/g));
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
    flex-basis: 10em;
  }

  #box-2 {
    background-color: orangered;
    height: 200px;
    flex-basis: 20em;
  }
</style>

<div id="box-container">
  <div id="box-1"></div>
  <div id="box-2"></div>
</div>
```
