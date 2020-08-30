---
id: bd7158d8c442eddfaeb5bd0f
title: Build a Pomodoro Clock
isRequired: true
challengeType: 3
videoUrl: ''
localeTitle: بناء على مدار الساعة بومودورو
---

## Description
<section id="description"> <strong>الهدف:</strong> إنشاء تطبيق <a href="https://codepen.io" target="_blank">CodePen.io</a> تشبه وظيفيًا هذا: <a href="https://codepen.io/freeCodeCamp/full/XpKrrW" target="_blank">https://codepen.io/freeCodeCamp/full/XpKrrW</a> . تحقق من <a href="https://en.wikipedia.org/wiki/User_story" target="_blank">قصص المستخدمين</a> أدناه واجتاز جميع الاختبارات. اعطها اسلوبك الشخصي. يمكنك استخدام أي مزيج من HTML و JavaScript و CSS و Bootstrap و SASS و React و Redux و jQuery لإكمال هذا المشروع. يجب عليك استخدام إطار الواجهة الأمامية (مثل React على سبيل المثال) لأن هذا القسم يدور حول تعلم إطارات الواجهة الأمامية. لا يوصى باستخدام تقنيات إضافية غير مدرجة أعلاه واستخدامها على مسؤوليتك الخاصة. نحن نتطلع إلى دعم أطر عمل الواجهة الأخرى مثل Angular و Vue ، ولكنها غير مدعومة حاليًا. سنقبل ونحاول إصلاح جميع تقارير المشكلات التي تستخدم مجموعة التكنولوجيا المقترحة لهذا المشروع. الترميز سعيدة! <strong>قصة المستخدم رقم 1:</strong> يمكنني رؤية عنصر به <code>id=&quot;break-label&quot;</code> يحتوي على سلسلة (مثل &quot;Break Length&quot;). <strong>قصة المستخدم رقم 2:</strong> يمكنني رؤية عنصر له <code>id=&quot;session-label&quot;</code> يحتوي على سلسلة (مثل &quot;طول الجلسة&quot;). <strong>قصة المستخدم رقم 3:</strong> يمكنني رؤية عنصرين قابلين للنقر مع المعرفات المقابلة: <code>id=&quot;break-decrement&quot;</code> و <code>id=&quot;session-decrement&quot;</code> . <strong>قصة المستخدم رقم 4:</strong> يمكنني رؤية عنصرين قابلين للنقر مع المعرفات المقابلة: <code>id=&quot;break-increment&quot;</code> و <code>id=&quot;session-increment&quot;</code> . <strong>قصة المستخدم رقم 5:</strong> يمكنني رؤية عنصر له <code>id=&quot;break-length&quot;</code> ، والذي يعرض افتراضيًا (عند التحميل) قيمة 5. <strong>قصة المستخدم رقم 6:</strong> يمكنني رؤية عنصر له <code>id=&quot;session-length&quot;</code> مناظر <code>id=&quot;session-length&quot;</code> ، والتي تعرض افتراضيًا قيمة 25. <strong>قصة المستخدم رقم 7:</strong> يمكنني رؤية عنصر له <code>id=&quot;timer-label&quot;</code> المقابلة <code>id=&quot;timer-label&quot;</code> ، يحتوي على سلسلة تشير إلى جلسة تمت تهيئتها (على سبيل المثال&quot; جلسة &quot;) . <strong>قصة المستخدم رقم 8:</strong> يمكنني رؤية عنصر له <code>id=&quot;time-left&quot;</code> . ملاحظة: متوقفة مؤقتًا أو قيد التشغيل ، يجب دائمًا عرض القيمة في هذا الحقل بتنسيق <code>mm:ss</code> (أي 25:00). <strong>قصة المستخدم رقم 9:</strong> يمكنني رؤية عنصر قابل للنقر به <code>id=&quot;start_stop&quot;</code> مناظر <code>id=&quot;start_stop&quot;</code> . <strong>قصة المستخدم رقم 10:</strong> يمكنني رؤية عنصر قابل للنقر به <code>id=&quot;reset&quot;</code> مناظر <code>id=&quot;reset&quot;</code> . <strong>قصة المستخدم رقم 11:</strong> عندما أنقر على العنصر الذي يحتوي على معرف <code>reset</code> ، يجب إيقاف أي موقت تشغيل ، يجب أن ترجع القيمة في <code>id=&quot;break-length&quot;</code> إلى <code>5</code> ، فيجب أن ترجع القيمة داخل <code>id=&quot;session-length&quot;</code> إلى 25 ، والعنصر الذي له <code>id=&quot;time-left&quot;</code> يجب إعادة تعيينه إلى حالته الافتراضية. <strong>قصة المستخدم رقم 12:</strong> عندما أنقر على العنصر بمعرّف <code>break-decrement</code> ، فإن القيمة ضمن <code>break-decrement</code> <code>id=&quot;break-length&quot;</code> بقيمة 1 ، ويمكنني رؤية القيمة المحدّثة. <strong>قصة المستخدم رقم 13:</strong> عندما أنقر على العنصر الذي يحتوي على معرّف <code>break-increment</code> ، فإن القيمة ضمن <code>break-increment</code> <code>id=&quot;break-length&quot;</code> بقيمة 1 ، ويمكنني رؤية القيمة المحدّثة. <strong>قصة المستخدم رقم 14:</strong> عندما أنقر على العنصر بمعرّف <code>session-decrement</code> ، فإن القيمة ضمن <code>session-decrement</code> <code>id=&quot;session-length&quot;</code> بقيمة 1 ، ويمكنني رؤية القيمة المحدّثة. <strong>قصة المستخدم رقم 15:</strong> عندما أنقر على العنصر بمعرّف <code>session-increment</code> ، فإن القيمة ضمن قيمة <code>id=&quot;session-length&quot;</code> بقيمة 1 ، ويمكنني رؤية القيمة المحدّثة. <strong>قصة المستخدم رقم 16:</strong> لا يجب أن أتمكن من تعيين جلسة أو طول للكسر إلى &lt;= 0. <strong>قصة المستخدم رقم 17:</strong> لا ينبغي أن أتمكن من تعيين جلسة أو طول للكسر إلى&gt; 60. <strong>قصة المستخدم رقم 18:</strong> عندما أكون أولاً ، انقر فوق العنصر مع <code>id=&quot;start_stop&quot;</code> ، يجب أن يبدأ تشغيل جهاز ضبط الوقت من القيمة المعروضة حاليًا في <code>id=&quot;session-length&quot;</code> ، حتى إذا تم زيادة القيمة أو إنقاصها من القيمة الأصلية لـ 25. <strong>قصة المستخدم رقم 19 :</strong> إذا كان المؤقت يعمل ، فيجب أن يعرض العنصر ذو معرف <code>time-left</code> الوقت المتبقي بتنسيق <code>mm:ss</code> (يتناقص بقيمة 1 وتحديث العرض كل 1000ms). <strong>قصة المستخدم رقم 20:</strong> إذا كان المؤقت يعمل <code>id=&quot;start_stop&quot;</code> على العنصر الذي يحمل <code>id=&quot;start_stop&quot;</code> ، فيجب أن يتوقف العد التنازلي. <strong>قصة المستخدم رقم 21:</strong> إذا تم إيقاف المؤقت مؤقتًا ، <code>id=&quot;start_stop&quot;</code> على العنصر ذي <code>id=&quot;start_stop&quot;</code> ، فيجب استئناف تشغيل العد التنازلي من النقطة التي تم إيقافها مؤقتًا فيها. <strong>قصة المستخدم رقم 22:</strong> عندما يصل العد التنازلي للجلسة إلى الصفر (ملاحظة: يجب أن يصل الموقت إلى 00:00) ، ويبدأ العد التنازلي الجديد ، يجب أن يعرض العنصر ذو معرف <code>timer-label</code> سلسلة تشير إلى بداية فاصل. <strong>قصة المستخدم رقم 23:</strong> عندما يصل العد التنازلي للجلسة إلى الصفر (ملاحظة: يجب أن يصل الموقت إلى 00:00) ، يجب أن يبدأ العد التنازلي للفصل الجديد ، مع احتسابه من القيمة المعروضة حاليًا في عنصر <code>id=&quot;break-length&quot;</code> . <strong>قصة المستخدم رقم 24:</strong> عندما يصل العد التنازلي للكسر إلى الصفر (ملاحظة: يجب أن يصل الموقت إلى 00:00) ، ويبدأ العد التنازلي الجديد ، يجب أن يعرض العنصر ذو معرف <code>timer-label</code> سلسلة تشير إلى بدء جلسة. <strong>قصة المستخدم رقم 25:</strong> عندما يصل العد التنازلي للكسر إلى الصفر (ملاحظة: يجب أن يصل الموقت إلى 00:00) ، يجب أن يبدأ العد التنازلي للجلسة الجديدة ، مع احتساب القيمة من القيمة المعروضة حاليًا في عنصر <code>id=&quot;session-length&quot;</code> . <strong>قصة المستخدم رقم 26:</strong> عندما يصل العد التنازلي إلى الصفر (ملاحظة: يجب أن يصل الموقت إلى 00:00) ، يجب تشغيل صوت يشير إلى أن الوقت قد انتهى. يجب أن يستخدم هذا علامة <code>audio</code> HTML5 ويكون له <code>id=&quot;beep&quot;</code> . <strong>قصة المستخدم رقم 27:</strong> يجب أن يكون عنصر الصوت الذي يحتوي على <code>id=&quot;beep&quot;</code> ثانية واحدة أو أكثر. <strong>قصة المستخدم رقم 28:</strong> يجب إيقاف تشغيل العنصر الصوتي بمعرف <code>beep</code> ويتم إعادة لفه إلى البداية عند النقر فوق العنصر الذي يحتوي على معرف <code>reset</code> التعيين. يمكنك بناء مشروعك عن طريق <a href="http://codepen.io/freeCodeCamp/pen/MJjpwO" target="_blank">تسجيل قلم CodePen هذا</a> . أو يمكنك استخدام رابط CDN هذا لتشغيل الاختبارات في أي بيئة تفضلها: <code>https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js</code> بمجرد الانتهاء ، أرسل عنوان URL إلى عملك مشروع مع كل اختباراتها تمر. تذكر استخدام طريقة <a href="https://forum.freecodecamp.org/t/how-to-get-help-when-you-are-stuck-coding/19514" target="_blank">Read-Search-Ask</a> إذا واجهتك مشكلة. </section>

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
