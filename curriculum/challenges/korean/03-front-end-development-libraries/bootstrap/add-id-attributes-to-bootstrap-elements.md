---
id: bad87fee1348bd9aec908853
title: 부트스트랩 요소에 id 속성 추가하기
challengeType: 0
forumTopicId: 16639
dashedName: add-id-attributes-to-bootstrap-elements
---

# --description--

각 요소에는 클래스 속성 외에도 `id` 속성을 부여할 수 있습니다.

한 요소는 하나의 고유한 id만 가질 수 있으며 각 id는 페이지당 한 번만 사용해야 합니다.

`well`이라는 클래스를 가진 `div` 요소들에 고유한 id들을 부여해봅시다.

다음과 같은 방식으로 요소에 id를 부여할 수 있습니다:

```html
<div class="well" id="center-well">
```

왼쪽에 위치한 well에 `left-well` 이라는 id를 부여하세요. 오른쪽에 위치한 well에는 `right-well` 이라는 id를 부여하세요.

# --hints--

왼쪽의 `well`에는 `left-well`이라는 id가 있어야 합니다.

```js
assert(
  $('.col-xs-6').children('#left-well') &&
    $('.col-xs-6').children('#left-well').length > 0
);
```

오른쪽의 `well`에는 `right-well`이라는 id가 있어야 합니다.

```js
assert(
  $('.col-xs-6').children('#right-well') &&
    $('.col-xs-6').children('#right-well').length > 0
);
```

# --seed--

## --seed-contents--

```html
<div class="container-fluid">
  <h3 class="text-primary text-center">jQuery Playground</h3>
  <div class="row">
    <div class="col-xs-6">
      <div class="well">
        <button class="btn btn-default target"></button>
        <button class="btn btn-default target"></button>
        <button class="btn btn-default target"></button>
      </div>
    </div>
    <div class="col-xs-6">
      <div class="well">
        <button class="btn btn-default target"></button>
        <button class="btn btn-default target"></button>
        <button class="btn btn-default target"></button>
      </div>
    </div>
  </div>
</div>
```

# --solutions--

```html
<div class="container-fluid">
  <h3 class="text-primary text-center">jQuery Playground</h3>
  <div class="row">
    <div class="col-xs-6">
      <div class="well" id="left-well">
        <button class="btn btn-default target"></button>
        <button class="btn btn-default target"></button>
        <button class="btn btn-default target"></button>
      </div>
    </div>
    <div class="col-xs-6">
      <div class="well" id="right-well">
        <button class="btn btn-default target"></button>
        <button class="btn btn-default target"></button>
        <button class="btn btn-default target"></button>
      </div>
    </div>
  </div>
</div>
```
