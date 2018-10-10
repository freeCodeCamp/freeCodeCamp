---
id: bad87fee1348bd9aed508826
title: Clone an Element Using jQuery
challengeType: 6
videoUrl: ''
localeTitle: ''
---

## Description
<section id="description"> بالإضافة إلى نقل العناصر ، يمكنك أيضًا نسخها من مكان إلى آخر. jQuery يحتوي على وظيفة تسمى <code>clone()</code> التي تجعل نسخة من عنصر. على سبيل المثال ، إذا أردنا نسخ <code>target2</code> من <code>left-well</code> إلى <code>$(&quot;#target2&quot;).clone().appendTo(&quot;#right-well&quot;);</code> <code>right-well</code> ، فسوف نستخدم: <code>$(&quot;#target2&quot;).clone().appendTo(&quot;#right-well&quot;);</code> هل لاحظت هذا ينطوي على الالتصاق اثنين من وظائف jQuery معا؟ وهذا ما يسمى <code>function chaining</code> وهي طريقة ملائمة لإنجاز المهام باستخدام jQuery. <code>target5</code> عنصر <code>target5</code> <code>left-well</code> . </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: يجب أن يكون عنصر <code>target5</code> داخل <code>right-well</code> .
    testString: 'assert($("#right-well").children("#target5").length > 0, "Your <code>target5</code> element should be inside your <code>right-well</code>.");'
  - text: يجب أيضًا أن تكون نسخة من عنصر <code>target5</code> داخل <code>target5</code> <code>left-well</code> .
    testString: 'assert($("#left-well").children("#target5").length > 0, "A copy of your <code>target5</code> element should also be inside your <code>left-well</code>.");'
  - text: ''
    testString: 'assert(!code.match(/class.*animated/g), "Only use jQuery to move these elements.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<script>
  $(document).ready(function() {
    $("#target1").css("color", "red");
    $("#target1").prop("disabled", true);
    $("#target4").remove();
    $("#target2").appendTo("#right-well");

  });
</script>

<!-- Only change code above this line. -->

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

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
