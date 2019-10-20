---
id: 564944c91be2204b269d51e3
title: Change Text Inside an Element Using jQuery
challengeType: 6
videoUrl: ''
localeTitle: ''
---

## Description
<section id="description"> باستخدام jQuery ، يمكنك تغيير النص بين علامات البداية والنهاية للعنصر. يمكنك حتى تغيير ترميز HTML. يحتوي jQuery على وظيفة تسمى <code>.html()</code> تسمح لك بإضافة علامات HTML ونص داخل عنصر. سيتم استبدال أي محتوى سابق داخل العنصر تمامًا بالمحتوى الذي تقدمه باستخدام هذه الوظيفة. فيما يلي كيفية كتابة نص عنواننا والتأكيد عليه: <code>$(&quot;h3&quot;).html(&quot;&lt;em&gt;jQuery Playground&lt;/em&gt;&quot;);</code> يحتوي jQuery أيضًا على دالة مشابهة تُسمى <code>.text()</code> تقوم فقط بتغيير النص دون إضافة علامات. بمعنى آخر ، لن تقوم هذه الوظيفة بتقييم أية علامات HTML تم تمريرها إليها ، ولكن بدلاً من ذلك ستعاملها على أنها النص الذي تريد استبدال المحتوى الموجود به. تغيير الزر مع معرف <code>target4</code> بواسطة التأكيد على النص الخاص به. تحقق هذا <a href="https://developer.mozilla.org/en/docs/Web/HTML/Element/em" target="_blank">الرابط</a> لمعرفة المزيد حول الفرق بين <code>&lt;i&gt;</code> و <code>&lt;em&gt;</code> واستخداماتها. لاحظ أنه في حين تم استخدام العلامة <code>&lt;i&gt;</code> للتأكيد على النص ، فقد تم استخدامه منذ ذلك الحين كعلامة للأيقونات. أصبحت العلامة <code>&lt;em&gt;</code> الآن مقبولة على نطاق واسع كعلامة للتأكيد. إما أن تعمل من أجل هذا التحدي. </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: قم <code>target4</code> النص الموجود في الزر <code>target4</code> الخاص بك بإضافة علامات HTML.
    testString: 'assert.isTrue((/<em>|<i>\s*#target4\s*<\/em>|<\/i>/gi).test($("#target4").html()), "Emphasize the text in your <code>target4</code> button by adding HTML tags.");'
  - text: تأكد من أن النص لم يتغير.
    testString: 'assert($("#target4") && $("#target4").text().trim() === "#target4", "Make sure the text is otherwise unchanged.");'
  - text: ''
    testString: 'assert.isFalse((/<em>|<i>/gi).test($("h3").html()), "Do not alter any other text.");'
  - text: تأكد من أنك تستخدم <code>.html()</code> وليس <code>.text()</code> .
    testString: 'assert(code.match(/\.html\(/g), "Make sure you are using <code>.html()</code> and not <code>.text()</code>.");'
  - text: ''
    testString: 'assert(code.match(/\$\(\s*?(\"|\")#target4(\"|\")\s*?\)\.html\(/), "Make sure to select <code>button id="target4"</code> with jQuery.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<script>
  $(document).ready(function() {
    $("#target1").css("color", "red");

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
