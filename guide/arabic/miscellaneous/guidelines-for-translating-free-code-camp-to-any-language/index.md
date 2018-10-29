---
title: Guidelines for Translating Free Code Camp to Any Language
localeTitle: مبادئ توجيهية لترجمة مخيم الرمز الحر إلى أي لغة
---
شكرًا جزيلاً على اهتمامك بترجمة FreeCodeCamp. يوصى بقراءة هذه الوثيقة للمشاركة في جهد جماعي لجلب FreeCodeCamp إلى المزيد والمزيد من الناس في جميع أنحاء العالم.

## كيف يمكن المساهمة في الترجمات؟

هناك طرق مختلفة يمكن من خلالها المساهمة بشكل تعاوني في الترجمات. كل جهد الترجمة يتبع عادة سير العمل أدناه.

> _نصيحة للمحترفين: يمكنك المساهمة في أي من أو كل المراحل أدناه في تدفق العمل حسب اهتماماتك._

*   [مراجعة عمل مترجم آخر](https://forum.freecodecamp.com/t/guidelines-for-translating-free-code-camp-to-any-language/19111/3) .
*   [خلق قضايا `Translation` لتتبع التقدم](https://forum.freecodecamp.com/t/guidelines-for-translating-free-code-camp-to-any-language/19111/4) .
*   [تنفيذ الترجمات](https://forum.freecodecamp.com/t/guidelines-for-translating-free-code-camp-to-any-language/19111/5) .
*   [قم بإنشاء طلبات السحب لإضافة الترجمات إلى قاعدة الكود](https://forum.freecodecamp.com/t/guidelines-for-translating-free-code-camp-to-any-language/19111/6)

## المبادئ التوجيهية والموارد

### إرشادات عامة

*   حاول ألا تكون رسميًا جدًا ولكن ليس عرضيًا للغاية ، فقط للحفاظ على ملاءمة الأمور.
*   من أجل جعل المحتويات أكثر قابلية للفهم للمتحدثين الأصليين للغة الهدف (التفكير في أولئك الذين لا يتحدثون الإنجليزية) ، قم بترجمة أكبر قدر ممكن ، حاول استخدام كلمة باللغة الإنجليزية فقط إذا كانت مستخدمة على نطاق واسع في البلدان حيث يتم التحدث بلغتك الهدف.

### المعجم

من المفيد أن ينشئ المترجمون الذين يعملون على نفس اللغة مسردًا يوضح ترجمة الكلمات باللغة الإنجليزية المستخدمة في تحديات FreeCodeCamp. هناك أحيانًا أكثر من طريقة لترجمة بعض المصطلحات ، وقد تؤدي الاختلافات الإقليمية إلى حدوث ارتباك (على سبيل المثال ، قد تختلف بعض المصطلحات بين الإسبانية من إسبانيا وأمريكا اللاتينية ، أو بين اللغة الفرنسية المستخدمة في كندا وفرنسا). كن ديمقراطيا! اختر أنسب الترجمة بالتصويت واحتفظ بسجل للنتائج. يمكن العثور على مثال واحد على مثل هذا السجل هنا: [FreeCodeCamp Glossary (من الإنجليزية إلى الإسبانية)](https://docs.google.com/spreadsheets/d/1c60Sl4MAAsZ7biCPgur7A4aVqhErIfwrE1SulPqbOGo/edit#gid=0) استخدم غرفة الدردشة لمناقشة المسرد ، حتى لا يفوت أي شخص أي شيء.

### إذا كنت بحاجة إلى بعض المساعدة في مجموعة أدوات المترجم من Google

قد تجد المساعدة في أتمتة عملية الترجمة من خلال استخدام مجموعة أدوات المترجم من Google ، يرجى الاطلاع على: [دليل إسباني](https://github.com/vtamara/fcc_trad)

### إنشاء مثيل اختبار من FreeCodeCamp

يمكن أن يساعدك الاطلاع على المنتج النهائي أثناء تقدمك في الترجمة في الحفاظ على الدوافع. هذا هو السبب في أنها فكرة جيدة لإنشاء مثيل اختبار FreeCodeCamp حيث يمكنك تضمين أحدث التغييرات في ترجمة اللغة التي تعمل عليها واستخدام FreeCodeCamp بما في ذلك تلك التغييرات. تم إنشاء مثيل الاختبار التالي للإصدار الإسبانية من FreeCodeCamp: [Getting Started](https://github.com/freeCodeCamp/freeCodeCamp/blob/staging/seed/challenges/00-getting-started/getting-started.json) . لإنشاء مثيل اختبار ، اتبع الخطوات التالية:

1.  اتبع تعليمات [صفحة المساهمة](https://github.com/FreeCodeCamp/FreeCodeCamp/blob/staging/CONTRIBUTING.md) تأكد من أنه يمكنك مشاهدة نسخة قيد التشغيل باللغة الإنجليزية
2.  افتح [Languages.js المدعومة](https://github.com/freeCodeCamp/freeCodeCamp/blob/staging/common/utils/supported-languages.js) وأضف لغة مثيلك (على سبيل المثال `es: 'Spanish'` ) ، أعد تشغيل مثيلك.
3.  غيّر عنوان url ببادئة لغتك (على سبيل المثال ، للإسبانية ، `/en/challenges/` to `/es/challenges/` ) ، إذا تمت ترجمة الصفحة ، فيجب أن تكون قادرًا على رؤيتها.
4.  ابحث عن ملف اللغة ، وحاول البحث عن الكلمات الرئيسية في مستودع التخزين الخاص بك ، يمكنك العثور على جميع التحديات تحت `/seed/challenges/` على سبيل المثال ، تقع صفحة " _[البدء"](https://github.com/freeCodeCamp/freeCodeCamp/blob/staging/seed/challenges/00-getting-started/getting-started.json)_ في `freeCodeCamp/seed/challenges/00-getting-started/getting-started.json`
5.  الترجمة السعيدة!
6.  قبل تقديم العلاقات العامة ، يرجى التأكد من **عدم** تضمين `supported-lamguages.js` في `supported-lamguages.js` ، ( `$ git reset -- common/utils/supported-languages.js` )
7.  الأخير وليس آخراً ، تأكد من اتباع جميع القواعد في [دليل المساهم](https://github.com/freeCodeCamp/freeCodeCamp/blob/staging/CONTRIBUTING.md) .
8.  شكرا لمساهمتك!

### المراجع

*   [توثيق شفرة المصدر من FreeCodeCamp.](https://github.com/FreeCodeCamp/FreeCodeCamp/blob/staging/README.md)
*   [سحب طلب المساهمة](https://github.com/FreeCodeCamp/FreeCodeCamp/wiki/Pull-Request-Contribute)
*   [ملفات المساعدة لترجمة تحديات ومؤشرات FreeCodeCamp باستخدام مجموعة أدوات المترجم من Google.](https://github.com/vtamara/fcc_trad/blob/master/README.md)
*   [دليل المساهم](https://github.com/freeCodeCamp/freeCodeCamp/blob/staging/CONTRIBUTING.md)

إذا وجدت أنه من المفيد ، يمكنك ترجمة هذه التعليمات إلى لغتك وتكييفها لفريق الترجمة الخاص بك (انظر على سبيل المثال ، [الأصلي باللغة الإسبانية.](https://github.com/vtamara/fcc_trad/blob/master/Recomendaciones.md) )

_ويستند هذا الدليل على [هذه الكتابة](https://github.com/vtamara/fcc_trad/blob/master/Recomendaciones.EN.md) ._