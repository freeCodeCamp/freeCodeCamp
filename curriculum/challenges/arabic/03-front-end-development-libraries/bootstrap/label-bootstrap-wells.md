---
id: bad87fee1348bd9aec908854
title: توصيف أبرار (Wells) بواسطة Bootstrap
challengeType: 0
forumTopicId: 18223
dashedName: label-bootstrap-wells
---

# --description--

من أجل الوضوح، ضع وصف على كلا الآبار مع معرفيهما.

فوق البئر الأيسر (left-well), داخل عنصر `col-xs-6` في `div`، أضف عنصر `h4` مع النص `#left-well`.

فوق البئر الأيمن (right-well), داخل عنصر `col-xs-6` في `div`، أضف عنصر `h4` مع النص `#right-well`.

# --hints--

يجب عليك إضافة عنصر `h4` لكل عنصر من عناصرك `<div class="col-xs-6">`.

```js
assert(
  $('.col-xs-6').children('h4') && $('.col-xs-6').children('h4').length > 1
);
```

عنصر `h4` يجب أن يحتوي على النص `#left-well`.

```js
assert(new RegExp('#left-well', 'gi').test($('h4').text()));
```

عنصر `h4` يجب أن يحتوي على النص `#right-well`.

```js
assert(new RegExp('#right-well', 'gi').test($('h4').text()));
```

لا بد أن يوجد وسم إغلاق لكل عناصر `h4`.

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
