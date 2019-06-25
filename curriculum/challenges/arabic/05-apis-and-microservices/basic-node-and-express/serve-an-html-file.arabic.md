---
id: 587d7fb0367417b2b2512bef
title: Serve an HTML File
localeTitle: تخدم ملف HTML
challengeType: 2
---

## Description
<section id='description'> 
يمكننا الرد باستخدام ملف باستخدام الطريقة <code>res.sendFile(path)</code> . 
يمكنك وضعه داخل <code>app.get('/', ...)</code> توجيه <code>app.get('/', ...)</code> . وراء الكواليس ، تقوم هذه الطريقة بتعيين الرؤوس المناسبة لإرشاد المتصفح الخاص بك حول كيفية التعامل مع الملف الذي تريد إرساله ، وفقًا لنوعه. ثم سوف يقرأ ويرسل الملف. هذه الطريقة تحتاج إلى مسار ملف مطلق. نوصي باستخدام المتغير العام <code>__dirname</code> لحساب المسار. 
سبيل المثال <code>absolutePath = __dirname + relativePath/file.ext</code> . 
الملف المطلوب إرساله هو <code>/views/index.html</code> . جرِّب "إظهار تطبيقك" ، يجب أن تشاهد عنوان HTML كبيرًا (ونموذجًا سنستخدمه لاحقًا ...) ، دون تطبيق أي أسلوب. 
ملاحظة: يمكنك تحرير حل التحدي السابق ، أو إنشاء حل جديد. إذا قمت بإنشاء حل جديد ، فضع في اعتبارك أن Express يقيم المسارات من الأعلى إلى الأسفل. ينفذ المعالج للمباراة الأولى. يجب عليك التعليق على الحل السابق ، أو سيستمر الخادم في الاستجابة باستخدام سلسلة. 
</section>

## Instructions
<section id='instructions'> 

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: يجب أن يخدم تطبيقك ملف المشاهدات / index.html
    testString: 'getUserInput => $.get(getUserInput(''url'')).then(data => { assert.match(data, /<h1>.*<\/h1>/, ''Your app does not serve the expected HTML''); }, xhr => { throw new Error(xhr.responseText); })'

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
