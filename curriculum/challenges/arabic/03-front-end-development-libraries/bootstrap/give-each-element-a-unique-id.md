---
id: bad87fee1348bd9aec908855
title: إعطاء كل عنصر معرف فريد
challengeType: 0
forumTopicId: 18191
dashedName: give-each-element-a-unique-id
---

# --description--

سوف تريد أيضا أن تكون قادر على استخدام jQuery لاستهداف كل زر بواسطة معرف فريد.

منح كل من الأزرار الخاصة بك معرف فريد من نوعها، بدءاً من `target1` وانتهاء إلى `target6`.

تحقق أن `target1` إلى `target3` موجودة في `#left-well`، و `target4` إلى `target6` موجودة في `#right-well`.

# --hints--

عنصر `button` واحد يجب أن يحتوي على معرف (id) باسم `target1`.

```js
assert(
  $('#left-well').children('#target1') &&
    $('#left-well').children('#target1').length > 0
);
```

عنصر `button` واحد يجب أن يحتوي على معرف (id) باسم `target2`.

```js
assert(
  $('#left-well').children('#target2') &&
    $('#left-well').children('#target2').length > 0
);
```

عنصر `button` واحد يجب أن يحتوي على معرف (id) باسم `target3`.

```js
assert(
  $('#left-well').children('#target3') &&
    $('#left-well').children('#target3').length > 0
);
```

عنصر `button` واحد يجب أن يحتوي على معرف (id) باسم `target4`.

```js
assert(
  $('#right-well').children('#target4') &&
    $('#right-well').children('#target4').length > 0
);
```

عنصر `button` واحد يجب أن يحتوي على معرف (id) باسم `target5`.

```js
assert(
  $('#right-well').children('#target5') &&
    $('#right-well').children('#target5').length > 0
);
```

عنصر `button` واحد يجب أن يحتوي على معرف (id) باسم `target6`.

```js
assert(
  $('#right-well').children('#target6') &&
    $('#right-well').children('#target6').length > 0
);
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

# --solutions--

```html
<div class="container-fluid">
  <h3 class="text-primary text-center">jQuery Playground</h3>
  <div class="row">
    <div class="col-xs-6">
      <h4>#left-well</h4>
      <div class="well" id="left-well">
        <button class="btn btn-default target" id="target1"></button>
        <button class="btn btn-default target" id="target2"></button>
        <button class="btn btn-default target" id="target3"></button>
      </div>
    </div>
    <div class="col-xs-6">
      <h4>#right-well</h4>
      <div class="well" id="right-well">
        <button class="btn btn-default target" id="target4"></button>
        <button class="btn btn-default target" id="target5"></button>
        <button class="btn btn-default target" id="target6"></button>
      </div>
    </div>
  </div>
</div>
```
