---
id: bad87fee1348bd9bedc08826
title: استهداف عناصر HTML مع منتقاة باستخدام jQuery
challengeType: 6
forumTopicId: 18319
required:
  - 
    link: 'https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.2.0/animate.css'
dashedName: target-html-elements-with-selectors-using-jquery
---

# --description--

الآن لدينا وظيفة `document ready` جاهزة.

الآن دعونا نكتب أول بيان jQuery لدينا. تبدأ جميع وظائف jQuery بعلامة `$`، يشار إليها عادة كعملية علامة الدولار، أو سلسلة (bling).

غالباً ما يقوم jQuery بتحديد عنصر HTML مع <dfn>منتقي</dfn>، ثم يقوم بشيء لهذا العنصر.

على سبيل المثال، أجعل كل عناصر `button` الخاص بك مرتدة. فقط أضف هذا الرمز داخل وظيفة الوثيقة الجاهزة:

```js
$("button").addClass("animated bounce");
```

لاحظ أننا قد قمنا فعلًا بإدراج مكتبة jQuery ومكتبة Animate.css في الخلفية حتى يمكنك استخدامهما في المحرر (editor). إذاً أنت تستخدم jQuery لتطبيق فئة `bounce` إلى عناصر `button` الخاص بك.

# --hints--

يجب عليك استخدام وظيفة jQuery باسم `addClass()` لإعطاء الفئات `animated` و `bounce` إلى عناصر `button`.

```js
assert($('button').hasClass('animated') && $('button').hasClass('bounce'));
```

يجب عليك استخدام jQuery فقط لإضافة هذه الفئات إلى العنصر.

```js
assert(!code.match(/class.*animated/g));
```

يجب أن يكون رمز jQuery الخاص بك ضمن الوظيفة `$(document).ready();`.

```js
assert(
  code.replace(/\s/g, '').match(/\$\(document\)\.ready\(function\(\)\{\$/g)
);
```

# --seed--

## --seed-contents--

```html
<script>
  $(document).ready(function() {

  });
</script>

<!-- Only change code above this line -->

<div class="container-fluid">
  <h3 class="text-primary text-center">jQuery Playground</h3>
  <div class="row">
    <div class="col-xs-6">
      <h4>#left-well</h4>
      <div class="well" id="left-well">
        <button class="btn btn-default target" id="target1">#target1</button>
        <button class="btn btn-default target" id="target2">#target2</button>
        <button class="btn btn-default target" id="target3">#target3</button>
      </div>
    </div>
    <div class="col-xs-6">
      <h4>#right-well</h4>
      <div class="well" id="right-well">
        <button class="btn btn-default target" id="target4">#target4</button>
        <button class="btn btn-default target" id="target5">#target5</button>
        <button class="btn btn-default target" id="target6">#target6</button>
      </div>
    </div>
  </div>
</div>
```

# --solutions--

```html
<script>
  $(document).ready(function() {
    $("button").addClass("animated bounce");
  });
</script>

<!-- Only change code above this line -->

<div class="container-fluid">
  <h3 class="text-primary text-center">jQuery Playground</h3>
  <div class="row">
    <div class="col-xs-6">
      <h4>#left-well</h4>
      <div class="well" id="left-well">
        <button class="btn btn-default target" id="target1">#target1</button>
        <button class="btn btn-default target" id="target2">#target2</button>
        <button class="btn btn-default target" id="target3">#target3</button>
      </div>
    </div>
    <div class="col-xs-6">
      <h4>#right-well</h4>
      <div class="well" id="right-well">
        <button class="btn btn-default target" id="target4">#target4</button>
        <button class="btn btn-default target" id="target5">#target5</button>
        <button class="btn btn-default target" id="target6">#target6</button>
      </div>
    </div>
  </div>
</div>
```
