---
id: 587d78b0367417b2b2512b05
title: Build a Technical Documentation Page
isRequired: true
challengeType: 3
videoUrl: ''
localeTitle: بناء صفحة التوثيق الفني
---

## Description
<section id="description"> <strong>الهدف:</strong> إنشاء تطبيق <a href="https://codepen.io" target="_blank">CodePen.io</a> تشبه وظيفيًا هذا: <a href="https://codepen.io/freeCodeCamp/full/NdrKKL" target="_blank">https://codepen.io/freeCodeCamp/full/NdrKKL</a> . تحقق من <a href="https://en.wikipedia.org/wiki/User_story" target="_blank">قصص المستخدمين</a> أدناه واجتاز جميع الاختبارات. اعطها اسلوبك الشخصي. يمكنك استخدام HTML و JavaScript و CSS لإكمال هذا المشروع. يوصى باستخدام CSS العادي لأن هذا هو ما غطته الدروس حتى الآن ، ويجب أن تحصل على بعض التمرين باستخدام CSS عادي. يمكنك استخدام Bootstrap أو SASS إذا اخترت. لا يوصى باستخدام هذا النوع من التقنيات الإضافية (على سبيل المثال jQuery أو React أو Angular أو Vue) ، ويكون استخدامها على مسؤوليتك الخاصة. سوف تعطيك مشاريع أخرى فرصة للعمل مع مكدسات التكنولوجيا المختلفة مثل React. سنقبل ونحاول إصلاح جميع تقارير المشكلات التي تستخدم مجموعة التكنولوجيا المقترحة لهذا المشروع. الترميز سعيدة! <strong>قصة المستخدم رقم 1:</strong> يمكنني رؤية عنصر <code>main</code> يحتوي على <code>id=&quot;main-doc&quot;</code> مناظر <code>id=&quot;main-doc&quot;</code> ، والذي يحتوي على المحتوى الرئيسي للصفحة (الوثائق الفنية). <strong>قصة المستخدم رقم 2:</strong> داخل عنصر <code>#main-doc</code> ، يمكنني مشاهدة عدة عناصر من <code>section</code> ، لكل منها فئة من <code>main-section</code> . يجب أن يكون هناك حد أدنى من 5. <strong>قصة المستخدم رقم 3:</strong> يجب أن يكون العنصر الأول في كل عنصر <code>.main-section</code> عنصر <code>header</code> يحتوي على نص يصف موضوع ذلك القسم. <strong>قصة المستخدم رقم 4:</strong> يجب أن يكون لكل عنصر <code>section</code> مع فئة <code>main-section</code> أيضًا معرّف يتطابق مع نص كل <code>header</code> موجود داخلها. يجب استبدال أي مسافات بشرط تسطير سفلي (على سبيل المثال ، يجب أن يحتوي <code>section</code> الذي يحتوي على الرأس &quot;Javascript و Java&quot; على <code>id=&quot;Javascript_and_Java&quot;</code> مناظر <code>id=&quot;Javascript_and_Java&quot;</code> ). <strong>قصة المستخدم رقم 5:</strong> يجب أن تحتوي عناصر <code>.main-section</code> على ما لا يقل عن 10 عناصر لعناصر <code>p</code> (وليس كل). <strong>قصة المستخدم رقم 6:</strong> يجب أن تحتوي عناصر <code>.main-section</code> على ما لا يقل عن 5 عناصر من <code>code</code> (وليس كل). <strong>قصة المستخدم # 7:</strong> <code>.main-section</code> ينبغي أن يتضمن عناصر لا يقل عن 5 <code>li</code> البنود الكاملة (وليس كل). <strong>قصة المستخدم رقم 8:</strong> يمكنني رؤية عنصر <code>nav</code> مع <code>id=&quot;navbar&quot;</code> المقابلة <code>id=&quot;navbar&quot;</code> . <strong>قصة المستخدم رقم 9:</strong> يجب أن يحتوي عنصر شريط التنقل على عنصر <code>header</code> يحتوي على نص يصف موضوع الوثائق الفنية. <strong>قصة المستخدم رقم 10:</strong> بالإضافة إلى ذلك ، يجب أن يحتوي <code>a</code> <code>nav-link</code> على رابط ( <code>a</code> ) عناصر بفئة <code>nav-link</code> . يجب أن يكون هناك واحد لكل عنصر مع <code>main-section</code> للفصل. <strong>قصة المستخدم رقم 11:</strong> يجب أن يأتي عنصر <code>header</code> في شريط التنقل قبل أي رابط ( <code>a</code> ) عناصر في <code>a</code> التنقل. <strong>قصة المستخدم رقم 12:</strong> يجب أن يحتوي كل عنصر مع فئة <code>nav-link</code> على نص يتطابق مع نص <code>header</code> داخل كل <code>section</code> (على سبيل المثال ، إذا كان لديك عنوان / عنوان &quot;مرحباً بالعالم&quot; ، يجب أن يحتوي <code>nav-link</code> الخاص بك على عنصر يحتوي على النص &quot;مرحبا بالعالم&quot;). <strong>قصة المستخدم رقم 13:</strong> عندما أنقر على عنصر شريط التنقل ، يجب أن تنتقل الصفحة إلى القسم المقابل من عنصر <code>main-doc</code> (على سبيل المثال ، إذا قمت بالنقر فوق عنصر <code>nav-link</code> يحتوي على النص &quot;Hello world&quot; ، فإن الصفحة تتنقل إلى <code>section</code> العنصر الذي لديه تلك الهوية ويحتوي على المقابلة <code>header</code> <strong>قصة المستخدم رقم 14:</strong> على الأجهزة الحجم العادية (أجهزة الكمبيوتر المحمولة والمكتبية)، وعنصر مع <code>id=&quot;navbar&quot;</code> يجب أن تظهر على الجانب الأيسر من الشاشة، وينبغي دائما <strong>قصة المستخدم رقم 15:</strong> يجب أن تستخدم صفحة &quot;المستندات التقنية&quot; استعلام وسائط واحد على الأقل. يمكنك إنشاء مشروعك من خلال <a href="http://codepen.io/freeCodeCamp/pen/MJjpwO" target="_blank">تسجيل قلم CodePen هذا</a> ، أو يمكنك استخدام رابط CDN هذا لتشغيل الاختبارات في أي بيئة تفضلها : <code>https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js</code> بمجرد الانتهاء من ذلك ، أرسل عنوان URL إلى مشروع عملك مع جميع اختباراته ، تذكر استخدام <a href="https://forum.freecodecamp.org/t/how-to-get-help-when-you-are-stuck-coding/19514" target="_blank">Read-Search-Ask</a> طريقة إذا واجهتك مشكلة. </section>

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
