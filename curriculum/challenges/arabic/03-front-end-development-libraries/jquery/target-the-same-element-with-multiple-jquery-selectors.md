---
id: bad87fee1348bd9aed908626
title: استهدف نفس العنصر مع منتقاة jQuery متعددة
challengeType: 6
forumTopicId: 18322
required:
  - 
    link: 'https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.2.0/animate.css'
dashedName: target-the-same-element-with-multiple-jquery-selectors
---

# --description--

الآن أنت تعرف ثلاث طرق لاستهداف العناصر: حسب النوع: `$("button")`، حسب الفئة: `$(".btn")`، والمعرف `$("#target1")`.

مع أنّه من الممكن إضافة فئات متعددة في وظيفة `.addClass()`، ضيفها إلى نفس العنصر في *ثلاث طرق مختلفة*.

باستخدام `.addClass()`، أضف فئة واحد فقط في كل مرة لنفس العنصر، ثلاث طرق مختلفة:

أضف فئة `animated` إلى جميع العناصر مع نوع `button`.

أضف فئة `shake` إلى جميع العناصر مع نوع `.btn`.

إضافة فئة `btn-primary` إلى الزر مع معرف `#target1`.

**ملاحظة:** يجب أن تستهدف عنصرا واحدا فقط وأن تضيف فئة واحد في كل مرة. إجمالاً، سوف ينتهي بك الأمر إلى إضافة ثلاث فئات `shake`، و`animated`، و `btn-primary` إلى `#target1`.

# --hints--

يجب عليك استخدام منتقي `$("button")`.

```js
assert(code.match(/\$\s*?\(\s*?(?:'|")\s*?button\s*?(?:'|")/gi));
```

يجب عليك استخدام منتقي `$(".btn")`.

```js
assert(code.match(/\$\s*?\(\s*?(?:'|")\s*?\.btn\s*?(?:'|")/gi));
```

يجب عليك استخدام منتقي `$("#target1")`.

```js
assert(code.match(/\$\s*?\(\s*?(?:'|")\s*?#target1\s*?(?:'|")/gi));
```

يجب عليك إضافة فئة واحد فقط مع كل محدد من المحددات الثلاثة الخاصة بك.

```js
assert(
  code.match(/addClass/g) &&
    code.match(/addClass\s*?\(\s*?('|")\s*?[\w-]+\s*?\1\s*?\)/g).length > 2
);
```

يجب أن يحتوي عنصر `#target1` الخاص بك على الفئات `animated`, و`shake`, و `btn-primary`.

```js
assert(
  $('#target1').hasClass('animated') &&
    $('#target1').hasClass('shake') &&
    $('#target1').hasClass('btn-primary')
);
```

يجب عليك استخدام jQuery فقط لإضافة هذه الفئات إلى العنصر.

```js
assert(!code.match(/class.*animated/g));
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
    $("button").addClass("animated");
    $(".btn").addClass("shake");
    $("#target1").addClass("btn-primary");
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
