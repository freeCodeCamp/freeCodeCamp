---
title: Go Pointers
localeTitle: الذهاب المؤشرات
---
## الذهاب المؤشرات

هذا هو كعب. [ساعد مجتمعنا على توسيعه](https://github.com/freecodecamp/guides/tree/master/src/pages/go/go-pointers/index.md) .

[سيساعدك دليل النمط السريع هذا على ضمان قبول طلب السحب](https://github.com/freecodecamp/guides/blob/master/README.md) .

مؤشرات

الذهاب لديها مؤشرات. يحتفظ المؤشر بعنوان الذاكرة لقيمة.

النوع \* T هو مؤشر إلى قيمة T. قيمته صفر لا شيء.

var p \* int

يقوم المشغل بتوليد مؤشر لمعامله.

أنا: = 42 ع = & i

يشير العامل \* إلى القيمة الأساسية للمؤشر.

fmt.Println (\* p) // read i through the pointer p \* p = 21 / set i من خلال مؤشر p

هذا هو المعروف باسم "إلغاء الإشارة" أو "غير مباشر".

على عكس C ، لا يحتوي Go على مؤشر حسابي.

#### معلومات اكثر:

*   [جولة في الذهاب](https://tour.golang.org/moretypes/1)
*   [الذهاب عن طريق المثال](https://gobyexample.com/pointers)
*   [Golang كتاب](https://www.golang-book.com/books/intro/8)
*   [مواصفات لغة برمجة Go](https://golang.org/ref/spec#Address_operators)