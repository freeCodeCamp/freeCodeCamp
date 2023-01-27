---
id: bad87fee1348bd9aedc08826
title: أستهدف عناصر بواسطة الفئة باستخدام jQuery
challengeType: 6
forumTopicId: 18316
required:
  - 
    link: 'https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.2.0/animate.css'
dashedName: target-elements-by-class-using-jquery
---

# --description--

هل تُرَى كيف ربط جميع عناصر `button` الخاص بك؟ لقد اخترناهم `$("button")`، ثم أضفنا لهم بعض فئات CSS مع `.addClass("animated bounce");`.

لقد استخدمت للتو وظائف jQuery باسم `.addClass()`، التي تسمح لك بإضافة فئات إلى العناصر.

أولا، دعونا نستهدف عناصر `div` مع الفئة `well` باستخدام منتقي `$(".well")`.

لاحظ ذلك، تماما مثل إعلانات CSS، يمكنك كتابة `.` قبل اسم الفئة.

ثم استخدم وظيفة jQuery باسم `.addClass()` لإضافة الفئات `animated` و `shake`.

على سبيل المثال يمكنك أن تجعل جميع العناصر `text-primary` تهتز بواسطة إضافة ما يلي إلى `document ready function` الخاصة بك:

```js
$(".text-primary").addClass("animated shake");
```

# --hints--

يجب عليك استخدام وظيفة jQuery باسم `addClass()` لإعطاء الفئات `animated` و `shake` لجميع العناصر الخاصة بك مع الفئة `well`.

```js
assert($('.well').hasClass('animated') && $('.well').hasClass('shake'));
```

يجب عليك استخدام jQuery فقط لإضافة هذه الفئات إلى العنصر.

```js
assert(!code.match(/class\.\*animated/g));
```

# --seed--

## --seed-contents--

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

# --solutions--

```html
<script>
  $(document).ready(function() {
    $("button").addClass("animated bounce");
    $(".well").addClass("animated shake");
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
