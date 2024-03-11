---
id: bad87fee1348bd9aec908850
title: 부트스트랩 기본 버튼 스타일 적용하기
challengeType: 0
forumTopicId: 16657
dashedName: apply-the-default-bootstrap-button-style
---

# --description--

부트스트랩에는 `btn-default`라는 또다른 버튼 클래스가 있습니다.

`btn` 클래스와 `btn-default` 클래스를 각각의 `button` 요소들에 적용해보세요.

# --hints--

`btn` 클래스를 각각의 `button` 요소들에 추가해야 합니다.

```js
assert($('.btn').length > 5);
```

`btn-default` 클래스를 각각의 `button` 요소들에 추가해야 합니다.

```js
assert($('.btn-default').length > 5);
```

# --seed--

## --seed-contents--

```html
<div class="container-fluid">
  <h3 class="text-primary text-center">jQuery Playground</h3>
  <div class="row">
    <div class="col-xs-6">
      <div class="well">
        <button></button>
        <button></button>
        <button></button>
      </div>
    </div>
    <div class="col-xs-6">
      <div class="well">
        <button></button>
        <button></button>
        <button></button>
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
