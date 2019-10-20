---
id: 587d78b3367417b2b2512b11
title: Add Items Using splice()
challengeType: 1
videoUrl: ''
localeTitle: إضافة عناصر باستخدام لصق ()
---

## Description
<section id="description"> تذكر في التحدي الأخير ذكرنا أن <code>splice()</code> يمكن أن يستغرق ما يصل إلى ثلاثة معلمات؟ حسنا ، يمكننا أن نذهب خطوة أخرى مع <code>splice()</code> - بالإضافة إلى إزالة العناصر ، يمكننا استخدام هذه المعلمة الثالثة ، والتي تمثل واحد أو أكثر من العناصر ، <em>لإضافتها</em> كذلك. يمكن أن يكون هذا مفيدًا بشكل لا يصدق للتبديل السريع لعنصر أو مجموعة من العناصر ، لعنصر آخر. على سبيل المثال ، لنفترض أنك تخزن نظام ألوان لمجموعة من عناصر DOM في مصفوفة ، وتريد تغيير لون بشكل ديناميكي بناءً على إجراء ما: <blockquote style=";text-align:right;direction:rtl"> function colorChange (arr، index، newColor) { <br> arr.splice (index، 1، newColor)؛ <br> عودة arr؛ <br> } <br><br> let colorScheme = [&#39;# 878787&#39;، &#39;# a08794&#39;، &#39;# bb7e8c&#39;، &#39;# c9b6be&#39;، &#39;# d1becf&#39;]؛ <br><br> colorScheme = colorChange (colorScheme، 2، &#39;# 332327&#39;)؛ <br> // أزلنا &#39;# bb7e8c&#39; وأضفنا &#39;# 332327&#39; في مكانها <br> // colorScheme now equalals &#39;&#39; # 878787 &#39;،&#39; # a08794 &#39;،&#39; # 332327 &#39;،&#39; # c9b6be &#39;،&#39; # d1becf &#39;] </blockquote> تأخذ هذه الدالة صفيفًا من القيم السداسية ، وهو فهرس يتم عنده إزالة عنصر ، واللون الجديد لاستبدال العنصر المُزال به. قيمة الإرجاع هي صفيف يحتوي على نظام ألوان تم تعديله حديثًا! في حين أن هذا المثال مفرط في التبسيط ، يمكننا أن نرى القيمة التي يمكن أن تستخدم بها <code>splice()</code> إلى أقصى إمكاناتها. </section>

## Instructions
<section id="instructions"> لقد حددنا وظيفة ، <code>htmlColorNames</code> ، والتي تأخذ مصفوفة من ألوان HTML كوسيطة. قم بتعديل الوظيفة باستخدام <code>splice()</code> لإزالة العنصرين الأولين من الصفيف وأضف <code>&#39;DarkSalmon&#39;</code> و <code>&#39;BlanchedAlmond&#39;</code> في <code>&#39;DarkSalmon&#39;</code> الخاصة. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 'يجب أن <code>htmlColorNames</code> <code>[&quot;DarkSalmon&quot;, &quot;BlanchedAlmond&quot;, &quot;LavenderBlush&quot;, &quot;PaleTurqoise&quot;, &quot;FireBrick&quot;]</code>'
    testString: 'assert.deepEqual(htmlColorNames(["DarkGoldenRod", "WhiteSmoke", "LavenderBlush", "PaleTurqoise", "FireBrick"]), ["DarkSalmon", "BlanchedAlmond", "LavenderBlush", "PaleTurqoise", "FireBrick"], "<code>htmlColorNames</code> should return <code>["DarkSalmon", "BlanchedAlmond", "LavenderBlush", "PaleTurqoise", "FireBrick"]</code>");'
  - text: يجب أن تستخدم الدالة <code>htmlColorNames</code> الأسلوب <code>splice()</code>
    testString: 'assert(/.splice/.test(code), "The <code>htmlColorNames</code> function should utilize the <code>splice()</code> method");'
  - text: يجب عدم استخدام <code>shift()</code> أو <code>unshift()</code> .
    testString: 'assert(!/shift|unshift/.test(code), "You should not use <code>shift()</code> or <code>unshift()</code>.");'
  - text: يجب عدم استخدام تدوين قوس الصفيف.
    testString: 'assert(!/\[\d\]\s*=/.test(code), "You should not use array bracket notation.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function htmlColorNames(arr) {
  // change code below this line

  // change code above this line
  return arr;
}

// do not change code below this line
console.log(htmlColorNames(['DarkGoldenRod', 'WhiteSmoke', 'LavenderBlush', 'PaleTurqoise', 'FireBrick']));

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
