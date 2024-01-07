---
id: 564944c91be2204b269d51e3
title: تغيير النص داخل عنصر باستخدام jQuery
challengeType: 6
forumTopicId: 16773
dashedName: change-text-inside-an-element-using-jquery
---

# --description--

باستخدام jQuery، يمكنك تغيير النص بين علامات البداية والنهاية لعنصر ما. يمكنك حتى تغيير علامة HTML.

jQuery لديه دالة تسمى `.html()` التي تتيح لك إضافة وسوم HTML ونص داخل عنصر ما. سيتم استبدال أي محتوى سابق داخل العنصر بالكامل بالمحتوى الذي توفره باستخدام هذه الوظيفة.

إليك كيفية إعادة الكتابة والتأكيد على نص عنواننا:

```js
$("h3").html("<em>jQuery Playground</em>");
```

jQuery لديه أيضا وظيفة مماثلة تسمى `.text()` التي تغير النص فقط دون إضافة العلامات. بعبارة أخرى، هذه الوظيفة لن تقيّم أي وسوم HTML انتقلت إليها، ولكن عوضا عن ذلك سوف يعامل كالنص الذي تريد استبدال المحتوى الحالي به.

تغيير الزر مع معرف `target4` بالتشديد على نصه.

<a href="https://www.freecodecamp.org/news/html-elements-explained-what-are-html-tags/#em-element" target="_blank" rel="noopener noreferrer nofollow">زور مقالاتنا الإخبارية &lt;em&gt;</a> لتعلم الفرق بين `<i>` و `<em>` واستخداماتها.

لاحظ أنه في حين أن العلامة `<i>` تستخدم تقليديا للتأكيد على النص، وقد اعتمد منذ ذلك الحين لاستخدامه كعلامة على الأيقونة. العلامة `<em>` مقبولة الآن على نطاق واسع بوصفها العلامة التي تحتاج إلى تأكيد. وسيعمل أي منهما على مواجهة هذا التحدي.

# --hints--

يجب أن تشدد على النص في زر `target4` الخاص بك عن طريق إضافة وسوم HTML.

```js
assert.isTrue(
  /<em>|<i>\s*#target4\s*<\/em>|<\/i>/gi.test($('#target4').html())
);
```

وخلافا لذلك، ينبغي أن يظل النص دون تغيير.

```js
assert($('#target4') && $('#target4').text().trim() === '#target4');
```

لا يجب عليك تغيير أي نص آخر.

```js
assert.isFalse(/<em>|<i>/gi.test($('h3').html()));
```

يجب أن تستخدم `.html()` وليس `.text()`.

```js
assert(code.match(/\.html\(/g));
```

يجب عليك تحديد `button id="target4"` باستخدام jQuery.

```js
assert(code.match(/\$\(\s*?(\"|\')#target4(\"|\')\s*?\)\.html\(/));
```

# --seed--

## --seed-contents--

```html
<script>
  $(document).ready(function() {
    $("#target1").css("color", "red");

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
    $("#target1").css("color", "red");
    $("#target4").html('<em>#target4</em>');
  });
</script>

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
