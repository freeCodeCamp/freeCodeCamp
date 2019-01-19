---
id: bad87fee1348bd9aedf0887a
title: Headline with the h2 Element
challengeType: 0
videoUrl: ''
localeTitle: إنشاء عنوان بإستخدام العنصر h2
---

## الوصف
<section id='description'>
 في الدروس القادمة، سنقوم بإنشاء تطبيق ويب للصور القطع قطعة بقطعة. العنصر <code>h2</code> الذي ستضيفه في هذه الخطوة، سيقوم بإضافة عنوان من  المستوى الثاني لصفحة الويب.  هذا العنصر يخبر المتصفح بنية موقعك. العنصر <code>h1</code> غالباً ما يستخدم في العنوان الرئيسي، بينما العنصر <code>h2</code> يستخدم بشكل عام في العنوان الفرعية. هنالك ايضا عناصر اخرى وهي <code>h3</code> و <code>h4</code> و <code>h5</code> و <code>h6</code> و هي تمثل مستويات مختلفة من العناوين الفرعية.</section>

## التعليمات
<section id="instructions"> إضافة وسم <code>h2</code> يعرض الجملة &quot;CatPhotoApp&quot; لإنشاء <code>عنصر</code> HTML ثاني أسفل العنصر <code>h1</code> &quot;Hello World&quot;. </section>

## الاختبارات
<section id='tests'>

```yml
tests:
  - text: قم بإنشاء عنصر <code>h2</code> .
    testString: 'assert(($("h2").length > 0), "انشئ عنصر <code>h2</code>.");'
  - text: ''
    testString: 'assert(code.match(/<\/h2>/g) && code.match(/<\/h2>/g).length === code.match(/<h2>/g).length, "تأكد من إغلاق قوس العنصر <code>h2</code>.");'
  - text: ''
    testString: 'assert.isTrue((/cat(\s)?photo(\s)?app/gi).test($("h2").text()), "العنصر <code>h2</code> يجب أن يحتوي على النص "CatPhotoApp".");'
  - text: يجب أن يحتوي عنصر <code>h1</code> على النص &quot;Hello World&quot;.
    testString: 'assert.isTrue((/hello(\s)+world/gi).test($("h1").text()), "العنصر <code>h1</code> يجب أن يحتوي على النص "Hello World".");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<h1>Hello World</h1>

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
