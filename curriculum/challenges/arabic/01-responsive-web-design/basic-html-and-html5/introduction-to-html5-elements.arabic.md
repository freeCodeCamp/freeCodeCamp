---
id: bad87fee1348bd9aecf08801
title: Introduction to HTML5 Elements
challengeType: 0
videoUrl: ''
localeTitle: مقدمة إلى عناصر HTML5
---

## Description
<section id="description"> يقدم HTML5 مزيدًا من علامات HTML الوصفية. تشمل هذه <code>header</code> <code>footer</code> <code>nav</code> <code>video</code> <code>article</code> <code>section</code> وغيرها. تجعل هذه العلامات HTML أسهل في القراءة ، وتساعد أيضًا في تحسين محركات البحث (SEO) وإمكانية الوصول. تساعد علامة HTML5 <code>main</code> محركات البحث والمطورين الآخرين في العثور على المحتوى الرئيسي لصفحتك. <strong>ملحوظة</strong> <br> تتم تغطية العديد من علامات HTML5 الجديدة وفوائدها في قسم &quot;إمكانية الوصول التطبيقي&quot;. </section>

## Instructions
<section id="instructions"> إنشاء الثاني <code>p</code> العنصر بعد القائمة <code>p</code> عنصر مع النص كيتي هوز التالية: <code>Purr jump eat the grass rip the couch scratched sunbathe, shed everywhere rip the couch sleep in the sink fluffy fur catnip scratched.</code> التفاف الفقرات مع علامة <code>main</code> فتح وإغلاق. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: تحتاج 2 <code>p</code> العناصر مع النص كيتي هوز.
    testString: 'assert($("p").length > 1, "You need 2 <code>p</code> elements with Kitty Ipsum text.");'
  - text: تأكد من أن كل عنصر من عناصر <code>p</code> لديه علامة إغلاق.
    testString: 'assert(code.match(/<\/p>/g) && code.match(/<\/p>/g).length === code.match(/<p/g).length, "Make sure each of your <code>p</code> elements has a closing tag.");'
  - text: يجب أن يحتوي عنصر <code>p</code> على الكلمات القليلة الأولى من <code>kitty ipsum text</code> الإضافية المتوفرة.
    testString: 'assert.isTrue((/Purr\s+jump\s+eat/gi).test($("p").text()), "Your <code>p</code> element should contain the first few words of the provided additional <code>kitty ipsum text</code>.");'
  - text: يجب أن يحتوي <code>main</code> عنصر <code>main</code> واحد.
    testString: 'assert($("main").length === 1, "Your code should have one <code>main</code> element.");'
  - text: يجب أن يحتوي العنصر <code>main</code> على عنصرين فقرة كأطفال.
    testString: 'assert($("main").children("p").length === 2, "The <code>main</code> element should have two paragraph elements as children.");'
  - text: يجب أن تأتي العلامة الافتتاحية <code>main</code> قبل علامة الفقرة الأولى.
    testString: 'assert(code.match(/<main>\s*?<p>/g), "The opening <code>main</code> tag should come before the first paragraph tag.");'
  - text: يجب أن تأتي علامة الإغلاق <code>main</code> بعد علامة فقرة الإغلاق الثانية.
    testString: 'assert(code.match(/<\/p>\s*?<\/main>/g), "The closing <code>main</code> tag should come after the second closing paragraph tag.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<h2>CatPhotoApp</h2>

<p>Kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff.</p>

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
