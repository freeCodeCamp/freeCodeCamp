---
id: 587d78b2367417b2b2512b10
title: Remove Items Using splice()
challengeType: 1
videoUrl: ''
localeTitle: إزالة العناصر باستخدام لصق ()
---

## Description
<section id="description"> حسنًا ، لقد تعلمنا كيفية إزالة عناصر من بداية ونهاية المصفوفات باستخدام <code>shift()</code> و <code>pop()</code> ، ولكن ماذا لو أردنا إزالة عنصر من مكان ما في المنتصف؟ أو إزالة أكثر من عنصر واحد في وقت واحد؟ حسنا ، هذا هو المكان الذي تأتي فيه <code>splice()</code> . يسمح لنا <code>splice()</code> بالقيام بذلك: <strong>إزالة أي عدد من العناصر المتتالية</strong> من أي مكان في صفيف. يمكن أن تأخذ <code>splice()</code> 3 معلمات ، ولكن في الوقت الحالي ، سنركز على أول 2 فقط. <code>splice()</code> من <code>splice()</code> هي أعداد صحيحة تمثل الفهارس ، أو المواضع ، للصفيف الذي يكون <code>splice()</code> دعا. وتذكر أن المصفوفات <em>صفرية المفهرسة</em> ، لذلك للإشارة إلى العنصر الأول من المصفوفة ، سنستخدم <code>0</code> . تمثل المعلمة الأولى <code>splice()</code> الفهرس الموجود في الصفيف الذي تبدأ منه إزالة العناصر ، بينما تشير المعلمة الثانية إلى عدد العناصر المطلوب حذفها. فمثلا: <blockquote style=";text-align:right;direction:rtl"> دعونا صفيف = [&#39;اليوم&#39; ، &#39;كان&#39; ، &#39;لا&#39; ، &#39;هكذا&#39; ، &#39;عظيم&#39;] ؛ <br><br> array.splice (2، 2)؛ <br> // remove 2 elements starting with the 3rd element <br> // array الآن يساوي [&#39;today&#39;، &#39;was&#39;، &#39;great&#39;] </blockquote> <code>splice()</code> بتعديل المصفوفة التي يتم استدعاؤها فقط ، بل يقوم أيضًا بإرجاع صفيف جديد يحتوي على قيمة العناصر التي تمت إزالتها: <blockquote style=";text-align:right;direction:rtl"> دعونا صفيف = [&#39;أنا&#39; ، &#39;أنا&#39; ، &#39;شعور&#39; ، &#39;حقا&#39; ، &#39;سعيد&#39;] ؛ <br><br> السماح newArray = array.splice (3 ، 2) ؛ <br> // newArray يساوي [&#39;حقا&#39; ، &#39;سعيد&#39;] </blockquote></section>

## Instructions
<section id="instructions"> لقد قمنا بتعريف دالة ، <code>sumOfTen</code> ، والتي تأخذ مصفوفة كوسيطة وتقوم بإرجاع مجموع عناصر الصفيف. قم بتعديل الوظيفة ، باستخدام <code>splice()</code> ، بحيث تقوم بإرجاع قيمة <code>10</code> . </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>sumOfTen</code> 10
    testString: 'assert.strictEqual(sumOfTen([2, 5, 1, 5, 2, 1]), 10, "<code>sumOfTen</code> should return 10");'
  - text: يجب أن تستخدم الدالة <code>sumOfTen</code> الأسلوب <code>splice()</code>
    testString: 'assert.notStrictEqual(sumOfTen.toString().search(/\.splice\(/), -1, "The <code>sumOfTen</code> function should utilize the <code>splice()</code> method");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function sumOfTen(arr) {
  // change code below this line

  // change code above this line
  return arr.reduce((a, b) => a + b);
}

// do not change code below this line
console.log(sumOfTen([2, 5, 1, 5, 2, 1]));

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
