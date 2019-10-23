---
id: 587d825a367417b2b2512c89
title: Implement Quick Sort
challengeType: 1
videoUrl: ''
localeTitle: ''
---

## Description
<section id="description"> هنا سننتقل إلى خوارزمية الفرز الوسيطة: التصنيف السريع. الفرز السريع هو نهج فاصل ، وقهر متكرر ، متكرر لفرز مصفوفة. في هذه الطريقة ، يتم اختيار قيمة محورية في الصفيف الأصلي. ثم يتم تقسيم الصفيف إلى اثنين من subarrays من القيم أقل من وأكبر من القيمة المحورية. ثم ندمج نتيجة استدعاء متكرر لخوارزمية الفرز السريع في كلا المصفوفات الفرعية. يستمر هذا حتى يتم الوصول إلى حالة قاعدة صفيف فارغ أو عنصر واحد ، والتي نعود. يؤدي إرجاع المكالمات المتكررة إلى إرجاع الصفيف الذي تم فرزه. الفرز السريع هو طريقة فرز فعالة للغاية ، مما يوفر <i>أداء O (nlog (n))</i> في المتوسط. كما أنه سهل التنفيذ نسبيًا. هذه السمات تجعل منه طريقة فرز شائعة ومفيدة. <strong>التعليمات:</strong> كتابة الدالة <code>quickSort</code> الذي يأخذ مجموعة من الأعداد الصحيحة كمدخل وإرجاع مجموعة من هذه الأعداد الصحيحة في ترتيب <code>quickSort</code> من الأقل إلى الأكبر. في حين أن اختيار القيمة المحورية أمر مهم ، فإن أي محور سيفعله لأغراضنا هنا. من أجل البساطة ، يمكن استخدام العنصر الأول أو الأخير. <strong>ملحوظة:</strong> <br> نحن نسمي هذه الوظيفة من وراء الكواليس. يتم التعليق على مجموعة الاختبار التي نستخدمها في المحرر. جرب تسجيل <code>array</code> لترى خوارزمية الفرز في العمل! </section>

## Instructions
undefined

## Tests
<section id='tests'>

```yml
tests:
  - text: ''
    testString: 'assert(typeof quickSort == "function", "<code>quickSort</code> is a function.");'
  - text: ''
    testString: 'assert(isSorted(quickSort([1,4,2,8,345,123,43,32,5643,63,123,43,2,55,1,234,92])), "<code>quickSort</code> returns a sorted array (least to greatest).");'
  - text: ''
    testString: 'assert.sameMembers(quickSort([1,4,2,8,345,123,43,32,5643,63,123,43,2,55,1,234,92]), [1,4,2,8,345,123,43,32,5643,63,123,43,2,55,1,234,92], "<code>quickSort</code> returns an array that is unchanged except for order.");'
  - text: ''
    testString: 'assert.strictEqual(code.search(/\.sort\(/), -1, "<code>quickSort</code> should not use the built-in <code>.sort()</code> method.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function quickSort(array) {
  // change code below this line

  // change code above this line
  return array;
}

// test array:
// [1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92]

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
