---
id: 587d7b7c367417b2b2512b1a
title: Access Property Names with Bracket Notation
challengeType: 1
videoUrl: ''
localeTitle: الوصول إلى خاصية الأسماء مع تدرج قوس
---

## Description
<section id="description"> في التحدي الكائن الأول ذكرنا استخدام تدوين قوس كطريقة للوصول إلى قيم الممتلكات باستخدام تقييم متغير. على سبيل المثال ، تخيل أن <code>foods</code> يتم استخدامها في برنامج لسجل النقدية في السوبر ماركت. لدينا بعض الوظائف التي تحدد <code>foods</code> <code>selectedFood</code> ونريد أن نتحقق من أن <code>foods</code> كائن لوجود ذلك الطعام. قد يبدو هذا كالتالي: <blockquote style=";text-align:right;direction:rtl"> السماح selectFood = getCurrentFood (scannedItem)؛ <br> السماح للمخزون = الأطعمة [selectFood] ؛ </blockquote> سيقوم هذا الكود بتقييم القيمة المخزنة في المتغير <code>selectedFood</code> والصادر وإعادة قيمة هذا المفتاح في كائن <code>foods</code> ، أو يتم <code>undefined</code> إذا لم تكن موجودة. يعتبر تدرج قوس مفيد جدًا لأن أحيانًا لا تكون خصائص الكائن معروفة قبل وقت التشغيل أو نحتاج إلى الوصول إليها بطريقة أكثر ديناميكية. </section>

## Instructions
<section id="instructions"> لقد قمنا بتعريف وظيفة ، <code>checkInventory</code> ، الذي يتلقى عنصرًا تم مسحه ضوئيًا كوسيطة. قم <code>scannedItem</code> القيمة الحالية لمفتاح <code>scannedItem</code> في كائن <code>foods</code> . يمكنك افتراض أنه سيتم توفير المفاتيح الصالحة فقط كوسيطة <code>checkInventory</code> . </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>checkInventory</code> هي وظيفة
    testString: 'assert.strictEqual(typeof checkInventory, "function", "<code>checkInventory</code> is a function");'
  - text: 'يجب أن يحتوي جسم <code>foods</code> على أزواج القيمة الرئيسية التالية: <code>apples: 25</code> ، <code>oranges: 32</code> ، <code>plums: 28</code> ، <code>bananas: 13</code> ، <code>grapes: 35</code> ، <code>strawberries: 27</code>'
    testString: 'assert.deepEqual(foods, {apples: 25, oranges: 32, plums: 28, bananas: 13, grapes: 35, strawberries: 27}, "The <code>foods</code> object should have only the following key-value pairs: <code>apples: 25</code>, <code>oranges: 32</code>, <code>plums: 28</code>, <code>bananas: 13</code>, <code>grapes: 35</code>, <code>strawberries: 27</code>");'
  - text: <code>checkInventory(&quot;apples&quot;)</code> <code>25</code>
    testString: 'assert.strictEqual(checkInventory("apples"), 25, "<code>checkInventory("apples")</code> should return <code>25</code>");'
  - text: <code>checkInventory(&quot;bananas&quot;)</code> <code>13</code>
    testString: 'assert.strictEqual(checkInventory("bananas"), 13, "<code>checkInventory("bananas")</code> should return <code>13</code>");'
  - text: <code>checkInventory(&quot;strawberries&quot;)</code> <code>27</code>
    testString: 'assert.strictEqual(checkInventory("strawberries"), 27, "<code>checkInventory("strawberries")</code> should return <code>27</code>");'

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
// do not change code above this line

function checkInventory(scannedItem) {
  // change code below this line

}

// change code below this line to test different cases:
console.log(checkInventory("apples"));

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
