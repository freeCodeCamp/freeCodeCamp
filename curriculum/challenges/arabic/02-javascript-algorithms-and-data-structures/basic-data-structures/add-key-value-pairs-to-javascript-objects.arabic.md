---
id: 587d7b7c367417b2b2512b18
title: Add Key-Value Pairs to JavaScript Objects
challengeType: 1
videoUrl: ''
localeTitle: إضافة أزواج Key-Value إلى كائنات JavaScript
---

## Description
<section id="description"> في أبسط صورها ، تكون الكائنات مجرد مجموعات من <dfn>أزواج القيمة الرئيسية</dfn> ، أو بعبارة أخرى ، أجزاء من البيانات تم تعيينها لمعرفات فريدة نسميها <dfn>خصائص</dfn> أو <dfn>مفاتيح</dfn> . دعونا نلقي نظرة على مثال بسيط جدا: <blockquote style=";text-align:right;direction:rtl"> اترك FCC_User = { <br> اسم المستخدم: &quot;awesome_coder&quot; ، <br> المتابعون: 572 ، <br> النقاط: 1741 ، <br> completedProjects: 15 <br> }؛ </blockquote> يعرّف الرمز أعلاه كائن يسمى <code>FCC_User</code> يحتوي على أربعة <dfn>خصائص</dfn> ، كل منها تعيين إلى قيمة محددة. إذا أردنا معرفة عدد <code>followers</code> <code>FCC_User</code> ، فيمكننا الوصول إلى ذلك الموقع بكتابة: <blockquote style=";text-align:right;direction:rtl"> السماح userData = FCC_User.followers؛ <br> // userData يساوي 572 </blockquote> هذا ما يسمى <dfn>dot notation</dfn> . بدلاً من ذلك ، يمكننا أيضًا الوصول إلى مكان الإقامة باستخدام الأقواس ، مثل: <blockquote style=";text-align:right;direction:rtl"> السماح لـ userData = FCC_User [&#39;المتابعين&#39;] <br> // userData يساوي 572 </blockquote> لاحظ أنه مع <dfn>تدوين قوس</dfn> ، أرفقنا <code>followers</code> في علامات اقتباس. هذا لأن الأقواس تسمح لنا بالفعل بتمرير متغير ليتم تقييمه كاسم خاصية (تلميح: ضع ذلك في الاعتبار لاحقًا!). لو مررنا <code>followers</code> بدون علامات الاقتباس ، كان محرك جافا سكريبت قد حاول تقييمه كمتغير ، وكان من <code>ReferenceError: followers is not defined</code> . </section>

## Instructions
<section id="instructions"> باستخدام نفس الصيغة ، يمكننا أيضًا <em><strong>إضافة</strong></em> أزواج قيمة رئيسية <em><strong>جديدة</strong></em> إلى الكائنات. لقد أنشأنا كائن <code>foods</code> مع ثلاثة مداخل. أضف ثلاثة إدخالات إضافية: <code>bananas</code> بقيمة <code>13</code> ، <code>grapes</code> بقيمة <code>35</code> ، <code>strawberries</code> بقيمة <code>27</code> . </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>foods</code> هي كائن
    testString: 'assert(typeof foods === "object", "<code>foods</code> is an object");'
  - text: يحتوي جسم <code>foods</code> على <code>&quot;bananas&quot;</code> رئيسي بقيمة <code>13</code>
    testString: 'assert(foods.bananas === 13, "The <code>foods</code> object has a key <code>"bananas"</code> with a value of <code>13</code>");'
  - text: يحتوي جسم <code>foods</code> على <code>&quot;grapes&quot;</code> الرئيسي بقيمة <code>35</code>
    testString: 'assert(foods.grapes === 35, "The <code>foods</code> object has a key <code>"grapes"</code> with a value of <code>35</code>");'
  - text: يحتوي جسم <code>foods</code> على <code>&quot;strawberries&quot;</code> الرئيسية بقيمة <code>27</code>
    testString: 'assert(foods.strawberries === 27, "The <code>foods</code> object has a key <code>"strawberries"</code> with a value of <code>27</code>");'
  - text: يجب تعيين أزواج القيم الأساسية باستخدام تدوين النقطة أو القوس
    testString: 'assert(code.search(/bananas:/) === -1 && code.search(/grapes:/) === -1 && code.search(/strawberries:/) === -1, "The key-value pairs should be set using dot or bracket notation");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
let foods = {
  apples: 25,
  oranges: 32,
  plums: 28
};

// change code below this line

// change code above this line

console.log(foods);

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
