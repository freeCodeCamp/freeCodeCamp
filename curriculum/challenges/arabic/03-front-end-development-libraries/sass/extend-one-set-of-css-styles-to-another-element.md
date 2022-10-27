---
id: 587d7fa5367417b2b2512bbd
title: تمديد مجموعة واحدة من تصميمات CSS إلى عنصر آخر
challengeType: 0
forumTopicId: 301456
dashedName: extend-one-set-of-css-styles-to-another-element
---

# --description--

Sass لديها مزيّة تسمى `extend` التي تجعل من السهل استعارة قواعد CSS من عنصر واحد والبناء عليها في عنصر آخر.

على سبيل المثال، الكتلة أدناه من قواعد CSS تعمل على تصميم فئة `.panel`. لديه `background-color`, و `height`, و `border`.

```scss
.panel{
  background-color: red;
  height: 70px;
  border: 2px solid green;
}
```

الآن تريد لوحة أخرى تسمى `.big-panel`. لديها نفس الخصائص الأساسية مثل `.panel`، ولكنها تحتاج أيضًا إلى `width` و `font-size`. من الممكن نسخ ولصق قواعد CSS الأولية من `.panel`، ولكن التعليمات البرمجية يصبح متكرراً مع إضافة المزيد من أنواع الألواح. يكون التوجيه `extend` طريقة بسيطة لإعادة استخدام القواعد المكتوبة لعنصر واحد، ثم إضافة المزيد لعنصر آخر:

```scss
.big-panel{
  @extend .panel;
  width: 150px;
  font-size: 2em;
}
```

سيكون `.big-panel` نفس الخصائص مثل `.panel` بالإضافة إلى التصميمات الجديدة.

# --instructions--

اصنع فئة `.info-important` التي يمتد `.info` وأيضاً يحتوي على `background-color` بقيمة magenta.

# --hints--

يجب أن يكون في لفئة `info-important` الخاص بك `background-color` تعيين إلى `magenta`.

```js
assert(
  code.match(
    /\.info-important\s*?{[\s\S]*background-color\s*?:\s*?magenta\s*?;[\s\S]*}/gi
  )
);
```

يجب أن يستخدم فئة `info-important` الخاص بك `@extend` لوراثة التصميم من فئة `info`.

```js
assert(
  code.match(/\.info-important\s*?{[\s\S]*@extend\s*?.info\s*?;[\s\S]*/gi)
);
```

# --seed--

## --seed-contents--

```html
<style type='text/scss'>
  h3{
    text-align: center;
  }
  .info{
    width: 200px;
    border: 1px solid black;
    margin: 0 auto;
  }




</style>
<h3>Posts</h3>
<div class="info-important">
  <p>This is an important post. It should extend the class ".info" and have its own CSS styles.</p>
</div>

<div class="info">
  <p>This is a simple post. It has basic styling and can be extended for other uses.</p>
</div>
```

# --solutions--

```html
<style type='text/scss'>
  h3{
    text-align: center;
  }
  .info{
    width: 200px;
    border: 1px solid black;
    margin: 0 auto;
  }
  .info-important{
    @extend .info;
    background-color: magenta;
  }



</style>
<h3>Posts</h3>
<div class="info-important">
  <p>This is an important post. It should extend the class ".info" and have its own CSS styles.</p>
</div>

<div class="info">
  <p>This is a simple post. It has basic styling and can be extended for other uses.</p>
</div>
```
