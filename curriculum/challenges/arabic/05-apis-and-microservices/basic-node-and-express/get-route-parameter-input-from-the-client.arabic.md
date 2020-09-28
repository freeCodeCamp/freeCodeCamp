---
id: 587d7fb2367417b2b2512bf5
title: Get Route Parameter Input from the Client
localeTitle: الحصول على إدخال معلمة المسار من العميل
challengeType: 2
---

## Description
<section id='description'> 
عند إنشاء واجهة برمجة التطبيقات ، يتعين علينا السماح للمستخدمين بالاتصال بنا بما يريدون الحصول عليه من خدمتنا. على سبيل المثال ، إذا كان العميل يطلب معلومات حول مستخدم مخزّن في قاعدة البيانات ، فيحتاج إلى طريقة لإعلامنا بالمستخدم الذي يهتم به. تتمثل إحدى الطرق الممكنة لتحقيق هذه النتيجة في استخدام معلمات المسار. تدعى معلمات المسار أجزاء من عنوان URL ، مفصولة بشرائط مائلة (/). يلتقط كل مقطع قيمة جزء عنوان URL الذي يطابق موقعه. يمكن العثور على القيم التي تم التقاطها في كائن <code>req.params</code> . 
<blockquote style=";text-align:right;direction:rtl">route_path: '/user/:userId/book/:bookId'<br>actual_request_URL: '/user/546/book/6754' <br>req.params: {userId: '546', bookId: '6754'}</blockquote> 
إنشاء ملقم صدى ، التي شنت على الطريق <code>GET /:word/echo</code> . الرد باستخدام كائن JSON ، مع أخذ بنية <code>{echo: word}</code> . يمكنك العثور على الكلمة المراد تكرارها على <code>req.params.word</code> . يمكنك اختبار مسارك من شريط العناوين بالمتصفح ، وزيارة بعض المسارات المطابقة ، على سبيل المثال your-app-rootpath / freecodecamp / echo 
</section>

## Instructions
<section id='instructions'> 

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: "الاختبار 1: يجب أن يكرر خادم الصدى الكلمات بشكل صحيح"
    testString: 'getUserInput => $.get(getUserInput(''url'') + ''/eChOtEsT/echo'').then(data => { assert.equal(data.echo, ''eChOtEsT'', ''Test 1: the echo server is not working as expected'') }, xhr => { throw new Error(xhr.responseText); })'
  - text: "الاختبار 2: يجب أن يكرر خادم الصدى الكلمات بشكل صحيح"
    testString: 'getUserInput => $.get(getUserInput(''url'') + ''/ech0-t3st/echo'').then(data => { assert.equal(data.echo, ''ech0-t3st'', ''Test 2: the echo server is not working as expected'') }, xhr => { throw new Error(xhr.responseText); })'

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
