---
title: Create Strings Using Template Literals
localeTitle: إنشاء سلاسل باستخدام قوالب حرفية
---
بدلاً من استخدام سلسلة string ، يقدم ES6 القيم الحرفية للقوالب لإنشاء سلاسل. في هذا التحدي ، يجب عليك استخدام القيم الحرفية للقالب لإنشاء صف من التحذيرات النصية.

![:triangular_flag_on_post:](https://forum.freecodecamp.com/images/emoji/emoji_one/triangular_flag_on_post.png?v=3 ": triangular_flag_on_post:") تذكر استخدام **`Read-Search-Ask`** إذا واجهتك مشكلة. حاول إقران البرنامج وكتابة التعليمات البرمجية الخاصة بك.

### شرح المشكلة:

مطلوب لاستخدام القيم الحرفية للقالب لإرجاع قائمة كل عنصر في الصفيف حيث سيتم لف العنصر في علامة `<li></li>` .

## تلميح: 1

*   استخدم الدالة `map()` لتطبيق القيم الحرفية على كافة عناصر `arr`

> _حاول أن تحل المشكلة الآن_

## تلميح: 2

*   داخل `map()` استخدم وظيفة السهم التي تحتوي على `element` كمعلمة وترجع `<li></li>` التي تحتوي على فئة تحذير النص وتحتوي على `element` بداخلها

> _حاول أن تحل المشكلة الآن_

## تنبيه المفسد!

![علامة تحذير](//discourse-user-assets.s3.amazonaws.com/original/2X/2/2d6c412a50797771301e7ceabd554cef4edcd74d.gif)

**الحل في المستقبل!**

``const resultDisplayArray = arr.map(item => `<li class="text-warning">${item}</li>`);``

## لا خريطة () الحل

على الرغم من أنه حل أقل مرونة ، إذا كنت تعرف عدد العناصر مقدمًا ، يمكنك تعدادها كما هو موضح في

``const resultDisplayArray = [`<li class="text-warning">${arr[0]}</li>`, `<li class="text-warning">${arr[1]}</li>` ,`<li class="text-warning">${arr[2]}</li>`];``