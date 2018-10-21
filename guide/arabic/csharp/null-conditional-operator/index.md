---
title: Null-conditional Operator
localeTitle: مشغل شرطي لاغية
---
# مشغل شرطي لاغية

تسمح عوامل الشرطية خالية التحقق خالية مع الحد الأدنى من التعليمات البرمجية. على سبيل المثال ، إذا كان لديك متغير الموظف من نوع الموظف مع خاصية من نوع العنوان ، قد تفعل فحص فارغ كما يلي:

 `Address address = null; 
 if (employee != null) 
 { 
    address = employee.Address; 
 } 
` 

يمكنك استخدام عامل تشغيل شرطي قياسي لجعل ذلك الاختيار أكثر إيجازًا:

 `Address address = employee != null ? employee.Address : null; 
` 

ومع ذلك ، في C # 6.0 دخلت المشغلين خالية الشرطي ، لذلك الآن يمكن للخط أعلاه ببساطة يتم تمثيله على النحو التالي:

 `Address address = student?.Address; 
` 

إذا كان الموظف فارغًا ، فسيتم تعيين العنوان ببساطة ، ولن يحدث أي NullReferenceExeception. هذا يصبح أكثر فائدة مع الرسوم البيانية كائن أعمق ، كما يمكنك التعامل مع سلسلة من وصول الأعضاء المشروط.

فمثلا:

 `string city = student?.Address?.City; 
` 

المشغلين الشرطيين هم دوائر قصيرة ، وذلك بمجرد التحقق من وصول العضو الشرطي إرجاع لا شيء ، والباقي لا يحدث.

# عامل التوليف

وهناك خيار آخر مفيد لفحص الأصفار وهو مشغل التوليف الفارغ. تقوم بإرجاع المعامل الأيسر إذا كان المعامل ليس باطلاً ؛ وإلا فإنها ترجع المعامل الأيمن.

فمثلا:

 `public string GetStringValue() 
 { 
    return null; 
 } 
 
 // Display the value of s if s is NOT null. If x IS null, display the string "It was null." 
 
 string x = GetStringValue(); 
 
 Console.WriteLine(x ?? "It was null."); 
 
 // Result: 
 
 "It was null." 
`