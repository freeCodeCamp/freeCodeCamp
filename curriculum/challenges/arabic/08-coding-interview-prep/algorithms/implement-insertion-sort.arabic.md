---
id: 587d8259367417b2b2512c86
title: Implement Insertion Sort
challengeType: 1
videoUrl: ''
localeTitle: ''
---

## Description
طريقة الفرز التالية التي سنتعرف إليها هي فرز بالإدراج. تعمل هذه الطريقة عن طريق إنشاء مصفوفة مرتبة في بداية القائمة. تبدأ المصفوفة المرتبة مع العنصر الاول. ثم يقوم بفحص العنصر التالي ويقوم بتبديله إلى الخلف في المصفوفة التي تم فرزها حتى يكون في موضع تم فرزه. تستمر العملية بالتكرار عن طريق تبديل عناصر جديدة الى القسم المرتب من المصفوفة حتى تصل الى النهاية. هذه الخوارزمية لها تعقيد زمني من الدرجة الثانية في الحالات المتوسطة والأسوأ.  


## Instructions
اكتب تابع الفرز بالادراج والذي يأخذ مجموعة من الأعداد الصحيحة كدخل ويعيد مصفوفة من هذه الأعداد الصحيحة في ترتيب مفرز من الاصغر إلى الأكبر. ملحوظة:
يتم استدعاء هذا التابع من وراء الكواليس, بالاضافة الى كتابة مصفوفة التجريب في نهاية محرر النصوص. يمكمك ادراج مصفوفة جديدة للتحقق من صحة عمل التابع.


## Tests
<section id='tests'>

```yml
tests:
  - text: ''
    testString: 'assert(typeof insertionSort == "function", "<code>insertionSort</code> is a function.");'
  - text: ''
    testString: 'assert(isSorted(insertionSort([1,4,2,8,345,123,43,32,5643,63,123,43,2,55,1,234,92])), "<code>insertionSort</code> returns a sorted array (least to greatest).");'
  - text: ''
    testString: 'assert.sameMembers(insertionSort([1,4,2,8,345,123,43,32,5643,63,123,43,2,55,1,234,92]), [1,4,2,8,345,123,43,32,5643,63,123,43,2,55,1,234,92], "<code>insertionSort</code> returns an array that is unchanged except for order.");'
  - text: ''
    testString: 'assert.strictEqual(code.search(/\.sort\(/), -1, "<code>insertionSort</code> should not use the built-in <code>.sort()</code> method.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function insertionSort(array) {
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
