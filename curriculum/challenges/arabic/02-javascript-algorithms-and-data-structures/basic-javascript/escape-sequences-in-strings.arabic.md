---
id: 56533eb9ac21ba0edf2244b6
title: Escape Sequences in Strings
challengeType: 1
videoUrl: ''
localeTitle: الهروب من التسلسل في السلاسل
---

## Description
<section id="description"> لا تكون علامات الاقتباس هي الأحرف الوحيدة التي يمكن <dfn>تجنبها</dfn> داخل سلسلة. هناك سببان لاستخدام أحرف الهروب: أولاً هو السماح لك باستخدام الأحرف التي قد لا تتمكن من كتابتها ، مثل backspace. ثانيًا ، تسمح لك بتمثيل علامات الاقتباس المتعددة في سلسلة بدون إساءة تفسير جافا سكريبت لما تعنيه. تعلمنا هذا في التحدي السابق. <table class="table table-striped" style=";text-align:right;direction:rtl"><thead><tr><th> الشفرة </th><th> انتاج | </th></tr></thead><tbody><tr><td> <code>\&#39;</code> </td> <td> اقتباس واحد </td></tr><tr><td> <code>\&quot;</code> </td> <td> اقتباس مزدوج </td></tr><tr><td> <code>\\</code> </td> <td> مائل </td></tr><tr><td> <code>\n</code> </td> <td> خط جديد </td></tr><tr><td> <code>\r</code> </td> <td> إرجاع </td></tr><tr><td> <code>\t</code> </td> <td> التبويب </td></tr><tr><td> <code>\b</code> </td> <td> مسافة للخلف </td></tr><tr><td> <code>\f</code> </td> <td> نموذج تغذية </td></tr></tbody></table> <em>لاحظ أنه يجب أن يتم إبطال الخط المائل العكسي نفسه ليتم عرضه كشرطة مائلة للخلف (Backslash).</em> </section>

## Instructions
<section id="instructions"> قم بتعيين أسطر النص الثلاثة التالية في <code>myStr</code> متغير واحد باستخدام تسلسلات الهروب. <blockquote style=";text-align:right;direction:rtl"> السطر الأول <br> \السطر الثاني <br> ThirdLine </blockquote> ستحتاج إلى استخدام تسلسلات الهروب لإدراج أحرف خاصة بشكل صحيح. ستحتاج أيضًا إلى اتباع التباعد كما يبدو أعلاه ، مع عدم وجود مسافات بين تتابعات الهروب أو الكلمات. هنا هو النص مع تسلسل الهروب مكتوبة. <q>FirstLine <code>newline</code> <code>tab</code> <code>backslash</code> SecondLine <code>newline</code> ThirdLine</q> </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: يجب ألا تحتوي <code>myStr</code> على أية مسافات
    testString: 'assert(!/ /.test(myStr), "<code>myStr</code> should not contain any spaces");'
  - text: يجب أن تحتوي <code>myStr</code> على السلاسل <code>FirstLine</code> و <code>SecondLine</code> و <code>ThirdLine</code> (تذكر حالة الحساسية)
    testString: 'assert(/FirstLine/.test(myStr) && /SecondLine/.test(myStr) && /ThirdLine/.test(myStr), "<code>myStr</code> should contain the strings <code>FirstLine</code>, <code>SecondLine</code> and <code>ThirdLine</code> (remember case sensitivity)");'
  - text: يجب أن يتبع <code>FirstLine</code> حرف السطر الجديد <code>\n</code>
    testString: 'assert(/FirstLine\n/.test(myStr), "<code>FirstLine</code> should be followed by the newline character <code>\n</code>");'
  - text: يجب أن تحتوي <code>myStr</code> على حرف tab <code>\t</code> يتبع حرف السطر الجديد
    testString: 'assert(/\n\t/.test(myStr), "<code>myStr</code> should contain a tab character <code>\t</code> which follows a newline character");'
  - text: <code>SecondLine</code> يجب أن يسبقه حرف مائل <code>\\</code>
    testString: 'assert(/\SecondLine/.test(myStr), "<code>SecondLine</code> should be preceded by the backslash character <code>\\</code>");'
  - text: يجب أن يكون هناك حرف سطر جديد بين <code>SecondLine</code> و <code>ThirdLine</code>
    testString: 'assert(/SecondLine\nThirdLine/.test(myStr), "There should be a newline character between <code>SecondLine</code> and <code>ThirdLine</code>");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
var myStr; // Change this line

```

</div>


### After Test
<div id='js-teardown'>

```js
console.info('after the test');
```

</div>

</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
