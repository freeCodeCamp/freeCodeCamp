---
id: 587d7b7c367417b2b2512b19
title: Modify an Object Nested Within an Object
challengeType: 1
videoUrl: ''
localeTitle: تعديل كائن متداخل داخل كائن
---

## Description
<section id="description"> الآن دعونا نلقي نظرة على كائن أكثر تعقيدا قليلا. يمكن أن تتداخل خصائص الكائن مع عمق اعتباطي ، ويمكن أن تكون قيمها أي نوع من البيانات التي تدعمها JavaScript ، بما في ذلك المصفوفات وحتى الكائنات الأخرى. خذ بعين الاعتبار ما يلي: <blockquote style=";text-align:right;direction:rtl"> let nestedObject = { <br> id: 28802695164 ، <br> التاريخ: &quot;31 ديسمبر 2016&quot; ، <br> البيانات: { <br> totalUsers: 99 ، <br> على الانترنت: 80 ، <br> الموجودين: { <br> نشط: 67 ، <br> بعيدا: 13 <br> } <br> } <br> }؛ </blockquote> يحتوي <code>nestedObject</code> على ثلاثة مفاتيح فريدة: <code>id</code> ، قيمته عبارة عن رقم <code>date</code> قيمته عبارة عن سلسلة <code>data</code> ، تكون قيمتها عبارة عن كائن يحتوي على كائن آخر متداخل داخله. في حين أن الهياكل يمكن أن تصبح معقدة بسرعة ، إلا أنه لا يزال بإمكاننا استخدام نفس الرموز للوصول إلى المعلومات التي نحتاج إليها. </section>

## Instructions
<section id="instructions"> هنا قمنا بتعريف كائن ، <code>userActivity</code> ، والذي يتضمن كائنًا آخرًا متداخلاً فيه. يمكنك تعديل الخصائص على هذا الكائن المتداخل بنفس الطريقة التي قمت بتعديل الخصائص في التحدي الأخير. قم بتعيين قيمة المفتاح <code>online</code> على <code>45</code> . </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: لدى <code>userActivity</code> <code>id</code> <code>date</code> <code>data</code>
    testString: 'assert("id" in userActivity && "date" in userActivity && "data" in userActivity, "<code>userActivity</code> has <code>id</code>, <code>date</code> and <code>data</code> properties");'
  - text: لدى <code>userActivity</code> مفتاح <code>data</code> ضبطه على كائن به مفاتيح <code>totalUsers</code> وعبر <code>online</code>
    testString: 'assert("totalUsers" in userActivity.data && "online" in userActivity.data, "<code>userActivity</code> has a <code>data</code> key set to an object with keys <code>totalUsers</code> and <code>online</code>");'
  - text: يجب تعيين الخاصية <code>online</code> المتداخلة في مفتاح <code>data</code> <code>userActivity</code> على <code>45</code>
    testString: 'assert(userActivity.data.online === 45, "The <code>online</code> property nested in the <code>data</code> key of <code>userActivity</code> should be set to <code>45</code>");'
  - text: يتم تعيين الخاصية <code>online</code> باستخدام تدوين النقطة أو القوس
    testString: 'assert.strictEqual(code.search(/online: 45/), -1, "The <code>online</code> property is set using dot or bracket notation");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
let userActivity = {
  id: 23894201352,
  date: 'January 1, 2017',
  data: {
    totalUsers: 51,
    online: 42
  }
};

// change code below this line

// change code above this line

console.log(userActivity);

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
