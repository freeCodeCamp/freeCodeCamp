---
id: bad87fee1348bd9bedc08826
title: Target HTML Elements with Selectors Using jQuery
required:
  - link: 'https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.2.0/animate.css'
challengeType: 6
videoUrl: ''
localeTitle: عناصر HTML الهدف مع المحددات باستخدام jQuery
---

## Description
<section id="description"> الآن لدينا <code>document ready function</code> . الآن دعونا نكتب أول بيان jQuery الخاص بي. تبدأ جميع وظائف jQuery بـ <code>$</code> ، يشار إليه عادةً <code>dollar sign operator</code> ، أو <code>bling</code> . غالبًا ما يحدد jQuery عنصر HTML مع <code>selector</code> ، ثم يقوم بشيء لهذا العنصر. على سبيل المثال، دعونا جعل كل من لديك <code>button</code> عناصر ترتد. ما عليك <code>$(&quot;button&quot;).addClass(&quot;animated bounce&quot;);</code> إضافة هذا الرمز داخل الدالة الجاهزة للمستند: <code>$(&quot;button&quot;).addClass(&quot;animated bounce&quot;);</code> لاحظ أننا قمنا بالفعل بتضمين مكتبة jQuery ومكتبة Animate.css في الخلفية حتى يمكنك استخدامها في المحرر. لذا فأنت تستخدم jQuery لتطبيق فئة <code>bounce</code> Animate.css على عناصر <code>button</code> . </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: استخدم الدالة jQuery <code>addClass()</code> لإعطاء الطبقات <code>animated</code> <code>bounce</code> إلى عناصر <code>button</code> .
    testString: 'assert($("button").hasClass("animated") && $("button").hasClass("bounce"), "Use the jQuery <code>addClass&#40&#41</code> function to give the classes <code>animated</code> and <code>bounce</code> to your <code>button</code> elements.");'
  - text: استخدم jQuery فقط لإضافة هذه الألوان إلى العنصر.
    testString: 'assert(!code.match(/class.*animated/g), "Only use jQuery to add these colors to the element.");'
  - text: يجب أن يكون رمز jQuery الخاص بك ضمن <code>$(document).ready();</code> وظيفة.
    testString: 'assert(code.match(/\$\(document\)\.ready\(function.*(\s|\n)*.*button.*.addClass.*\);/g), "Your jQuery code should be within the <code>$(document).ready();</code> function.");'

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
