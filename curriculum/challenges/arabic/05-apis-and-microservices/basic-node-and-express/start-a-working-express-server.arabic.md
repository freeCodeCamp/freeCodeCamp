---
id: 587d7fb0367417b2b2512bee
title: Start a Working Express Server
localeTitle: بدء تشغيل ملقم Express العمل
challengeType: 2
---

## Description
<section id='description'> 
في أول سطرين من الملف myApp.js يمكنك أن ترى كيف أنه من السهل إنشاء كائن تطبيق Express. يحتوي هذا الكائن على عدة طرق ، وسوف نتعلم الكثير منها في هذه التحديات. إحدى الطرق الأساسية هي <code>app.listen(port)</code> . فإنه يخبر الخادم الخاص بك للاستماع على منفذ معين ، ووضعها في حالة تشغيل. يمكنك رؤيتها في أسفل الملف. من داخل التعليقات لأننا نحتاج إلى تشغيل التطبيق في الخلفية لأسباب اختبار. كل التعليمات البرمجية التي قد ترغب في إضافتها تنتقل بين هذين الجزأين الأساسيين. يقوم Glitch بتخزين رقم المنفذ في <code>process.env.PORT</code> متغير البيئة. قيمتها <code>3000</code> . 
دعونا نخدم أول سلسلة لدينا! في Express ، تأخذ المسارات البنية التالية: <code>app.METHOD(PATH, HANDLER)</code> . الطريقة هي طريقة http في الأحرف الصغيرة. PATH هو مسار نسبي على الخادم (يمكن أن يكون عبارة عن سلسلة أو حتى تعبير عادي). HANDLER هي وظيفة يقوم Express باستدعاءها عند مطابقة المسار. 
تأخذ معالجات <code>function(req, res) {...}</code> الشكل <code>function(req, res) {...}</code> ، حيث req هي كائن الطلب ، و res هو كائن الاستجابة. على سبيل المثال ، المعالج 
<blockquote style=";text-align:right;direction:rtl">function(req, res) {<br> res.send('Response String');<br>}</blockquote> 
سيخدم السلسلة "سلسلة الاستجابة". 
استخدم طريقة <code>app.get()</code> لعرض سلسلة Hello Express ، لطلبات GET التي تطابق مسار / root. تأكد من عمل التعليمات البرمجية الخاصة بك بالنظر إلى السجلات ، ثم انظر النتائج في المستعرض الخاص بك ، والنقر فوق الزر 'إظهار Live' في واجهة المستخدم Glitch UI. 
</section>

## Instructions
<section id='instructions'> 

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: يجب أن يخدم تطبيقك السلسلة "Hello Express"
    testString: 'getUserInput => $.get(getUserInput(''url'')).then(data => { assert.equal(data, ''Hello Express'', ''Your app does not serve the text "Hello Express"''); }, xhr => { throw new Error(xhr.responseText); })'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
