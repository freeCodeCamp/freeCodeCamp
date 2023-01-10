---
id: 587d7dbe367417b2b2512bb9
title: استخدم @for لأنشاء حلقة Sass
challengeType: 0
forumTopicId: 301462
dashedName: use-for-to-create-a-sass-loop
---

# --description--

يضيف التوجيه `@for` لتصميم بواسطة حلقة (loop)، شبيهة `for` جداً لحلقة (loop) في JavaScript.

`@for` يستخدم بطريقتين: "start through end" أو "start to end". الفرق الرئيس هو أن "بداية **إلى** نهاية" *يستبعد* الرَّقَم النهائي كجزء من العد، و "ابدأ **حتى** نهاية" *يتضمن* الرَّقَم النهائي كجزء من العد.

إليك بداية **حتى** مثال نهاية:

```scss
@for $i from 1 through 12 {
  .col-#{$i} { width: 100%/12 * $i; }
}
```

جزء `#{$i}` هو بناء الجملة للجمع بين المتغير (`i`) مع النص لنشئ string. عندما يتم تحويل مِلَفّ Sass إلى CSS، يبدو كذلك:

```scss
.col-1 {
  width: 8.33333%;
}

.col-2 {
  width: 16.66667%;
}

...

.col-12 {
  width: 100%;
}
```

هذه طريقة قوية لإنشاء تخطيط شبكي (grid layout). الآن لديك 12 خياراً لعرض الأعمدة المتاحة كفئات CSS.

# --instructions--

كتابة توجيه `@for` الذي يأخذ متغير `$j` الذي ينتقل من 1 **إلى** 6.

يجب أن ينشئ 5 فئات تسمى `.text-1` إلى `.text-5` حيث كل واحد لديه `font-size` بقيمه 15px مضروبة بالترتيب.

# --hints--

يجب أن تستخدم التعليمات البرمجية الخاصة بك توجيه `@for`.

```js
assert(code.match(/@for /g));
```

يجب أن يكون للفئة `.text-1` الخاص بك `font-size` بقيمة 15px.

```js
assert($('.text-1').css('font-size') == '15px');
```

يجب أن يكون للفئة `.text-2` الخاص بك `font-size` بقيمة 30px.

```js
assert($('.text-2').css('font-size') == '30px');
```

يجب أن يكون للفئة `.text-3` الخاص بك `font-size` بقيمة 45px.

```js
assert($('.text-3').css('font-size') == '45px');
```

يجب أن يكون للفئة `.text-4` الخاص بك `font-size` بقيمة 60px.

```js
assert($('.text-4').css('font-size') == '60px');
```

يجب أن يكون للفئة `.text-5` الخاص بك `font-size` بقيمة 75px.

```js
assert($('.text-5').css('font-size') == '75px');
```

# --seed--

## --seed-contents--

```html
<style type='text/scss'>



</style>

<p class="text-1">Hello</p>
<p class="text-2">Hello</p>
<p class="text-3">Hello</p>
<p class="text-4">Hello</p>
<p class="text-5">Hello</p>
```

# --solutions--

```html
<style type='text/scss'>

@for $i from 1 through 5 {
  .text-#{$i} { font-size: 15px * $i; }
}

</style>

<p class="text-1">Hello</p>
<p class="text-2">Hello</p>
<p class="text-3">Hello</p>
<p class="text-4">Hello</p>
<p class="text-5">Hello</p>
```

---

```html
<style type='text/scss'>

@for $i from 1 to 6 {
  .text-#{$i} { font-size: 15px * $i; }
}

</style>

<p class="text-1">Hello</p>
<p class="text-2">Hello</p>
<p class="text-3">Hello</p>
<p class="text-4">Hello</p>
<p class="text-5">Hello</p>
```
