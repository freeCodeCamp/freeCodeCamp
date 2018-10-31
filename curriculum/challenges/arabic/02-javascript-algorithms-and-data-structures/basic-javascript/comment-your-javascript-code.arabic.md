---
id: bd7123c9c441eddfaeb4bdef
title: Comment Your JavaScript Code
challengeType: 1
videoUrl: ''
localeTitle: تعليق كود جافاسكريبت الخاص بك
---

## Description
<section id="description"> التعليقات هي أسطر من التعليمات البرمجية التي ستتجاهلها JavaScript بشكل مقصود. تعتبر التعليقات طريقة رائعة لترك ملاحظاتك لنفسك وللأشخاص الآخرين الذين سيحتاجون لاحقًا لمعرفة ما يفعله هذا الرمز. هناك طريقتان لكتابة التعليقات في جافا سكريبت: سيخبر استخدام <code>//</code> جافا سكريبت JavaScript لتجاهل الجزء المتبقي من النص في السطر الحالي: <blockquote style=";text-align:right;direction:rtl"> // هذا تعليق مباشر. </blockquote> يمكنك إنشاء تعليق متعدد الأسطر يبدأ بـ <code>/*</code> وينتهي بـ <code>*/</code> : <blockquote style=";text-align:right;direction:rtl"> /* هذا ال <br> تعليق متعدد الخطوط * / </blockquote> <strong>افضل تمرين</strong> <br> أثناء كتابة التعليمة البرمجية ، يجب إضافة التعليقات بانتظام لتوضيح وظيفة أجزاء من التعليمات البرمجية. يمكن للتعليق الجيد أن يساعد في توصيل مقاصد رمزك - سواء بالنسبة للآخرين <em>أو</em> لمستقبلك. </section>

## Instructions
<section id="instructions"> حاول إنشاء واحد من كل نوع من التعليقات. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: أنشئ تعليقًا بنمط <code>//</code> يحتوي على خمس رسائل على الأقل.
    testString: 'assert(code.match(/(\/\/)...../g), "Create a <code>//</code> style comment that contains at least five letters.");'
  - text: أنشئ تعليقًا بنمط <code>/* */</code> يحتوي على خمس رسائل على الأقل.
    testString: 'assert(code.match(/(\/\*)([^\/]{5,})(?=\*\/)/gm), "Create a <code>/* */</code> style comment that contains at least five letters.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
