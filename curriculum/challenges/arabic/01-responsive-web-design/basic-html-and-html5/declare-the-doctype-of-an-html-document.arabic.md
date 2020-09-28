---
id: 587d78aa367417b2b2512aed
title: Declare the Doctype of an HTML Document
challengeType: 0
videoUrl: ''
localeTitle: قم بتعريف Doctype من مستند HTML
---

## Description
<section id="description"> تغطي التحديات حتى الآن عناصر HTML محددة واستخداماتها. ومع ذلك ، هناك بعض العناصر التي تعطي الهيكل العام لصفحتك ، ويجب تضمينها في كل مستند HTML. في الجزء العلوي من المستند ، تحتاج إلى إخبار المتصفح بإصدار HTML الذي تستخدمه صفحتك. HTML هي لغة متطورة ، ويتم تحديثها بانتظام. تدعم معظم المتصفحات الرئيسية أحدث المواصفات ، وهي HTML5. ومع ذلك ، قد تستخدم صفحات الويب القديمة الإصدارات السابقة من اللغة. أنت تخبر المتصفح بهذه المعلومات عن طريق إضافة العلامة <code>&lt;!DOCTYPE ...&gt;</code> على السطر الأول ، حيث يكون الجزء  <code>...</code> هو إصدار HTML. بالنسبة إلى HTML5 ، تستخدم <code>&lt;!DOCTYPE html&gt;</code> . <code>!</code> و <code>DOCTYPE</code> الكبيرة مهمة ، خاصة بالنسبة للمتصفحات القديمة. ليست <code>html</code> حساسة لحالة الأحرف. بعد ذلك ، يجب أن يتم لف بقية تعليمات HTML البرمجية الخاصة بك في علامات <code>html</code> . ينتقل الافتتاح <code>&lt;html&gt;</code> مباشرة أسفل السطر <code>&lt;!DOCTYPE html&gt;</code> ، ويذهب الإغلاق <code>&lt;/html&gt;</code> في نهاية الصفحة. في ما يلي مثال على بنية الصفحة: <blockquote style=";text-align:right;direction:rtl"> &lt;! DOCTYPE html&gt; <br> &lt;HTML&gt; <br> &lt;! - رمز HTML الخاص بك هنا -&gt; <br> &lt;/ HTML&gt; </blockquote></section>

## Instructions
<section id="instructions"> أضف علامة <code>DOCTYPE</code> لـ HTML5 إلى أعلى مستند HTML الفارغ في محرر الشفرة. تحته ، إضافة علامات <code>html</code> فتح وإغلاق ، والتي التفاف حول عنصر <code>h1</code> . يمكن أن يتضمن العنوان أي نص. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: يجب أن تتضمن التعليمات البرمجية الخاصة بك علامة <code>&lt;!DOCTYPE html&gt;</code> .
    testString: 'assert(code.match(/<!DOCTYPE\s+?html\s*?>/gi), "Your code should include a <code>&lt;!DOCTYPE html&gt;</code> tag.");'
  - text: يجب أن يكون هناك عنصر <code>html</code> واحد.
    testString: 'assert($("html").length == 1, "There should be one <code>html</code> element.");'
  - text: يجب أن تلتف علامات <code>html</code> حول عنصر <code>h1</code> واحد.
    testString: 'assert(code.match(/<html>\s*?<h1>\s*?.*?\s*?<\/h1>\s*?<\/html>/gi), "The <code>html</code> tags should wrap around one <code>h1</code> element.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
