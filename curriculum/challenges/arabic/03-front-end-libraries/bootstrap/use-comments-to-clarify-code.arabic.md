---
id: bad87fee1348bd9aec908857
title: Use Comments to Clarify Code
challengeType: 0
videoUrl: ''
localeTitle: ''
---

## Description
<section id="description"> عندما نبدأ باستخدام jQuery ، سنقوم بتعديل عناصر HTML دون الحاجة إلى تغييرها فعليًا في HTML. دعونا نتأكد من أن الجميع يعرف أنه لا يجب عليهم تعديل أي من هذه الشفرات بشكل مباشر. تذكر أنه يمكنك بدء تعليق باستخدام <code>&lt;!--</code> وإنهاء تعليق باستخدام <code>--&gt;</code> إضافة تعليق أعلى HTML الخاص بك يقول <code>Only change code above this line.</code> </section>

## Instructions
undefined

## Tests
<section id='tests'>

```yml
tests:
  - text: بدء تعليق مع <code>&lt;!--</code> في أعلى HTML الخاص بك.
    testString: 'assert(code.match(/^\s*<!--/), "Start a comment with <code>&#60;!--</code> at the top of your HTML.");'
  - text: يجب أن يكون تعليقك على النص <code>Only change code above this line</code> .
    testString: 'assert(code.match(/<!--(?!(>|->|.*-->.*this line))\s*.*this line.*\s*-->/gi), "Your comment should have the text <code>Only change code above this line</code>.");'
  - text: تأكد من إغلاق تعليقك <code>--&gt;</code> .
    testString: 'assert(code.match(/-->.*\n+.+/g), "Be sure to close your comment with <code>--&#62;</code>.");'
  - text: يجب أن يكون لديك نفس العدد من الفتاحات والإغلاق.
    testString: 'assert(code.match(/<!--/g).length === code.match(/-->/g).length, "You should have the same number of comment openers and closers.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
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
