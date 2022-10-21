---
id: bad87fee1348bd9aed308826
title: أستهدف Parent لعنصر باستخدام jQuery
challengeType: 6
forumTopicId: 18321
dashedName: target-the-parent-of-an-element-using-jquery
---

# --description--

يحتوي كل عنصر HTML على عنصر `parent` الذي `inherits` خصائص.

على سبيل المثال يحتوي `jQuery Playground` على عنصر `h3` يكون الأبُ لعنصر `<div class="container-fluid">`، الذي نفسه يملك الأبُ `body`.

jQuery لديه وظيفة تسمى `parent()` التي تسمح لك بالوصول إلى الأبُ من أي عنصر واختارته.

إليك مثال على كيفية استخدام الوظيفة `parent()` إذا كنت ترغب في إعطاء العنصر الأبُ في `left-well` لون خلفية (background color) باللون الأزرق (blue):

```js
$("#left-well").parent().css("background-color", "blue")
```

اعطِ الأبُ للعنصر `#target1` لون خلفية (background-color) باللون الأحمر (red).

# --hints--

يجب أن يكون عنصر `left-well` الخاص بك لون خلفية أحمر.

```js
assert(
  $('#left-well').css('background-color') === 'red' ||
    $('#left-well').css('background-color') === 'rgb(255, 0, 0)' ||
    $('#left-well').css('background-color').toLowerCase() === '#ff0000' ||
    $('#left-well').css('background-color').toLowerCase() === '#f00'
);
```

يجب عليك استخدام وظيفة `.parent()` لتعديل هذا العنصر.

```js
assert(code.match(/\.parent\s*\(\s*\)\s*\.css/g));
```

يجب استدعاء طريقة `.parent()` على عنصر `#target1`.

```js
assert(
  code.match(/\$\s*?\(\s*?(?:'|")\s*?#target1\s*?(?:'|")\s*?\)\s*?\.parent/gi)
);
```

يجب عليك استخدام jQuery فقط لإضافة هذه الفئات إلى العنصر.

```js
assert(code.match(/<div class="well" id="left-well">/g));
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

  });
</script>

<!-- Only change code above this line -->

<body>
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
</body>
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
  });
</script>

<!-- Only change code above this line -->

<body>
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
</body>
```
