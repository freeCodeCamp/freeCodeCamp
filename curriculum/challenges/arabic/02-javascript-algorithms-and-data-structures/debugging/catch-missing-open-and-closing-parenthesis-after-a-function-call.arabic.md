---
id: 587d7b85367417b2b2512b39
title: Catch Missing Open and Closing Parenthesis After a Function Call
challengeType: 1
videoUrl: ''
localeTitle: الصيد المفقود وأشرطة الاختتام المفتوحة بعد استدعاء وظيفة
---

## Description
<section id="description"> عندما لا تأخذ وظيفة أو طريقة أي حجج ، قد تنسى تضمين أقواس الفتح والإغلاق (الفارغة) عند الاتصال بها. في كثير من الأحيان يتم حفظ نتيجة استدعاء دالة في متغير لاستخدام أخرى في التعليمات البرمجية. يمكن الكشف عن هذا الخطأ عن طريق تسجيل قيم المتغير (أو أنواعها) إلى وحدة التحكم ورؤية أنه يتم تعيين واحد إلى مرجع دالة ، بدلاً من القيمة المتوقعة التي ترجعها الدالة. تختلف المتغيرات في المثال التالي: <blockquote style=";text-align:right;direction:rtl"> وظيفة myFunction () { <br> &quot;أنت صخرة!&quot; <br> } <br> السماح varOne = myFunction. // set to equal a a function <br> اترك varTwo = myFunction ()؛ // set يساوي السلسلة &quot;You rock!&quot; </blockquote></section>

## Instructions
<section id="instructions"> قم <code>getNine</code> الكود بحيث يتم تعيين <code>result</code> المتغير إلى القيمة التي يتم إرجاعها من استدعاء الدالة <code>getNine</code> . </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: يجب أن تقوم التعليمات البرمجية الخاصة بك بإصلاح <code>result</code> المتغيرة بحيث يتم تعيينها إلى الرقم الذي ترجع الدالة <code>getNine</code> .
    testString: 'assert(result == 9, "Your code should fix the variable <code>result</code> so it is set to the number that the function <code>getNine</code> returns.");'
  - text: يجب أن تقوم التعليمات البرمجية الخاصة بك باستدعاء الدالة <code>getNine</code> .
    testString: 'assert(code.match(/getNine\(\)/g).length == 2, "Your code should call the <code>getNine</code> function.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function getNine() {
  let x = 6;
  let y = 3;
  return x + y;
}

let result = getNine;
console.log(result);

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
