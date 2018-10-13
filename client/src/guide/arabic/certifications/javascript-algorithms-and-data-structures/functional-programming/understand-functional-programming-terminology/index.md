---
title: Understand Functional Programming Terminology
localeTitle: فهم البرمجة الوظيفية المصطلحات
---
## فهم البرمجة الوظيفية المصطلحات

### طريقة

كما هو الحال في التحدي الأخير ، يجب عليك استدعاء طريقة `getTea` وتخزينها في متغير. فقط هذه المرة ، لديك متغيرين لتخزين مجموعتين `getTea()` من البيانات. سترى أن الدالة `getTea()` هي نفسها كما كانت من قبل ، فقط الآن تأخذ في معلمتين منفصلتين. المعلمة الأولى هي دالة ، لذا سنحتاج إلى المرور في `prepareGreenTea()` أو الوظيفة `prepareBlackTea()` ، متبوعة بالمعلمة الثانية `numOfCups` التي يمكن `numOfCups` صحيح.

### حل

في هذا التمرين ، نقوم بتعيين نتيجة دالة أعلى من الترتيب للمتغيرات. للقيام بذلك ، فإننا نطلق على الدالة وظيفة رد اتصال كمعامل.

## ملحوظة:

`javascript const basketOne = makeBasket(addFruit, 10)`

\## حل:

\`\` \`جافا سكريبت

/ \*\*

*   عملية طويلة لتحضير الشاي الأخضر.
*   return {string} كوب من الشاي الأخضر. \*\* / const preparGreenTea = () => 'greenTea'؛

/ \*\*

*   الحصول على عدد معين من أكواب الشاي.
    
*   param {function (): string} preparTea نوع وظيفة تحضير الشاي.
    
*   param {number} numOfCups عدد أكواب الشاي المطلوبة.
    
*   return {Array } كمية معينة من أكواب الشاي. \*\* / const getTea = (prepareTea، numOfCups) => { const teaCups = \[\]؛
    
    لـ (دع الكؤوس = 1 ؛ أكواب <= numOfCups ؛ أكواب + = 1) { const teaCup = prepareTea ()؛ teaCups.push (فنجان)؛ }
    
    عودة teaCups. }؛
    
    // أضف رمزك أدناه هذا السطر const tea4GreenTeamFCC = getTea (prepareGreenTea، 27)؛ // :) const tea4BlackTeamFCC = getTea (prepareBlackTea، 13)؛ // :) // أضف رمزك فوق هذا الخط
    
    console.log ( tea4GreenTeamFCC، tea4BlackTeamFCC )؛
    
    \`\` \`
    

## شرح الكود:

في الحل أعلاه مررنا في الوظائف `prepareGreenTea()` و `prepareBlackTea()` كمعلمات أو وظائف رد اتصال لوظائف `getTea()` التي تم تعيينها لمتغيرينا `tea4BlackTeamFCC` و `tea4GreenTeamFCC` . بهذه الطريقة لا تتغير المتغيرات العالمية ، ولدينا خيار لإضافة عدد غير محدود من الخيارات المختلفة من أساليب `prepareTea()` لأنه يتم تمرير وظيفة رد الاتصال إلى وظيفة ترتيب أعلى من `getTea()` .