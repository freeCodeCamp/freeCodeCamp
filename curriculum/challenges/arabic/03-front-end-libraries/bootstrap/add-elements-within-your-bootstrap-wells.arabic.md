---
id: bad87fee1348bd9aec908849
title: Add Elements within Your Bootstrap Wells
challengeType: 0
videoUrl: ''
localeTitle: إضافة عناصر داخل الآبار Bootstrap الخاص بك
---

## Description
<section id="description"> نحن الآن عدة عناصر <code>div</code> عميقة على كل عمود في صفنا. هذا عميق كما سنحتاج. الآن يمكننا إضافة عناصر <code>button</code> . عش ثلاثة <code>button</code> العناصر داخل كل الخاص بك <code>well</code> <code>div</code> العناصر. </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: عش ثلاثة <code>button</code> العناصر داخل كل الخاص بك <code>div</code> العناصر مع الطبقة <code>well</code> .
    testString: 'assert($("div.well:eq(0)").children("button").length === 3 && $("div.well:eq(1)").children("button").length === 3, "Nest three <code>button</code> elements within each of your <code>div</code> elements with class <code>well</code>.");'
  - text: يجب أن يكون لديك ما مجموعه 6 عناصر <code>button</code> .
    testString: 'assert($("button") && $("button").length > 5, "You should have a total of 6 <code>button</code> elements.");'
  - text: ''
    testString: 'assert(code.match(/<\/button>/g) && code.match(/<button/g) && code.match(/<\/button>/g).length === code.match(/<button/g).length, "Make sure all your <code>button</code> elements have closing tags.");'

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



      </div>
    </div>
    <div class="col-xs-6">
      <div class="well">



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
