---
id: 587d78ae367417b2b2512aff
title: 아이템 재배치를 위한 order 속성 사용하기
challengeType: 0
videoUrl: 'https://scrimba.com/p/pVaDAv/cMbvNAG'
forumTopicId: 301116
dashedName: use-the-order-property-to-rearrange-items
---

# --description--

`order` 속성은 플렉스 컨테이너에 플렉스 아이템이 어떻게 보여질지에 대한 순서를 정하기 위해 사용됩니다. 기본 설정으로 아이템은 소스 HTML에 나타난 순서대로 보여질 것입니다. 이 속성은 음수를 포함한 숫자를 값으로 취합니다.

# --instructions--

`#box-1`과 `#box-2`에 `order` 속성을 추가하세요. `#box-1`에 `2`의 값을 주고 `#box-2`에 `1`의 값을 주세요.

# --hints--

`#box-1` 요소는 `2`로 설정된 `order` 속성을 가져야 합니다.

```js
assert($('#box-1').css('order') == '2');
```

`#box-2` 요소는 `1`로 설정된 `order` 속성을 가져야 합니다.

```js
assert($('#box-2').css('order') == '1');
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
    order: 2;
    height: 200px;
    width: 200px;
  }

  #box-2 {
    background-color: orangered;
    order: 1;
    height: 200px;
    width: 200px;
  }
</style>

<div id="box-container">
  <div id="box-1"></div>
  <div id="box-2"></div>
</div>
```
