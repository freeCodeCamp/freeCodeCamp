---
id: 587d7dbd367417b2b2512bb4
title: تخزين البيانات مع المتغيرات Variables في Sass
challengeType: 0
forumTopicId: 301460
dashedName: store-data-with-sass-variables
---

# --description--

إحدى ميزات Sass التي تختلف عن CSS هي أنها تستخدم المتغيرات. يتم الإعلان عنها وتجهيزها لتخزين البيانات، شبيهاً إلى JavaScript.

في JavaScript، يتم تعريف المتغيرات باستخدام كلمات `let` و `const`. في الأسعار، تبدأ المتغيرات بعلامة `$` يتبعها اسم المتغير.

وفيما يلي بعض الأمثلة على ذلك:

```scss
$main-fonts: Arial, sans-serif;
$headings-color: green;
```

ولاستخدام المتغيرات:

```scss
h1 {
  font-family: $main-fonts;
  color: $headings-color;
}
```

وأحد الأمثلة التي تكون فيها المتغيرات مفيدة هو عندما يلزم أن يكون عدد من العناصر نفس اللون. إذا تم تغيير هذا اللون، فإن المكان الوحيد لتعديل الكود هو قيمة المتغير.

# --instructions--

أنشئ متغير `$text-color` بقيمة `red`. ثم غير قيمة خاصية `color` إلى `.blog-post` و `h2` إلى متغير `$text-color`.

# --hints--

يجب أن يحتوي التعليمات البرمجية الخاص بك على متغير Sass معلن باسم `$text-color` بقيمة `red`.

```js
assert(code.match(/\$text-color\s*:\s*?red\s*;/g));
```

يجب أن تستخدم التعليمات البرمجية متغير `$text-color` لتغيير `color` في عناصر `.blog-post` و `h2`.

```js
assert(code.match(/color\s*:\s*\$text-color\s*;?/g));
```

يجب أن يحتوي عنصر `.blog-post` الخاص بك على `color` الأحمر (red).

```js
assert($('.blog-post').css('color') == 'rgb(255, 0, 0)');
```

يجب أن تحتوي عناصر `h2` الخاصة بك على `color` الأحمر (red).

```js
assert($('h2').css('color') == 'rgb(255, 0, 0)');
```

# --seed--

## --seed-contents--

```html
<style type='text/scss'>


  .header{
    text-align: center;
  }
  .blog-post, h2 {
    color: red;
  }
</style>

<h1 class="header">Learn Sass</h1>
<div class="blog-post">
  <h2>Some random title</h2>
  <p>This is a paragraph with some random text in it</p>
</div>
<div class="blog-post">
  <h2>Header #2</h2>
  <p>Here is some more random text.</p>
</div>
<div class="blog-post">
  <h2>Here is another header</h2>
  <p>Even more random text within a paragraph</p>
</div>
```

# --solutions--

```html
<style type='text/scss'>
  $text-color: red;

  .header{
    text-align: center;
  }
  .blog-post, h2 {
    color: $text-color;
  }
</style>

<h1 class="header">Learn Sass</h1>
<div class="blog-post">
  <h2>Some random title</h2>
  <p>This is a paragraph with some random text in it</p>
</div>
<div class="blog-post">
  <h2>Header #2</h2>
  <p>Here is some more random text.</p>
</div>
<div class="blog-post">
  <h2>Here is another header</h2>
  <p>Even more random text within a paragraph</p>
</div>
```
