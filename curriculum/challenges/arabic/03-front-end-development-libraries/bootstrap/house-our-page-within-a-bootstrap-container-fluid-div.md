---
id: bad87fee1348bd9aec908746
title: أسكن صفحك في عنصر container-fluid باستخدام Bootstrap
challengeType: 0
forumTopicId: 18198
dashedName: house-our-page-within-a-bootstrap-container-fluid-div
---

# --description--

الآن تحقق أن كل المحتويات الموجودة في صفحتك مستجيبة للجوال (mobile-responsive).

أدخل عنصر `h3` الخاص بك داخل عنصر `div` مع الفئة `container-fluid`.

# --hints--

يجب أن يمتلك عنصر `div` الخاص بك فئة `container-fluid`.

```js
assert($('div').hasClass('container-fluid'));
```

لا بد أن يوجد وسم إغلاق لكل عناصر `div`.

```js
assert(
  code.match(/<\/div>/g) &&
    code.match(/<div/g) &&
    code.match(/<\/div>/g).length === code.match(/<div/g).length
);
```

عنصر `h3` الخاص بك يجب أن يكون متداخلا داخل عنصر `div`.

```js
assert($('div').children('h3').length > 0);
```

# --seed--

## --seed-contents--

```html
<h3 class="text-primary text-center">jQuery Playground</h3>
```

# --solutions--

```html
<div class="container-fluid">
    <h3 class="text-primary text-center">jQuery Playground</h3>
</div>
```
