---
id: bad87fee1348bd9aec908857
title: 코드를 명확하게 설명하기 위해 주석 사용하기
challengeType: 0
forumTopicId: 18347
dashedName: use-comments-to-clarify-code
---

# --description--

jQuery를 사용하기 시작하면 실제 HTML 안의 요소들을 변경할 필요 없이 수정할 수 있습니다.

이 코드를 직접 수정하지 않아도 된다는 것을 확인해봅시다.

`<!--`와 `-->` 함께 주석 처리할 수 있다는 것을 기억하세요.

`Code below this line should not be changed`라는 주석을 HTML 상단에 추가하세요.

# --hints--

HTML 상단에 `<!--`가 함께 주석을 시작해야 합니다.

```js
assert(code.match(/^\s*<!--/));
```

주석은 `Code below this line should not be changed`이라는 글을 가져야 합니다.

```js
assert(code.match(/<!--(?!(>|->|.*-->.*this line))\s*.*this line.*\s*-->/gi));
```

`-->`과 함께 주석을 닫아야 합니다.

```js
assert(code.match(/-->.*\n+.+/g));
```

주석을 여는 것과 닫는 것의 수가 같아야 합니다.

```js
assert(code.match(/<!--/g).length === code.match(/-->/g).length);
```

# --seed--

## --seed-contents--

```html
<div class="container-fluid">
  <h3 class="text-primary text-center">jQuery Playground</h3>
  <div class="row">
    <div class="col-xs-6">
      <h4>#left-well</h4>
      <div class="well" id="left-well">
        <button class="btn btn-default target" id="target1">#target1</button>
        <button class="btn btn-default target" id="target2">#target2</button>
        <button class="btn btn-default target" id="target3">#target3</button>
      </div>
    </div>
    <div class="col-xs-6">
      <h4>#right-well</h4>
      <div class="well" id="right-well">
        <button class="btn btn-default target" id="target4">#target4</button>
        <button class="btn btn-default target" id="target5">#target5</button>
        <button class="btn btn-default target" id="target6">#target6</button>
      </div>
    </div>
  </div>
</div>
```

# --solutions--

```html
<!-- Code below this line should not be changed -->
<div class="container-fluid">
  <h3 class="text-primary text-center">jQuery Playground</h3>
  <div class="row">
    <div class="col-xs-6">
      <h4>#left-well</h4>
      <div class="well" id="left-well">
        <button class="btn btn-default target" id="target1">#target1</button>
        <button class="btn btn-default target" id="target2">#target2</button>
        <button class="btn btn-default target" id="target3">#target3</button>
      </div>
    </div>
    <div class="col-xs-6">
      <h4>#right-well</h4>
      <div class="well" id="right-well">
        <button class="btn btn-default target" id="target4">#target4</button>
        <button class="btn btn-default target" id="target5">#target5</button>
        <button class="btn btn-default target" id="target6">#target6</button>
      </div>
    </div>
  </div>
</div>
```
