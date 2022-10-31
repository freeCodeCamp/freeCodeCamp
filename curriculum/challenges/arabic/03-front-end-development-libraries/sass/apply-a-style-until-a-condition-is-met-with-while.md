---
id: 587d7dbf367417b2b2512bbb
title: تطبيق التصميم (Style) حتى يتم تلبية الشرط مع @while
challengeType: 0
forumTopicId: 301454
dashedName: apply-a-style-until-a-condition-is-met-with-while
---

# --description--

التوجيه `@while` هو خِيار له وظيفة مشابهة لوظيفة `while` إلى JavaScript loop. أنشئ قواعد CSS حتى يتم تحقيق الشرط.

وأعطى تحدي `@for` مثالاً لإنشاء نظام شبكي (grid) بسيط. يمكن أن يعمل هذا أيضًا مع `@while`.

```scss
$x: 1;
@while $x < 13 {
  .col-#{$x} { width: 100%/12 * $x;}
  $x: $x + 1;
}
```

أولا، حدد متغير `$x` وقيمته إلى 1. بعد ذلك، استخدم توجيه `@while` لإنشاء نظام الشبكة (grid), *بينما* يكون `$x` أقل من 13. بعد تعيين قاعدة CSS إلى `width`، و`$x` يتم زيادتها ب 1 لتجنب حلقة لا محدود (infinite loop).

# --instructions--

استخدم `@while` لإنشاء سلسلة من الفئات مع `font-sizes` مختلفة.

يجب أن يكون هناك 5 فئات مختلفة من `text-1` إلى `text-5`. ثم عيّن `font-size` إلى `15px` مضروباً في الرَّقَم الترتيبي الحالي (index number). تيقن من تجنب الحلقة اللانهائية (infinite loop)!

# --hints--

يجب أن تستخدم التعليمات البرمجية الخاصة بك توجيه `@while`.

```js
assert(code.match(/@while /g));
```

يجب أن تستخدم التعليمات البرمجية الخاصة بك متغير الترتيب يبدأ عند ترتيب من 1.

```js
assert(code.match(/\$.*:\s*?1;/gi));
```

الكود الخاص بك يجب أن يزيد متغير العداد.

```js
assert(code.match(/\$(.*)\s*?:\s*\$\1\s*\+\s*1\s*;/gi));
```

يجب أن يكون للفئة `.text-1` الخاص بك `font-size` بقيمة `15px`.

```js
assert($('.text-1').css('font-size') == '15px');
```

يجب أن يكون للفئة `.text-2` الخاص بك `font-size` بقيمة `30px`.

```js
assert($('.text-2').css('font-size') == '30px');
```

يجب أن يكون للفئة `.text-3` الخاص بك `font-size` بقيمة `45px`.

```js
assert($('.text-3').css('font-size') == '45px');
```

يجب أن يكون للفئة `.text-4` الخاص بك `font-size` بقيمة `60px`.

```js
assert($('.text-4').css('font-size') == '60px');
```

يجب أن يكون للفئة `.text-5` الخاص بك `font-size` بقيمة `75px`.

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
  $x: 1;
  @while $x < 6 {
    .text-#{$x}{
      font-size: 15px * $x;
    }
    $x: $x + 1;
  }
</style>

<p class="text-1">Hello</p>
<p class="text-2">Hello</p>
<p class="text-3">Hello</p>
<p class="text-4">Hello</p>
<p class="text-5">Hello</p>
```
