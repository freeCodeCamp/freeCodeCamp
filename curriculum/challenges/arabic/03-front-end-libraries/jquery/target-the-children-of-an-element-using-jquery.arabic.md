---
id: bad87fee1348bd9aed208826
title: Target the Children of an Element Using jQuery
challengeType: 6
videoUrl: ''
localeTitle: استهدف أطفال عنصر باستخدام jQuery
---

## Description
<section id="description"> عندما يتم وضع عناصر HTML في مستوى واحد تحت مستوى آخر ، يتم تسمية <code>children</code> هذا العنصر. على سبيل المثال ، عناصر الزر في هذا التحدي بالنص &quot;# target1&quot; و &quot;# target2&quot; و &quot;# target3&quot; كلها <code>children</code> من عنصر <code>&lt;div class=&quot;well&quot; id=&quot;left-well&quot;&gt;</code> . jQuery لديه وظيفة تسمى <code>children()</code> تسمح لك بالوصول إلى أطفال أي عنصر قمت بتحديده. في ما يلي مثال على كيفية استخدامك الدالة <code>children()</code> لمنح أطفال عنصر <code>left-well</code> اللون <code>blue</code> : <code>$(&quot;#left-well&quot;).children().css(&quot;color&quot;, &quot;blue&quot;)</code> </section>

## Instructions
<section id="instructions"> امنح جميع أطفال عنصر <code>right-well</code> اللون باللون البرتقالي. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 'يجب أن يكون لدى جميع أطفال <code>#right-well</code> نص برتقالي.'
    testString: 'assert($("#right-well").children().css("color") === "rgb(255, 165, 0)", "All children of <code>#right-well</code> should have orange text.");'
  - text: ''
    testString: 'assert(code.match(/\.children\(\)\.css/g), "You should use the <code>children&#40&#41</code> function to modify these elements.");'
  - text: استخدم jQuery فقط لإضافة هذه الفئات إلى العنصر.
    testString: 'assert(code.match(/<div class="well" id="right-well">/g), "Only use jQuery to add these classes to the element.");'

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
    $("#target5").clone().appendTo("#left-well");
    $("#target1").parent().css("background-color", "red");

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
