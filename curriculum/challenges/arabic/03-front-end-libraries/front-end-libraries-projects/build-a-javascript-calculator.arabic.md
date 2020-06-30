---
id: bd7158d8c442eddfaeb5bd17
title: Build a JavaScript Calculator
challengeType: 3
isRequired: true
videoUrl: ''
localeTitle: بناء حاسبة جافا سكريبت
---

## Description
<section id="description"> <strong>الهدف:</strong> إنشاء تطبيق <a href="https://codepen.io" target="_blank">CodePen.io</a> تشبه وظيفيًا هذا: <a href="https://codepen.io/freeCodeCamp/full/wgGVVX" target="_blank">https://codepen.io/freeCodeCamp/full/wgGVVX</a> . تحقق من <a href="https://en.wikipedia.org/wiki/User_story" target="_blank">قصص المستخدمين</a> أدناه واجتاز جميع الاختبارات. اعطها اسلوبك الشخصي. يمكنك استخدام أي مزيج من HTML و JavaScript و CSS و Bootstrap و SASS و React و Redux و jQuery لإكمال هذا المشروع. يجب عليك استخدام إطار الواجهة الأمامية (مثل React على سبيل المثال) لأن هذا القسم يدور حول تعلم إطارات الواجهة الأمامية. لا يوصى باستخدام تقنيات إضافية غير مدرجة أعلاه واستخدامها على مسؤوليتك الخاصة. نحن نتطلع إلى دعم أطر عمل الواجهة الأخرى مثل Angular و Vue ، ولكنها غير مدعومة حاليًا. سنقبل ونحاول إصلاح جميع تقارير المشكلات التي تستخدم مجموعة التكنولوجيا المقترحة لهذا المشروع. الترميز سعيدة! <strong>قصة المستخدم رقم 1:</strong> يجب أن تحتوي الحاسبة الخاصة بي على عنصر قابل للنقر يحتوي على <code>=</code> (علامة مساواة) مع <code>id=&quot;equals&quot;</code> مناظر <code>id=&quot;equals&quot;</code> . <strong>قصة المستخدم رقم 2:</strong> يجب أن تحتوي الحاسبة الخاصة بي على 10 عناصر قابلة للنقر تحتوي على رقم واحد لكل من 0-9 ، مع المعرفات المقابلة التالية: <code>id=&quot;zero&quot;</code> ، <code>id=&quot;one&quot;</code> ، <code>id=&quot;two&quot;</code> ، <code>id=&quot;three&quot;</code> و <code>id=&quot;four&quot;</code> و <code>id=&quot;five&quot;</code> و <code>id=&quot;six&quot;</code> و <code>id=&quot;seven&quot;</code> و <code>id=&quot;eight&quot;</code> و <code>id=&quot;nine&quot;</code> . <strong>قصة المستخدم رقم 3:</strong> يجب أن تحتوي الحاسبة الخاصة بي على 4 عناصر قابلة للنقر تحتوي كل واحدة منها على واحدة من 4 عوامل رياضية أولية لها المعرفات المقابلة التالية: <code>id=&quot;add&quot;</code> ، <code>id=&quot;subtract&quot;</code> ، <code>id=&quot;multiply&quot;</code> ، <code>id=&quot;divide&quot;</code> . <strong>قصة المستخدم رقم 4:</strong> يجب أن تحتوي الحاسبة الخاصة بي على عنصر قابل للنقر يحتوي على <code>.</code> (علامة عشرية) مع <code>id=&quot;decimal&quot;</code> المقابلة <code>id=&quot;decimal&quot;</code> . <strong>قصة المستخدم رقم 5:</strong> يجب أن تحتوي الحاسبة الخاصة بي على عنصر قابل للنقر به <code>id=&quot;clear&quot;</code> . <strong>قصة المستخدم رقم 6:</strong> يجب أن تحتوي الحاسبة الخاصة بي على عنصر لعرض قيم ذات <code>id=&quot;display&quot;</code> مناظر <code>id=&quot;display&quot;</code> . <strong>قصة المستخدم رقم 7:</strong> في أي وقت ، يؤدي الضغط على الزر &quot;مسح&quot; إلى مسح قيم المدخلات والمخرجات ، ثم إرجاع الآلة الحاسبة إلى حالتها المبدئية ؛ 0 يجب أن يظهر في العنصر مع معرف <code>display</code> . <strong>قصة المستخدم رقم 8:</strong> عندما أقوم بإدخال الأرقام ، ينبغي أن أتمكن من رؤية الإدخال الخاص بي في العنصر مع معرف <code>display</code> . <strong>قصة المستخدم رقم 9:</strong> في أي ترتيب ، يجب أن أتمكن من إضافة سلسلة من الأرقام بأي طول وطرحها وضربها وقسمتها ، وعندما أضغط <code>=</code> ، يجب أن تظهر النتيجة الصحيحة في العنصر ذي معرّف <code>display</code> . <strong>قصة المستخدم رقم 10:</strong> عند إدخال الأرقام ، يجب ألا تسمح الحاسبة الخاصة بي ببدء عدد من الأصفار متعددة. <strong>قصة العضو رقم 11:</strong> عند النقر فوق عنصر عشري، و <code>.</code> يجب إلحاقها بالقيمة المعروضة حاليًا ؛ اثنان <code>.</code> في رقم واحد لا ينبغي قبوله. <strong>قصة المستخدم رقم 12:</strong> يجب أن أتمكن من تنفيذ أي عملية (+ ، - ، * ، /) على الأرقام التي تحتوي على نقاط عشرية. <strong>قصة المستخدم رقم 13:</strong> إذا تم إدخال مشغلين أو أكثر على التوالي ، فيجب أن تكون العملية التي تم تنفيذها هي آخر مشغل تم إدخاله. <strong>قصة المستخدم رقم 14:</strong> الضغط على المشغل الذي يلي مباشرة <code>=</code> يجب أن يبدأ عملية حسابية جديدة تعمل على نتيجة التقييم السابق. <strong>قصة المستخدم رقم 15:</strong> يجب أن تحتوي الحاسبة الخاصة بي على عدة أماكن عشرية من الدقة عندما يتعلق الأمر بالتقريب (لاحظ أنه لا يوجد معيار دقيق ، ولكن يجب أن تكون قادرًا على التعامل مع العمليات الحسابية مثل <code>2 / 7</code> بدقة معقولة إلى 4 منازل عشرية على الأقل) . <strong>ملاحظة حول منطق</strong> الآلة <strong>الحاسبة:</strong> يجب ملاحظة أن هناك مدرستين أساسيتين للتفكير في منطق إدخال الآلة الحاسبة: <dfn>منطق التنفيذ الفوري ومنطق</dfn> <dfn>الصيغة</dfn> . يستخدم مثالنا منطق الصيغة ويلاحظ ترتيب عملية الأسبقية ، التنفيذ الفوري لا. أيهما مقبول ، ولكن يرجى ملاحظة أنه اعتمادا على الاختيار الذي تختاره ، قد تحقق الآلة الحاسبة نتائج مختلفة عن نتائج المعادلات الخاصة بنا (انظر المثال أدناه). طالما يمكن التحقق من الحساب الخاص بك بواسطة حاسبة إنتاج أخرى ، فالرجاء عدم اعتبار هذا خطأ. <strong>مثال:</strong> <code>3 + 5 x 6 - 2 / 4 =</code> <br><ul style=";text-align:right;direction:rtl"><li style=";text-align:right;direction:rtl"> <strong>منطق التنفيذ الفوري:</strong> <code>11.5</code> </li><li style=";text-align:right;direction:rtl"> <strong>صيغة / منطق التعبير:</strong> <code>32.5</code> </li></ul> يمكنك بناء مشروعك عن طريق <a href="http://codepen.io/freeCodeCamp/pen/MJjpwO" target="_blank">تسجيل قلم CodePen هذا</a> . أو يمكنك استخدام رابط CDN هذا لتشغيل الاختبارات في أي بيئة تفضلها: <code>https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js</code> بمجرد الانتهاء ، أرسل عنوان URL إلى عملك مشروع مع كل اختباراتها تمر. تذكر استخدام طريقة <a href="https://forum.freecodecamp.org/t/how-to-get-help-when-you-are-stuck-coding/19514" target="_blank">Read-Search-Ask</a> إذا واجهتك مشكلة. </section>

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
