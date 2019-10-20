---
id: 587d7b84367417b2b2512b37
title: Catch Mixed Usage of Single and Double Quotes
challengeType: 1
videoUrl: ''
localeTitle: قبض على الاستخدام المختلط من أسعار مفردة ومزدوجة
---

## Description
<section id="description"> تسمح جافا سكريبت باستخدام كل من الاقتباس الفردي (&quot;&quot;) والمزدوج (&quot;&quot;) لإعلان سلسلة. إن تحديد أي واحد يستخدم بشكل عام يعود إلى التفضيل الشخصي ، مع بعض الاستثناءات. وجود خيارين يكونان رائعين عند وجود سلسلة أو تقلصات أخرى. جزء من النص الموجود بين علامتي اقتباس ، ولكن عليك أن تكون حريصًا على عدم إغلاق السلسلة مبكرًا ، مما يؤدي إلى حدوث خطأ في بناء الجملة. في ما يلي بعض الأمثلة لخلط علامات التنصيص: <blockquote style=";text-align:right;direction:rtl"> // هذه صحيحة: <br> const grouchoContraction = &quot;لقد أمضيت أمسية رائعة ، لكن هذا لم يكن كذلك.&quot;؛ <br> const quoteInString = &quot;قال غروشو ماركس ذات مرة&quot; اقتبسني قائلا: &quot;لقد تم اقتباس أسئتي&quot;. <br> // هذا غير صحيح: <br> const uhOhGroucho = &#39;لقد أمضيت أمسية رائعة ، لكن هذا لم يكن كذلك.&#39;؛ </blockquote> بالطبع ، لا بأس من استخدام نمط واحد فقط من علامات الاقتباس. يمكنك الهروب من علامات الاقتباس داخل السلسلة باستخدام حرف الهروب الخط المائل للخلف (\): <blockquote style=";text-align:right;direction:rtl"> // الاستخدام الصحيح لنفس الأسعار: <br> const allSameQuotes = &#39;لقد كان لي أمسية رائعة ، ولكن هذا لم يكن كذلك.&#39;؛ </blockquote></section>

## Instructions
<section id="instructions"> أصلح السلسلة بحيث تستخدم إما علامات اقتباس مختلفة لقيمة <code>href</code> ، أو تهرب منها. احتفظ بعلامات الاقتباس المزدوجة حول السلسلة بأكملها. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 'يجب أن تحدد شفرتك علامات الاقتباس حول قيمة <code>href</code> &quot;# Home&quot; إما بتغييرها أو الهروب منها.'
    testString: 'assert(code.match(/<a href=\s*?("|\\")#Home\1\s*?>/g), "Your code should fix the quotes around the <code>href</code> value "#Home" by either changing or escaping them.");'
  - text: يجب أن تحتفظ شفرتك بالعلامات المزدوجة حول السلسلة بأكملها.
    testString: 'assert(code.match(/"<p>.*?<\/p>";/g), "Your code should keep the double quotes around the entire string.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
let innerHtml = "<p>Click here to <a href="#Home">return home</a></p>";
console.log(innerHtml);

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
