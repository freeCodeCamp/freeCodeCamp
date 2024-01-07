---
id: bad87fee1348bd9aec908846
title: إنشاء Headline بأسلوب Bootstrap
challengeType: 0
forumTopicId: 16812
dashedName: create-a-bootstrap-headline
---

# --description--

أبني شيئا من الصفر لممارسة مهاراتك في HTML و CSS و Bootstrap.

سوف تبني ملعب jQuery، الذي سوف نستخدمه قريبا في تحديات jQuery الخاصة بنا.

لبدء ذلك، أنشئ عنصر `h3` بنص `jQuery Playground`.

لون عنصر `h3` الخاص بك مع `text-primary`، وضعه في المنتصف مع فئة `text-center` بأسلوب Bootstrap.

# --hints--

يجب عليك إضافة عنصر `h3` إلى الصفحة الخاصة بك.

```js
assert($('h3') && $('h3').length > 0);
```

يجب أن يحتوي العنصر `h3` على وسم إغلاق.

```js
assert(
  code.match(/<\/h3>/g) &&
    code.match(/<h3/g) &&
    code.match(/<\/h3>/g).length === code.match(/<h3/g).length
);
```

عنصر `h3` الخاص بك يجب أن يتمركز بتطبيق فئة `text-primary`

```js
assert($('h3').hasClass('text-primary'));
```

عنصر `h3` الخاص بك يجب أن يتمركز بتطبيق فئة `text-center`

```js
assert($('h3').hasClass('text-center'));
```

يجب أن يحتوي العنصر `h3` على النص `jQuery Playground`.

```js
assert.isTrue(/jquery(\s)+playground/gi.test($('h3').text()));
```

# --seed--

## --seed-contents--

```html

```

# --solutions--

```html
<h3 class="text-primary text-center">jQuery Playground</h3>
```
