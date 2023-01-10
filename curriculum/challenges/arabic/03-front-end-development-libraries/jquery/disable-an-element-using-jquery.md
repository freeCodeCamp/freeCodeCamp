---
id: bad87fee1348bd9aed808826
title: تعطيل عنصر باستخدام jQuery
challengeType: 6
forumTopicId: 17563
dashedName: disable-an-element-using-jquery
---

# --description--

يمكنك أيضًا تغيير الخصائص non-CSS لعناصر HTML باستخدام jQuery. على سبيل المثال، يمكنك تعطيل الأزرار.

عندما تعطيل الزر، فإنه سيصبح رماديًا ولا يمكن النقر عليه بعد الآن.

jQuery لديه وظيفة تسمى `.prop()` تسمح لك بضبط خصائص العناصر.

إليك كيف يمكنك تعطيل جميع الأزرار:

```js
$("button").prop("disabled", true);
```

تعطيل زر `target1` فقط.

# --hints--

يجب تعطيل زر `target1` الخاص بك.

```js
assert(
  $('#target1') &&
    $('#target1').prop('disabled') &&
    code.match(/["']disabled["'],( true|true)/g)
);
```

لا يجب تعطيل أي أزرار أخرى.

```js
assert($('#target2') && !$('#target2').prop('disabled'));
```

يجب عليك استخدام jQuery فقط لإضافة هذه الفئات إلى العنصر.

```js
assert(!code.match(/disabled[^<]*>/g));
```

# --seed--

## --seed-contents--

```html
<script>
  $(document).ready(function() {
    $("#target1").css("color", "red");

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
