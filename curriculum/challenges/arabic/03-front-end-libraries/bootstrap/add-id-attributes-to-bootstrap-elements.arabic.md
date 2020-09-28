---
id: bad87fee1348bd9aec908853
title: Add id Attributes to Bootstrap Elements
challengeType: 0
videoUrl: ''
localeTitle: إضافة سمات المعرف إلى عناصر Bootstrap
---

## Description
<section id="description"> تذكر أنه بالإضافة إلى سمات الصف ، يمكنك إعطاء كل عنصر من <code>id</code> خاصية <code>id</code> . يجب أن يكون كل معرف فريدًا لعنصر محدد ويستخدم مرة واحدة فقط لكل صفحة. دعونا نمنح معرفًا فريدًا لكل عنصر من عناصر <code>div</code> للفئة <code>well</code> . تذكر أنه يمكنك إعطاء عنصر معرف مثل هذا: <code>&lt;div class=&quot;well&quot; id=&quot;center-well&quot;&gt;</code> أعط البئر على اليسار معرف <code>left-well</code> . اعط البئر على اليمين معرف <code>right-well</code> . </section>

## Instructions
undefined

## Tests
<section id='tests'>

```yml
tests:
  - text: ''
    testString: 'assert($(".col-xs-6").children("#left-well") && $(".col-xs-6").children("#left-well").length > 0, "Give your left <code>well</code> the id of <code>left-well</code>.");'
  - text: امنح حقك <code>well</code> معرف <code>right-well</code> .
    testString: 'assert($(".col-xs-6").children("#right-well") && $(".col-xs-6").children("#right-well").length > 0, "Give your right <code>well</code> the id of <code>right-well</code>.");'

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
      <div class="well">
        <button class="btn btn-default target"></button>
        <button class="btn btn-default target"></button>
        <button class="btn btn-default target"></button>
      </div>
    </div>
    <div class="col-xs-6">
      <div class="well">
        <button class="btn btn-default target"></button>
        <button class="btn btn-default target"></button>
        <button class="btn btn-default target"></button>
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
