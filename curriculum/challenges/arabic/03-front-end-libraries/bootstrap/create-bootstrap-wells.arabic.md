---
id: bad87fee1348bd9aec908848
title: Create Bootstrap Wells
challengeType: 0
videoUrl: ''
localeTitle: إنشاء Bootstrap Wells
---

## Description
<section id="description"> يحتوي Bootstrap على فئة تسمى <code>well</code> يمكن أن تخلق إحساسًا بصريًا بالعمق لأعمدتك. وضع عنصر <code>div</code> واحدًا مع الصف <code>well</code> داخل كل عنصر من عناصر <code>div</code> <code>col-xs-6</code> <code>div</code> . </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: إضافة عنصر <code>div</code> مع الصف <code>well</code> داخل كل عنصر من عناصر <code>div</code> مع الفئة <code>&quot;col-xs-6&quot;</code>
    testString: 'assert($("div.col-xs-6").not(":has(>div.well)").length < 1, "Add a <code>div</code> element with the class <code>well</code> inside each of your <code>div</code> elements with the class <code>"col-xs-6"</code>");'
  - text: عش كل من عناصر <code>div</code> الخاصة بك مع الفئة <code>&quot;col-xs-6&quot;</code> داخل عنصر <code>div</code> الخاص بك مع الصف <code>&quot;row&quot;</code> .
    testString: 'assert($("div.row > div.col-xs-6").length > 1, "Nest both of your <code>div</code> elements with the class <code>"col-xs-6"</code> within your <code>div</code> element with the class <code>"row"</code>.");'
  - text: تأكد من أن جميع عناصر <code>div</code> لديك علامات إغلاق.
    testString: 'assert(code.match(/<\/div>/g) && code.match(/<div/g) && code.match(/<\/div>/g).length === code.match(/<div/g).length, "Make sure all your <code>div</code> elements have closing tags.");'

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

    </div>
    <div class="col-xs-6">

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
