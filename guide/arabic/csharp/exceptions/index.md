---
title: Exceptions
localeTitle: استثناءات
---
# استثناءات

الاستثناء هو خطأ غير متوقع يحدث أثناء تشغيل أحد البرامج ، مثل محاولة الوصول إلى ملف غير موجود. سيوقف البرنامج إذا لم يتم التعامل معه.

## مثال

إذا حاولنا قراءة نص ملف غير موجود:

 `using System.IO; 
 
 string content = File.ReadAllText(@"C:\DoesNotExist.txt"); 
` 

سيتم رفع `FileNotFoundException` .

بعض الاستثناءات الشائعة الأخرى:

*   `IndexOutofRangeException` : محاولة الوصول إلى صفيف مع فهرس غير صالح.
*   `NullReferenceException` : جرت محاولة استخدام متغير مرجع غير مخصص.
*   `DivideByZeroException` : `DivideByZeroException` محاولة القسمة على 0.

## أفضل الممارسات

### استخدم المحاولة / catch / النهاية

 `try 
 { 
   var client = new WebClient(); 
   var resultData = client.DownloadString("http://github.com"); 
 } 
 catch (Exception ex) 
 { 
   //code for handling exceptions 
 } 
 finally 
 { 
   //this code is always executed, does not matter if an exception is thrown or not 
 } 
` 

### التعامل مع استثناءات محتملة مع الشروط

بدلا من

 `try 
 { 
   conn.Close(); 
 } 
 catch (Exception ex) 
 { 
   //code for handling exceptions. 
 } 
` 

جرب هذا

 `if (conn.State != ConnectionState.Closed) 
 { 
    conn.Close(); 
 } 
`