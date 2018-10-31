---
id: 587d7b7e367417b2b2512b20
title: Use an Array to Store a Collection of Data
challengeType: 1
videoUrl: ''
localeTitle: استخدم صفيف لتخزين مجموعة من البيانات
---

## Description
<section id="description"> أدناه هو مثال عن أبسط تنفيذ بنية بيانات صفيف. وهذا ما يُعرف باسم <dfn>مصفوفة أحادية البُعد</dfn> ، بمعنى أنه يحتوي على مستوى واحد فقط ، أو أنه لا يحتوي على أي صفيفات أخرى متداخلة فيه. لاحظ أنه يحتوي على وحدات <dfn>منطقية</dfn> ، <dfn>وسلاسل</dfn> ، <dfn>وأرقام</dfn> ، من بين أنواع بيانات جافا سكريبت صالحة أخرى: <blockquote style=";text-align:right;direction:rtl"> let simpleArray = [&#39;one&#39;، 2، &#39;three&#39;، true، false، undefined، null]؛ <br> console.log (simpleArray.length)؛ <br> // سجلات 7 </blockquote> جميع الصفيف لها خاصية طول ، والتي كما هو موضح أعلاه ، يمكن الوصول إليها بسهولة بالغة مع <code>Array.length</code> . يمكن رؤية تنفيذ أكثر تعقيدًا لمصفوفة أدناه. هذا هو المعروف باسم مجموعة <dfn>متعددة الأبعاد</dfn> ، أو صفيف يحتوي على صفائف أخرى. لاحظ أن هذه المصفوفة تحتوي أيضًا على <dfn>كائنات</dfn> JavaScript ، والتي سنبحثها عن كثب في قسمنا التالي ، ولكن في الوقت الحالي ، كل ما تحتاج إلى معرفته هو أن المصفوفات قادرة أيضًا على تخزين الكائنات المعقدة. <blockquote style=";text-align:right;direction:rtl"> اترك complexArray = [ <br> [ <br> { <br> واحد 1، <br> اثنان: 2 <br> }، <br> { <br> 3: 3 ، <br> أربعة: 4 <br> } <br> ]، <br> [ <br> { <br> a: &quot;a&quot; ، <br> ب: &quot;ب&quot; <br> }، <br> { <br> ج: &quot;ج&quot; ، <br> د: &quot;د&quot; <br> } <br> ] <br> ]. </blockquote></section>

## Instructions
<section id="instructions"> لقد حددنا متغيرًا يسمى <code>yourArray</code> . أكمل العبارة عن طريق تعيين صفيف مكون من خمسة عناصر على <code>yourArray</code> للمتغير <code>yourArray</code> . يجب أن يحتوي الصفيف الخاص بك على <dfn>سلسلة</dfn> واحدة على الأقل <dfn>ورقم</dfn> واحد <dfn>وقيمة منطقية</dfn> واحدة. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: yourArray هو مجموعة
    testString: 'assert.strictEqual(Array.isArray(yourArray), true, "yourArray is an array");'
  - text: <code>yourArray</code> ما لا يقل عن 5 عناصر طويلة
    testString: 'assert.isAtLeast(yourArray.length, 5, "<code>yourArray</code> is at least 5 elements long");'
  - text: <code>yourArray</code> يحتوي على <code>boolean</code> واحد على الأقل
    testString: 'assert(yourArray.filter( el => typeof el === "boolean").length >= 1, "<code>yourArray</code> contains at least one <code>boolean</code>");'
  - text: يحتوي <code>yourArray</code> على <code>number</code> واحد على الأقل
    testString: 'assert(yourArray.filter( el => typeof el === "number").length >= 1, "<code>yourArray</code> contains at least one <code>number</code>");'
  - text: يحتوي <code>yourArray</code> على <code>string</code> واحدة على الأقل
    testString: 'assert(yourArray.filter( el => typeof el === "string").length >= 1, "<code>yourArray</code> contains at least one <code>string</code>");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
let yourArray; // change this line

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
