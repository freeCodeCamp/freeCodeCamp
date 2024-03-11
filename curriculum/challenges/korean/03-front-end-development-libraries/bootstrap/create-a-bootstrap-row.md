---
id: bad87fee1348bd9bec908846
title: 부트스트랩 행 생성하기
challengeType: 0
forumTopicId: 16813
dashedName: create-a-bootstrap-row
---

# --description--

이제 인라인 요소들을 담기 위한 부트스트랩 행을 생성할 것입니다.

`h3`태그 아래에 `div` 요소를 생성하고, `row` 클래스를 지정해주세요.

# --hints--

`h3` 요소 아래에 `div` 요소를 추가해야 합니다.

```js
assert(
  $('div').length > 1 &&
    $('div.row h3.text-primary').length == 0 &&
    $('div.row + h3.text-primary').length == 0 &&
    $('h3.text-primary + div.row').length > 0
);
```

`div` 요소에는 `row` 클래스가 있어야 합니다.

```js
assert($('div').hasClass('row'));
```

`row div`는 `container-fluid div` 안에 들어있어야 합니다.

```js
assert($('div.container-fluid div.row').length > 0);
```

`div` 요소는 닫는 태그를 가져야 합니다.

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

</div>
```

# --solutions--

```html
<div class="container-fluid">
  <h3 class="text-primary text-center">jQuery Playground</h3>
  <div class="row"></div>
</div>
```
