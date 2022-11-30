---
id: bd7178d8c242eddfaeb5bd13
title: Visualize Data with a Scatterplot Graph
challengeType: 3
forumTopicId: 301467
dashedName: visualize-data-with-a-scatterplot-graph
---

# --description--

**Objective:** Build an app that is functionally similar to this: <a href="https://scatterplot-graph.freecodecamp.rocks" target="_blank" rel="noopener noreferrer nofollow">https://scatterplot-graph.freecodecamp.rocks</a>.

Fulfill the below user stories and get all of the tests to pass. Use whichever libraries or APIs you need. Give it your own personal style.

يمكنك استخدام HTML و JavaScript و CSS و مكتبة التصوير المستندة D3. تطلب الاختبارات إنشاء محاور (axes) باستخدام خاصية المحور في D3، الذي يؤدي تِلْقائيًا إلى وضع علامات على طول المحور. وهذه العلامات لازمة لاجتياز اختبارات D3, لأن تُستخدم مواقعها لتحديد محاذاة العناصر المرسومة بيانيٍ. ستجد معلومات حول إنشاء محاور في <https://github.com/d3/d3/blob/master/API.md#axes-d3-axis>. يتم الاستفسار عن العناصر المطلوبة DOM (غير متغيرة) في لحظة إجراء كل اختبار. إذا كنت تستخدم framework (مثل Vue على سبيل المثال)، قد تكون نتائج الاختبار غير دقيقة للمحتوى الديناميكي. ونأمل أن نستوعبها في المستقبل، ولكن هذه frameworks غير مدعومة حاليا لمشاريع D3.

**قصة المستخدم 1:** يمكنني أن أرى عنصر title مع موافقه `id="title"`.

**قصة المستخدم 2:** يمكنني رؤية محور أفقي (x-axis) يوافق بمتغير يحتوي على `id="x-axis"`.

**قصة المستخدم 3:** يمكنني رؤية محور رئسي (y-axis) يوافق بمتغير يحتوي على `id="y-axis"`.

**قصة المستخدم 4:** يمكنني أن أرى نقاط (dots) ولكل منها فئة (class) يسمى `dot`، التي تمثل البيانات التي يتم تخطيطها.

**قصة المستخدم 5:** كل نقطة يجب أن تحتوي على الخصائص `data-xvalue` و `data-yvalue` التي توافق القيم `x` و `y`.

**قصة المستخدم 6:** يجب أن يضمن كل نقطة من `data-xvalue` و `data-yvalue` نطاق البيانات الفعلية وبتنسيق البيانات الصحيحة. في `data-xvalue`، يقبل تقييم الاختبارات الأرقام الصحيحة (السنوات الكاملة) أو كائنات `Date`. في `data-yvalue` (لدقائق)، استخدم كائنات `Date`.

**قصة المستخدم 7:** يجب أن تتوافق `data-xvalue` ونقطتها الموافقة مع النقطة/القيمة الموافقة على محور أفقي (x-axis).

**قصة المستخدم 8:** يجب أن توافق `data-yvalue` ونقطتها الموافقة مع النقطة/القيمة الموافقة على محور أفقي (y-axis).

**قصة المستخدم 9:** يمكننك رأيه تسميات علامة (tick) متعددة على المحور الرأسي (y-axis) مع تنسيق الوقت `%M:%S`.

**قصة المستخدم 10:** يمكننك رأيه تسميات علامة (tick) متعددة على المحور الأفقي (x-axis) الذي يظهر السنة.

**قصة المستخدم 11:** يمكننك رأيه نطاق (range) تسميات (labels) المحور الأفقي (x-axis) يقع ضمن نطاق بيانات المحور الأفقي (x-axis) فعلاً.

**قصة المستخدم 12:** يمكننك رأيه نطاق (range) تسميات (labels) المحور الرأسي (y-axis) تقع ضمن نطاق بيانات المحور الرأسي (y-axis) فعلاً.

**قصة المستخدم 13:** يمكننك رؤية legend تحتوي على نص وصفي يحتوي على `id="legend"`.

**قصة المستخدم 14:** يمكننك تحريك الفأرة (mouse) فوق منطقة ورأيه أدوات نصيحة (tooltip) موافق `id="tooltip"`، التي تعرض المزيد من المعلومات حول المنطقة.

**قصة المستخدم 15:** يجب أن تحتوي تلميح أدواتك (tooltip) على خاصية `data-year` التي تتوافق مع `data-xvalue` في المنطقة النشطة.

إليك مجموعة البيانات التي ستحتاج إلى إكمال هذا المشروع: `https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/cyclist-data.json`

You can build your project by <a href='https://codepen.io/pen?template=MJjpwO' target="_blank" rel="noopener noreferrer nofollow">using this CodePen template</a> and clicking `Save` to create your own pen. Or you can use this CDN link to run the tests in any environment you like: `https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js`

Once you're done, submit the URL to your working project with all its tests passing.

# --solutions--

```js
// solution required
```
