---
id: bad87fee1348bd9aed608826
title: Use appendTo to Move Elements with jQuery
challengeType: 6
videoUrl: ''
localeTitle: استخدم appendTo لنقل العناصر باستخدام jQuery
---

## Description
<section id="description"> الآن دعنا نحاول نقل العناصر من <code>div</code> إلى آخر. يحتوي jQuery على وظيفة تسمى <code>appendTo()</code> تسمح لك بتحديد عناصر HTML <code>appendTo()</code> بعنصر آخر. على سبيل المثال ، إذا أردنا نقل <code>target4</code> من اليمين إلى اليسار بشكل جيد ، <code>$(&quot;#target4&quot;).appendTo(&quot;#left-well&quot;);</code> : <code>$(&quot;#target4&quot;).appendTo(&quot;#left-well&quot;);</code> انقل عنصر <code>target2</code> من <code>left-well</code> <code>right-well</code> . </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: يجب ألا يكون عنصر <code>target2</code> داخل <code>target2</code> <code>left-well</code> .
    testString: 'assert($("#left-well").children("#target2").length === 0, "Your <code>target2</code> element should not be inside your <code>left-well</code>.");'
  - text: يجب أن يكون عنصر <code>target2</code> داخل <code>right-well</code> .
    testString: 'assert($("#right-well").children("#target2").length > 0, "Your <code>target2</code> element should be inside your <code>right-well</code>.");'
  - text: استخدم jQuery فقط لنقل هذه العناصر.
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
