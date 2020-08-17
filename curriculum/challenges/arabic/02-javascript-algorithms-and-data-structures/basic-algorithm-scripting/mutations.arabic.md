---
id: af2170cad53daa0770fabdea
title: Mutations
isRequired: true
challengeType: 5
videoUrl: ''
localeTitle: الطفرات
---

## Description
<section id="description"> إرجاع true إذا احتوت السلسلة في العنصر الأول من المصفوفة على كافة أحرف السلسلة في العنصر الثاني من الصفيف. على سبيل المثال ، يجب أن تعود <code>[&quot;hello&quot;, &quot;Hello&quot;]</code> ، true لأن كافة الأحرف الموجودة في السلسلة الثانية موجودة في الحالة الأولى ، مع تجاهل الحالة. يجب أن ترجع الوسيطة <code>[&quot;hello&quot;, &quot;hey&quot;]</code> false لأن السلسلة &quot;hello&quot; لا تحتوي على &quot;y&quot;. وأخيرًا ، يجب أن تعود <code>[&quot;Alien&quot;, &quot;line&quot;]</code> ، إلى true لأن جميع الأحرف في &quot;line&quot; موجودة في &quot;Alien&quot;. تذكر استخدام <a href="https://forum.freecodecamp.org/t/how-to-get-help-when-you-are-stuck-coding/19514" target="_blank">Read-Search-Ask</a> إذا واجهتك مشكلة. اكتب الكود الخاص بك. </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 'يجب أن تعود <code>mutation([&quot;hello&quot;, &quot;hey&quot;])</code> false.'
    testString: 'assert(mutation(["hello", "hey"]) === false, "<code>mutation(["hello", "hey"])</code> should return false.");'
  - text: 'يجب أن تعود <code>mutation([&quot;hello&quot;, &quot;Hello&quot;])</code> true.'
    testString: 'assert(mutation(["hello", "Hello"]) === true, "<code>mutation(["hello", "Hello"])</code> should return true.");'
  - text: 'يجب أن ترجع <code>mutation([&quot;zyxwvutsrqponmlkjihgfedcba&quot;, &quot;qrstu&quot;])</code> صحيح.'
    testString: 'assert(mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"]) === true, "<code>mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"])</code> should return true.");'
  - text: 'يجب أن تعود <code>mutation([&quot;Mary&quot;, &quot;Army&quot;])</code> الحقيقة.'
    testString: 'assert(mutation(["Mary", "Army"]) === true, "<code>mutation(["Mary", "Army"])</code> should return true.");'
  - text: 'يجب أن تعود <code>mutation([&quot;Mary&quot;, &quot;Aarmy&quot;])</code> true.'
    testString: 'assert(mutation(["Mary", "Aarmy"]) === true, "<code>mutation(["Mary", "Aarmy"])</code> should return true.");'
  - text: 'يجب أن تعود <code>mutation([&quot;Alien&quot;, &quot;line&quot;])</code> true.'
    testString: 'assert(mutation(["Alien", "line"]) === true, "<code>mutation(["Alien", "line"])</code> should return true.");'
  - text: 'يجب أن تعود <code>mutation([&quot;floor&quot;, &quot;for&quot;])</code> true.'
    testString: 'assert(mutation(["floor", "for"]) === true, "<code>mutation(["floor", "for"])</code> should return true.");'
  - text: 'يجب أن تعود <code>mutation([&quot;hello&quot;, &quot;neo&quot;])</code> false.'
    testString: 'assert(mutation(["hello", "neo"]) === false, "<code>mutation(["hello", "neo"])</code> should return false.");'
  - text: 'يجب أن تعود <code>mutation([&quot;voodoo&quot;, &quot;no&quot;])</code> كاذبة.'
    testString: 'assert(mutation(["voodoo", "no"]) === false, "<code>mutation(["voodoo", "no"])</code> should return false.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function mutation(arr) {
  return arr;
}

mutation(["hello", "hey"]);

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
