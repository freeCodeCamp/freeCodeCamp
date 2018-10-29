---
title: Extension Mehods
localeTitle: ملحق ميهود
---
## طرق التمديد

تمكّنك طرق الامتداد من "إضافة" أساليب إلى الأنواع الموجودة دون إنشاء نوع جديد مشتق أو إعادة تصنيف أو تعديل النوع الأصلي. لرمز العميل المكتوب في C # لا يوجد فرق واضح بين استدعاء طريقة ملحق والطرق التي تم تعريفها بالفعل في نوع.

أكثر طرق الإضافة شيوعًا هي عوامل استعلام LINQ القياسية التي تضيف وظيفة الاستعلام إلى System.Collections.IEnumerable و System.Collections.Generic.IEnumerable أنواع.

### استعمال

يتم تعريف أساليب التمديد على أنها أساليب ثابتة ولكن يتم استدعاؤها باستخدام بناء جملة أسلوب المثال. تحدد المعلمة الأولى نوع الكتابة التي تعمل بها ، والمعلمة مسبوقة بهذا المُعدّل. تكون طرق الإرشاد في النطاق فقط عندما تقوم باستيراد مساحة الاسم في شفرة المصدر **باستخدام** توجيه **باستخدام** صراحة.

### مثال

يوضح المثال التالي طريقة ملحق تعريف لفئة **System.String** .

 `namespace ExtensionMethods 
 { 
    public static class MyExtensions 
    { 
        public static int WordCount(this String str) 
        { 
            return str.Split(new char[] { ' ', '.', '?' }, 
                             StringSplitOptions.RemoveEmptyEntries).Length; 
        } 
    } 
 } 
` 

يمكنك الآن إحضار أسلوب **WordCount** إلى النطاق **باستخدام** التوجيه:

 `using ExtensionMethods; 
` 

ويمكنك الاتصال به من تطبيق باستخدام بناء الجملة هذا:

 `string s = "Hello Extension Methods"; 
 int i = s.WordCount(); 
` 

#### معلومات اكثر:

[كيفية: تنفيذ استدعاء أسلوب ملحق مخصص (C # Programming Guide)](https://docs.microsoft.com/en-us/dotnet/csharp/programming-guide/classes-and-structs/how-to-implement-and-call-a-custom-extension-method)