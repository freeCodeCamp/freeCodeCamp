---
id: bad87fee1348bd9aed908626
title: Target the Same Element with Multiple jQuery Selectors
required:
  - link: 'https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.2.0/animate.css'
challengeType: 6
videoUrl: ''
localeTitle: ''
---

## Description
undefined

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: استخدم محدد <code>$(&quot;button&quot;)</code> .
    testString: 'assert(code.match(/\$\s*?\(\s*?(?:"|")\s*?button\s*?(?:"|")/gi), "Use the <code>$&#40"button"&#41</code> selector.");'
  - text: استخدم محدد <code>$(&quot;.btn&quot;)</code> .
    testString: 'assert(code.match(/\$\s*?\(\s*?(?:"|")\s*?\.btn\s*?(?:"|")/gi), "Use the <code>$&#40".btn"&#41</code> selector.");'
  - text: 'استخدم محدد <code>$(&quot;#target1&quot;)</code> .'
    testString: 'assert(code.match(/\$\s*?\(\s*?(?:"|")\s*?#target1\s*?(?:"|")/gi), "Use the <code>$&#40"#target1"&#41</code> selector.");'
  - text: أضف فئة واحدة فقط مع كل من الثلاثة المحددات.
    testString: 'assert(code.match(/addClass/g) && code.match(/addClass\s*?\(\s*?("|")\s*?[\w-]+\s*?\1\s*?\)/g).length > 2, "Only add one class with each of your three selectors.");'
  - text: 'يجب أن <code>#target1</code> عنصر <code>#target1</code> الخاص بك على الفئات <code>animated</code> ‚ <code>shake</code> و <code>btn-primary</code> .'
    testString: 'assert($("#target1").hasClass("animated") && $("#target1").hasClass("shake") && $("#target1").hasClass("btn-primary"), "Your <code>#target1</code> element should have the classes <code>animated</code>&#130; <code>shake</code> and <code>btn-primary</code>.");'
  - text: استخدم jQuery فقط لإضافة هذه الفئات إلى العنصر.
    testString: 'assert(!code.match(/class.*animated/g), "Only use jQuery to add these classes to the element.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<script>
  $(document).ready(function() {

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
