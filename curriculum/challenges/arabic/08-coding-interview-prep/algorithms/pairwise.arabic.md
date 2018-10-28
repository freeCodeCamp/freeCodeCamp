---
id: a3f503de51cfab748ff001aa
title: Pairwise
challengeType: 5
videoUrl: ''
localeTitle: ''
---

## Description
عند العثور على صفيف arr ، ابحث عن أزواج عناصر يساوي مجموعها قيمة الوسيطة الثانية ويعرض مجموع مؤشراتهم. يمكنك استخدام أزواج متعددة تحتوي على نفس العناصر الرقمية ولكن مؤشرات مختلفة. يجب أن يستخدم كل زوج أقل المؤشرات المتاحة الممكنة. بمجرد استخدام عنصر ما ، لا يمكن إعادة استخدامه للاقتران بعنصر آخر. على سبيل المثال ، ينشئ الزوجان ([1 ، 1 ، 2] ، 3) زوجًا [2 ، 1] باستخدام الرقم 1 عند indice 0 بدلاً من الرقم 1 عند indice 1 ، لأن 0 + 2 <1 + 2. على سبيل المثال ، يتم إرجاع الزوجين ([7 ، 9 ، 11 ، 13 ، 15] ، 20) 6. الأزواج التي تصل إلى 20 هي [7 ، 13] و [9 ، 11]. يمكننا بعد ذلك كتابة المصفوفة بمؤشراتها وقيمها.

Index	0	1	2	3	4
Value	7	9	11	13	15

أدناه سنأخذ المؤشرات المقابلة لها وإضافتها. 7 + 13 = 20 → Indices 0 + 3 = 3
9 + 11 = 20 → Indices 1 + 2 = 3
3 + 3 = 6 → Return 6 تذكر أن تستخدم Read-Search-Ask إذا واجهتك مشكلة. حاول إقران البرنامج. اكتب الكود الخاص بك.
## Instructions
undefined

## Tests
<section id='tests'>

```yml
tests:
  - text: ''
    testString: 'assert.deepEqual(pairwise([1, 4, 2, 3, 0, 5], 7), 11, "<code>pairwise([1, 4, 2, 3, 0, 5], 7)</code> should return 11.");'
  - text: ''
    testString: 'assert.deepEqual(pairwise([1, 3, 2, 4], 4), 1, "<code>pairwise([1, 3, 2, 4], 4)</code> should return 1.");'
  - text: ''
    testString: 'assert.deepEqual(pairwise([1, 1, 1], 2), 1, "<code>pairwise([1, 1, 1], 2)</code> should return 1.");'
  - text: ''
    testString: 'assert.deepEqual(pairwise([0, 0, 0, 0, 1, 1], 1), 10, "<code>pairwise([0, 0, 0, 0, 1, 1], 1)</code> should return 10.");'
  - text: ''
    testString: 'assert.deepEqual(pairwise([], 100), 0, "<code>pairwise([], 100)</code> should return 0.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function pairwise(arr, arg) {
  return arg;
}

pairwise([1,4,2,3,0,5], 7);

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
