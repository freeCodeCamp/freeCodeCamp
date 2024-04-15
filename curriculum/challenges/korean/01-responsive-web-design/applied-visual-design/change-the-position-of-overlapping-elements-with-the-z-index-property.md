---
id: 587d78a3367417b2b2512acf
title: z-index 속성을 사용하여 겹쳐진 요소들의 위치를 변경하기
challengeType: 0
videoUrl: 'https://scrimba.com/c/cM94aHk'
forumTopicId: 301046
dashedName: change-the-position-of-overlapping-elements-with-the-z-index-property
---

# --description--

요소가 겹쳐질 때 (즉, `position: absolute | relative | fixed | sticky`를 사용할 때), HTML 마크업에서 뒤에 나오는 요소는 기본적으로 다른 요소들 위에 나타납니다. 그러나 `z-index` 속성은 요소가 서로 어떻게 쌓이는지의 순서를 지정할 수 있습니다. 이 값은 정수(즉, 소수점이 없는 정수)이어야 하며, 요소의 `z-index` 속성이 더 높은 값을 가지면 그 요소는 낮은 값을 가진 요소들보다 더 위에 쌓입니다.

# --instructions--

클래스 이름이 `first`인 요소(빨간색 사각형)에 `z-index` 속성을 추가하고 값을 2로 설정하여 다른 요소(파란색 사각형)를 덮도록 만듭니다.

# --hints--

클래스 이름이 `first`인 요소는 `z-index`값이 2여야 합니다.

```js
assert($('.first').css('z-index') == '2');
```

# --seed--

## --seed-contents--

```html
<style>
  div {
    width: 60%;
    height: 200px;
    margin-top: 20px;
  }

  .first {
    background-color: red;
    position: absolute;

  }
  .second {
    background-color: blue;
    position: absolute;
    left: 40px;
    top: 50px;
    z-index: 1;
  }
</style>

<div class="first"></div>
<div class="second"></div>
```

# --solutions--

```html
<style>
  div {
    width: 60%;
    height: 200px;
    margin-top: 20px;
  }

  .first {
    background-color: red;
    position: absolute;
    z-index: 2;
  }
  .second {
    background-color: blue;
    position: absolute;
    left: 40px;
    top: 50px;
    z-index: 1;
  }
</style>
<div class="first"></div>
<div class="second"></div>
```
