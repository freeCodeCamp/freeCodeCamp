---
id: 587d7fb2367417b2b2512bf7
title: Use body-parser to Parse POST Requests
localeTitle: استخدام محلل body to Parse POST الطلبات
challengeType: 2
---

## Description
<section id='description'> 
بالإضافة إلى GET هناك فعل http شائع آخر ، هو POST. POST هي الطريقة الافتراضية المستخدمة لإرسال بيانات العميل بنماذج HTML. في REST convention يستخدم POST لإرسال البيانات لإنشاء عناصر جديدة في قاعدة البيانات (مستخدم جديد ، أو مشاركة مدونة جديدة). لا توجد لدينا قاعدة بيانات في هذا المشروع ، لكننا سنتعلم كيفية التعامل مع طلبات POST على أي حال. 
في هذا النوع من الطلبات لا تظهر البيانات في عنوان URL ، تكون مخفية في نص الطلب. هذا جزء من طلب HTML ، ويسمى أيضًا الحمولة. نظرًا لأن HTML يعتمد على النص ، حتى إذا لم تكن ترى البيانات ، فهذا لا يعني أنها سرية. يتم عرض المحتوى الأساسي لطلب HTTP POST أدناه: 
<blockquote style=";text-align:right;direction:rtl">POST /path/subpath HTTP/1.0<br>From: john@example.com<br>User-Agent: someBrowser/1.0<br>Content-Type: application/x-www-form-urlencoded<br>Content-Length: 20<br>name=John+Doe&age=25</blockquote> 
كما ترى ، يتم تشفير الجسم مثل سلسلة الاستعلام. هذا هو التنسيق الافتراضي المستخدم في نماذج HTML. مع Ajax يمكننا أيضا استخدام JSON لتكون قادرة على التعامل مع البيانات التي لديها بنية أكثر تعقيدا. هناك أيضًا نوع آخر من الترميز: multipart / form-data. هذا واحد يستخدم لتحميل الملفات الثنائية. 
في هذا التمرين ، سنستخدم هيئة urlencoded. 
لتحليل البيانات الواردة من طلبات POST ، يجب عليك تثبيت حزمة: محلل الجسم. تتيح لك هذه الحزمة استخدام سلسلة من البرامج الوسيطة ، والتي يمكن أن تفك شفرة البيانات بتنسيقات مختلفة. شاهد المستندات <a href="https://github.com/expressjs/body-parser" target="_blank" >هنا</a> . 
قم بتثبيت وحدة تحليل الجسم في الحزمة. json. ثم تطلب ذلك في الجزء العلوي من الملف. قم بتخزينه في متغير اسمه bodyParser. 
يتم إرجاع الوسيطة لمعالجة البيانات المشفرة بواسطة <code>bodyParser.urlencoded({extended: false})</code> . <code>extended=false</code> هو خيار تكوين يخبر المحلل باستخدام التشفير التقليدي. عند استخدامه ، يمكن أن تكون القيم سلاسل أو صفائف فقط. النسخة الموسعة تسمح بمرونة أكبر للبيانات ، ولكن يفوقها JSON. تمرير إلى <code>app.use()</code> الدالة التي تم إرجاعها بواسطة استدعاء الأسلوب السابق. كالعادة ، يجب تركيب الوسيطة قبل كل الطرق التي تحتاجها. 
</section>

## Instructions
<section id='instructions'> 

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: يجب تركيب الوسيطة 'body-parser'
    testString: 'getUserInput => $.get(getUserInput(''url'') + ''/_api/add-body-parser'').then(data => { assert.isAbove(data.mountedAt, 0, ''"body-parser" is not mounted correctly'') }, xhr => { throw new Error(xhr.responseText); })'

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
