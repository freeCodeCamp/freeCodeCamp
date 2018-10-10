---
id: 587d7b7b367417b2b2512b15
title: Iterate Through All an Array's Items Using For Loops
challengeType: 1
videoUrl: ''
localeTitle: يتكرر من خلال جميع عناصر المصفوفة عن طريق استخدام الحلقات
---

## Description
<section id="description"> في بعض الأحيان عند العمل مع المصفوفات ، يكون من السهل جدًا التكرار من خلال كل عنصر للعثور على عنصر واحد أو أكثر قد نحتاجه ، أو التعامل مع صفيف استنادًا إلى عناصر البيانات التي تلبي مجموعة معينة من المعايير. تقدم JavaScript العديد من الطرق المضمنة التي يتم تكرار كل منها على المصفوفات بطرق مختلفة قليلاً لتحقيق نتائج مختلفة (مثل <code>every()</code> ، <code>forEach()</code> ، <code>map()</code> ، إلخ. ، ولكن التقنية الأكثر مرونة وتوفر لنا الأعظم مقدار التحكم هو بسيط <code>for</code> حلقة. خذ بعين الاعتبار ما يلي: <blockquote style=";text-align:right;direction:rtl"> وظيفة greaterThanTen (arr) { <br> let newArr = []؛ <br> لـ (let i = 0؛ i &lt;arr.length؛ i ++) { <br> إذا (arr [i]&gt; 10) { <br> newArr.push (آر [أنا])؛ <br> } <br> } <br> عودة newArr ؛ <br> } <br><br> greaterThanTen ([2، 12، 8، 14، 80، 0، 1])؛ <br> // تُرجع [12 ، 14 ، 80] </blockquote> باستخدام حلقة <code>for</code> ، تتكرر هذه الوظيفة خلال كل عنصر في الصفيف وتصل إليه ، وتضعه في اختبار بسيط قمنا بإنشائه. بهذه الطريقة ، حددنا بسهولة وببرمجية أي من عناصر البيانات أكبر من <code>10</code> ، وأعدنا مصفوفة جديدة تحتوي على تلك العناصر. </section>

## Instructions
<section id="instructions"> لقد حددنا دالة ، <code>filteredArray</code> ، والتي تأخذ <code>arr</code> ، ومصفوفة متداخلة ، و <code>elem</code> ، وتقوم بإرجاع صفيف جديد. يمثل <code>elem</code> عنصرًا قد يكون أو لا يكون موجودًا على واحد أو أكثر من الصفائف المتداخلة ضمن <code>arr</code> . قم بتعديل الوظيفة ، باستخدام حلقة <code>for</code> ، لإرجاع نسخة مفلترة من المصفوفة التي تم تمريرها بحيث يتم إزالة أي صفيف متداخل داخل <code>arr</code> يحتوي على <code>elem</code> . </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: '<code>filteredArray([[10, 8, 3], [14, 6, 23], [3, 18, 6]], 18)</code> يجب أن يعود <code>[ [10, 8, 3], [14, 6, 23] ]</code>'
    testString: 'assert.deepEqual(filteredArray([ [10, 8, 3], [14, 6, 23], [3, 18, 6] ], 18), [[10, 8, 3], [14, 6, 23]], "<code>filteredArray([[10, 8, 3], [14, 6, 23], [3, 18, 6]], 18)</code> should return <code>[ [10, 8, 3], [14, 6, 23] ]</code>");'
  - text: '<code>filteredArray([ [&quot;trumpets&quot;, 2], [&quot;flutes&quot;, 4], [&quot;saxophones&quot;, 2] ], 2)</code> يجب أن تعود <code>[ [&quot;flutes&quot;, 4] ]</code>'
    testString: 'assert.deepEqual(filteredArray([ ["trumpets", 2], ["flutes", 4], ["saxophones", 2] ], 2), [["flutes", 4]], "<code>filteredArray([ ["trumpets", 2], ["flutes", 4], ["saxophones", 2] ], 2)</code> should return <code>[ ["flutes", 4] ]</code>");'
  - text: 'يجب أن تعود <code>filteredArray([ [&quot;amy&quot;, &quot;beth&quot;, &quot;sam&quot;], [&quot;dave&quot;, &quot;sean&quot;, &quot;peter&quot;] ], &quot;peter&quot;)</code> <code>[ [&quot;amy&quot;, &quot;beth&quot;, &quot;sam&quot;] ]</code>'
    testString: 'assert.deepEqual(filteredArray([["amy", "beth", "sam"], ["dave", "sean", "peter"]], "peter"), [["amy", "beth", "sam"]], "<code>filteredArray([ ["amy", "beth", "sam"], ["dave", "sean", "peter"] ], "peter")</code> should return <code>[ ["amy", "beth", "sam"] ]</code>");'
  - text: '<code>filteredArray([[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 3, 9]], 3)</code> يجب أن تعود <code>[ ]</code>'
    testString: 'assert.deepEqual(filteredArray([[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 3, 9]], 3), [], "<code>filteredArray([[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 3, 9]], 3)</code> should return <code>[ ]</code>");'
  - text: و <code>filteredArray</code> وظيفة يجب أن تستخدم ل <code>for</code> حلقة
    testString: 'assert.notStrictEqual(filteredArray.toString().search(/for/), -1, "The <code>filteredArray</code> function should utilize a <code>for</code> loop");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function filteredArray(arr, elem) {
  let newArr = [];
  // change code below this line

  // change code above this line
  return newArr;
}

// change code here to test different cases:
console.log(filteredArray([[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 3, 9]], 3));

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
