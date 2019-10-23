---
id: bad87fee1348bd9bec908846
title: Create a Bootstrap Row
challengeType: 0
videoUrl: ''
localeTitle: ''
---

## Description
<section id="description"> سنقوم الآن بإنشاء صف Bootstrap لعناصر المضمنة الخاصة بنا. أنشئ عنصر <code>div</code> أسفل علامة <code>h3</code> ، مع فئة <code>row</code> . </section>

## Instructions
undefined

## Tests
<section id='tests'>

```yml
tests:
  - text: أضف عنصر <code>div</code> أسفل عنصر <code>h3</code> .
    testString: 'assert(($("div").length > 1) && ($("div.row h3.text-primary").length == 0) && ($("div.row + h3.text-primary").length == 0) && ($("h3.text-primary + div.row").length > 0), "Add a <code>div</code> element below your <code>h3</code> element.");'
  - text: ''
    testString: 'assert($("div").hasClass("row"), "Your <code>div</code> element should have the class <code>row</code>");'
  - text: يجب أن يتداخل <code>row div</code> داخل <code>container-fluid div</code>
    testString: 'assert($("div.container-fluid div.row").length > 0, "Your <code>row div</code> should be nested inside the <code>container-fluid div</code>");'
  - text: ''
    testString: 'assert(code.match(/<\/div>/g) && code.match(/<div/g) && code.match(/<\/div>/g).length === code.match(/<div/g).length, "Make sure your <code>div</code> element has a closing tag.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<div class="container-fluid">
  <h3 class="text-primary text-center">jQuery Playground</h3>

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
