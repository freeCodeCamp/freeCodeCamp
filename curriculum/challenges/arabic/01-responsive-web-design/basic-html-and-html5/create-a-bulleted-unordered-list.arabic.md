---
id: bad87fee1348bd9aedf08827
title: Create a Bulleted Unordered List
challengeType: 0
videoUrl: ''
localeTitle: قم بإنشاء قائمة غير مرتبة بالعدادات
---

## Description
<section id="description"> يحتوي HTML على عنصر خاص لإنشاء <code>unordered lists</code> أو  قوائم غير مرتبة. تبدأ القوائم غير مرتبة باستخدام عنصر <code>&lt;ul&gt;</code> الافتتاحي ، متبوعًا بأي عدد من عناصر <code>&lt;li&gt;</code> . وأخيرًا ، تغلق القوائم غير المرتبة بـ <code>&lt;/ul&gt;</code> على سبيل المثال: <blockquote style=";text-align:right;direction:rtl"> &lt;UL&gt; <br> &lt;li&gt; الحليب &lt;/ لى&gt; <br> &lt;li&gt; الجبن &lt;/ لى&gt; <br> &lt;/ UL&gt; </blockquote> إنشاء قائمة غير مرتبة من &quot;الحليب&quot; و &quot;الجبن&quot;. </section>

## Instructions
<section id="instructions"> أزل آخر عنصرين من <code>p</code> وأنشئ قائمة غير مرتبة من ثلاثة أشياء تحبها القطط في أسفل الصفحة. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: إنشاء عنصر <code>ul</code> .
    testString: 'assert($("ul").length > 0, "Create a <code>ul</code> element.");'
  - text: يجب أن يكون لديك ثلاثة عناصر <code>li</code> داخل عنصر <code>ul</code> الخاص بك.
    testString: 'assert($("ul li").length > 2, "You should have three <code>li</code> elements within your <code>ul</code> element.");'
  - text: تأكد من أن عنصر <code>ul</code> لديه علامة إغلاق.
    testString: 'assert(code.match(/<\/ul>/gi) && code.match(/<ul/gi) && code.match(/<\/ul>/gi).length === code.match(/<ul/gi).length, "Make sure your <code>ul</code> element has a closing tag.");'
  - text: تأكد من أن عناصر <code>li</code> لديك علامات إغلاق.
    testString: 'assert(code.match(/<\/li>/gi) && code.match(/<li[\s>]/gi) && code.match(/<\/li>/gi).length === code.match(/<li[\s>]/gi).length, "Make sure your <code>li</code> elements have closing tags.");'
  - text: تأكد من أن عناصر <code> li </ code> لا تحتوي على فراغ أو مساحة بيضاء.
    testString: assert($("ul li").filter((_, item) => !$(item).text().trim()).length === 0, 'Make sure your <code>li</code> elements don\’t contain an empty string or only white-space.');

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<h2>CatPhotoApp</h2>
<main>
  <p>Click here to view more <a href="#">cat photos</a>.</p>

  <a href="#"><img src="https://bit.ly/fcc-relaxing-cat" alt="A cute orange cat lying on its back."></a>

  <p>Kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff.</p>
  <p>Purr jump eat the grass rip the couch scratched sunbathe, shed everywhere rip the couch sleep in the sink fluffy fur catnip scratched.</p>
</main>

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
