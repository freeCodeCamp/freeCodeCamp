---
id: 587d7fb5367417b2b2512c01
title: Manage npm Dependencies By Understanding Semantic Versioning
localeTitle: إدارة التبعيات npm عن طريق فهم الإصدار الدلالي
challengeType: 2
---

## Description
<section id='description'> 
إصدارات من حزم npm في قسم التبعيات من package.json الخاص بك يتبع ما يسمى بإصدار Semantic (SemVer) ، وهو معيار صناعي لإصدارات البرامج التي تهدف إلى تسهيل إدارة التبعيات. يجب أن تستخدم المكتبات وأطر العمل أو غيرها من الأدوات المنشورة على npm نظام SemVer من أجل إيصال نوع التغييرات التي يمكن للمشاريع التي تعتمد على الحزمة أن تتوقع إذا تم تحديثها. 
SemVer لا معنى له في مشاريع دون واجهات برمجة التطبيقات العامة - وذلك ما لم مشروع مشابه لالأمثلة أعلاه، استخدم شكل إصدارات أخرى. 
لماذا تحتاج لفهم SemVer؟ 
معرفة SemVer يمكن أن تكون مفيدة عند تطوير البرمجيات التي تستخدم الاعتماد على الخارج (والتي تفعل دائما تقريبا). في يوم من الأيام ، سيوفر لك فهمك لهذه الأرقام من إدخال تغييرات مفاجئة إلى مشروعك دون فهم لماذا لا تسير الأمور "التي عملت بالأمس" فجأة. 
هذه هي الطريقة التي يعمل بها الإصدار الدارجة وفقًا للموقع الرسمي: 
بالنظر إلى رقم الإصدار MAJOR.MINOR.PATCH ، قم بزيادة: 
إصدار رئيسي عند إجراء تغييرات غير متوافقة على واجهة برمجة التطبيقات ، إصدار 
MINOR عند إضافة وظائف بطريقة متوافقة إلى الخلف و 
الإصدار PATCH عند إجراء إصلاحات الأخطاء المتوافقة. 
وهذا يعني أن PATCHes هي إصلاحات للأخطاء ، وإضافة MINORs إلى ميزات جديدة ، ولكن لا أحد منهما يكسر ما نجح من قبل. وأخيرًا ، تضيف MAJORs تغييرات لن تعمل مع الإصدارات السابقة. 
مثال 
رقم إصدار لغوي: 1.3.8 
إرشادات 
في قسم التبعيات في الحزمة الخاصة بك. json ، قم بتغيير إصدار اللحظة لمطابقة الإصدار 2 من MAJOR والإصدار 10 من MINOR والإصدار PATCH 2 
</section>

## Instructions
<section id='instructions'> 

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: يجب أن تتضمن "التبعيات" "لحظة"
    testString: 'getUserInput => $.get(getUserInput(''url'') + ''/_api/package.json'').then(data => { var packJson = JSON.parse(data); assert.property(packJson.dependencies, ''moment'', ''"dependencies" does not include "moment"''); }, xhr => { throw new Error(xhr.responseText); })'
  - text: يجب أن يكون إصدار "اللحظة" هو "2.10.2"
    testString: 'getUserInput => $.get(getUserInput(''url'') + ''/_api/package.json'').then(data => { var packJson = JSON.parse(data); assert.match(packJson.dependencies.moment, /^[\^\~]?2\.10\.2/, ''Wrong version of "moment". It should be 2.10.2''); }, xhr => { throw new Error(xhr.responseText); })'

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
