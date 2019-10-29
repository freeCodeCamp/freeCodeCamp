---
id: 587d7fb1367417b2b2512bf1
title: Serve JSON on a Specific Route
localeTitle: خدمة JSON على طريق معين
challengeType: 2
---

## Description
<section id='description'> 
بينما يخدم خادم HTML (الذي خمنته!) HTML ، فإن واجهة برمجة التطبيقات تخدم البيانات. تسمح واجهة برمجة التطبيقات (Rpresentational State Transfer) <dfn>REST</dfn> بتبادل البيانات بطريقة بسيطة ، دون الحاجة إلى معرفة العملاء لأي تفاصيل حول الخادم. يحتاج العميل فقط إلى معرفة مصدر المورد (عنوان URL) والإجراء الذي يريد تنفيذه عليه (الفعل). يتم استخدام الفعل GET عندما تقوم بجلب بعض المعلومات ، دون تعديل أي شيء. في هذه الأيام ، يكون تنسيق البيانات المفضل لنقل المعلومات عبر الويب هو JSON. ببساطة ، JSON هي طريقة ملائمة لتمثيل كائن JavaScript كسلسلة ، بحيث يمكن نقله بسهولة. 
لنقم بإنشاء واجهة برمجة تطبيقات بسيطة عن طريق إنشاء مسار يستجيب مع JSON على المسار <code>/json</code> . يمكنك القيام بذلك كالمعتاد ، مع طريقة <code>app.get()</code> . داخل معالج المسار ، استخدم الطريقة <code>res.json()</code> ، وتمريرها في كائن كوسيطة. تغلق هذه الطريقة حلقة الطلب-الاستجابة ، وتعيد البيانات. وراء الكواليس ، يقوم بتحويل كائن جافا سكريبت صالح إلى سلسلة ، ثم يقوم بتعيين الرؤوس المناسبة لإخبار المتصفح أنك تخدم JSON ، ويرسل البيانات مرة أخرى. يحتوي الكائن الصحيح على البنية المعتادة <code>{key: data}</code> . يمكن البيانات با رقم ، سلسلة ، كائن متداخل أو مصفوفة. يمكن أن تكون البيانات أيضًا متغيرًا أو نتيجة استدعاء دالة ؛ في هذه الحالة سيتم تقييمه قبل تحويله إلى سلسلة. 
خدمة الكائن <code>{"message": "Hello json"}</code> كاستجابة في تنسيق JSON ، إلى طلبات GET إلى المسار <code>/json</code> . ثم أشر المتصفح الخاص بك إلى التطبيق الخاص بك-رابط / json ، يجب أن تشاهد الرسالة على الشاشة. 
</section>

## Instructions
<section id='instructions'> 

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: "يجب أن تخدم نقطة النهاية <code>/json</code> كائن json <code>{'message': 'Hello json'}</code> "
    testString: 'getUserInput => $.get(getUserInput(''url'') + ''/json'').then(data => { assert.equal(data.message, ''Hello json'', ''The \''/json\'' endpoint does not serve the right data''); }, xhr => { throw new Error(xhr.responseText); })'

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
