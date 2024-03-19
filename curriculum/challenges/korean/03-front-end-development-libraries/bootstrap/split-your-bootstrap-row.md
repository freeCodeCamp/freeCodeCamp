---
id: bad87fee1348bd9aec908847
title: 부트스트랩 행 나누기
challengeType: 0
forumTopicId: 18306
dashedName: split-your-bootstrap-row
---

# --description--

부트스트랩 행을 가지게 되었으니 요소들을 배치하기 위해 행을 두 열로 나누어 보겠습니다.

행에 `col-xs-6` 클래스를 가진 두 개의 `div` 요소를 만드세요.

# --hints--

두 개의 `div class="col-xs-6"` 요소는 `div class="row"` 요소 안에 중첩되어야 합니다.

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


  </div>
</div>
```

# --solutions--

```html
<div class="container-fluid">
  <h3 class="text-primary text-center">jQuery Playground</h3>
  <div class="row">
    <div class="col-xs-6"></div>
    <div class="col-xs-6"></div>
  </div>
</div>
```
