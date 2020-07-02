---
id: 587d78af367417b2b2512b03
title: Build a Survey Form
isRequired: true
challengeType: 3
videoUrl: ''
localeTitle: بناء نموذج المسح
---

## Description
<section id="description"> <strong>الهدف:</strong> إنشاء تطبيق <a href="https://codepen.io" target="_blank">CodePen.io</a> يشبه وظيفيًا هذا: <a href="https://codepen.io/freeCodeCamp/full/VPaoNP" target="_blank">https://codepen.io/freeCodeCamp/full/VPaoNP</a> . تحقق من <a href="https://en.wikipedia.org/wiki/User_story" target="_blank">قصص المستخدمين</a> أدناه واجتاز جميع الاختبارات. اعطها اسلوبك الشخصي. يمكنك استخدام HTML و JavaScript و CSS لإكمال هذا المشروع. يوصى باستخدام CSS العادي لأن هذا هو ما غطته الدروس حتى الآن ، ويجب أن تحصل على بعض التمرين باستخدام CSS عادي. يمكنك استخدام Bootstrap أو SASS إذا اخترت. لا يوصى باستخدام هذا النوع من التقنيات الإضافية (على سبيل المثال jQuery أو React أو Angular أو Vue) ، ويكون استخدامها على مسؤوليتك الخاصة. سوف تعطيك مشاريع أخرى فرصة للعمل مع مكدسات التكنولوجيا المختلفة مثل React. سنقبل ونحاول إصلاح جميع تقارير المشكلات التي تستخدم مجموعة التكنولوجيا المقترحة لهذا المشروع. الترميز سعيدة! <strong>قصة المستخدم رقم 1:</strong> يمكنني رؤية عنوان له <code>id=&quot;title&quot;</code> في نص بحجم H1. <strong>قصة المستخدم رقم 2:</strong> يمكنني رؤية شرح مختصر مع <code>id=&quot;description&quot;</code> في نص P الحجم. <strong>قصة المستخدم رقم 3:</strong> يمكنني رؤية <code>form</code> مع <code>id=&quot;survey-form&quot;</code> . <strong>قصة المستخدم رقم 4:</strong> داخل عنصر النموذج ، يُطلب مني إدخال اسمي في حقل به <code>id=&quot;name&quot;</code> . <strong>قصة المستخدم رقم 5:</strong> داخل عنصر النموذج ، يُطلب مني إدخال بريد إلكتروني في حقل به <code>id=&quot;email&quot;</code> . <strong>قصة المستخدم رقم 6:</strong> إذا قمت بإدخال بريد إلكتروني لم يتم تنسيقه بشكل صحيح ، فسوف أرى خطأ في التحقق من صحة HTML5. <strong>قصة المستخدم رقم 7:</strong> داخل النموذج ، يمكنني إدخال رقم في حقل به <code>id=&quot;number&quot;</code> . <strong>قصة المستخدم رقم 8:</strong> إذا قمت بإدخال أرقام غير أرقام في إدخال الرقم ، فسوف أرى خطأ التحقق من صحة HTML5. <strong>قصة المستخدم رقم 9:</strong> إذا كان إدخال أرقام خارج نطاق إدخال رقم، التي تم تعريفها من قبل <code>min</code> و <code>max</code> الصفات، وسوف ترى خطأ التحقق من صحة HTML5. <strong>قصة المستخدم رقم 10:</strong> بالنسبة إلى الاسم ، والبريد الإلكتروني ، وحقول إدخال الرقم داخل النموذج ، يمكنني مشاهدة تصنيفات مقابلة تصف الغرض من كل حقل بالمعرفات التالية: <code>id=&quot;name-label&quot;</code> ، <code>id=&quot;email-label&quot;</code> و <code>id=&quot;number-label&quot;</code> . <strong>قصة المستخدم رقم 11:</strong> بالنسبة إلى الاسم ، والبريد الإلكتروني ، وحقول إدخال الرقم ، يمكنني رؤية نص العنصر النائب الذي يعطيني وصفًا أو إرشادات لكل حقل. <strong>قصة المستخدم رقم 12:</strong> داخل عنصر النموذج ، يمكنني تحديد خيار من قائمة منسدلة تحتوي على <code>id=&quot;dropdown&quot;</code> مناظر <code>id=&quot;dropdown&quot;</code> . <strong>قصة المستخدم رقم 13:</strong> داخل عنصر النموذج ، يمكنني تحديد حقل من مجموعة واحدة أو أكثر من أزرار الاختيار. يجب تجميع كل مجموعة باستخدام سمة <code>name</code> . <strong>قصة المستخدم رقم 14:</strong> داخل عنصر النموذج ، يمكنني تحديد عدة حقول من سلسلة من مربعات الاختيار ، التي يجب أن يكون لكل منها سمة <code>value</code> . <strong>قصة المستخدم رقم 15:</strong> داخل عنصر النموذج ، يتم <code>textarea</code> مع نص في النهاية للحصول على تعليقات إضافية. <strong>قصة المستخدم رقم 16:</strong> داخل عنصر النموذج ، يتم تقديم الزر مع <code>id=&quot;submit&quot;</code> لإرسال كل مدخلاتي. يمكنك بناء مشروعك عن طريق <a href="http://codepen.io/freeCodeCamp/pen/MJjpwO" target="_blank">تسجيل قلم CodePen هذا</a> . أو يمكنك استخدام رابط CDN هذا لتشغيل الاختبارات في أي بيئة تفضلها: <code>https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js</code> بمجرد الانتهاء ، أرسل عنوان URL إلى عملك مشروع مع كل اختباراتها تمر. تذكر استخدام طريقة <a href="https://forum.freecodecamp.org/t/how-to-get-help-when-you-are-stuck-coding/19514" target="_blank">Read-Search-Ask</a> إذا واجهتك مشكلة. </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests: []

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
