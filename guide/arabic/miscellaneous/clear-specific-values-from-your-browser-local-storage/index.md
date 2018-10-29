---
title: Clear Specific Values from Your Browser Local Storage
localeTitle: قم بإلغاء تحديد قيم محددة من مستعرض التخزين المحلي الخاص بك
---
ستؤدي إزالة قيم محددة من وحدة التخزين المحلية للمتصفح إلى حل العديد من المشكلات المتعلقة بتعطل المتصفح أو تجميده على FreeCodeCamp.

يحل هذا ، على سبيل المثال ، مشكلة شائعة في المتصفح المتدرج في صفحة التحدي بعد حفظ استجابة لحلقة لا نهائية.

عندما يحدث هذا ، يجب عليك حذف القيمة في التخزين `localStorage` تخزين تلك الاستجابة.

## في Chrome:

*   على **freecodecamp.com** ، افتح أدوات المطور.
    
    *   المزيد من الأدوات> أدوات المطور (أو `Ctrl` + `Shift` + `I` (Windows) ، `Cmd` + `Opt` + `I` (Mac))
*   انتقل إلى علامة التبويب `Resources`
    
*   قم بتوسيع عنصر `Local Storage` في الجزء الأيمن
    
*   حدد `http://www.freecodecamp.com`
    
*   ابحث عن التحدي الذي تريد حذف البيانات في الجزء الأيسر ![العثور على مفتاح في LocalStorage أدوات مطوري Chrome](//discourse-user-assets.s3.amazonaws.com/original/2X/8/8300d3dfcf8a07bc3c1f69e7dd730d99e353972d.png)
    
*   انقر بزر الماوس الأيمن على التحدي المطلوب وحدد `Delete`
    

## في Firefox:

*   على **freecodecamp.com** ، افتح وحدة تحكم الويب الخاصة بك مع
    
    *   `Ctrl` + `Shift` + `K`
*   من هناك ، باستخدام وحدة التحكم مباشرة:
    
    *   اكتب `console.log(localStorage);` ثم اضغط على `Enter` .
        
    *   انقر في وصلة `Storage` . ![اطبع كائن التخزين المحلي من وحدة تحكم الويب وعرض التخزين](//discourse-user-assets.s3.amazonaws.com/original/2X/e/e3778d1c24e9da6fe506564405b5b1ebc11facc1.png)
        
    *   ستظهر لوحة **التخزين** على اليمين.
        
    *   قم بتصفية النتائج للعثور على الخوارزمية أو مشروع الواجهة الأمامية أو التحدي الذي يسبب المشكلة.
        
    *   عند تحديد مكانه ، مرر الماوس فوقه وانقر على `x` على اليمين. ![انقر على x لحذف إدخال القيمة.](//discourse-user-assets.s3.amazonaws.com/original/2X/a/a309e8ec8d92301f3507001ca3a796009d0a00d8.png)
        
    *   بمجرد إزالتها ، تحقق مما إذا كانت المشكلة قد تم حلها. قم بتحديث أو إغلاق وفتح المتصفح إذا لزم الأمر.
        

**ملاحظة:** يمكن القيام بذلك أيضًا مع [Storage Inspector](https://developer.mozilla.org/en-US/docs/Tools/Storage_Inspector) ، ولكن يبدو أن Firefox يخرج عند وجود العديد من القيم.