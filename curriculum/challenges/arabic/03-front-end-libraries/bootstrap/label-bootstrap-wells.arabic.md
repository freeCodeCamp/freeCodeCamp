---
id: bad87fee1348bd9aec908854
title: Label Bootstrap Wells
challengeType: 0
videoUrl: ''
localeTitle: تسمية Bootstrap ويلز
---

## Description
<section id="description"> من أجل الوضوح ، دعونا تسمية كل من آبارنا مع هوياتهم. فوق بئر يسارك ، داخل عنصر <code>col-xs-6</code> <code>div</code> ، أضف عنصر <code>h4</code> بالنص <code>#left-well</code> . فوق بئر اليمين ، داخل عنصر <code>col-xs-6</code> <code>div</code> ، أضف عنصر <code>h4</code> بالنص <code>#right-well</code> . </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: أضف عنصر <code>h4</code> إلى كل عنصر من عناصر <code>&lt;div class=&quot;col-xs-6&quot;&gt;</code> .
    testString: 'assert($(".col-xs-6").children("h4") && $(".col-xs-6").children("h4").length > 1, "Add an <code>h4</code> element to each of your <code>&#60;div class="col-xs-6"&#62;</code> elements.");'
  - text: 'يجب أن يحتوي عنصر <code>h4</code> على النص <code>#left-well</code> .'
    testString: 'assert(new RegExp("#left-well","gi").test($("h4").text()), "One <code>h4</code> element should have the text <code>#left-well</code>.");'
  - text: 'يجب أن يحتوي عنصر <code>h4</code> على النص <code>#right-well</code> .'
    testString: 'assert(new RegExp("#right-well","gi").test($("h4").text()), "One <code>h4</code> element should have the text <code>#right-well</code>.");'
  - text: تأكد من أن جميع عناصر <code>h4</code> لديك علامات إغلاق.
    testString: 'assert(code.match(/<\/h4>/g) && code.match(/<h4/g) && code.match(/<\/h4>/g).length === code.match(/<h4/g).length, "Make sure all your <code>h4</code> elements have closing tags.");'

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

      <div class="well" id="left-well">
        <button class="btn btn-default target"></button>
        <button class="btn btn-default target"></button>
        <button class="btn btn-default target"></button>
      </div>
    </div>
    <div class="col-xs-6">

      <div class="well" id="right-well">
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
