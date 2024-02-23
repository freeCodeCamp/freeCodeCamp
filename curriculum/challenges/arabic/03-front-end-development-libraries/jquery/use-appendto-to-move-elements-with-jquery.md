---
id: bad87fee1348bd9aed608826
title: استخدام appendTo لنقل العناصر باستخدام jQuery
challengeType: 6
forumTopicId: 18340
dashedName: use-appendto-to-move-elements-with-jquery
---

# --description--

الآن دعونا نحاول نقل العناصر من `div` إلى آخر.

jQuery لديه وظيفة تسمى `appendTo()` التي تسمح لك بتحديد عناصر HTML وإلحاقها بعنصر آخر.

على سبيل المثال، إذا أردنا نقل `target4` من right well إلى left well سنستخدم:

```js
$("#target4").appendTo("#left-well");
```

نقل عنصر `target2` الخاص بك من `left-well` إلى `right-well`.

# --hints--

يجب ألا يكون عنصر `target2` الخاص بك داخل `left-well`.

```js
assert($('#left-well').children('#target2').length === 0);
```

عنصر `target2` الخاص بك يجب أن يكون داخل `right-well` الخاص بك.

```js
assert($('#right-well').children('#target2').length > 0);
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
