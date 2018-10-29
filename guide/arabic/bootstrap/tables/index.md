---
title: Tables
localeTitle: الجداول
---
## \## الجداول

#### الجدول الأساسي

من أجل تحقيق المثال التصميم الأساسي إضافة الفئة الأساسية `.table` إلى أي `<table>` عنصر.

**مثال**

 `<table class="table"> 
  ... 
 </table> 
` 

![الجدول الأساسي](https://github.com/TroyB12/Pictures/blob/master/Basic%20Table.PNG)

* * *

#### الجدول مقلم

من أجل تحقيق التأثير الصف المخطط (حمار وحشي، شريطية) في جداول استخدام `.table-striped` بالإضافة إلى `.table` على أي `<table>` عنصر. تم تصميم الطاولات المخططة عبر محدد CSS الخاص بـ `:nth-child` ، والذي لا يتوفر في Internet Explorer 8.

 `<table class="table table-striped"> 
  ... 
 </table> 
` 

![جدول مخطط](https://github.com/TroyB12/Pictures/blob/master/Table%20Striped.PNG)

* * *

#### جدول يحدها

من أجل تحقيق استخدام الجدول `.table-bordered` الجدول `.table-bordered` بالإضافة إلى `.table` على أي عنصر `<table>` .

 `<table class="table table-bordered"> 
  ... 
 </table> 
` 

![يحد جدول](https://github.com/TroyB12/Pictures/blob/master/Table%20Bordered.PNG)

* * *

#### جدول تحويم

من أجل تحقيق تأثير صف التمرير على الجداول ، استخدم `.table-bordered` بالإضافة إلى `.table` على أي عنصر `<table>` .

 `<table class="table table-hover"> 
  ... 
 </table> 
` 

![تحوم الجدول](https://github.com/TroyB12/Pictures/blob/master/Table%20Hover.PNG)

* * *

#### جدول مكثف

من أجل تحقيق الاستخدام الجدول المكثف `.table-condensed` بالإضافة إلى `.table` على أي `<table>` عنصر.

 `<table class="table table-condensed"> 
  ... 
 </table> 
` 

![جدول مكثف](https://github.com/TroyB12/Pictures/blob/master/Table%20Condensed.PNG)

* * *

#### الجدول مستجيبة

من أجل تحقيق الجدول المتجاوب عن طريق التفاف أي جدول `.table` في عنصر `.table-responsive` .

...

![الجدول المستجيب](https://github.com/TroyB12/Pictures/blob/master/Table%20Responsive.PNG)

* * *

يمكن للمطورين تغيير نمط كل صف و / أو خلية فردية باستخدام **فئات سياقية** .

*   `.active` - يقوم `.active` لون التمرير على صف أو خلية معينة
    
*   `.success` - يشير إلى إجراء ناجح أو إيجابي
    
*   `.info` - يشير إلى تغيير أو عمل معلوماتي محايد
    
*   `.warning` - يشير إلى تحذير قد يحتاج إلى عناية
    
*   `.danger` - يشير إلى إجراء خطير أو سلبي محتمل
    
    ... ... ... ... ...
    
    ... ... ... ... ...
    

![جدول الطبقات السياقية](https://github.com/TroyB12/Pictures/blob/master/Table%20Contextual%20Classes.PNG)

* * *