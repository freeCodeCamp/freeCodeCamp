---
id: 587d7fb2367417b2b2512bf8
title: Get Data from POST Requests
localeTitle: الحصول على البيانات من طلبات POST
challengeType: 2
---

## Description
<section id='description'> 
بتحميل معالج POST على المسار <code>/name</code> . انها نفس الطريق كما كان من قبل. قمنا بإعداد نموذج في صفحة HTML الأمامية. وسوف يقدم نفس البيانات من التمرين 10 (سلسلة الاستعلام). إذا تم تكوين محلل الجسم بشكل صحيح ، يجب أن تجد المعلمات في الكائن <code>req.body</code> . إلقاء نظرة على المثال المعتاد للمكتبة: 
<blockquote style=";text-align:right;direction:rtl">route: POST '/library'<br>urlencoded_body: userId=546&bookId=6754 <br>req.body: {userId: '546', bookId: '6754'}</blockquote> 
رد باستخدام نفس كائن JSON كما كان من قبل: <code>{name: 'firstname lastname'}</code> . اختبر إذا كانت نقطة النهاية تعمل باستخدام نموذج html الذي قدمناه في صفحة التطبيق الأولى. 
نصيحة: هناك العديد من طرق http الأخرى بخلاف GET و POST. وبموجب الاتفاقية هناك تناظر بين الفعل http ، والعملية التي ستنفذها على الخادم. التعيين التقليدي هو: 
POST (أحيانًا PUT) - إنشاء مورد جديد باستخدام المعلومات المرسلة مع الطلب ، 
GET - قراءة مورد موجود بدون تعديله ، 
PUT أو PATCH (أحيانًا POST) - تحديث مورد باستخدام البيانات تم الإرسال ، 
DELETE => حذف مورد. 
هناك أيضًا طريقتين أخريين تستخدمان للتفاوض على اتصال بالخادم. باستثناء GET ، يمكن أن تحتوي جميع الطرق الأخرى المذكورة أعلاه على حمولة (أي البيانات في نص الطلب). يعمل الوسيطة محلل الجسم مع هذه الأساليب كذلك. 
</section>

## Instructions
<section id='instructions'> 

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: "الاختبار 1: يجب أن تستجيب نقطة نهاية API الخاصة بك بالاسم الصحيح"
    testString: 'getUserInput => $.post(getUserInput(''url'') + ''/name'', {first: ''Mick'', last: ''Jagger''}).then(data => { assert.equal(data.name, ''Mick Jagger'', ''Test 1: "POST /name" route does not behave as expected'') }, xhr => { throw new Error(xhr.responseText); })'
  - text: "الاختبار 2: يجب أن تستجيب نقطة نهاية API الخاصة بك بالاسم الصحيح"
    testString: 'getUserInput => $.post(getUserInput(''url'') + ''/name'', {first: ''Keith'', last: ''Richards''}).then(data => { assert.equal(data.name, ''Keith Richards'', ''Test 2: "POST /name" route does not behave as expected'') }, xhr => { throw new Error(xhr.responseText); })'

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
