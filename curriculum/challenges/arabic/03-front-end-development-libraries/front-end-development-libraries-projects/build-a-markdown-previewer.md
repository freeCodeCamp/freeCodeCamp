---
id: bd7157d8c242eddfaeb5bd13
title: أنشئ عارض Markdown
challengeType: 3
forumTopicId: 301372
dashedName: build-a-markdown-previewer
---

# --description--

**متطلبات:** أنشئ تطبيق يشبه وظيفيا إلي <a href="https://markdown-previewer.freecodecamp.rocks/" target="_blank" rel="noopener noreferrer nofollow">https://markdown-previewer.freecodecamp.rocks/</a>.

أكمل قصص المستخدم بالأسفل وأجتاز جميع الاختبارات للنجاح. استخدم أي libraries أو APIs تحتاج إليها. أعطيها أسلوبك الشخصي الخاص.

يمكنك استخدام أي مزيج من HTML و JavaScript و CSS و Bootstrap و SASS و React و Redux و jQuery لإكمال هذا المشروع. يجب عليك استخدام frontend framework (مثل React على سبيل المثال) لأن هذا القسم يدور حول تعلم frontend framework. لا ينصح باستخدام التكنولوجيات الإضافية غير المدرجة أعلاه و استخدامها على مسؤوليتك الخاصة. ونحن ننظر في دعم frontend frameworks أخرى، مثل Angular و Vue، ولكنها غير مدعومة حاليا. سنقبل ونحاول إصلاح جميع تقارير المشكلات التي تستخدم حُزْمَة التكنولوجيات المقترحة لهذا المشروع. برمجة سعيدة!

**قصة المستخدم #1:** يمكنني أن أرى عنصر `textarea` مع مطابقة `id="editor"`.

**قصة المستخدم #2:** يمكنني رؤية عنصر مع `id="preview"`.

**قصة المستخدم #3:** عندما أدخل النص في `#editor` عنصر, يتم تحديث عنصر `#preview` عندما أكتب لعرض محتوى النصوص.

**قصة المستخدم #4:** عندما أدخل علامة GitHub في `#editor`، يتم تقديم النص كعنصر HTML في `#preview` كما أكتبه (تلميح: لا تحتج إلى تحليل Markdown بنفسك - يمكنك استيراد المكتبة المعلَّمة لهذا الغرض: <https://cdnjs.com/libraries/marked>).

**قصة المستخدم #5:** عندما تقوم معاينة العلامات بالتحميل أول مرة، النص الافتراضي في `#editor` الحقل يجب أن يحتوي على علامة صحيحة تمثل في الأقل واحدا من كل عنصر من العناصر التالية: عنصر العنوان (H1 size)، عنصر عنوان فرعي (H2 size)، ورابط (link)، ورمز داخلي (inline code)، وكتلة رموز (code block)، وعنصر قائمة (list item)، وكتلة (blockquote)، صورة (image) ونص بحروف داكنة (bolded text).

**قصة المستخدم #6:** عندما تقوم معاينة العلامات (markdown previewer) بالتحميل أول مرة، يجب تقديم العلامات (markdown) الافتراضية في الحقل `#editor` تتكون من HTML في عنصر `#preview`.

**أختبار اختياري (أنت لست بحاجة إلى اجتياز هذا الاختبار):** عينة العرض الخاص بي تفسر إرجاع النقل وتجعلها كعناصر `br` (راحة سطر).

يمكنك بناء مشروعك عن طريق <a href='https://codepen.io/pen?template=MJjpwO' target="_blank" rel="noopener noreferrer nofollow">استخدام هذا نموذج CodePen</a> والنقر على `Save` لإنشاء طبقيك الخاص بك. أو يمكنك استخدام رابط CDN هذا لتشغيل الاختبارات في أي بيئة تفضلها: `https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js`

بمجرد أن تنتهي، أرسل عنوان URL لمشروع العمل الخاص بك مع اجتياز جميع الاختبارات.

# --solutions--

```js
// solution required
```
