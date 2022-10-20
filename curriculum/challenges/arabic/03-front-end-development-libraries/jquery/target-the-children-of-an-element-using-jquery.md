---
id: bad87fee1348bd9aed208826
title: أستهدف Children لعنصر باستخدام jQuery
challengeType: 6
forumTopicId: 18320
dashedName: target-the-children-of-an-element-using-jquery
---

# --description--

عندما توضع عناصر HTML في مستوى اسفل مستوى آخر فإنهم يسمون <dfn>أبناء</dfn> ذلك العنصر. على سبيل المثال، عناصر الزر في هذا التحدي مع النص `#target1`، و`#target2`، و `#target3` هم جميع الأطفال من عنصر `<div class="well" id="left-well">`.

jQuery لديه وظيفة تسمى `children()` التي تسمح لك بالوصول إلى الأطفال من أي عنصر واختارته.

إليك مثال على كيفية استخدام وظيفة `children()` لإعطاء أطفال عنصر `left-well` اللون `blue`:

```js
$("#left-well").children().css("color", "blue")
```

# --instructions--

امنح جميع أطفال عنصر `right-well` الخاص بك اللون البرتقالي (orange).

# --hints--

جميع أطفال `#right-well` يجب أن يكون لديهم نص برتقالي.

```js
assert($('#right-well').children().css('color') === 'rgb(255, 165, 0)');
```

يجب عليك استخدام وظيفة `children()` لتعديل هذه العناصر.

```js
assert(code.match(/\.children\(\)\.css/g));
```

يجب عليك استخدام jQuery فقط لإضافة هذه الفئات إلى العنصر.

```js
assert(code.match(/<div class="well" id="right-well">/g));
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
    $("#target5").clone().appendTo("#left-well");
    $("#target1").parent().css("background-color", "red");

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
    $("#target1").parent().css("background-color", "red");
    $("#right-well").children().css("color", "orange");
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
