---
id: 587d78af367417b2b2512b04
title: Build a Product Landing Page
isRequired: true
challengeType: 3
videoUrl: ''
localeTitle: بناء صفحة هبوط منتج
---

## Description
<section id="description"> <strong>الهدف:</strong> إنشاء تطبيق <a href="https://codepen.io" target="_blank">CodePen.io</a> تشبه وظيفيًا هذا: <a href="https://codepen.io/freeCodeCamp/full/RKRbwL" target="_blank">https://codepen.io/freeCodeCamp/full/RKRbwL</a> . تحقق من <a href="https://en.wikipedia.org/wiki/User_story" target="_blank">قصص المستخدمين</a> أدناه واجتاز جميع الاختبارات. اعطها اسلوبك الشخصي. يمكنك استخدام HTML و JavaScript و CSS لإكمال هذا المشروع. يوصى باستخدام CSS العادي لأن هذا هو ما غطته الدروس حتى الآن ، ويجب أن تحصل على بعض التمرين باستخدام CSS عادي. يمكنك استخدام Bootstrap أو SASS إذا اخترت. لا يوصى باستخدام هذا النوع من التقنيات الإضافية (على سبيل المثال jQuery أو React أو Angular أو Vue) ، ويكون استخدامها على مسؤوليتك الخاصة. سوف تعطيك مشاريع أخرى فرصة للعمل مع مكدسات التكنولوجيا المختلفة مثل React. سنقبل ونحاول إصلاح جميع تقارير المشكلات التي تستخدم مجموعة التكنولوجيا المقترحة لهذا المشروع. الترميز سعيدة! <strong>قصة المستخدم # 1:</strong> الصفحة المقصودة المنتجات بلدي يجب أن يكون <code>header</code> عنصر المقابلة مع <code>id=&quot;header&quot;</code> . <strong>قصة المستخدم رقم 2:</strong> يمكنني رؤية صورة داخل عنصر <code>header</code> باستخدام <code>id=&quot;header-img&quot;</code> مناظر <code>id=&quot;header-img&quot;</code> . شعار الشركة سيجعل صورة جيدة هنا. <strong>قصة المستخدم رقم 3:</strong> داخل عنصر <code>#header</code> أستطيع أن أرى عنصر <code>nav</code> باستخدام <code>id=&quot;nav-bar&quot;</code> . <strong>قصة المستخدم رقم 4:</strong> يمكنني مشاهدة ثلاثة عناصر قابلة للنقر على الأقل داخل عنصر <code>nav</code> ، كل منها يحتوي على <code>nav-link</code> للفئة. <strong>قصة المستخدم رقم 5:</strong> عندما أنقر على زر <code>.nav-link</code> في عنصر <code>nav</code> ، يتم نقلي إلى القسم المقابل من الصفحة المقصودة. <strong>قصة المستخدم رقم 6:</strong> يمكنني مشاهدة فيديو منتج مضمّن باستخدام <code>id=&quot;video&quot;</code> . <strong>قصة المستخدم رقم 7: تحتوي</strong> صفحتي المقصودة على عنصر <code>form</code> له <code>id=&quot;form&quot;</code> مناظر <code>id=&quot;form&quot;</code> . <strong>قصة المستخدم رقم 8:</strong> داخل النموذج ، هناك حقل <code>input</code> به <code>id=&quot;email&quot;</code> حيث يمكنني إدخال عنوان بريد إلكتروني. <strong>قصة المستخدم رقم 9:</strong> يجب أن يحتوي حقل إدخال <code>#email</code> <strong># على</strong> نص <code>#email</code> للسماح للمستخدم بمعرفة ما هو الحقل. <strong>قصة المستخدم # 10:</strong> <code>#email</code> حقل إدخال يستخدم التحقق من صحة HTML5 للتأكد من أن النص الذي تم إدخاله هو عنوان البريد الإلكتروني. <strong>قصة المستخدم رقم 11:</strong> في النموذج ، هناك <code>input</code> إرسال مع <code>id=&quot;submit&quot;</code> المقابلة <code>id=&quot;submit&quot;</code> . <strong>قصة المستخدم رقم 12:</strong> عندما أنقر على عنصر <code>#submit</code> ، يتم إرسال الرسالة الإلكترونية إلى صفحة ثابتة (استخدم هذا العنوان <code>#submit</code> : <a href="https://www.freecodecamp.com/email-submit" target="_blank">https://www.freecodecamp.com/email-submit</a> ) الذي يؤكد إدخال عنوان البريد الإلكتروني و نشرت بنجاح. <strong>قصة المستخدم رقم 13:</strong> يجب أن يكون شريط التنقل دائمًا في أعلى منفذ العرض. <strong>قصة المستخدم رقم 14:</strong> يجب أن تحتوي صفحتي المقصودة للمنتج على استعلام وسائط واحد على الأقل. <strong>قصة المستخدم رقم 15:</strong> يجب أن تستخدم الصفحة المقصودة للمنتج My CSS flexbox مرة واحدة على الأقل. يمكنك بناء مشروعك عن طريق <a href="http://codepen.io/freeCodeCamp/full/MJjpwO" target="_blank">تسجيل قلم CodePen هذا</a> . أو يمكنك استخدام رابط CDN هذا لتشغيل الاختبارات في أي بيئة تفضلها: <code>https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js</code> بمجرد الانتهاء ، أرسل عنوان URL إلى عملك مشروع مع كل اختباراتها تمر. تذكر استخدام طريقة <a href="https://forum.freecodecamp.org/t/how-to-get-help-when-you-are-stuck-coding/19514" target="_blank">Read-Search-Ask</a> إذا واجهتك مشكلة. </section>

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
