---
id: bad87fee1348bd9bec908846
title: إنشاء Row بأسلوب Bootstrap
challengeType: 0
forumTopicId: 16813
dashedName: create-a-bootstrap-row
---

# --description--

الآن ستنشئ صف Bootstrap لعناصرك المضمنة (inline).

إنشاء عنصر `div` أسفل العلامة `h3` مع فئة `row`.

# --hints--

يجب عليك إضافة عنصر `div` تحت عنصر `h3` الخاص بك.

```js
assert(
  $('div').length > 1 &&
    $('div.row h3.text-primary').length == 0 &&
    $('div.row + h3.text-primary').length == 0 &&
    $('h3.text-primary + div.row').length > 0
);
```

يجب يحتوي عنصر `div` على فئة `row`

```js
assert($('div').hasClass('row'));
```

يجب أدخال `row div` في `container-fluid div`

```js
assert($('div.container-fluid div.row').length > 0);
```

يجب أن يحتوى عنصر `div` على علامة إغلاق.

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
