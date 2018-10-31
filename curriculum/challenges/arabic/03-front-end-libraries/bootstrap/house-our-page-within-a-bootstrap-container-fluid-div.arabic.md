---
id: bad87fee1348bd9aec908746
title: House our page within a Bootstrap container-fluid div
challengeType: 0
videoUrl: ''
localeTitle: قم بتضمين صفحتنا داخل div-fluid حاوية سائل
---

## Description
<section id="description"> الآن ، دعنا نتأكد من استجابة جميع المحتوى على صفحتك للجوّال. لنقم <code>h3</code> عنصر <code>h3</code> عنصر <code>div</code> باستخدام <code>container-fluid</code> الصف. </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: ''
    testString: 'assert($("div").hasClass("container-fluid"), "Your <code>div</code> element should have the class <code>container-fluid</code>.");'
  - text: تأكد من أن كل عنصر من عناصر <code>div</code> لديه علامة إغلاق.
    testString: 'assert(code.match(/<\/div>/g) && code.match(/<div/g) && code.match(/<\/div>/g).length === code.match(/<div/g).length, "Make sure each of your <code>div</code> elements has a closing tag.");'
  - text: ''
    testString: 'assert($("div").children("h3").length >0, "Nest your <code>h3</code> element inside a <code>div</code> element.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<h3 class="text-primary text-center">jQuery Playground</h3>

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
