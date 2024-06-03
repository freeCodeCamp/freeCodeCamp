---
id: bad87fee1348bd9aec908854
title: 부트스트랩 well 라벨링하기
challengeType: 0
forumTopicId: 18223
dashedName: label-bootstrap-wells
---

# --description--

명확성을 위해 두 well에 id를 레이블로 지정해보겠습니다.

왼쪽 well 위 `col-xs-6` `div` 요소 안에 `#left-well`라는 글자를 가진 `h4` 요소를 추가하시오.

오른쪽 well 위에 `col-xs-6` `div` 요소 안에 `#right-well`이라는 글자를 가진 `h4` 요소를 추가하시오.

# --hints--

각 `<div class="col-xs-6">` 요소에 `h4` 요소를 추가해야 합니다.

```js
assert(
  $('.col-xs-6').children('h4') && $('.col-xs-6').children('h4').length > 1
);
```

하나의 `h4` 요소는 `#left-well`라는 글자를 가져야 합니다.

```js
assert(new RegExp('#left-well', 'gi').test($('h4').text()));
```

하나의 `h4` 요소는 `#right-well`라는 글자를 가져야 합니다.

```js
assert(new RegExp('#right-well', 'gi').test($('h4').text()));
```

모든 `h4` 요소는 닫는 태그를 가져야 합니다.

```js
assert(
  code.match(/<\/h4>/g) &&
    code.match(/<h4/g) &&
    code.match(/<\/h4>/g).length === code.match(/<h4/g).length
);
```

# --seed--

## --seed-contents--

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

# --solutions--

```html
<div class="container-fluid">
  <h3 class="text-primary text-center">jQuery Playground</h3>
  <div class="row">
    <div class="col-xs-6">
      <h4>#left-well</h4>
      <div class="well" id="left-well">
        <button class="btn btn-default target"></button>
        <button class="btn btn-default target"></button>
        <button class="btn btn-default target"></button>
      </div>
    </div>
    <div class="col-xs-6">
      <h4>#right-well</h4>
      <div class="well" id="right-well">
        <button class="btn btn-default target"></button>
        <button class="btn btn-default target"></button>
        <button class="btn btn-default target"></button>
      </div>
    </div>
  </div>
</div>
```
