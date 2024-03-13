---
id: bad87fee1348bd9aec908852
title: jQuery 셀렉터로 대상 클래스 추가하기
challengeType: 0
forumTopicId: 16815
dashedName: create-a-class-to-target-with-jquery-selectors
---

# --description--

모든 클래스에 해당 CSS가 있어야 하는 것은 아닙니다. 가끔은 jQuery를 사용해서 이런 요소들을 더 쉽게 선택하기 위한 목적으로 클래스들을 만듭니다.

각 `button` 요소들에 `target` 클래스를 부여해주세요.

# --hints--

각 `button` 요소들에 `target` 클래스를 적용해야 합니다.

```js
assert($('.target').length > 5);
```

# --seed--

## --seed-contents--

```html
<div class="container-fluid">
  <h3 class="text-primary text-center">jQuery Playground</h3>
  <div class="row">
    <div class="col-xs-6">
      <div class="well">
        <button class="btn btn-default"></button>
        <button class="btn btn-default"></button>
        <button class="btn btn-default"></button>
      </div>
    </div>
    <div class="col-xs-6">
      <div class="well">
        <button class="btn btn-default"></button>
        <button class="btn btn-default"></button>
        <button class="btn btn-default"></button>
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
      <div class="well">
        <button class="target btn btn-default"></button>
        <button class="target btn btn-default"></button>
        <button class="target btn btn-default"></button>
      </div>
    </div>
    <div class="col-xs-6">
      <div class="well">
        <button class="target btn btn-default"></button>
        <button class="target btn btn-default"></button>
        <button class="target btn btn-default"></button>
      </div>
    </div>
  </div>
</div>
```
