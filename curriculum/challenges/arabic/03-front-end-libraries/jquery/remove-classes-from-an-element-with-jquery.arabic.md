---
id: bad87fee1348bd9aed918626
title: Remove Classes from an Element with jQuery
required:
  - link: 'https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.2.0/animate.css'
challengeType: 6
videoUrl: ''
localeTitle: إزالة فئات من عنصر مع jQuery
---

## Description
<section id="description"> بنفس الطريقة يمكنك إضافة فئات إلى عنصر مع <code>addClass()</code> jQuery ، يمكنك إزالتها باستخدام وظيفة <code>removeClass()</code> jQuery&#39;s. فيما يلي كيفية القيام بذلك لزر محدد: <code>$(&quot;#target2&quot;).removeClass(&quot;btn-default&quot;);</code> لنقم بإزالة فئة <code>btn-default</code> من كافة عناصر <code>button</code> بنا. </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: قم بإزالة فئة <code>btn-default</code> من كافة عناصر <code>button</code> الخاصة بك.
    testString: 'assert($(".btn-default").length === 0, "Remove the <code>btn-default</code> class from all of your <code>button</code> elements.");'
  - text: استخدم jQuery فقط لإزالة هذه الفئة من العنصر.
    testString: 'assert(code.match(/btn btn-default/g), "Only use jQuery to remove this class from the element.");'
  - text: قم بإزالة فئة <code>btn-default</code> .
    testString: 'assert(code.match(/\.[\v\s]*removeClass[\s\v]*\([\s\v]*("|")\s*btn-default\s*("|")[\s\v]*\)/gm), "Only remove the <code>btn-default</code> class.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<script>
  $(document).ready(function() {
    $("button").addClass("animated bounce");
    $(".well").addClass("animated shake");
    $("#target3").addClass("animated fadeOut");

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
