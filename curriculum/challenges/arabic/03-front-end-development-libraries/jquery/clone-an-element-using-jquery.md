---
id: bad87fee1348bd9aed508826
title: استنساخ عنصر باستخدام jQuery
challengeType: 6
forumTopicId: 16780
dashedName: clone-an-element-using-jquery
---

# --description--

بالإضافة إلى نقل العناصر، يمكنك أيضا نسخها من مكان إلى آخر.

jQuery لديه عملية تسمى `clone()` التي تقوم بنسخة من عنصر.

على سبيل المثال، إذا أردنا نسخ `target2` من `left-well` إلى `right-well`، سنستخدم:

```js
$("#target2").clone().appendTo("#right-well");
```

هل لاحظت أن هذا ينطوي على تثبيت وظيفتين من دالات jQuery معاً؟ هذا يسمى <dfn>سلسلة وظائف</dfn> وهي طريقة مناسبة لعمل المهام باستخدام jQuery.

استنسخ عنصر `target5` وبعده `left-well` الخاص بك.

# --hints--

عنصر `target5` الخاص بك يجب أن يكون داخل `right-well` الخاص بك.

```js
assert($('#right-well').children('#target5').length > 0);
```

يجب أن تكون نسخة من عنصر `target5` داخل `left-well`.

```js
assert($('#left-well').children('#target5').length > 0);
```

يجب عليك استخدام jQuery فقط لنقل هذه العناصر.

```js
assert(!code.match(/class.*animated/g));
```

# --seed--

## --seed-contents--

```html
<script>
  $(document).ready(function() {
    $("#target1").css("color", "red");
    $("#target1").prop("disabled", true);
    $("#target4").remove();
    $("#target2").appendTo("#right-well");

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
    $("#target1").css("color", "red");
    $("#target1").prop("disabled", true);
    $("#target4").remove();
    $("#target2").appendTo("#right-well");
    $("#target5").clone().appendTo("#left-well");
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
