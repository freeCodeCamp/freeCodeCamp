---
id: 587d7b7c367417b2b2512b1b
title: Use the delete Keyword to Remove Object Properties
challengeType: 1
videoUrl: ''
localeTitle: استخدم Delete keyword to Remove Object Properties
---

## Description
<section id="description"> الآن أنت تعرف ما هي الأشياء وخصائصها ومزاياها الأساسية. باختصار، فهي مخازن المفاتيح ذات قيمة والتي توفر طريقة بديهية مرنة لتنظيم البيانات، <strong><em>و،</em></strong> لأنها توفر الوقت بحث سريع جدا. خلال بقية هذه التحديات ، سنقوم بوصف العديد من العمليات الشائعة التي يمكنك القيام بها على الكائنات بحيث يمكنك أن تصبح مريحًا في تطبيق هذه الهياكل المفيدة للبيانات في برامجك. في التحديات السابقة ، قمنا بإضافة وتعديل أزواج قيمة المفتاح للكائن. سنرى هنا كيف يمكننا <em>إزالة</em> زوج قيمة مفتاح من كائن. دعونا نعيد النظر في مثال كائن <code>foods</code> لدينا للمرة الأخيرة. إذا أردنا إزالة مفتاح <code>apples</code> ، فيمكننا إزالته باستخدام الكلمة الرئيسية التي <code>delete</code> مثل هذا: <blockquote style=";text-align:right;direction:rtl"> حذف foods.apples ؛ </blockquote></section>

## Instructions
<section id="instructions"> استخدم الكلمة الرئيسية حذف لإزالة <code>oranges</code> <code>plums</code> ومفاتيح <code>strawberries</code> من كائن <code>foods</code> . </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 'يحتوي جسم <code>foods</code> على ثلاثة مفاتيح فقط: <code>apples</code> <code>grapes</code> <code>bananas</code>'
    testString: 'assert(!foods.hasOwnProperty("oranges") && !foods.hasOwnProperty("plums") && !foods.hasOwnProperty("strawberries") && Object.keys(foods).length === 3, "The <code>foods</code> object only has three keys: <code>apples</code>, <code>grapes</code>, and <code>bananas</code>");'
  - text: تتم إزالة مفاتيح <code>oranges</code> <code>plums</code> <code>strawberries</code> باستخدام <code>delete</code>
    testString: 'assert(code.search(/oranges:/) !== -1 && code.search(/plums:/) !== -1 && code.search(/strawberries:/) !== -1, "The <code>oranges</code>, <code>plums</code>, and <code>strawberries</code> keys are removed using <code>delete</code>");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
let foods = {
  apples: 25,
  oranges: 32,
  plums: 28,
  bananas: 13,
  grapes: 35,
  strawberries: 27
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
