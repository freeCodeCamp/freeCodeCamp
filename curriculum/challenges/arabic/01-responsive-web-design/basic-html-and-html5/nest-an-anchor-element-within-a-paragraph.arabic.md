---
id: bad87fee1348bd9aede08817
title: Nest an Anchor Element within a Paragraph
challengeType: 0
videoUrl: ''
localeTitle: عش عنصر الارتساء ضمن فقرة
---

## Description
<section id="description"> يمكنك تضمين الروابط داخل عناصر نصية أخرى. <blockquote style=";text-align:right;direction:rtl"> &lt;P&gt; <br> إليك &lt;a target=&quot;_blank&quot; href=&quot;http://freecodecamp.org&quot;&gt; رابط إلى freecodecamp.org &lt;/a&gt; لتتبعه. <br> &lt;/ P&gt; </blockquote> دعونا نقسم المثال: يتم التفاف النص العادي في عنصر <code>p</code> : <br> <code>&lt;p&gt; Here&#39;s a ... for you to follow. &lt;/p&gt;</code> التالي هو عنصر <code>anchor</code> <code>&lt;a&gt;</code> (الذي يتطلب علامة إغلاق <code>&lt;/a&gt;</code> ): <br> <code>&lt;a&gt; ... &lt;/a&gt;</code> <code>target</code> عبارة عن سمة علامة ارتساء تحدد مكان فتح الرابط <code>&quot;_blank&quot;</code> القيمة <code>&quot;_blank&quot;</code> لفتح الرابط في علامة تبويب جديدة <code>href</code> عبارة عن سمة علامة ارتساء تحتوي على عنوان URL لـ الرابط: <br> <code>&lt;a href=&quot;http://freecodecamp.org&quot;&gt; ... &lt;/a&gt;</code> <strong>سيعرض</strong> النص <strong>&quot;link to freecodecamp.org&quot;</strong> ، داخل عنصر <code>anchor text</code> يدعى <code>anchor text</code> الرابط ، رابطًا للنقر: <br> <code>&lt;a href=&quot; ... &quot;&gt;link to freecodecamp.org&lt;/a&gt;</code> الناتج النهائي للمثال كما يلي: <br><p style=";text-align:right;direction:rtl"> إليك <a target="_blank" href="http://freecodecamp.org">رابط لـ freecodecamp.org لتتبعه</a> . </p></section>

## Instructions
<section id="instructions"> الآن عش الموجودة لديك <code>a</code> عنصر داخل الجديد <code>p</code> عنصر (فقط بعد القائمة <code>main</code> عنصر). يجب أن تحتوي الفقرة الجديدة على نص يقول &quot;عرض المزيد من صور القط&quot; ، حيث تكون &quot;صور القط&quot; ارتباطًا ، وبقية النص عبارة عن نص عادي. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 'تحتاج إلى <code>a</code> العنصر الذي يربط &quot;https://freecatphotoapp.com&quot;.'
    testString: 'assert(($("a[href=\"https://freecatphotoapp.com\"]").length > 0 || $("a[href=\"http://www.freecatphotoapp.com\"]").length > 0), "You need an <code>a</code> element that links to "https://freecatphotoapp.com".");'
  - text: الخاص بك <code>a</code> يجب أن يكون عنصر النص مرساة &quot;صور القط&quot;
    testString: 'assert($("a").text().match(/cat\sphotos/gi), "Your <code>a</code> element should have the anchor text of "cat photos"");'
  - text: إنشاء جديد <code>p</code> العنصر حول الخاص <code>a</code> العنصر. يجب أن يكون هناك 3 علامات <code>p</code> على الأقل في كود HTML الخاص بك.
    testString: 'assert($("p") && $("p").length > 2, "Create a new <code>p</code> element around your <code>a</code> element. There should be at least 3 total <code>p</code> tags in your HTML code.");'
  - text: ''
    testString: 'assert(($("a[href=\"https://freecatphotoapp.com\"]").parent().is("p") || $("a[href=\"http://www.freecatphotoapp.com\"]").parent().is("p")), "Your <code>a</code> element should be nested within your new <code>p</code> element.");'
  - text: يجب أن يحتوي عنصر <code>p</code> على النص &quot;عرض المزيد&quot; (مع وجود مسافة بعده).
    testString: 'assert(($("a[href=\"https://freecatphotoapp.com\"]").parent().text().match(/View\smore\s/gi) || $("a[href=\"http://www.freecatphotoapp.com\"]").parent().text().match(/View\smore\s/gi)), "Your <code>p</code> element should have the text "View more " (with a space after it).");'
  - text: الخاص بك <code>a</code> يجب أن <em>لا</em> يكون عنصر النص &quot;عرض أكثر&quot;.
    testString: 'assert(!$("a").text().match(/View\smore/gi), "Your <code>a</code> element should <em>not</em> have the text "View more".");'
  - text: تأكد من أن كل عنصر من عناصر <code>p</code> لديه علامة إغلاق.
    testString: 'assert(code.match(/<\/p>/g) && code.match(/<p/g) && code.match(/<\/p>/g).length === code.match(/<p/g).length, "Make sure each of your <code>p</code> elements has a closing tag.");'
  - text: تأكد من أن كل <code>a</code> عناصرك لديه علامة إغلاق.
    testString: 'assert(code.match(/<\/a>/g) && code.match(/<a/g) && code.match(/<\/a>/g).length === code.match(/<a/g).length, "Make sure each of your <code>a</code> elements has a closing tag.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<h2>CatPhotoApp</h2>
<main>

  <a href="https://freecatphotoapp.com" target="_blank">cat photos</a>

  <img src="https://bit.ly/fcc-relaxing-cat" alt="A cute orange cat lying on its back.">

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
