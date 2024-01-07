---
id: bad87fee1348bd9aec908847
title: تقسيم Row بواسطة Bootstrap
challengeType: 0
forumTopicId: 18306
dashedName: split-your-bootstrap-row
---

# --description--

الآن بعد أن كان لدينا صف Bootstrap، دعونا نقسمه إلى عمودين لإيواء عناصرنا.

أنشئ عنصرين `div` داخل الصف الخاص بك، وكلاهما يحتوي فئة باسم `col-xs-6`.

# --hints--

عنصري `div class="col-xs-6"` يجب أن يكونا متداخلة داخل عنصر `div class="row"` الخاص بك.

```js
assert($('div.row > div.col-xs-6').length > 1);
```

لا بد وجود وسم إغلاق لكل عناصر `div`.

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
