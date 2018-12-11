---
title: Input
localeTitle: إدخال
---
## إدخال

يتم استخدام علامة `<input>` HTML داخل نموذج للإعلان عن عنصر إدخال. يسمح للمستخدم بإدخال البيانات.

## مثال

 `
<!DOCTYPE html> 
 <html> 
 
   <head> 
      <title>HTML input Tag</title> 
   </head> 
 
   <body> 
      <form action = "/cgi-bin/hello_get.cgi" method = "get"> 
         First name: 
            <input type = "text" name = "first_name" value = "" maxlength = "100" /> 
            <br /> 
 
         Last name: 
            <input type = "text" name = "last_name" value = "" maxlength = "100" /> 
         <input type = "submit" value = "Submit" /> 
      </form> 
   </body> 
 
 </html> 
` 

في المثال أعلاه ، هناك حقلين إدخال يطلبان من المستخدم إدخال الاسم الأول والأخير حسب التصنيفات المحددة. يعد إرسال `<button type="submit">` نوعًا آخر من المدخلات يتم استخدامه لنقل البيانات التي يدخلها المستخدم إلى النموذج وإرسالها إلى موقع آخر محدد في التعليمة البرمجية.

#### معلومات اكثر:

[موقع YouTube](https://www.youtube.com/watch?v=qJ9ZkxmVf5s)

## إدخال

علامة HTML `<input>` هي من أنواع كثيرة لإدخال البيانات. البعض منهم: النوع: نص (هذا هو النوع الأكثر شيوعًا المستخدم لإنشاء مربعات نص عامة) النوع: كلمة المرور (يتم استخدام هذا النوع لإنشاء فواصل كلمة المرور) النوع: مخفي (هذا هو نوع خاص من الإدخال لا يظهر للمستخدم ولكنه يستخدم لتمرير المعلومات من صفحة إلى أخرى أثناء استخدام العلامة)