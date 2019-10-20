---
id: 587d78b2367417b2b2512b0e
title: Add Items to an Array with push() and unshift()
challengeType: 1
videoUrl: ''
localeTitle: إضافة عناصر إلى مصفوفة بدفع () و unshift ()
---

## Description
<section id="description"> لم يتم إصلاح طول الصفيف ، مثل أنواع البيانات التي يمكن أن تحتويها. يمكن تعريف المصفوفات بطول أي عدد من العناصر ، ويمكن إضافة العناصر أو إزالتها بمرور الوقت ؛ بمعنى آخر ، المصفوفات <dfn>قابلة للتغيير</dfn> . في هذا التحدي ، سننظر في طريقتين يمكننا من <code>Array.push()</code> تعديل صفيف <code>Array.push()</code> : <code>Array.push()</code> و <code>Array.unshift()</code> . تأخذ كلتا الطريقتين عنصرًا واحدًا أو أكثر كمعلمات وإضافة هذه العناصر إلى الصفيف الذي يتم استدعاء الأسلوب عليه؛ تضيف طريقة <code>push()</code> عناصر إلى نهاية صفيف ، <code>unshift()</code> عناصر إلى البداية. خذ بعين الاعتبار ما يلي: <blockquote style=";text-align:right;direction:rtl"> واسمحوا twentyThree = &#39;الثالث والعشرون&#39; ؛ <br> let romanNumerals = [&#39;XXI&#39;، &#39;XXII&#39;]؛ <br><br> romanNumerals.unshift (&#39;XIX&#39;، &#39;XX&#39;)؛ <br> // الآن تساوي [&#39;XIX&#39; ، &#39;XX&#39; ، &#39;XXI&#39; ، &#39;XXII&#39;] <br><br> romanNumerals.push (twentyThree)؛ <br> // الآن تساوي [&#39;XIX&#39;، &#39;XX&#39;، &#39;XXI&#39;، &#39;XXII&#39;، &#39;XXIII&#39;] لاحظ أنه يمكننا أيضًا تمرير المتغيرات ، مما يتيح لنا مرونة أكبر في تعديل بيانات المصفوفة ديناميكيًا. </blockquote></section>

## Instructions
<section id="instructions"> لقد حددنا وظيفة ، <code>mixedNumbers</code> ، والتي نحن نمرر مصفوفة كحجة. قم بتعديل الوظيفة باستخدام <code>push()</code> و <code>unshift()</code> لإضافة <code>&#39;I&#39;, 2, &#39;three&#39;</code> إلى بداية الصفيف و <code>7, &#39;VIII&#39;, 9</code> إلى النهاية بحيث يحتوي الصفيف الذي تم إرجاعه على تمثيلات للأرقام 1-9 بالترتيب. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: '<code>mixedNumbers([&quot;IV&quot;, 5, &quot;six&quot;])</code> يجب أن تعود الآن <code>[&quot;I&quot;, 2, &quot;three&quot;, &quot;IV&quot;, 5, &quot;six&quot;, 7, &quot;VIII&quot;, 9]</code>'
    testString: 'assert.deepEqual(mixedNumbers(["IV", 5, "six"]), ["I", 2, "three", "IV", 5, "six", 7, "VIII", 9], "<code>mixedNumbers(["IV", 5, "six"])</code> should now return <code>["I", 2, "three", "IV", 5, "six", 7, "VIII", 9]</code>");'
  - text: يجب استخدام الدالة <code>mixedNumbers</code> الأسلوب <code>push()</code>
    testString: 'assert.notStrictEqual(mixedNumbers.toString().search(/\.push\(/), -1, "The <code>mixedNumbers</code> function should utilize the <code>push()</code> method");'
  - text: و <code>mixedNumbers</code> وظيفة يجب الاستفادة من <code>unshift()</code> طريقة
    testString: 'assert.notStrictEqual(mixedNumbers.toString().search(/\.unshift\(/), -1, "The <code>mixedNumbers</code> function should utilize the <code>unshift()</code> method");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function mixedNumbers(arr) {
  // change code below this line

  // change code above this line
  return arr;
}

// do not change code below this line
console.log(mixedNumbers(['IV', 5, 'six']));

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
