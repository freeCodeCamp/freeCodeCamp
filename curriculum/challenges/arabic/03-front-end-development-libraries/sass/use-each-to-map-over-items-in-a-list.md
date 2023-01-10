---
id: 587d7dbf367417b2b2512bba
title: استخدام @each لتركيب (Map) العناصر في القائمة (List)
challengeType: 0
forumTopicId: 301461
dashedName: use-each-to-map-over-items-in-a-list
---

# --description--

وأظهر التحدي الأخير كيف يستخدم التوجيه `@for` قيمة البَدْء و النهاية لتكرار عدد معين من المرات. يوفر Sass أيضًا التوجيه `@each` الذي يدور حول كل عنصر في قائمة (list) أو مركَب (map). في كل تكرار (iteration)، يتم تعيين المتغير للقيمة الحالية من القائمة (list) أو المركَب (map).

```scss
@each $color in blue, red, green {
  .#{$color}-text {color: $color;}
}
```

المركَب لها صياغة مختلفة قليلاً. وهذا مثال على ذلك:

```scss
$colors: (color1: blue, color2: red, color3: green);

@each $key, $color in $colors {
  .#{$color}-text {color: $color;}
}
```

لاحظ أن المتغير `$key` مطلوب للإشارة إلى الهُوِيَّات (keys) في الخريطة (map). وإلا فإن CSS المنشئة (compiled) سيكون لديها `color1` و `color2`... فيها. يتم تحويل مثالي التعليمات البرمجية أعلاه إلى CSS التالية:

```scss
.blue-text {
  color: blue;
}

.red-text {
  color: red;
}

.green-text {
  color: green;
}
```

# --instructions--

كتابة توجيه `@each` الذي يمر من طريق قائمة: `blue, black, red` ويعين كل متغير إلى فئة `.color-bg`, حيث يتغير `color` الجزء لكل عنصر. يجب على كل فئة أن يعين اللون `background-color` كاللون المعني.

# --hints--

يجب أن تستخدم التعليمات البرمجية الخاصة بك توجيه `@each`.

```js
assert(code.match(/@each /g));
```

يجب أن يكون لفئة `.blue-bg` الخاص بك `background-color` باللون الأزرق.

```js
assert($('.blue-bg').css('background-color') == 'rgb(0, 0, 255)');
```

يجب أن يكون لفئة `.black-bg` الخاص بك `background-color` من الأسود.

```js
assert($('.black-bg').css('background-color') == 'rgb(0, 0, 0)');
```

يجب أن يكون لفئة `.red-bg` الخاص بك `background-color` باللون الأحمر.

```js
assert($('.red-bg').css('background-color') == 'rgb(255, 0, 0)');
```

# --seed--

## --seed-contents--

```html
<style type='text/scss'>



  div {
    height: 200px;
    width: 200px;
  }
</style>

<div class="blue-bg"></div>
<div class="black-bg"></div>
<div class="red-bg"></div>
```

# --solutions--

```html
<style type='text/scss'>

  @each $color in blue, black, red {
    .#{$color}-bg {background-color: $color;}
  }

  div {
    height: 200px;
    width: 200px;
  }
</style>

<div class="blue-bg"></div>
<div class="black-bg"></div>
<div class="red-bg"></div>
```

---

```html
<style type='text/scss'>

  $colors: (color1: blue, color2: black, color3: red);

  @each $key, $color in $colors {
    .#{$color}-bg {background-color: $color;}
  }

  div {
    height: 200px;
    width: 200px;
  }
</style>

<div class="blue-bg"></div>
<div class="black-bg"></div>
<div class="red-bg"></div>
```
