---
id: bad87fee1348bd9aec908849
title: إضافة عناصر داخل آبارك من Bootstrap
challengeType: 0
forumTopicId: 16636
dashedName: add-elements-within-your-bootstrap-wells
---

# --description--

يوجد العديد من عناصر `div` المتداخلة في كل عمود في صفك. هذا عميق بالقدر الكاف بالنسبة إليك. الآن يمكنك إضافة عناصر `button` الخاصة بك.

ضع ثلاث عناصر `button` لكل عنصر `div` لديه اسم المجموعة `well`.

# --hints--

أدخل ثلاث عناصر `button` لكل عنصر `div` وتحمل فئة باسم `well`.

```js
assert(
  $('div.well:eq(0)').children('button').length === 3 &&
    $('div.well:eq(1)').children('button').length === 3
);
```

يجب أن يكون لديك ست عناصر من `button`.

```js
assert($('button') && $('button').length > 5);
```

لا بد من وجود علامات إغلاق `button`.

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
