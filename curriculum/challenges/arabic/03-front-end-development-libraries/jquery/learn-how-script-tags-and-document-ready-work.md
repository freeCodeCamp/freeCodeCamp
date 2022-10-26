---
id: bad87fee1348bd9acdd08826
title: تعلم كيف يمكن وضع علامات Script وعمل Document محضرا
challengeType: 6
forumTopicId: 18224
dashedName: learn-how-script-tags-and-document-ready-work
---

# --description--

نحن الآن مستعدون لتعلم jQuery، أداة JavaScript الأكثر شعبية في جميع الأوقات.

قبل أن نتمكن من استخدام jQuery، نحتاج إلى إضافة بعض الأشياء إلى HTML.

أولا، إضافة عنصر `script` في الجزء العلوي من الصفحة. تيقن من إغلاقه على السطر التالي.

سيقوم متصفحك بتشغيل أي JavaScript داخل عنصر `script`، بما في ذلك jQuery.

في داخل عنصر البرنامَج `script` الخاص بك، أضف هذا الرمز: `$(document).ready(function() {` إلى `script` الخاص بك. ثم أغلقه على السطر التالي (لا يزال داخل عنصر `script` الخاص بك) مع: `});`

سنتعلم المزيد عن `functions` لاحقاً. الشيء المهم الذي يجب أن نعلمه هو أن التعليمات البرمجية التي تضعها داخل هذه `function` سيتم تشغيلها بمجرد أن يقوم المتصفح بتحميل صفحتك.

هذا مهم لأنه دون أن يعمل `document ready function`, قد يعمل تعليماتك البرمجية قبل أن يتم تقديم HTML الخاص بك، ما من شأنه أن يسبب أخطاء.

# --hints--

يجب عليك إنشاء `script` للتأكد من أنه صالح ولديه علامة إغلاق.

```js
assert(
  code.match(/<\/script\s*>/g) &&
    code.match(
      /<script(\sasync|\sdefer)*(\s(charset|src|type)\s*=\s*["\"]+[^"\"]*["\"]+)*(\sasync|\sdefer)*\s*>/g
    ) &&
    code.match(/<\/script\s*>/g).length ===
      code.match(
        /<script(\sasync|\sdefer)*(\s(charset|src|type)\s*=\s*["\"]+[^"\"]*["\"]+)*(\sasync|\sdefer)*\s*>/g
      ).length
);
```

يجب عليك إضافة `$(document).ready(function() {` إلى بداية عنصر `script` الخاص بك.

```js
assert(
  code.match(
    /\$\s*?\(\s*?document\s*?\)\.ready\s*?\(\s*?function\s*?\(\s*?\)\s*?\{/g
  )
);
```

يجب عليك إغلاق وظيفة `$(document).ready(function() {` مع `});`

```js
assert(code.match(/\n*?\s*?\}\s*?\);/g));
```

# --seed--

## --seed-contents--

```html
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
