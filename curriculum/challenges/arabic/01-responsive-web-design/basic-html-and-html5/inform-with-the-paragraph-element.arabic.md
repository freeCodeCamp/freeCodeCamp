---
id: bad87fee1348bd9aedf08801
title: Inform with the Paragraph Element
challengeType: 0
videoUrl: ''
localeTitle: 'الإعلام بإستخدام عنصر الفقرات'
---

## الوصف
<section id="description"> يعد العنصر <code>p</code> هو العنصر المفضل لنصوص الفقرات في مواقع الويب. <code>p</code>هي اختصار لكلمة في &quot;paragraph&quot; (**وتعني فقرة**). يمكنك إنشاء عنصر الفقرة كالتالي: <code>&lt;p&gt;I&#39;m a p tag!&lt;/p&gt;</code> </section>

## التعليمات
<section id="instructions"> قم بإنشاء عنصر <code>p</code> أسفل العنصر <code>h2</code> ، واكتب به هذا النص &quot;Hello Paragraph&quot;. </section>

## الاختبارات
<section id='tests'>

```yml
tests:
  - text: انشئ العنصر <code>p</code>.
    testString: 'assert(($("p").length > 0), "Create an <code>h2</code> element.");'
  - text: يجب أن يحتوي العنصر <code>p</code> على النص التالي &quot;Hello Paragraph&quot;.
    testString: 'assert.isTrue((/hello(\s)+paragraph/gi).test($("p").text()), "Your <code>p</code> element should have the text "Hello Paragraph".");'
  - text: تأكد من أن العنصر <code>p</code> لديه وسم إغلاق.
    testString: 'assert(code.match(/<\/p>/g) && code.match(/<\/p>/g).length === code.match(/<p/g).length, "Make sure your <code>p</code> element has a closing tag.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<h1>Hello World</h1>
<h2>CatPhotoApp</h2>

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
