---
id: bad87fee1348bd9aedf08828
title: Create an Ordered List
challengeType: 0
videoUrl: ''
localeTitle: إنشاء قائمة مرتبة
---

## Description
<section id="description"> يحتوي HTML على عنصر خاص آخر لإنشاء <code>ordered lists</code> أو قوائم ذات تعداد رقمي. تبدأ القوائم التي يتم <code>&lt;ol&gt;</code> بعنصر فتح <code>&lt;ol&gt;</code> ، متبوعًا بأي عدد من عناصر <code>&lt;li&gt;</code> . وأخيرًا ، يتم إغلاق القوائم <code>&lt;/ol&gt;</code> على سبيل المثال: <blockquote style=";text-align:right;direction:rtl"> &lt;رأ&gt; <br> &lt;li&gt; وغارفيلد &lt;/ لى&gt; <br> &lt;li&gt; وسيلفستر &lt;/ لى&gt; <br> &lt;/ OL&gt; </blockquote> إنشاء قائمة مرقمة من &quot;Garfield&quot; و &quot;Sylvester&quot;. </section>

## Instructions
<section id="instructions"> إنشاء قائمة مرتبة من أهم 3 أشياء تكرهها القطط. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 'يجب أن يكون لديك قائمة مرتبة لـ "أهم ثلاثة أشياء للقطط التي تكره:"'
    testString: 'assert((/Top 3 things cats hate:/i).test($("ol").prev().text()), "You should have an ordered list for "Top 3 things cats hate:"");'
  - text: ''
    testString: 'assert((/Things cats love:/i).test($("ul").prev().text()), "You should have an unordered list for "Things cats love:"");'
  - text: يجب أن يكون لديك عنصر <code>ul</code> واحد فقط.
    testString: 'assert.equal($("ul").length, 1, "You should have only one <code>ul</code> element.");'
  - text: يجب أن يكون لديك عنصر <code>ol</code> واحد فقط.
    testString: 'assert.equal($("ol").length, 1, "You should have only one <code>ol</code> element.");'
  - text: يجب أن يكون لديك ثلاثة عناصر <code>li</code> داخل عنصر <code>ul</code> الخاص بك.
    testString: 'assert.equal($("ul li").length, 3, "You should have three <code>li</code> elements within your <code>ul</code> element.");'
  - text: يجب أن يكون لديك ثلاثة عناصر <code>li</code> في عنصر <code>ol</code> الخاص بك.
    testString: 'assert.equal($("ol li").length, 3, "You should have three <code>li</code> elements within your <code>ol</code> element.");'
  - text: تأكد من أن عنصر <code>ul</code> لديه علامة إغلاق.
    testString: 'assert(code.match(/<\/ul>/g) && code.match(/<\/ul>/g).length === code.match(/<ul>/g).length, "Make sure your <code>ul</code> element has a closing tag.");'
  - text: تأكد من أن عنصر <code>ol</code> يحتوي على علامة إغلاق.
    testString: 'assert(code.match(/<\/ol>/g) && code.match(/<\/ol>/g).length === code.match(/<ol>/g).length, "Make sure your <code>ol</code> element has a closing tag.");'
  - text: تأكد من أن عنصر <code>li</code> يحتوي على علامة إغلاق.
    testString: 'assert(code.match(/<\/li>/g) && code.match(/<li>/g) && code.match(/<\/li>/g).length === code.match(/<li>/g).length, "Make sure your <code>li</code> element has a closing tag.");'

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

  <p>Things cats love:</p>
  <ul>
    <li>cat nip</li>
    <li>laser pointers</li>
    <li>lasagna</li>
  </ul>
  <p>Top 3 things cats hate:</p>

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
