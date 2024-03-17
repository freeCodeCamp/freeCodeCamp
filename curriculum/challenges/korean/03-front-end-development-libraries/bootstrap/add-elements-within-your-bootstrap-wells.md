---
id: bad87fee1348bd9aec908849
title: 부트스트랩 Well 내에서 요소 추가하기
challengeType: 0
forumTopicId: 16636
dashedName: add-elements-within-your-bootstrap-wells
---

# --description--

이제 각 행의 각 열마다 몇 개의 `div` 요소가 배치되었습니다. 이 정도로 깊게 들어가는 것으로 충분합니다. 이제 여기에 `button` 요소를 추가하면 됩니다.

클래스 이름이 `well`인 각각의 `div` 요소 안에 `button` 요소를 세 개씩 배치해주세요.

# --hints--

3개의 `button` 요소들은 `well`이란 클래스명을 가진 각각의 `div` 요소들 내에 배치되어야 합니다.

```js
assert(
  $('div.well:eq(0)').children('button').length === 3 &&
    $('div.well:eq(1)').children('button').length === 3
);
```

총 6개의 `button` 요소가 있어야 합니다.

```js
assert($('button') && $('button').length > 5);
```

모든 `button` 요소들에는 닫는 태그가 있어야 합니다.

```js
assert(
  code.match(/<\/button>/g) &&
    code.match(/<button/g) &&
    code.match(/<\/button>/g).length === code.match(/<button/g).length
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



      </div>
    </div>
    <div class="col-xs-6">
      <div class="well">



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
