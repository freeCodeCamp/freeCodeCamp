---
id: bad87fee1348bd9aec908848
title: 부트스트랩 well 생성하기
challengeType: 0
forumTopicId: 16825
dashedName: create-bootstrap-wells
---

# --description--

부트스트랩은 열에 시각적인 깊이를 제공할 수 있는 `well`라는 클래스가 있습니다.

`well` 클래스를 가진 `div` 요소를 각각의 `col-xs-6` `div` 요소 내에 중첩합니다.

# --hints--

`col-xs-6` 클래스를 가진 `div` 요소 내에 `well` 클래스를 가진 `div` 요소를 추가해야 합니다.

```js
assert($('div.col-xs-6').not(':has(>div.well)').length < 1);
```

`col-xs-6` 클래스를 가진 `div` 요소는 `row` 클래스를 가진 `div` 요소 내에 중첩되어야 합니다.

```js
assert($('div.row > div.col-xs-6').length > 1);
```

모든 `div` 요소는 닫는 태그를 가져야 합니다.

```js
assert(
  code.match(/<\/div>/g) &&
    code.match(/<div/g) &&
    code.match(/<\/div>/g).length === code.match(/<div/g).length
);
```

# --seed--

## --seed-contents--

```html
<div class="container-fluid">
  <h3 class="text-primary text-center">jQuery Playground</h3>
  <div class="row">
    <div class="col-xs-6">

    </div>
    <div class="col-xs-6">

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
      <div class="well"></div>
    </div>
    <div class="col-xs-6">
      <div class="well"></div>
    </div>
  </div>
</div>
```
