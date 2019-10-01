---
id: 587d7fb5367417b2b2512c02
title: Use the Tilde-Character to Always Use the Latest Patch Version of a Dependency
localeTitle: استخدم حرف التلدة إلى استخدام أحدث إصدار تصحيح من تبعية
challengeType: 2
---

## Description
<section id='description'> 
في التحدي الأخير ، أخبرنا npm بتضمين إصدار محدد فقط من الحزمة. هذه طريقة مفيدة لتجميد تبعياتك إذا كنت بحاجة إلى التأكد من أن الأجزاء المختلفة من مشروعك تبقى متوافقة مع بعضها البعض. ولكن في معظم حالات الاستخدام ، لا تريد أن تفوتك أي إصلاحات للأخطاء ، نظرًا لأنها غالبًا ما تتضمن تصحيحات أمنية مهمة (ورجاءً) ألا تكسر الأشياء في القيام بذلك. 
للسماح بتبعية npm ليتم تحديثها إلى أحدث إصدار PATCH ، يمكنك بادئة إصدار التبعية بحرف التلدة (~). في package.json ، فإن القاعدة الحالية التي نتبعها حول كيفية قيام npm بترقية اللحظة هي استخدام إصدار محدد فقط (2.10.2) ، ولكننا نريد السماح بأحدث إصدار 2.10.x. 
مثال 
<code>"some-package-name": "~1.3.8" allows updates to any 1.3.x version.</code> 
إرشادات 
استخدم حرف التلدة (~) لبدء إصدار اللحظة في تبعياتك والسماح لـ npm بتحديثه إلى أي إصدار PATCH جديد. 
لاحظ أنه لا يجب تغيير أرقام الإصدارات نفسها. 
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
  - text: يجب أن يتطابق إصدار "اللحظة" "~ 2.10.2"
    testString: 'getUserInput => $.get(getUserInput(''url'') + ''/_api/package.json'').then(data => { var packJson = JSON.parse(data); assert.match(packJson.dependencies.moment, /^\~2\.10\.2/, ''Wrong version of "moment". It should be ~2.10.2''); }, xhr => { throw new Error(xhr.responseText); })'

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
