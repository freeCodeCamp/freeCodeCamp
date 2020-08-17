---
id: 587d7fb2367417b2b2512bf6
title: Get Query Parameter Input from the Client
localeTitle: الحصول على إدخال معلمة طلب البحث من العميل
challengeType: 2
---

## Description
<section id='description'> 
طريقة شائعة أخرى للحصول على مدخلات من العميل هي بتشفير البيانات بعد مسار المسار ، باستخدام سلسلة استعلام. تكون سلسلة الاستعلام محددة بعلامة استفهام (؟) ، وتتضمن أزواج الحقل = القيمة. يتم فصل كل زوجين بواسطة علامة العطف (&amp;). يمكن لـ Express تحليل البيانات من سلسلة الاستعلام ، <code>req.query</code> الكائن <code>req.query</code> . لا يمكن أن تكون بعض الأحرف في عناوين URL ، يجب أن يتم ترميزها <a href='https://en.wikipedia.org/wiki/Percent-encoding' target='_blank'>بتنسيق مختلف</a> قبل أن تتمكن من إرسالها. إذا كنت تستخدم واجهة برمجة التطبيقات من جافا سكريبت ، فيمكنك استخدام طرق محددة لتشفير / فك تشفير هذه الأحرف. 
<blockquote style=";text-align:right;direction:rtl">route_path: '/library'<br>actual_request_URL: '/library?userId=546&bookId=6754' <br>req.query: {userId: '546', bookId: '6754'}</blockquote> 
إنشاء نقطة نهاية API ، محملة على <code>GET /name</code> . الرد باستخدام مستند JSON ، مع أخذ البنية <code>{ name: 'firstname lastname'}</code> . يجب ترميز معلمات الاسم الأول والأخير في سلسلة استعلام على سبيل المثال: <code>?first=firstname&amp;last=lastname</code> . 
نصيحة: سنقوم في التمرين التالي بتلقي بيانات من طلب POST ، على نفس مسار مسار <code>/name</code> . إذا كنت تريد يمكنك استخدام الطريقة <code>app.route(path).get(handler).post(handler)</code> . تسمح لك هذه البنية بسلسلة معالجات الأفعال المختلفة على نفس مسار المسار. يمكنك حفظ جزء من الكتابة ، والحصول على رمز أنظف. 
</section>

## Instructions
<section id='instructions'> 

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: "الاختبار 1: يجب أن تستجيب نقطة نهاية API الخاصة بك بالاسم الصحيح"
    testString: 'getUserInput => $.get(getUserInput(''url'') + ''/name?first=Mick&last=Jagger'').then(data => { assert.equal(data.name, ''Mick Jagger'', ''Test 1: "GET /name" route does not behave as expected'') }, xhr => { throw new Error(xhr.responseText); })'
  - text: "الاختبار 2: يجب أن تستجيب نقطة نهاية API الخاصة بك بالاسم الصحيح"
    testString: 'getUserInput => $.get(getUserInput(''url'') + ''/name?last=Richards&first=Keith'').then(data => { assert.equal(data.name, ''Keith Richards'', ''Test 2: "GET /name" route does not behave as expected'') }, xhr => { throw new Error(xhr.responseText); })'

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
