---
title: Mousedown Method
localeTitle: طريقة موسى
---# طريقة موسى

يحدث الحدث mousedown عند الضغط على زر الماوس الأيسر. لتشغيل حدث mousedown للعنصر المحدد ، استخدم بناء الجملة هذا: `$(selector).mousedown();`

ومع ذلك ، في معظم الأحيان ، يتم استخدام طريقة mousedown مع وظيفة مرتبطة بحدث mousedown. وإليك بناء الجملة: `$(selector).mousedown(function);` فمثلا:

 `$(#example).mousedown(function(){ 
   alert("Example was clicked"); 
 }); 
` 

سيعمل هذا الرمز على تنبيه الصفحة "تم النقر على مثال" عند النقر على #example.

### معلومات اكثر

مزيد من المعلومات يمكن العثور عليها [هنا](https://www.w3schools.com/jquery/event_mousedown.asp) .